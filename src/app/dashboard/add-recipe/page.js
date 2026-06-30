'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '../../lib/auth-client';
import toast from 'react-hot-toast';

export default function AddRecipePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Form Field State Declarations
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [cuisineType, setCuisineType] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('Easy');
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageFile, setImageFile] = useState(null);
  
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isPending && !user) {
      toast.error("Please login to author a recipe.");
      router.push('/login');
    }
  }, [user, isPending, router]);

  const uploadToImgBB = async (file) => {
    const IMGBB_API_KEY = '1a0ae09139ad10ee1fdd53c4413e7f8d'; 
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      return data.data.url; 
    } else {
      throw new Error("ImgBB image pipeline uploading failure.");
    }
  };

  const handleSubmitRecipe = async (e) => {
    e.preventDefault();

    const currentEmail = user?.email || session?.user?.email;

    if (!currentEmail) {
      return toast.error("Your authentication session expired. Please log out and log back in.");
    }

    if (!imageFile) {
      return toast.error("Please upload a showcase image for your recipe.");
    }

    setSubmitting(true);
    const loadingToast = toast.loading("Processing uploader data and sync hooks...");

    try {
      const uploadedImageURL = await uploadToImgBB(imageFile);
      const cleanEmail = currentEmail.toLowerCase().trim();

      const recipePayload = {
        recipeName,
        category,
        cuisineType,
        difficultyLevel,
        prepTime: Number(prepTime),
        ingredients,
        instructions,
        imageURL: uploadedImageURL,
        creatorEmail: cleanEmail,
        // email: cleanEmail // Secondary parameter fallback for safety
      };

      const res = await fetch("http://localhost:5000/api/recipes/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipePayload),
      });

      const responseData = await res.json();

      if (res.ok) {
        toast.success("Recipe successfully created and added to collection!", { id: loadingToast });
        router.push('/dashboard'); 
      } else {
        toast.error(responseData.error || "Failed to commit recipe records.", { id: loadingToast });
      }
    } catch (error) {
      console.error(error);
      toast.error("Exception error encountered inside client submission routines.", { id: loadingToast });
    } finally {
      setSubmitting(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading workspace tools...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 py-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
          <div className="mb-6">
            <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Create New Culinary Recipe</h1>
            <p className="text-xs text-slate-400">Distribute your customized cooking methodologies out into the global database directory.</p>
          </div>

          <form onSubmit={handleSubmitRecipe} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Recipe Title Name</label>
                <input 
                  type="text"
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                  placeholder="e.g., Avocado Toast Benedict"
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-200"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Category Sector</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-200"
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Beverage">Beverage</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Cuisine Origin Type</label>
                <input 
                  type="text"
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                  placeholder="e.g., Italian, Mexican, Thai"
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-200"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Preparation Time Scale (In Minutes)</label>
                <input 
                  type="number"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                  placeholder="e.g., 25"
                  min="1"
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Difficulty Execution Scale</label>
              <div className="flex gap-4">
                {['Easy', 'Medium', 'Hard'].map((lvl) => (
                  <label key={lvl} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input 
                      type="radio" 
                      name="difficulty" 
                      value={lvl} 
                      checked={difficultyLevel === lvl} 
                      onChange={() => setDifficultyLevel(lvl)}
                      className="accent-emerald-600"
                    />
                    {lvl}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Cover Showcase Photo Image File</label>
              <input 
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="w-full text-xs font-semibold p-2 bg-slate-50 dark:bg-slate-800 border border-dashed border-slate-200 dark:border-slate-700 rounded-xl file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-emerald-50 dark:file:bg-emerald-950/30 file:text-emerald-600 cursor-pointer text-slate-400"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Ingredients (Comma Separated)</label>
              <textarea 
                rows="3"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Salt, Olive Oil, Diced Tomatoes, Basil Leaves"
                className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-200"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Cooking Step Instructions</label>
              <textarea 
                rows="4"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Detail the chronological steps to replicate this meal asset output..."
                className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-200"
                required
              />
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
              >
                {submitting ? 'Uploading & Saving Assets...' : 'Publish Recipe'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}