// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

// export default function BrowseRecipesPage() {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       setLoading(true);
//       try {
//         const url = selectedCategory === "All" 
//           ? "https://recipehub-sigma-three.vercel.app/api/recipes/all" 
//           : `https://recipehub-sigma-three.vercel.app/api/recipes/all?category=${selectedCategory}`;

//         const res = await fetch(url);
//         if (res.ok) {
//           const data = await res.json();
//           setRecipes(data);
//         }
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecipes();
//   }, [selectedCategory]);

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] py-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Left Sidebar: Category Filter */}
//         <div className="bg-white p-5 rounded-2xl border border-gray-100 h-fit space-y-4 shadow-sm">
//           <h3 className="font-bold text-gray-950 text-sm">All Categories</h3>
//           <div className="flex flex-col gap-2">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`text-left text-xs px-3 py-2.5 rounded-xl font-semibold transition-all ${
//                   selectedCategory === cat
//                     ? "bg-emerald-50 text-emerald-700 font-bold"
//                     : "text-gray-500 hover:bg-gray-50"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Recipe Grid */}
//         <div className="md:col-span-3 space-y-6">
//           <div>
//             <h2 className="text-xl font-bold text-gray-950">Browse Recipes</h2>
//             <p className="text-xs text-gray-400">Explore thousands of recipes shared by our community</p>
//           </div>

//           {loading ? (
//             <div className="text-center py-20 text-xs text-gray-400 font-medium">Loading recipes...</div>
//           ) : recipes.length === 0 ? (
//             <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
//               <p className="text-xs text-gray-400 font-medium">No recipes found in this category.</p>
//             </div>
//           ) : (
       
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {recipes.map((recipe) => (
//                 <div key={recipe._id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-3">
                  
//                   {/* Card Header: Image & Badges */}
//                   <div>
//                     <div className="relative rounded-2xl overflow-hidden">
//                       <img 
//                         src={recipe.imageURL || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=500"} 
//                         alt={recipe.recipeName} 
//                         className="w-full h-44 object-cover"
//                       />
//                       {/* Dynamic Badge Based on Likes/Featured */}
//                       {recipe.likesCount > 300 && (
//                         <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold px-2.5 py-1 rounded-md text-[9px] uppercase tracking-wider">
//                           Popular
//                         </span>
//                       )}
//                     </div>

//                     {/* Card Body: Info */}
//                     <div className="p-2 pt-4 space-y-2">
//                       <h3 className="font-extrabold text-sm text-gray-950 line-clamp-1">{recipe.recipeName}</h3>
                      
//                       {/* Rating & Cuisine */}
//                       <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
//                         <span className="text-amber-500 font-bold">⭐ 4.5</span>
//                         <span className="text-gray-300">|</span>
//                         <span>{recipe.cuisineType} Cuisine</span>
//                       </div>

//                       {/* Meta Stats: Time, Difficulty, Likes */}
//                       <div className="grid grid-cols-3 gap-1 pt-1 text-[10px] text-gray-400 font-bold bg-gray-50/50 rounded-xl p-2 text-center">
//                         <div>⏱️ {recipe.preparationTime || recipe.prepTime} min</div>
//                         <div className="border-x border-gray-100">💪 {recipe.difficultyLevel || recipe.difficulty || 'Easy'}</div>
//                         <div className="text-rose-500">❤️ {recipe.likesCount || 0}</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Card Footer: View & Purchase Buttons */}
//                   <div className="p-2 pt-4 border-t border-gray-50 flex gap-2 items-center">
//                     <Link 
//                       href={`/recipes/${recipe._id}`} 
//                       className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-center font-bold py-2 rounded-xl transition-colors text-xs flex items-center justify-center gap-1 shadow-sm"
//                     >
//                       👁️ View
//                     </Link>
//                     <button 
//                       onClick={() => alert('Stripe Checkout coming soon!')}
//                       className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl transition-colors text-xs shadow-sm shadow-emerald-100"
//                     >
//                       Purchase $2.99
//                     </button>
//                   </div>

//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

import BrowseRecipesList from "../components/BrowseRecipesList";

export default function BrowseRecipesPage() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black min-h-screen py-10">
      {/* 🧭 আপনার ক্লিন আর্কিটেকচার অনুযায়ী কম্পোনেন্ট কল করা হলো */}
      <BrowseRecipesList />
    </div>
  );
}