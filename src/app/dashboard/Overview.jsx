import React, { useEffect, useState } from 'react';

export default function Overview() {
  const [stats, setStats] = useState({ totalUsers: 0, totalRecipes: 0, totalPremiumMembers: 0, totalReports: 0 });

  useEffect(() => {
    fetch('https://recipehub-sigma-three.vercel.app /api/admin/dashboard-stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Error loading dashboard metrics:", err));
  }, []);

  const cardData = [
    { title: 'Total Users', value: stats.totalUsers, icon: '👥', color: 'bg-blue-50 text-blue-600' },
    { title: 'Total Recipes', value: stats.totalRecipes, icon: '🍔', color: 'bg-green-50 text-green-600' },
    { title: 'Premium Members', value: stats.totalPremiumMembers, icon: '👑', color: 'bg-purple-50 text-purple-600' },
    { title: 'Total Reports', value: stats.totalReports, icon: '⚠️', color: 'bg-red-50 text-red-600' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">{card.title}</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{card.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${card.color}`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}