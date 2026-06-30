'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '../../lib/auth-client'; // Adjust this path if necessary
import toast from 'react-hot-toast';

export default function ProfileSettingsPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [updating, setUpdating] = useState(false);

  // Pre-populate input values when session yields user context
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setImageURL(user.image || '');
    } else if (!isPending && !user) {
      router.push('/login');
    }
  }, [user, isPending, router]);

  // Handle profile update using Better Auth's native method
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Name field cannot be left empty.");

    setUpdating(true);
    try {
      // Use Better Auth built-in client actions instead of hitting a missing custom 404 route
      const { data, error } = await authClient.updateUser({
        name: name,
        image: imageURL,
      });

      if (error) {
        console.error("Better Auth update error:", error);
        toast.error(error.message || "Failed to commit profile updates.");
      } else {
        toast.success("Profile records updated successfully!");
        // Refresh to instantly reflect the new profile image across the app
        window.location.reload();
      }
    } catch (err) {
      toast.error("Network communication exception encountered.");
    } finally {
      setUpdating(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="text-xs font-semibold text-slate-400 animate-pulse">Loading identity modules...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 py-10 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
          <button 
            type="button"
            onClick={() => router.push('/dashboard')} 
            className="text-xs font-bold px-4 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
          >
            📊 Overview
          </button>
          <button 
            type="button"
            onClick={() => router.push('/dashboard/profile')} 
            className="text-xs font-bold px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-xl transition-all"
          >
            👤 Profile Settings
          </button>
        </div>

        {/* Profile Card Container */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
          <div className="mb-6">
            <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Account Information Details</h2>
            <p className="text-xs text-slate-400">Keep your public profile metadata current for community presentation.</p>
          </div>

          <form onSubmit={handleProfileUpdate} className="space-y-4">
            
            {/* Read-Only Email Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Email Address (Read-Only)</label>
              <input 
                type="text" 
                value={user?.email || ''} 
                disabled 
                className="w-full text-xs font-medium p-2.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-xl text-slate-400 cursor-not-allowed outline-none"
              />
            </div>

            {/* Editable Name Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Display Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter profile display name"
                className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                required
              />
            </div>

            {/* Editable Image URL Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Avatar Picture Image URL</label>
              <input 
                type="url" 
                value={imageURL} 
                onChange={(e) => setImageURL(e.target.value)}
                placeholder="https://example.com/avatar.jpg"
                className="w-full text-xs font-semibold p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Action Save Button */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="submit"
                disabled={updating}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
              >
                {updating ? 'Saving profiles...' : 'Save Profile Changes'}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}