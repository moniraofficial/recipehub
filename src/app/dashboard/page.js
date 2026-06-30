// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { authClient } from '../lib/auth-client'; 
// import toast from 'react-hot-toast';

// export default function UserDashboardPage() {
//   const router = useRouter();
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [stats, setStats] = useState({
//     totalRecipes: 0,
//     totalFavorites: 0,
//     totalLikesReceived: 0,
//     isPremium: false,
//   });
//   const [loadingStats, setLoadingStats] = useState(true);


//   useEffect(() => {
//     if (!isPending && !user) {
//       toast.error("Please login to access the dashboard.");
//       router.push('/login');
//     }
//   }, [user, isPending, router]);


//   useEffect(() => {
//     if (!user?.email) return;

//     const fetchDashboardData = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/users/dashboard-stats?email=${user.email}`);
//         if (res.ok) {
//           const data = await res.json();
//           setStats(data);
//         } else {
//           console.error("Failed to acquire database stats metrics.");
//         }
//       } catch (err) {
//         console.error("Network error fetching dashboard stats:", err);
//       } finally {
//         setLoadingStats(false);
//       }
//     };

//     fetchDashboardData();
//   }, [user]);

//   if (isPending || loadingStats) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
//         <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading dashboard environment...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 py-10 transition-colors duration-300">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
//         {/* Dashboard Navigation Tabs */}
//         <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
//           <button 
//             onClick={() => router.push('/dashboard')} 
//             className="text-xs font-bold px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-xl transition-all"
//           >
//             📊 Overview
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/profile')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             👤 Profile Settings
//           </button>
//         </div>

//         {/* Welcome Banner Header */}
//         <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4">
//             <img 
//               src={user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
//               alt="User profile" 
//               className="w-14 h-14 rounded-2xl object-cover border border-slate-100 dark:border-slate-800"
//             />
//             <div>
//               <div className="flex items-center gap-2">
//                 <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
//                   Welcome back, {user?.name || 'Chef'}!
//                 </h1>
                
//                 {/* 6.2 Premium Badge logic conditional rendering */}
//                 {stats.isPremium && (
//                   <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
//                     💎 Premium Member
//                   </span>
//                 )}
//               </div>
//               <p className="text-xs text-slate-400 font-medium">{user?.email}</p>
//             </div>
//           </div>
//         </div>

//         {/* 6.1 Stat Counter Grid Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
//           {/* Stat 1: Total Recipe Content Count */}
//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">My Added Recipes</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalRecipes}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes published to the feed</p>
//           </div>

//           {/* Stat 2: Total Favorites Listened */}
//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Saved Favorites</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalFavorites}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes flagged for quick cooking access</p>
//           </div>

//           {/* Stat 3: Aggregated Likes Context Counter */}
//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Total Likes Received</div>
//             <div className="text-2xl font-black text-rose-500">{stats.totalLikesReceived}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Community engagement appreciation count</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { authClient } from '../lib/auth-client'; 
// import toast from 'react-hot-toast';

// export default function UserDashboardPage() {
//   const router = useRouter();
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [stats, setStats] = useState({
//     totalRecipes: 0,
//     totalFavorites: 0,
//     totalLikesReceived: 0,
//     isPremium: false,
//   });
//   const [loadingStats, setLoadingStats] = useState(true);

//   useEffect(() => {
//     if (!isPending && !user) {
//       toast.error("Please login to access the dashboard.");
//       router.push('/login');
//     }
//   }, [user, isPending, router]);

//   useEffect(() => {
//     if (!user?.email) return;

//     const fetchDashboardData = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/users/dashboard-stats?email=${user.email}`);
//         if (res.ok) {
//           const data = await res.json();
//           setStats(data);
//         } else {
//           console.error("Failed to acquire database stats metrics.");
//         }
//       } catch (err) {
//         console.error("Network error fetching dashboard stats:", err);
//       } finally {
//         setLoadingStats(false);
//       }
//     };

//     fetchDashboardData();
//   }, [user]);

//   if (isPending || loadingStats) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
//         <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading dashboard environment...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 py-10 transition-colors duration-300">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
//         {/* Dashboard Navigation Tabs */}
//         <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
//           <button 
//             onClick={() => router.push('/dashboard')} 
//             className="text-xs font-bold px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-xl transition-all"
//           >
//             📊 Overview
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/my-recipes')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             🍳 My Recipes
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/add-recipe')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             ➕ Add Recipe
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/profile')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             👤 Profile Settings
//           </button>
//         </div>

//         {/* Welcome Banner Header */}
//         <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4">
//             <img 
//               src={user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
//               alt="User profile" 
//               className="w-14 h-14 rounded-2xl object-cover border border-slate-100 dark:border-slate-800"
//             />
//             <div>
//               <div className="flex items-center gap-2">
//                 <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
//                   Welcome back, {user?.name || 'Chef'}!
//                 </h1>
//                 {stats.isPremium && (
//                   <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
//                     💎 Premium Member
//                   </span>
//                 )}
//               </div>
//               <p className="text-xs text-slate-400 font-medium">{user?.email}</p>
//             </div>
//           </div>

//           {/* Quick Action Call to Action Button */}
//           <button
//             onClick={() => router.push('/dashboard/add-recipe')}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors"
//           >
//             Create New Recipe ➕
//           </button>
//         </div>

//         {/* Stat Counter Grid Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">My Added Recipes</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalRecipes}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes published to the feed</p>
//           </div>

//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Saved Favorites</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalFavorites}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes flagged for quick cooking access</p>
//           </div>

//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Total Likes Received</div>
//             <div className="text-2xl font-black text-rose-500">{stats.totalLikesReceived}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Community engagement appreciation count</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { authClient } from '../lib/auth-client'; 
// import toast from 'react-hot-toast';

// export default function UserDashboardPage() {
//   const router = useRouter();
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [stats, setStats] = useState({
//     totalRecipes: 0,
//     totalFavorites: 0,
//     totalLikesReceived: 0,
//     isPremium: false,
//   });
//   const [loadingStats, setLoadingStats] = useState(true);

//   useEffect(() => {
//     if (!isPending && !user) {
//       toast.error("Please login to access the dashboard.");
//       router.push('/login');
//     }
//   }, [user, isPending, router]);

//   useEffect(() => {
//   if (!user?.email) return;

//   const fetchDashboardData = async () => {
//     try {
//       setLoadingStats(true);

//       const email = user.email.toLowerCase().trim();

//       const res = await fetch(
//         `http://localhost:5000/api/users/dashboard-stats?email=${encodeURIComponent(email)}`
//       );

//       if (!res.ok) {
//         throw new Error(`HTTP Error: ${res.status}`);
//       }

//       const data = await res.json();

//       console.log("Dashboard Stats:", data);

//       setStats({
//         totalRecipes: data.totalRecipes || 0,
//         totalFavorites: data.totalFavorites || 0,
//         totalLikesReceived: data.totalLikesReceived || 0,
//         isPremium: data.isPremium || false,
//       });
//     } catch (error) {
//       console.error("Dashboard Stats Error:", error);

//       toast.error("Failed to load dashboard stats.");

//       setStats({
//         totalRecipes: 0,
//         totalFavorites: 0,
//         totalLikesReceived: 0,
//         isPremium: false,
//       });
//     } finally {
//       setLoadingStats(false);
//     }
//   };

//   fetchDashboardData();
// }, [user?.email]);

//   if (isPending || loadingStats) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
//         <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading dashboard environment...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 py-10 transition-colors duration-300">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
//         {/* Dashboard Navigation Tabs */}
//         <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
//           <button 
//             onClick={() => router.push('/dashboard')} 
//             className="text-xs font-bold px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-xl transition-all"
//           >
//             📊 Overview
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/my-recipes')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             🍳 My Recipes
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/add-recipe')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             ➕ Add Recipe
//           </button>
//           <button 
//             onClick={() => router.push('/dashboard/profile')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             👤 Profile Settings
//           </button>
//         </div>

//         {/* Welcome Banner Header */}
//         <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4">
//             <img 
//               src={user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
//               alt="User profile" 
//               className="w-14 h-14 rounded-2xl object-cover border border-slate-100 dark:border-slate-800"
//             />
//             <div>
//               <div className="flex items-center gap-2">
//                 <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
//                   Welcome back, {user?.name || 'Chef'}!
//                 </h1>
//                 {stats.isPremium && (
//                   <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
//                     💎 Premium Member
//                   </span>
//                 )}
//               </div>
//               <p className="text-xs text-slate-400 font-medium">{user?.email}</p>
//             </div>
//           </div>

//           {/* Quick Action Call to Action Button */}
//           <button
//             onClick={() => router.push('/dashboard/add-recipe')}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors"
//           >
//             Create New Recipe ➕
//           </button>
//         </div>

//         {/* Stat Counter Grid Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">My Added Recipes</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalRecipes}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes published to the feed</p>
//           </div>

//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Saved Favorites</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalFavorites}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes flagged for quick cooking access</p>
//           </div>

//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Total Likes Received</div>
//             <div className="text-2xl font-black text-rose-500">{stats.totalLikesReceived}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Community engagement appreciation count</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '../lib/auth-client'; 
import toast from 'react-hot-toast';

export default function UserDashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [stats, setStats] = useState({
    totalRecipes: 0,
    totalFavorites: 0,
    totalLikesReceived: 0,
    isPremium: false,
  });
  const [loadingStats, setLoadingStats] = useState(true);

  // Dynamic Base configuration from local environment
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (!isPending && !user) {
      toast.error("Please login to access the dashboard.");
      router.push('/login');
    }
  }, [user, isPending, router]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchDashboardData = async () => {
      try {
        setLoadingStats(true);
        const email = user.email.toLowerCase().trim();

        const res = await fetch(
          `${API_BASE_URL}/api/users/dashboard-stats?email=${encodeURIComponent(email)}`
        );

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        setStats({
          totalRecipes: data.totalRecipes || 0,
          totalFavorites: data.totalFavorites || 0,
          totalLikesReceived: data.totalLikesReceived || 0,
          isPremium: data.isPremium || false,
        });
      } catch (error) {
        console.error("Dashboard Stats Error:", error);
        toast.error("Failed to load dashboard stats.");
        setStats({
          totalRecipes: 0,
          totalFavorites: 0,
          totalLikesReceived: 0,
          isPremium: false,
        });
      } finally {
        setLoadingStats(false);
      }
    };

    fetchDashboardData();
  }, [user?.email, API_BASE_URL]);

  if (isPending || loadingStats) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading dashboard environment...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Dashboard Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <button 
            onClick={() => router.push('/dashboard')} 
            className="text-xs font-bold px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-xl transition-all"
          >
            📊 Overview
          </button>
          <button 
            onClick={() => router.push('/dashboard/my-recipes')} 
            className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
          >
            🍳 My Recipes
          </button>
          <button 
            onClick={() => router.push('/dashboard/favorites')} 
            className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
          >
            ❤️ Favorites
          </button>
          <button 
            onClick={() => router.push('/dashboard/add-recipe')} 
            className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
          >
            ➕ Add Recipe
          </button>
          <button 
            onClick={() => router.push('/dashboard/profile')} 
            className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
          >
            👤 Profile Settings
          </button>
        </div>

        {/* Welcome Banner Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src={user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
              alt="User profile" 
              className="w-14 h-14 rounded-2xl object-cover border border-slate-100 dark:border-slate-800"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  Welcome back, {user?.name || 'Chef'}!
                </h1>
                {stats.isPremium && (
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                    💎 Premium Member
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-medium">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={() => router.push('/dashboard/add-recipe')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors"
          >
            Create New Recipe ➕
          </button>
        </div>

        {/* Stat Counter Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm cursor-pointer" onClick={() => router.push('/dashboard/my-recipes')}>
            <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">My Added Recipes</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalRecipes}</div>
            <p className="text-[10px] text-slate-400 mt-1">Recipes published to the feed</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm cursor-pointer" onClick={() => router.push('/dashboard/favorites')}>
            <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Saved Favorites</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalFavorites}</div>
            <p className="text-[10px] text-slate-400 mt-1">Recipes flagged for quick cooking access</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
            <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Total Likes Received</div>
            <div className="text-2xl font-black text-rose-500">{stats.totalLikesReceived}</div>
            <p className="text-[10px] text-slate-400 mt-1">Community engagement appreciation count</p>
          </div>
        </div>

      </div>
    </div>
  );
}