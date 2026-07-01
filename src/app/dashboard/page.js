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

//   // Dynamic Base configuration from local environment
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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
//         setLoadingStats(true);
//         const email = user.email.toLowerCase().trim();

//         const res = await fetch(
//           `${API_BASE_URL}/api/users/dashboard-stats?email=${encodeURIComponent(email)}`
//         );

//         if (!res.ok) {
//           throw new Error(`HTTP Error: ${res.status}`);
//         }

//         const data = await res.json();

//         setStats({
//           totalRecipes: data.totalRecipes || 0,
//           totalFavorites: data.totalFavorites || 0,
//           totalLikesReceived: data.totalLikesReceived || 0,
//           isPremium: data.isPremium || false,
//         });
//       } catch (error) {
//         console.error("Dashboard Stats Error:", error);
//         toast.error("Failed to load dashboard stats.");
//         setStats({
//           totalRecipes: 0,
//           totalFavorites: 0,
//           totalLikesReceived: 0,
//           isPremium: false,
//         });
//       } finally {
//         setLoadingStats(false);
//       }
//     };

//     fetchDashboardData();
//   }, [user?.email, API_BASE_URL]);

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
//             onClick={() => router.push('/dashboard/favorites')} 
//             className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
//           >
//             ❤️ Favorites
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

//           <button
//             onClick={() => router.push('/dashboard/add-recipe')}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors"
//           >
//             Create New Recipe ➕
//           </button>
//         </div>

//         {/* Stat Counter Grid Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm cursor-pointer" onClick={() => router.push('/dashboard/my-recipes')}>
//             <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">My Added Recipes</div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalRecipes}</div>
//             <p className="text-[10px] text-slate-400 mt-1">Recipes published to the feed</p>
//           </div>

//           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm cursor-pointer" onClick={() => router.push('/dashboard/favorites')}>
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

// --- SUB-COMPONENTS FOR ADMIN PAGES ---
const AdminOverview = ({ apiBase }) => {
  const [adminStats, setAdminStats] = useState({ totalUsers: 0, totalRecipes: 0, totalPremiumMembers: 0, totalReports: 0 });
  
  useEffect(() => {
    fetch(`${apiBase}/api/admin/dashboard-stats`)
      .then(res => res.json())
      .then(data => setAdminStats(data))
      .catch(err => console.error("Error loading admin stats:", err));
  }, [apiBase]);

  const cards = [
    { title: 'Total Users', value: adminStats.totalUsers, icon: '👥', color: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600' },
    { title: 'Total Recipes', value: adminStats.totalRecipes, icon: '🍔', color: 'bg-green-50 dark:bg-green-950/40 text-green-600' },
    { title: 'Premium Members', value: adminStats.totalPremiumMembers, icon: '👑', color: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600' },
    { title: 'Total Reports', value: adminStats.totalReports, icon: '⚠️', color: 'bg-red-50 dark:bg-red-950/40 text-red-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
      {cards.map((c, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{c.title}</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{c.value}</h3>
          </div>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${c.color}`}>{c.icon}</div>
        </div>
      ))}
    </div>
  );
};

const ManageUsers = () => <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-400">Manage Users interface panel loading...</div>;
const ManageRecipes = () => <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-400">Global recipe management layout template loading...</div>;
const RecipeReports = () => <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-400">User report audits monitoring panel loading...</div>;

export default function UnifiedDashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Detect user role (defaults to 'user' if not explicitly defined on record)
  const userRole = user?.role || 'user';
  const isAdmin = userRole === 'admin';

  // State management to see which view option is active inside the sidebar grid
  const [activeTab, setActiveTab] = useState('');
  const [stats, setStats] = useState({
    totalRecipes: 0,
    totalFavorites: 0,
    totalLikesReceived: 0,
    isPremium: false,
  });
  const [loadingStats, setLoadingStats] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // Set the default tab choice based on account context role type
  useEffect(() => {
    if (!isPending && user) {
      setActiveTab(user.role === 'admin' ? 'admin-overview' : 'user-overview');
    }
  }, [user, isPending]);

  // Auth Protection Redirect
  useEffect(() => {
    if (!isPending && !user) {
      toast.error("Please login to access the dashboard.");
      router.push('/login');
    }
  }, [user, isPending, router]);

  // Regular user workspace metrics data-fetch
  useEffect(() => {
    if (!user?.email || isAdmin) {
      setLoadingStats(false);
      return;
    }

    const fetchDashboardData = async () => {
      try {
        setLoadingStats(true);
        const email = user.email.toLowerCase().trim();
        const res = await fetch(
          `${API_BASE_URL}/api/users/dashboard-stats?email=${encodeURIComponent(email)}`
        );

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
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
      } finally {
        setLoadingStats(false);
      }
    };

    fetchDashboardData();
  }, [user?.email, API_BASE_URL, isAdmin]);

  if (isPending || (loadingStats && !isAdmin)) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading dashboard environment...</div>
      </div>
    );
  }

  // Sidebar link map arrays configured cleanly per identity privileges
  const sideNavItems = isAdmin
    ? [
        { id: 'admin-overview', label: '📈 Admin Stats' },
        { id: 'manage-users', label: '👥 Manage Users' },
        { id: 'manage-recipes', label: '🍔 Manage Recipes' },
        { id: 'recipe-reports', label: '⚠️ Recipe Reports' },
      ]
    : [
        { id: 'user-overview', label: '📊 Overview' },
        { id: 'my-recipes', label: '🍳 My Recipes', path: '/dashboard/my-recipes' },
        { id: 'favorites', label: '❤️ Favorites', path: '/dashboard/favorites' },
        { id: 'add-recipe', label: '➕ Add Recipe', path: '/dashboard/add-recipe' },
        { id: 'profile', label: '👤 Profile Settings', path: '/dashboard/profile' },
      ];

  const handleNavClick = (item) => {
    if (item.path) {
      router.push(item.path);
    } else {
      setActiveTab(item.id);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      // --- Admin Content Options ---
      case 'admin-overview': return <AdminOverview apiBase={API_BASE_URL} />;
      case 'manage-users':   return <ManageUsers />;
      case 'manage-recipes': return <ManageRecipes />;
      case 'recipe-reports': return <RecipeReports />;
      
      // --- Regular User View Panels ---
      case 'user-overview':
        return (
          <div className="space-y-8 animate-fadeIn">
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
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm cursor-pointer hover:border-emerald-500/30 transition-all" onClick={() => router.push('/dashboard/my-recipes')}>
                <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">My Added Recipes</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.totalRecipes}</div>
                <p className="text-[10px] text-slate-400 mt-1">Recipes published to the feed</p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm cursor-pointer hover:border-emerald-500/30 transition-all" onClick={() => router.push('/dashboard/favorites')}>
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
        );
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50/60 dark:bg-slate-950 transition-colors duration-300">
      
      {/* LEFT SIDEBAR NAVIGATION PANEL */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between h-screen sticky top-0">
        <div>
          <div className="mb-8 font-black text-base text-orange-600 dark:text-orange-500 tracking-tight flex items-center gap-2">
            <span className="text-xl">🍳</span> RecipeHub
          </div>

          <nav className="space-y-1.5">
            {sideNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center gap-3">
          <img 
            src={user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
            className="w-8 h-8 rounded-xl object-cover" 
            alt="User profile thumbnail"
          />
          <div className="truncate">
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{user?.name || 'Chef'}</p>
            <p className="text-[10px] font-medium text-slate-400 capitalize">{userRole} panel</p>
          </div>
        </div>
      </aside>

      {/* RIGHT MAIN WINDOW DISPLAY FRAME */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </main>

    </div>
  );
}