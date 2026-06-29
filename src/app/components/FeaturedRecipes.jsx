'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes/featured")
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div className="text-center py-6 text-xs text-gray-400">Loading featured...</div>;
  if (recipes.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-black text-gray-950 dark:text-white">Featured Recipes</h2>
          <p className="text-xs text-gray-400">Handpicked delicious recipes by our team</p>
        </div>
        <Link href="/browse" className="text-emerald-600 font-bold text-xs hover:underline">View All</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

// 🎴 Reusable New Figma Card
function RecipeCard({ recipe }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all p-3 flex flex-col justify-between">
      <div>
        <div className="relative rounded-2xl overflow-hidden">
          <img src={recipe.imageURL} alt={recipe.recipeName} className="w-full h-40 object-cover" />
        </div>
        <div className="p-2 pt-3 space-y-2">
          <h3 className="font-extrabold text-xs text-gray-950 line-clamp-1">{recipe.recipeName}</h3>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
            <span className="text-amber-500">⭐ 4.5</span>
            <span>|</span>
            <span>{recipe.cuisineType}</span>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] text-gray-400 font-extrabold bg-gray-50 rounded-xl p-1.5 text-center">
            <div>⏱️ {recipe.preparationTime}m</div>
            <div className="border-x border-gray-100">💪 {recipe.difficultyLevel || "Easy"}</div>
            <div className="text-rose-500">❤️ {recipe.likesCount || 0}</div>
          </div>
        </div>
      </div>
      <div className="p-2 pt-3 border-t border-gray-50 flex gap-2 items-center">
        <Link href={`/recipes/${recipe._id}`} className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-center font-bold py-1.5 rounded-xl transition-colors text-[11px]">
          👁️ View
        </Link>
        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 rounded-xl transition-colors text-[11px]">
          $2.99
        </button>
      </div>
    </div>
  );
}