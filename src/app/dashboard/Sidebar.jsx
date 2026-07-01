import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, userRole }) {
  const isAdmin = userRole === 'admin';

  // Navigation Links Split By Account Permissions
  const navItems = isAdmin
    ? [
        { id: 'admin-overview', label: '📈 Admin Stats' },
        { id: 'manage-users', label: '👥 Manage Users' },
        { id: 'manage-recipes', label: '🍔 Manage Recipes' },
        { id: 'recipe-reports', label: '⚠️ Recipe Reports' },
      ]
    : [
        { id: 'user-overview', label: '📊 Dashboard Overview' },
        { id: 'my-recipes', label: '📝 My Recipes', href: '/dashboard/my-recipes' },
        { id: 'favorites', label: '❤️ My Favorites', href: '/dashboard/favorites' },
        { id: 'profile', label: '👤 Profile Settings', href: '/dashboard/profile' },
      ];

  const handleNavigation = (item) => {
    if (item.href) {
      // If the link points to your existing sub-folders, navigate there!
      window.location.href = item.href;
    } else {
      // Admin tabs will swap contents on the same view page dynamically
      setActiveTab(item.id);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between h-screen sticky top-0">
      <div>
        <div className="mb-8 font-bold text-xl text-orange-600 flex items-center gap-2">
          <span>🍳</span> RecipeHub
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-orange-50 text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-sm">
          {isAdmin ? 'A' : 'U'}
        </div>
        <div>
          <p className="text-sm font-semibold capitalize">{userRole || 'User'}</p>
          <p className="text-xs text-gray-400">RecipeHub Console</p>
        </div>
      </div>
    </aside>
  );
}