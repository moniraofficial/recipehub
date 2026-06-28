"use client";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "10K+",
      label: "Recipes",
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
    {
      id: 2,
      number: "5K+",
      label: "Users",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    },
    {
      id: 3,
      number: "200K+",
      label: "Likes",
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      id: 4,
      number: "500+",
      label: "Premium Members",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
        </svg>
      ),
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.2)] p-6 md:py-8 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 items-center">
          
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex items-center gap-4 justify-start lg:justify-center w-full
                ${index !== 0 ? "lg:border-l lg:border-slate-100 lg:dark:border-slate-700/50" : ""}`}
            >
        
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center shrink-0`}>
                {stat.icon}
              </div>
              
  
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                  {stat.number}
                </span>
                <span className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}