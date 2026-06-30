// "use client";
// import { useState } from "react";
// import Link from "next/link";
// // import { authClient } from "@/lib/auth-client"; // Better Auth ক্লায়েন্ট পাথ অনুযায়ী আনকমেন্ট করুন

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Better Auth দিয়ে ইমেইল/পাসওয়ার্ড লগইন হ্যান্ডলার
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       // Better Auth এর সাইন-ইন মেথড (এটি MongoDB-তে ডেটা চেক করবে)
//       /*
//       await authClient.signIn.email({
//         email,
//         password,
//         callbackURL: "/dashboard", 
//       });
//       */
//       console.log("Submitting to Better Auth:", { email, password });
//     } catch (err) {
//       setError(err.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Better Auth দিয়ে গুগল সোশ্যাল লগইন হ্যান্ডলার
//   const handleGoogleLogin = async () => {
//     try {
//       /*
//       await authClient.signIn.social({
//         provider: "google",
//         callbackURL: "/dashboard",
//       });
//       */
//       console.log("Initiating Better Auth Google Login");
//     } catch (err) {
//       setError("Google login failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 transition-colors duration-300">
//       <div className="w-full max-w-[400px] space-y-7 py-8">
        
//         {/* হেডার টেক্সট গ্রুপ */}
//         <div className="space-y-2 items-center text-center">
//           <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">
//             Login
//           </h1>
//           <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
//             Welcome back!
//           </h2>
//           <p className="text-sm text-slate-500 dark:text-slate-400">
//             Login to your account
//           </p>
//         </div>

//         {/* এরর মেসেজ ডিসপ্লে */}
//         {error && (
//           <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-xl font-medium">
//             {error}
//           </div>
//         )}

//         {/* ফর্ম সেকশন */}
//         <form onSubmit={handleSubmit} className="space-y-5">
          
//           {/* ইমেইল ইনপুট ফিল্ড (Mail Icon সহ) */}
//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">
//               Email
//             </label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </span>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors shadow-sm text-slate-900 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* পাসওয়ার্ড ইনপুট ফিল্ড (Lock Icon সহ) */}
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <label className="text-sm font-bold text-slate-800 dark:text-slate-200">
//                 Password
//               </label>
//               <Link 
//                 href="/forgot-password" 
//                 className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
//               >
//                 Forgot password?
//               </Link>
//             </div>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors shadow-sm text-slate-900 dark:text-white"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
//               >
//                 {showPassword ? (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
//                   </svg>
//                 ) : (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center gap-2.5 pt-1">
//             <input
//               type="checkbox"
//               id="remember"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//               className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 bg-white dark:bg-slate-800 dark:border-slate-700 accent-emerald-600"
//             />
//             <label htmlFor="remember" className="text-sm font-medium text-slate-500 dark:text-gray-400 cursor-pointer select-none">
//               Remember me
//             </label>
//           </div>

//           {/* সাবমিট বাটন */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/70 text-white font-bold text-base rounded-xl transition-colors shadow-sm mt-2 flex items-center justify-center"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* ডিভাইডার */}
//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//           <span className="flex-shrink mx-4 text-xs font-semibold text-slate-400 bg-white dark:bg-slate-900 px-2 uppercase tracking-wider">
//             or continue with
//           </span>
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//         </div>

//         {/* গুগল বাটন */}
//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="w-full py-3.5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 transition-all flex items-center justify-center gap-2.5 shadow-sm"
//         >
//           <svg className="w-4 h-4" viewBox="0 0 24 24">
//             <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.5-.115 2.77-1.4 3.63v3h2.24c1.3-1.2 2.3-3 2.3-5.22z"/>
//             <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.83-3c-1.06.72-2.42 1.16-4.1 1.16-3.15 0-5.81-2.13-6.76-5.01H1.17v3.1A12 12 0 0012 24z"/>
//             <path fill="#FBBC05" d="M5.24 14.24a7.15 7.15 0 010-4.48V6.66H1.17a12 12 0 000 10.68l4.07-3.1z"/>
//             <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44A12 12 0 001.17 6.66l4.07 3.1c.95-2.88 3.61-5.01 6.76-5.01z"/>
//           </svg>
//             Sign in with Google
//         </button>

//         {/* রেজিস্টার লিঙ্ক */}
//         <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">
//           Do not have an account?{" "}
//           <Link 
//             href="/register" 
//             className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-bold transition-colors"
//           >
//             Register
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// // আলাদাভাবে ফাংশনটি নিচে এক্সপোর্ট করা হলো
// export default LoginPage;

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // 🎯 ১. useRouter ইম্পোর্ট করা হলো
// import toast from "react-hot-toast";

// const LoginPage = () => {
//   const router = useRouter(); // 🎯 ২. রাউটার ইনিশিয়েলাইজ করা হলো
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       /*
//       await authClient.signIn.email({
//         email,
//         password,
//         callbackURL: "/", 
//       });
//       */
//       console.log("Submitting to Better Auth:", { email, password });
//       toast.success("Logged in successfully!");

//       // 🎯 ৩. সফলভাবে লগইন শেষে হোম পেজে রিডাইরেক্ট করা হলো
//       setTimeout(() => {
//         router.push("/");
//       }, 1000);

//     } catch (err) {
//       setError(err.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       /*
//       await authClient.signIn.social({
//         provider: "google",
//         callbackURL: "/",
//       });
//       */
//       console.log("Initiating Better Auth Google Login");
//     } catch (err) {
//       setError("Google login failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 transition-colors duration-300">
//       <div className="w-full max-w-[400px] space-y-7 py-8">
//         <div className="space-y-2 items-center text-center">
//           <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Login</h1>
//           <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Welcome back!</h2>
//           <p className="text-sm text-slate-500 dark:text-slate-400">Login to your account</p>
//         </div>

//         {error && (
//           <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 rounded-xl font-medium">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Email</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">📧</span>
//               <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <label className="text-sm font-bold text-slate-800 dark:text-slate-200">Password</label>
//               <Link href="/forgot-password" className="text-xs text-emerald-600 font-semibold">Forgot password?</Link>
//             </div>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">🔒</span>
//               <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white" />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400">
//                 {showPassword ? "👁️" : "🙈"}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center gap-2.5 pt-1">
//             <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4" />
//             <label htmlFor="remember" className="text-sm text-slate-500 cursor-pointer">Remember me</label>
//           </div>

//           <button type="submit" disabled={loading} className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl">
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//           <span className="mx-4 text-xs font-semibold text-slate-400">or continue with</span>
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//         </div>

//         <button type="button" onClick={handleGoogleLogin} className="w-full py-3.5 bg-white border border-slate-200 dark:bg-slate-800 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
//           Sign in with Google
//         </button>

//         <p className="text-center text-sm text-slate-500">
//           Do not have an account? <Link href="/register" className="text-emerald-600 font-bold">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// updating 


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; 
// import toast from "react-hot-toast";
// import { authClient } from "../lib/auth-client";

// const LoginPage = () => {
//   const router = useRouter(); 
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
    
//       await authClient.signIn.email({
//         email,
//         password,
//         callbackURL: "/", 
//       });
    
//       console.log("Submitting to Better Auth:", { email, password });
//       toast.success("Logged in successfully!");

//       setTimeout(() => {
//         router.push("/");
//       }, 1000);

//     } catch (err) {
//       setError(err.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
      
//       await authClient.signIn.social({
//         provider: "google",
//         callbackURL: "/",
//       });
      
//       console.log("Initiating Better Auth Google Login");
//     } catch (err) {
//       setError("Google login failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 transition-colors duration-300">
//       <div className="w-full max-w-[400px] space-y-7 py-8">
//         <div className="space-y-2 items-center text-center">
//           <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Login</h1>
//           <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Welcome back!</h2>
//           <p className="text-sm text-slate-500 dark:text-slate-400">Login to your account</p>
//         </div>

//         {error && (
//           <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 rounded-xl font-medium">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Email</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">📧</span>
//               <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <label className="text-sm font-bold text-slate-800 dark:text-slate-200">Password</label>
//               <Link href="/forgot-password" className="text-xs text-emerald-600 font-semibold">Forgot password?</Link>
//             </div>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">🔒</span>
//               <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white" />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400">
//                 {showPassword ? "👁️" : "🙈"}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center gap-2.5 pt-1">
//             <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4" />
//             <label htmlFor="remember" className="text-sm text-slate-500 cursor-pointer">Remember me</label>
//           </div>

//           <button type="submit" disabled={loading} className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl">
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//           <span className="mx-4 text-xs font-semibold text-slate-400">or continue with</span>
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//         </div>

//         <button type="button" onClick={handleGoogleLogin} className="w-full py-3.5 bg-white border border-slate-200 dark:bg-slate-800 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
//           Sign in with Google
//         </button>

//         <p className="text-center text-sm text-slate-500">
//           Do not have an account? <Link href="/register" className="text-emerald-600 font-bold">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// recheck 


"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "../lib/auth-client"; // Verify your path to auth-client

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("Submitting to Better Auth:", { email, password });
      
      await authClient.signIn.email({
        email,
        password,
        dontRememberMe: !rememberMe,
      });
    
      toast.success("Logged in successfully!");

      // Force layout recalculation so the Navbar immediately detects the user context
      setTimeout(() => {
        window.location.href = "/";
      }, 800);

    } catch (err) {
      setError(err.message || "Invalid email or password");
      toast.error(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      console.log("Initiating Better Auth Google Login");
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError("Google login failed. Try again.");
      toast.error("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 transition-colors duration-300">
      <div className="w-full max-w-[400px] space-y-7 py-8">
        <div className="space-y-2 items-center text-center">
          <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Login</h1>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Welcome back!</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Login to your account</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 rounded-xl font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Email</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">📧</span>
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white focus:border-emerald-500" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200">Password</label>
              <Link href="/forgot-password" className="text-xs text-emerald-600 font-semibold">Forgot password?</Link>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">🔒</span>
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white focus:border-emerald-500" 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400 focus:outline-none">
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <input 
              type="checkbox" 
              id="remember" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
              className="w-4 h-4 accent-emerald-600 rounded" 
            />
            <label htmlFor="remember" className="text-sm text-slate-500 dark:text-slate-400 cursor-pointer select-none">Remember me</label>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm disabled:bg-emerald-600/50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
          <span className="mx-4 text-xs font-semibold text-slate-400 whitespace-nowrap">or continue with</span>
          <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
        </div>

        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="w-full py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          Sign in with Google
        </button>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          Do not have an account? <Link href="/register" className="text-emerald-600 font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
