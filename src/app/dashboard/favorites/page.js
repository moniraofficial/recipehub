'use client';

import React, { useEffect, useState } from 'react';
import { authClient } from '../../lib/auth-client';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function FavoritesPage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamic API routing from environment file configuration
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (!user?.email) return;

    const fetchFavorites = async () => {
      try {
        const normalizedEmail = user.email.toLowerCase().trim();
        const res = await fetch(`${API_BASE_URL}/api/favorites?email=${normalizedEmail}`);
        
        if (res.ok) {
          const data = await res.json();
          setFavorites(data);
        } else {
          console.error("Failed to fetch favorited items.");
        }
      } catch (err) {
        console.error("Network error on favorites capture:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user?.email, API_BASE_URL]);

  // Remove a recipe from favorites list
  const handleRemoveFavorite = async (recipeId) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/favorites/remove`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email.toLowerCase().trim(),
          recipeId: recipeId
        })
      });

      if (res.ok) {
        toast.success("Removed from favorites!");
        setFavorites(favorites.filter(fav => fav._id !== recipeId && fav.recipeId !== recipeId));
      } else {
        toast.error("Could not complete removal.");
      }
    } catch (err) {
      console.error("Error removing favorite:", err);
      toast.error("Server connection error.");
    }
  };

  if (isPending || loading) {
    return <div className="text-center py-20 text-xs font-semibold text-slate-400 animate-pulse">Loading saved recipes...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">❤️ My Favorites</h2>
        <p className="text-xs text-slate-400 font-medium">Quick access list of community recipes you have saved for later cooking</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-400 font-medium">You haven't added any favorites yet.</p>
        </div>
      ) : (
        /* Requirement 9.1: Card Grid Display for saved items */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((recipe) => {
            // Check if backend nested data object inside a root favorite schema wrap
            const TargetRecipe = recipe.recipeDetails || recipe; 
            
            return (
              <div key={recipe._id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div>
                  <img 
                    src={TargetRecipe.imageURL || TargetRecipe.image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=500"} 
                    alt={TargetRecipe.recipeName} 
                    className="w-full h-36 object-cover rounded-xl mb-3"
                  />
                  <h3 className="font-extrabold text-sm text-slate-950 dark:text-white line-clamp-1">
                    {TargetRecipe.recipeName || TargetRecipe.name || "Saved Recipe"}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium mb-2">{TargetRecipe.cuisineType || "Global"} Cuisine</p>
                </div>

                <div className="flex gap-2 pt-3 border-t border-slate-50 dark:border-slate-800/60 mt-3">
                  <Link
                    href={`/browse/${TargetRecipe._id || TargetRecipe.recipeId}`}
                    // href={`/browse/${recipe._id}`}

                 
                    className="flex-1 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-center font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 border border-slate-100 dark:border-zinc-700"
                  >
                    👁️ View Details
                  </Link>
                  <button
                    onClick={() => handleRemoveFavorite(TargetRecipe._id || TargetRecipe.recipeId)}
                    className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold rounded-xl text-xs transition-colors"
                    title="Remove item"
                  >
                    💔 Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}