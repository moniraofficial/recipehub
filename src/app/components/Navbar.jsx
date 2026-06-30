// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [theme, setTheme] = useState("light");

//   // Load theme from localStorage safely on client mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.documentElement.classList.toggle("dark", savedTheme === "dark");
//   }, []);

//   // Toggle function 
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Browse Recipes", href: "/recipes" },
//     { name: "Dashboard", href: "/dashboard" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           {/* Logo Section */}
//           <Link href="/" className="flex items-center gap-2 flex-shrink-0">
//             <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17 8C17 12.5 13.5 16 9 16C7.5 16 6.1 15.5 5 14.7C6.6 11.2 10.1 8.5 14.3 7.3C11.5 5.2 7.7 4.5 4.2 5.5C3.5 7.2 3 9.1 3 11C3 16.5 7.5 21 13 21C18.5 21 21 16.5 21 12C21 9.5 19.3 8.5 17 8Z" />
//             </svg>
//             <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
//               Recipe<span className="text-orange-500">Hub</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-[15px] font-semibold transition-colors ${
//                   isActive(link.href)
//                     ? "text-emerald-600 dark:text-emerald-400"
//                     : "text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Action Utilities & Buttons */}
//           <div className="hidden md:flex items-center gap-5">
//             {/* Search Icon */}
//             <button className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             {/* Dark/Light Theme Toggle Switch */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
//               aria-label="Toggle Theme"
//             >
//               {theme === "dark" ? (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707-.707M6.343 6.343l.707-.707M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                 </svg>
//               )}
//             </button>

//             {/* Authentication Buttons */}
//             <Link
//               href="/login"
//               className="px-5 py-2 text-[15px] font-semibold text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-50 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800 transition-all"
//             >
//               Login
//             </Link>
//             <Link
//               href="/register"
//               className="px-5 py-2 text-[15px] font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm transition-all"
//             >
//               Register
//             </Link>
//           </div>

   
//           <div className="md:hidden flex items-center gap-4">
//             <button onClick={toggleTheme} className="p-1 text-slate-600 dark:text-slate-400">
//               {theme === "dark" ? "☀️" : "🌙"}
//             </button>
//             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-200 focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2 transition-all">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 isActive(link.href)
//                   ? "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400"
//                   : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-2">
//             <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-slate-800 border border-slate-200 rounded-md dark:text-slate-200 dark:border-slate-700">
//               Login
//             </Link>
//             <Link href="/register" onClick={() => setIsOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-white bg-emerald-600 rounded-md">
//               Register
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// upadting 


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [theme, setTheme] = useState("light");

//   // Load theme from localStorage safely on client mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.documentElement.classList.toggle("dark", savedTheme === "dark");
//   }, []);

//   // Toggle function 
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

  
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Browse Recipes", href: "/browse" }, 
//     { name: "Dashboard", href: "/dashboard" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           {/* Logo Section */}
//           <Link href="/" className="flex items-center gap-2 flex-shrink-0">
//             <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17 8C17 12.5 13.5 16 9 16C7.5 16 6.1 15.5 5 14.7C6.6 11.2 10.1 8.5 14.3 7.3C11.5 5.2 7.7 4.5 4.2 5.5C3.5 7.2 3 9.1 3 11C3 16.5 7.5 21 13 21C18.5 21 21 16.5 21 12C21 9.5 19.3 8.5 17 8Z" />
//             </svg>
//             <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
//               Recipe<span className="text-emerald-600">Hub</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-[15px] font-semibold transition-colors ${
//                   isActive(link.href)
//                     ? "text-emerald-600 dark:text-emerald-400"
//                     : "text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Action Utilities & Buttons */}
//           <div className="hidden md:flex items-center gap-5">
//             {/* Search Icon */}
//             <button className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             {/* Dark/Light Theme Toggle Switch */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
//               aria-label="Toggle Theme"
//             >
//               {theme === "dark" ? (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707-.707M6.343 6.343l.707-.707M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                 </svg>
//               )}
//             </button>

//             {/* Authentication Buttons */}
//             <Link
//               href="/login"
//               className="px-5 py-2 text-[15px] font-semibold text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-50 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800 transition-all"
//             >
//               Login
//             </Link>
//             <Link
//               href="/register"
//               className="px-5 py-2 text-[15px] font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm transition-all"
//             >
//               Register
//             </Link>
//           </div>

//           {/* Mobile Menu Actions */}
//           <div className="md:hidden flex items-center gap-4">
//             <button onClick={toggleTheme} className="p-1 text-slate-600 dark:text-slate-400">
//               {theme === "dark" ? "☀️" : "🌙"}
//             </button>
//             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-200 focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Dropdown View */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2 transition-all">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 isActive(link.href)
//                   ? "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400"
//                   : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-2">
//             <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-slate-800 border border-slate-200 rounded-md dark:text-slate-200 dark:border-slate-700">
//               Login
//             </Link>
//             <Link href="/register" onClick={() => setIsOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-white bg-emerald-600 rounded-md">
//               Register
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// recheck 

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client"; // Using your exact import path

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile dropdown toggle
  const [theme, setTheme] = useState("light");

  // Fetch session data reactively from Better Auth
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Load theme from localStorage safely on client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Base public links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Recipes", href: "/browse" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await authClient.signOut();
    setIsProfileOpen(false);
    window.location.href = "/login"; // Forces a complete reload to clear layout states cleanly
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C17 12.5 13.5 16 9 16C7.5 16 6.1 15.5 5 14.7C6.6 11.2 10.1 8.5 14.3 7.3C11.5 5.2 7.7 4.5 4.2 5.5C3.5 7.2 3 9.1 3 11C3 16.5 7.5 21 13 21C18.5 21 21 16.5 21 12C21 9.5 19.3 8.5 17 8Z" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Recipe<span className="text-emerald-600">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Show Dashboard link only to authenticated users */}
            {user && (
              <Link
                href="/dashboard"
                className={`text-[15px] font-semibold transition-colors ${
                  isActive("/dashboard")
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                }`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Action Utilities & Buttons */}
          <div className="hidden md:flex items-center gap-5">
            {/* Search Icon */}
            <button className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707-.707M6.343 6.343l.707-.707M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* DYNAMIC AUTHENTICATION DISPLAY SECTION */}
            {isPending ? (
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
            ) : user ? (
              /* If User Logged In: Show Profile Avatar Image Dropdown */
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src={user.image || "/default-avatar.png"}
                    alt={user.name || "User profile"}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                </button>

                {/* Profile Actions Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg py-2 border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 border-t border-slate-100 dark:border-slate-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* If User Logged Out: Show Default Login & Register CTA Buttons */
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 text-[15px] font-semibold text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-50 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 text-[15px] font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm transition-all"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-1 text-slate-600 dark:text-slate-400">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown View */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2 transition-all">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.href)
                  ? "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400"
                  : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {user && (
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/dashboard")
                  ? "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400"
                  : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              Dashboard
            </Link>
          )}

          <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-center py-2 text-sm font-bold text-white bg-red-600 rounded-md"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-slate-800 border border-slate-200 rounded-md dark:text-slate-200 dark:border-slate-700">
                  Login
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-white bg-emerald-600 rounded-md">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}