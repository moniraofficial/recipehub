// 'use client';

// import React, { useEffect, useState } from 'react';
// import { authClient } from '../../lib/auth-client';
// import toast from 'react-hot-toast';

// export default function MyRecipesPage() {
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingRecipe, setEditingRecipe] = useState(null);

//   // Fallback to localhost if environment variables aren't loaded properly
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://recipehub-sigma-three.vercel.app ";

//   // Fetch only the user's specific recipes
//   useEffect(() => {
//     if (!user?.email) return;

//     const fetchMyRecipes = async () => {
//       try {
//         const normalizedEmail = user.email.toLowerCase().trim();
//         const res = await fetch(`${API_BASE_URL}/api/recipes/my-recipes?creatorEmail=${normalizedEmail}`);
        
//         if (res.ok) {
//           const data = await res.json();
//           setRecipes(data);
//         } else {
//           console.error("Failed to fetch user recipes");
//         }
//       } catch (err) {
//         console.error("Error connecting to server:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyRecipes();
//   }, [user?.email, API_BASE_URL]);

//   // Handle Recipe Delete (Requirement 8.1)
//   const handleDelete = async (recipeId) => {
//     if (!confirm("Are you sure you want to delete this recipe?")) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/api/recipes/delete/${recipeId}`, {
//         method: 'DELETE',
//       });

//       if (res.ok) {
//         toast.success("Recipe deleted successfully!");
//         setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
//       } else {
//         toast.error("Failed to delete recipe.");
//       }
//     } catch (err) {
//       console.error("Delete error:", err);
//       toast.error("Network error while deleting.");
//     }
//   };

//   // Handle Recipe Edit Form Submission (Requirement 8.1)
//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${API_BASE_URL}/api/recipes/update/${editingRecipe._id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(editingRecipe),
//       });

//       if (res.ok) {
//         toast.success("Recipe updated successfully!");
//         setRecipes(recipes.map(r => r._id === editingRecipe._id ? editingRecipe : r));
//         setEditingRecipe(null);
//       } else {
//         toast.error("Failed to update recipe.");
//       }
//     } catch (err) {
//       console.error("Update error:", err);
//       toast.error("Network error during update.");
//     }
//   };

//   if (isPending || loading) {
//     return <div className="text-center py-20 text-xs font-semibold text-slate-400 animate-pulse">Loading recipes...</div>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
//       <div>
//         <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">🍳 My Added Recipes</h2>
//         <p className="text-xs text-slate-400 font-medium">Manage, edit, or delete recipes you shared with the platform</p>
//       </div>

//       {recipes.length === 0 ? (
//         <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
//           <p className="text-xs text-slate-400 font-medium">You haven't published any recipes yet.</p>
//         </div>
//       ) : (
//         /* Requirement 8.2: Card Layout Display */
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recipes.map((recipe) => (
//             <div key={recipe._id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
//               <div>
//                 <img 
//                   src={recipe.imageURL || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=500"} 
//                   alt={recipe.recipeName} 
//                   className="w-full h-36 object-cover rounded-xl mb-3"
//                 />
//                 <h3 className="font-extrabold text-sm text-slate-950 dark:text-white line-clamp-1">{recipe.recipeName}</h3>
//                 <p className="text-[11px] text-slate-400 font-medium mb-2">{recipe.cuisineType} Cuisine</p>
//               </div>

//               <div className="flex gap-2 pt-3 border-t border-slate-50 dark:border-slate-800/60 mt-3">
//                 <button
//                   onClick={() => setEditingRecipe(recipe)}
//                   className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2 rounded-xl text-xs transition-colors"
//                 >
//                   📝 Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(recipe._id)}
//                   className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-2 rounded-xl text-xs transition-colors"
//                 >
//                   🗑️ Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Edit Recipe Modal Overlay (Requirement 8.1) */}
//       {editingRecipe && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
//           <form onSubmit={handleUpdateSubmit} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 w-full max-w-md space-y-4 shadow-xl">
//             <h3 className="font-black text-base text-slate-900 dark:text-white">Edit Recipe Details</h3>
            
//             <div className="space-y-1">
//               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recipe Title</label>
//               <input 
//                 type="text" 
//                 value={editingRecipe.recipeName}
//                 onChange={e => setEditingRecipe({...editingRecipe, recipeName: e.target.value})}
//                 className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-emerald-500"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cuisine Type</label>
//               <input 
//                 type="text" 
//                 value={editingRecipe.cuisineType}
//                 onChange={e => setEditingRecipe({...editingRecipe, cuisineType: e.target.value})}
//                 className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-emerald-500"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Prep Time (min)</label>
//                 <input 
//                   type="number" 
//                   value={editingRecipe.preparationTime}
//                   onChange={e => setEditingRecipe({...editingRecipe, preparationTime: Number(e.target.value)})}
//                   className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold"
//                   required
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Difficulty</label>
//                 <select 
//                   value={editingRecipe.difficultyLevel}
//                   onChange={e => setEditingRecipe({...editingRecipe, difficultyLevel: e.target.value})}
//                   className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold"
//                 >
//                   <option value="Easy">Easy</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Hard">Hard</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex gap-2 pt-2">
//               <button 
//                 type="button" 
//                 onClick={() => setEditingRecipe(null)}
//                 className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="submit"
//                 className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs transition-colors"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { authClient } from '../../lib/auth-client';
import toast from 'react-hot-toast';

export default function MyRecipesPage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Fallback to localhost if environment variables aren't loaded properly
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://recipehub-sigma-three.vercel.app ";

  // Core reusable function to query up-to-date recipe entries
  const fetchMyRecipes = async () => {
    if (!user?.email) return;
    try {
      const normalizedEmail = user.email.toLowerCase().trim();
      
      // Kept as creatorEmail to exactly line up with your MongoDB database schema query expectations!
      const res = await fetch(`${API_BASE_URL}/api/recipes/my-recipes?creatorEmail=${normalizedEmail}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (res.ok) {
        const data = await res.json();
        setRecipes(data);
      } else {
        console.error("Failed to fetch user recipes");
      }
    } catch (err) {
      console.error("Error connecting to server:", err);
    } finally {
      setLoading(false);
    }
  };

  // Run fetch immediately when user session becomes available
  useEffect(() => {
    if (user?.email) {
      fetchMyRecipes();
    }
  }, [user?.email, API_BASE_URL]);

  // Handle Recipe Delete (Requirement 8.1)
  const handleDelete = async (recipeId) => {
    if (!confirm("Are you sure you want to delete this recipe?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/recipes/delete/${recipeId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        toast.success("Recipe deleted successfully!");
        setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
      } else {
        toast.error("Failed to delete recipe.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Network error while deleting.");
    }
  };

  // Handle Recipe Edit Form Submission (Requirement 8.1)
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/recipes/update/${editingRecipe._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingRecipe),
      });

      if (res.ok) {
        toast.success("Recipe updated successfully!");
        // Instantly force local client sync loop update
        setRecipes(recipes.map(r => r._id === editingRecipe._id ? editingRecipe : r));
        setEditingRecipe(null);
      } else {
        toast.error("Failed to update recipe.");
      }
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Network error during update.");
    }
  };

  if (isPending || loading) {
    return <div className="text-center py-20 text-xs font-semibold text-slate-400 animate-pulse">Loading recipes...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">🍳 My Added Recipes</h2>
        <p className="text-xs text-slate-400 font-medium">Manage, edit, or delete recipes you shared with the platform</p>
      </div>

      {recipes.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-400 font-medium">You haven't published any recipes yet.</p>
        </div>
      ) : (
        /* Requirement 8.2: Card Layout Display */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-3 shadow-sm flex flex-col justify-between animate-fadeIn">
              <div>
                <img 
                  src={recipe.imageURL || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=500"} 
                  alt={recipe.recipeName} 
                  className="w-full h-36 object-cover rounded-xl mb-3"
                />
                <h3 className="font-extrabold text-sm text-slate-950 dark:text-white line-clamp-1">{recipe.recipeName}</h3>
                <p className="text-[11px] text-slate-400 font-medium mb-2">{recipe.cuisineType} Cuisine</p>
              </div>

              <div className="flex gap-2 pt-3 border-t border-slate-50 dark:border-slate-800/60 mt-3">
                <button
                  onClick={() => setEditingRecipe(recipe)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2 rounded-xl text-xs transition-colors"
                >
                  📝 Edit
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-2 rounded-xl text-xs transition-colors"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Recipe Modal Overlay (Requirement 8.1) */}
      {editingRecipe && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <form onSubmit={handleUpdateSubmit} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 w-full max-w-md space-y-4 shadow-xl">
            <h3 className="font-black text-base text-slate-900 dark:text-white">Edit Recipe Details</h3>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recipe Title</label>
              <input 
                type="text" 
                value={editingRecipe.recipeName}
                onChange={e => setEditingRecipe({...editingRecipe, recipeName: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-emerald-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cuisine Type</label>
              <input 
                type="text" 
                value={editingRecipe.cuisineType}
                onChange={e => setEditingRecipe({...editingRecipe, cuisineType: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-emerald-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Prep Time (min)</label>
                <input 
                  type="number" 
                  value={editingRecipe.preparationTime}
                  onChange={e => setEditingRecipe({...editingRecipe, preparationTime: Number(e.target.value)})}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Difficulty</label>
                <select 
                  value={editingRecipe.difficultyLevel}
                  onChange={e => setEditingRecipe({...editingRecipe, difficultyLevel: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button 
                type="button" 
                onClick={() => setEditingRecipe(null)}
                className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}