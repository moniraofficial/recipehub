"use client";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-auto md:h-[520px] flex items-center bg-white dark:bg-slate-900 transition-colors duration-300 py-12 md:py-0 overflow-hidden">
    
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto">
        
       
        <div className="space-y-5">
          <h1 className="text-4xl md:text-[56px] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Discover. <br />
            Cook. <span className="text-emerald-600 dark:text-emerald-400">Share.</span>
          </h1>
          
          <p className="text-sm md:text-[16px] text-slate-600 dark:text-slate-400 max-w-md leading-relaxed font-normal">
            Share your favorite recipes, discover new cuisines and connect with food lovers.
          </p>
          
          <div className="flex items-center gap-3 pt-1">
            <Link
              href="/browse"
              className="px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all text-center min-w-[140px]"
            >
              Explore Recipes
            </Link>
            <Link
              href="/dashboard/add-recipe"
              className="px-6 py-3 text-sm font-semibold text-slate-800 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 dark:text-slate-200 dark:border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all text-center min-w-[140px]"
            >
              Share a Recipe
            </Link>
          </div>
        </div>

   
        <div className="relative flex justify-center md:justify-end items-center w-full lg:pr-8">
  
          <div className="w-full max-w-[360px] bg-white dark:bg-slate-800 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-3.5 border border-slate-100 dark:border-slate-700/60">
   
            <div className="relative w-full h-[210px] rounded-xl overflow-hidden mb-3.5">
       
              <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                Featured Recipe
              </span>
              
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
                alt="Creamy Garlic Pasta"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[10px]">
                <span>💬 47</span>
              </div>
            </div>

      
            <div className="px-1 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                Creamy Garlic Pasta
              </h3>
              
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-1">
                  <span>🥗</span>
                  <span>Italian</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⏱️ 30 min</span>
                </div>
                <div className="flex items-center gap-0.5 text-slate-900 dark:text-white font-bold">
                  <span className="text-red-500">❤️</span>
                  <span>1.2K</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}