'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';

export default function RecipeDetailsPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const id = params?.id;
  
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

 
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isReported, setIsReported] = useState(false);
  
  //  Report Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
        if (res.ok) {
          const data = await res.json();
          setRecipe(data);
          setLikesCount(data.likesCount || 0);
        }
      } catch (err) {
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);


  const handleLikeToggle = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

 
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };


  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportReason.trim()) return alert("Please select or enter a reason.");
    
    setIsReported(true);
    setIsModalOpen(false);
    alert(`Recipe reported successfully for: "${reportReason}"`);

  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
        <div className="text-sm text-slate-400 font-medium animate-pulse">Loading recipe...</div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-950 space-y-4">
        <p className="text-sm text-slate-500">Recipe not found.</p>
        <button onClick={() => router.push('/browse')} className="bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl text-xs">
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-6 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/*  Breadcrumbs */}
        <div className="text-xs text-slate-400 font-medium space-y-1">
          <div>Home / Browse Recipes</div>
          <div className="text-slate-600 dark:text-slate-300">Home / Browse Recipes / <span className="font-semibold text-emerald-600">{recipe.recipeName || recipe.name}</span></div>
        </div>

        {/* 🏢 Main Header Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Image */}
          <div className="md:col-span-5 h-[280px] md:h-[320px] w-full relative rounded-2xl overflow-hidden shadow-inner">
            <img 
              src={recipe.imageURL || recipe.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600"} 
              alt={recipe.recipeName} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Primary Info */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                {recipe.recipeName || recipe.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1">🟢 {recipe.cuisineType || 'Global'} Cuisine</span>
                <span className="flex items-center gap-1">⏱️ {recipe.preparationTime || recipe.prepTime || 30} min</span>
                <span className="flex items-center gap-1">💪 {recipe.difficultyLevel || recipe.difficulty || 'Easy'}</span>
                <span className="flex items-center gap-1 text-amber-500 font-semibold">⭐ 4.5 <span className="text-slate-400 font-normal">(120)</span></span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              {recipe.description || "Classic delicious meal prepared with fresh ingredients, signature spices, and a fine touch of culinary expertise. Perfect for family gatherings and special treats."}
            </p>

            {/* Inline Author Profile */}
            <div className="flex items-center gap-3 pt-1">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" 
                alt="Emma Wilson" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Emma Wilson</h4>
                <p className="text-[10px] text-slate-400">Posted on May 18, 2026</p>
              </div>
            </div>

            {/* 🎯 Interactive Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* ❤️ Like Button */}
              <button 
                onClick={handleLikeToggle}
                className={`flex items-center gap-1.5 px-4 py-2 border font-bold rounded-xl text-xs transition-all ${
                  isLiked 
                    ? "bg-rose-500 border-rose-500 text-white shadow-sm shadow-rose-100" 
                    : "border-rose-100 dark:border-rose-950/40 bg-rose-50/30 text-rose-500 hover:bg-rose-50"
                }`}
              >
                {isLiked ? "❤️ Liked" : "🤍 Like"}
              </button>

              {/* 💚 Favorite Button */}
              <button 
                onClick={handleFavoriteToggle}
                className={`flex items-center gap-1.5 px-4 py-2 border font-bold rounded-xl text-xs transition-all ${
                  isFavorite 
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-100" 
                    : "border-emerald-100 dark:border-emerald-950/40 bg-emerald-50/30 text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                {isFavorite ? "⭐ Favorited" : "🔖 Favorite"}
              </button>

              {/*  Report Button (Triggers Modal) */}
              <button 
                onClick={() => setIsModalOpen(true)}
                disabled={isReported}
                className={`flex items-center gap-1.5 px-4 py-2 border font-bold rounded-xl text-xs transition-all ${
                  isReported 
                    ? "bg-slate-400 border-slate-400 text-white cursor-not-allowed" 
                    : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                🏴 {isReported ? "Reported" : "Report"}
              </button>

              {/* Purchase Trigger Buttons */}
              <div className="ml-0 sm:ml-auto flex items-center gap-2">
                <button 
                  onClick={() => alert('Stripe Gateway opening...')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-sm shadow-emerald-100 dark:shadow-none"
                >
                  🔒 Purchase Recipe
                </button>
                <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-black px-3 py-2.5 rounded-xl text-xs text-slate-800 dark:text-slate-200">
                  $2.99
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Ingredients */}
          <div className="md:col-span-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Ingredients</h3>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
              {recipe.ingredients && Array.isArray(recipe.ingredients) ? (
                recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold text-sm">•</span>
                    <span>{ing}</span>
                  </li>
                ))
              ) : (
                <li className="text-slate-400">No ingredients specified</li>
              )}
            </ul>
          </div>

          {/* Instructions */}
          <div className="md:col-span-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Instructions</h3>
            <ol className="space-y-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
              {recipe.instructions ? (
                typeof recipe.instructions === 'string' ? (
                  recipe.instructions.split('\n').map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-slate-400 font-bold min-w-[14px]">{i + 1}.</span>
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))
                ) : Array.isArray(recipe.instructions) ? (
                  recipe.instructions.map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-slate-400 font-bold min-w-[14px]">{i + 1}.</span>
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))
                ) : null
              ) : (
                <li className="text-slate-400">No steps available.</li>
              )}
            </ol>
          </div>

          {/* Author Details */}
          <div className="md:col-span-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Recipe Author</h3>
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" 
                  alt="Author" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Emma Wilson</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Food Blogger</p>
                </div>
              </div>
              <div className="flex items-center justify-around bg-slate-50 dark:bg-slate-800/50 rounded-xl py-3 text-center">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">23</p>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase">Recipes</p>
                </div>
                <div className="w-[1px] h-6 bg-slate-200 dark:border-slate-700"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">2.5K</p>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase">Followers</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 font-bold py-2 rounded-xl text-xs transition-colors shadow-sm">
              View Profile
            </button>
          </div>
        </div>

      </div>

      {/* REPORT MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                🏴 Report Recipe
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleReportSubmit} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Select a Reason</label>
                <select 
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">-- Choose Option --</option>
                  <option value="Inappropriate Content">Inappropriate Content</option>
                  <option value="Wrong Ingredients/Instructions">Wrong Ingredients/Instructions</option>
                  <option value="Copyright/Plagiarism">Copyright or Plagiarism</option>
                  <option value="Other">Other Reason</option>
                </select>
              </div>

              {/* Custom Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Additional Details</label>
                <textarea 
                  placeholder="Describe the issue in detail..."
                  onChange={(e) => { if(reportReason === "Other" || !reportReason) setReportReason(e.target.value) }}
                  className="w-full text-xs font-medium p-2.5 h-24 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-sm"
                >
                  Submit Report
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}