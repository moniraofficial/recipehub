// "use client";
// import { useState } from "react";
// import toast from "react-hot-toast";

// const AddRecipePage = () => {
 
//   const [recipeName, setRecipeName] = useState("");
//   const [category, setCategory] = useState("");
//   const [cuisineType, setCuisineType] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [prepTime, setPrepTime] = useState("");
  
  
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setSelectedFile(e.target.files[0]);
//       toast.success(`Selected: ${e.target.files[0].name}`);
//     }
//   };

//   const handleNextStep = (e) => {
//     e.preventDefault();
    
  
//     if (!recipeName || !category || !cuisineType || !prepTime) {
//       toast.error("Please fill in all required fields!");
//       return;
//     }


//     console.log("Step 1 Data:", { recipeName, category, cuisineType, difficulty, prepTime });
//     toast.success("Moving to Ingredients stage! 🚀");
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-12 transition-colors duration-300">
//       <div className="w-full max-w-[480px] bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/60 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">

//         <div className="mb-6">
//           <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
//             Add Recipe
//           </h1>
//         </div>

//         <form onSubmit={handleNextStep} className="space-y-5">
          
//           {/* ১. Recipe Name */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Recipe Name</label>
//             <input
//               type="text"
//               required
//               value={recipeName}
//               onChange={(e) => setRecipeName(e.target.value)}
//               placeholder="Enter recipe name"
//               className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-950 dark:text-white placeholder:text-slate-400"
//             />
//           </div>

//           {/* ২. Recipe Image Area */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Recipe Image</label>
//             <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/30 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
//                 {/* icon */}
//                 <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl flex items-center justify-center mb-2 shadow-sm">
//                   <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
//                   {selectedFile ? selectedFile.name : "Upload Image"}
//                 </p>
//                 <p className="text-xs text-slate-400 mt-0.5">JPEG, PNG up to 5MB</p>
//               </div>
//               <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
//             </label>
//           </div>

//           {/* ৩. Category Dropdown */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Category</label>
//             <div className="relative">
//               <select
//                 required
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-500 dark:text-slate-300 appearance-none"
//               >
//                 <option value="" disabled hidden>Select category</option>
//                 <option value="Breakfast">Breakfast</option>
//                 <option value="Lunch">Lunch</option>
//                 <option value="Dinner">Dinner</option>
//                 <option value="Dessert">Dessert</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
//               </div>
//             </div>
//           </div>

//           {/* ৪. Cuisine Type Dropdown */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Cuisine Type</label>
//             <div className="relative">
//               <select
//                 required
//                 value={cuisineType}
//                 onChange={(e) => setCuisineType(e.target.value)}
//                 className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-500 dark:text-slate-300 appearance-none"
//               >
//                 <option value="" disabled hidden>Select cuisine</option>
//                 <option value="Italian">Italian</option>
//                 <option value="Mexican">Mexican</option>
//                 <option value="Indian">Indian</option>
//                 <option value="Bengali">Bengali</option>
//                 <option value="Chinese">Chinese</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
//               </div>
//             </div>
//           </div>

//           {/* ৫. Difficulty Level & Preparation Time Grid */}
//           <div className="grid grid-cols-2 gap-4">
            
//             <div className="space-y-1.5">
//               <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Difficulty Level</label>
//               <div className="relative">
//                 <select
//                   value={difficulty}
//                   onChange={(e) => setDifficulty(e.target.value)}
//                   className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-500 dark:text-slate-300 appearance-none"
//                 >
//                   <option value="">Select difficulty</option>
//                   <option value="Easy">Easy</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Hard">Hard</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preparation Time</label>
//               <div className="relative">
//                 <select
//                   required
//                   value={prepTime}
//                   onChange={(e) => setPrepTime(e.target.value)}
//                   className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-500 dark:text-slate-300 appearance-none"
//                 >
//                   <option value="" disabled hidden>Select time</option>
//                   <option value="15">15 Mins</option>
//                   <option value="30">30 Mins</option>
//                   <option value="45">45 Mins</option>
//                   <option value="60">60+ Mins</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* submit button */}
//           <button
//             type="submit"
//             className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm mt-4 tracking-wide"
//           >
//             Next: Ingredients
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRecipePage;

'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddRecipePage() {

  const [formData, setFormData] = useState({
    recipeName: '',
    category: '', 
    cuisineType: '',
    difficulty: '',
    prepTime: '',
    imageURL: '',
    ingredients: '',
    instructions: '',
  });

  const [loading, setLoading] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    alert("Form Button Clicked!");
    console.log("Hello from the first line!");
    
    setLoading(true);

    const formattedData = {
      recipeName: formData.recipeName,
      category: formData.category,
      cuisineType: formData.cuisineType,
      difficulty: formData.difficulty || 'Easy',
      prepTime: parseInt(formData.prepTime) || 30, 
      imageURL: formData.imageURL,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
    };

   
    console.log("==========================================");
    console.log("Submitting Recipe Data to Backend:", formattedData);
    console.log("==========================================");

    const toastId = toast.loading("Publishing your recipe...");

    try {
   
      const res = await fetch("https://recipehub-server-red.vercel.app/api/recipes/add", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formattedData),
      });

      const data = await res.json();
      
    
      console.log("Backend Response Data:", data);

      if (res.ok) {
        toast.success("Recipe listed successfully in MongoDB! 🍳🎉", { id: toastId });
  
        setFormData({
          recipeName: '', category: '', cuisineType: '', difficulty: '',
          prepTime: '', imageURL: '', ingredients: '', instructions: ''
        });
      } else {
        toast.error(data.error || "Something went wrong.", { id: toastId });
      }
    } catch (error) {
      console.error("Fetch Connection Error:", error);
      toast.error("Failed to connect to the server.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
        
    
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-950">Add a New Recipe</h2>
          <p className="text-xs text-gray-400">Fill up the information below to list your recipe in MongoDB Database</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs font-semibold text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Recipe Name */}
            <div className="space-y-1">
              <label>Recipe Name *</label>
              <input 
                required 
                type="text" 
                name="recipeName" 
                value={formData.recipeName} 
                onChange={handleChange} 
                placeholder="e.g. Chocolate Cake" 
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 text-gray-900" 
              />
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <label>Recipe Image URL *</label>
              <input 
                required 
                type="url" 
                name="imageURL" 
                value={formData.imageURL} 
                onChange={handleChange} 
                placeholder="https://imgbb.com/your-recipe.png" 
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 text-gray-900" 
              />
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label>Category *</label>
              <select 
                required 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 text-gray-600"
              >
                <option value="" disabled hidden>Select category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            {/* Cuisine Type */}
            <div className="space-y-1">
              <label>Cuisine Type *</label>
              <select 
                required 
                name="cuisineType" 
                value={formData.cuisineType} 
                onChange={handleChange} 
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 text-gray-600"
              >
                <option value="" disabled hidden>Select cuisine</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
                <option value="Bengali">Bengali</option>
              </select>
            </div>

            {/* Difficulty Level */}
            <div className="space-y-1">
              <label>Difficulty Level</label>
              <select 
                name="difficulty" 
                value={formData.difficulty} 
                onChange={handleChange} 
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 text-gray-600"
              >
                <option value="" disabled hidden>Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Preparation Time */}
            <div className="space-y-1">
              <label>Preparation Time (Minutes) *</label>
              <input 
                required 
                type="number" 
                name="prepTime" 
                value={formData.prepTime} 
                onChange={handleChange} 
                placeholder="e.g. 30" 
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 text-gray-900" 
              />
            </div>

          </div>

          {/* Ingredients */}
          <div className="space-y-1">
            <label>Ingredients *</label>
            <textarea 
              required 
              name="ingredients" 
              value={formData.ingredients} 
              onChange={handleChange} 
              placeholder="e.g. 2 cups flour, 1 cup sugar, 3 eggs (comma separated)" 
              className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 h-24 resize-none text-gray-900" 
            />
          </div>

          {/* Instructions */}
          <div className="space-y-1">
            <label>Instructions / Steps</label>
            <textarea 
              name="instructions" 
              value={formData.instructions} 
              onChange={handleChange} 
              placeholder="Step 1. Mix dry ingredients... Step 2. Bake for 30 mins..." 
              className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-emerald-500 h-28 resize-none text-gray-900" 
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors disabled:bg-gray-400"
            >
              {loading ? "Listing Recipe..." : "Submit Recipe Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}