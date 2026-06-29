// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // 🎯 ১. useRouter ইম্পোর্ট করা হলো
// import toast from "react-hot-toast";
// import { authClient } from "../lib/auth-client";


// const RegisterPage = () => {
//   const router = useRouter(); // 🎯 ২. রাউটার ইনিশিয়েলাইজ করা হলো
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return toast.error("Passwords do not match!");
//     }

//     if (!agreeTerms) {
//       return toast.error("Please agree to the Terms & Privacy Policy");
//     }

//     setLoading(true);
//     toast.loading("Creating your account...", { id: "register-toast" });

//     try {
      
//       await authClient.signUp.email({
//         email,
//         password,
//         name,
//         image, 
//         callbackURL: "/", 
//       });
    
//       console.log("Submitting to Better Auth SignUp:", { name, email, image, password });
//       toast.success("Account created successfully!", { id: "register-toast" });
      
      
//       setTimeout(() => {
//         router.push("/");
//       }, 1000);

//     } catch (err) {
//       toast.error(err.message || "Registration failed. Try again.", { id: "register-toast" });
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
    
//       console.log("Initiating Better Auth Google Signup");
//     } catch (err) {
//       toast.error("Google authentication failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-10 transition-colors duration-300">
//       <div className="w-full max-w-[400px] space-y-7">
//         <div className="space-y-2 items-center text-center">
//           <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Register</h1>
//           <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Create your account</h2>
//           <p className="text-sm text-slate-500 dark:text-slate-400">Join our community today</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Name</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </span>
//               <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Email</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </span>
//               <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Image URL</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                 </svg>
//               </span>
//               <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Password</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </span>
//               <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400">
//                 {showPassword ? "👁️" : "🙈"}
//               </button>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Confirm Password</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </span>
//               <input type={showConfirmPassword ? "text" : "password"} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//               <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 text-slate-400">
//                 {showConfirmPassword ? "👁️" : "🙈"}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-start gap-2.5 pt-1">
//             <input type="checkbox" id="terms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="w-4 h-4 mt-0.5" />
//             <label htmlFor="terms" className="text-sm text-slate-500 cursor-pointer">
//               I agree to the <Link href="/terms" className="text-emerald-600 font-bold">Terms of Service</Link>
//             </label>
//           </div>

//           <button type="submit" disabled={loading} className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl">
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//           <span className="mx-4 text-xs font-semibold text-slate-400">or continue with</span>
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//         </div>

//         <button type="button" onClick={handleGoogleLogin} className="w-full py-3.5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
//           Sign in with Google
//         </button>

//         <p className="text-center text-sm text-slate-500">
//           Already have an account? <Link href="/login" className="text-emerald-600 font-bold">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // 🎯 ১. useRouter ইম্পোর্ট করা হলো
// import toast from "react-hot-toast";
// import { authClient } from "../lib/auth-client";
// import { User } from "lucide-react";


// const RegisterPage = () => {
//   const router = useRouter(); // 🎯 ২. রাউটার ইনিশিয়েলাইজ করা হলো
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState("user"); // 🎯 রোলের জন্য নতুন স্টেট
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return toast.error("Passwords do not match!");
//     }

//     if (!agreeTerms) {
//       return toast.error("Please agree to the Terms & Privacy Policy");
//     }

//     setLoading(true);
//     toast.loading("Creating your account...", { id: "register-toast" });

//     try {
      
//       await authClient.signUp.email({
//         ...User,
//         plan: 'free',
//         email,
//         password,
//         name,
//         image, 
//         callbackURL: "/", 
//       });
    
//       // 💡 আপনার সিলেক্ট করা `role` অবজেক্টের সাথে এখানে কনসোল লগ হবে
//       console.log("Submitting to Better Auth SignUp:", { name, email, image, password, role });
//       toast.success("Account created successfully!", { id: "register-toast" });
      
      
//       setTimeout(() => {
//         router.push("/");
//       }, 1000);

//     } catch (err) {
//       toast.error(err.message || "Registration failed. Try again.", { id: "register-toast" });
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
    
//       console.log("Initiating Better Auth Google Signup");
//     } catch (err) {
//       toast.error("Google authentication failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-10 transition-colors duration-300">
//       <div className="w-full max-w-[400px] space-y-7">
//         <div className="space-y-2 items-center text-center">
//           <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Register</h1>
//           <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Create your account</h2>
//           <p className="text-sm text-slate-500 dark:text-slate-400">Join our community today</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Name</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </span>
//               <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Email</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </span>
//               <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Image URL</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                 </svg>
//               </span>
//               <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Password</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </span>
//               <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400">
//                 {showPassword ? "👁️" : "🙈"}
//               </button>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Confirm Password</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </span>
//               <input type={showConfirmPassword ? "text" : "password"} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
//               <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 text-slate-400">
//                 {showConfirmPassword ? "👁️" : "🙈"}
//               </button>
//             </div>
//           </div>

//           {/* 🎯 নতুন যুক্ত করা Select Role ড্রপডাউন মেনু */}
//           <div className="space-y-2">
//             <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Select Role</label>
//             <div className="relative flex items-center">
//               <span className="absolute left-4 text-slate-400">👤</span>
//               <select 
//                 value={role} 
//                 onChange={(e) => setRole(e.target.value)} 
//                 className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white appearance-none cursor-pointer"
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//               </select>
//               <span className="absolute right-4 text-xs pointer-events-none text-slate-400">▼</span>
//             </div>
//           </div>

//           <div className="flex items-start gap-2.5 pt-1">
//             <input type="checkbox" id="terms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="w-4 h-4 mt-0.5" />
//             <label htmlFor="terms" className="text-sm text-slate-500 cursor-pointer">
//               I agree to the <Link href="/terms" className="text-emerald-600 font-bold">Terms of Service</Link>
//             </label>
//           </div>

//           <button type="submit" disabled={loading} className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl">
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <div className="relative flex py-2 items-center">
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//           <span className="mx-4 text-xs font-semibold text-slate-400">or continue with</span>
//           <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
//         </div>

//         <button type="button" onClick={handleGoogleLogin} className="w-full py-3.5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
//           Sign in with Google
//         </button>

//         <p className="text-center text-sm text-slate-500">
//           Already have an account? <Link href="/login" className="text-emerald-600 font-bold">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import toast from "react-hot-toast";
import { authClient } from "../lib/auth-client";

const RegisterPage = () => {
  const router = useRouter(); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // 🎯 রোলের জন্য স্টেট
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    if (!agreeTerms) {
      return toast.error("Please agree to the Terms & Privacy Policy");
    }

    setLoading(true);
    toast.loading("Creating your account...", { id: "register-toast" });

    try {
      // 🎯 Better-Auth এ সঠিক অবজেক্ট স্ট্রাকচারে ডেটা পাঠানো হচ্ছে
      await authClient.signUp.email({
        email,
        password,
        name,
        image: image || "", 
        callbackURL: "/", 
        // 🎯 কাস্টম রোল এবং প্ল্যান অতিরিক্ত ফিল্ড হিসেবে পাস করা হচ্ছে
        additionalFields: {
          role: role,
          plan: 'free'
        }
      });
    
      console.log("Submitting to Better Auth SignUp:", { name, email, image, password, role });
      toast.success("Account created successfully!", { id: "register-toast" });
      
      setTimeout(() => {
        router.push("/");
      }, 1000);

    } catch (err) {
      toast.error(err.message || "Registration failed. Try again.", { id: "register-toast" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      console.log("Initiating Better Auth Google Signup");
    } catch (err) {
      toast.error("Google authentication failed.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-10 transition-colors duration-300">
      <div className="w-full max-w-[400px] space-y-7">
        <div className="space-y-2 items-center text-center">
          <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Register</h1>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Create your account</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Join our community today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Name</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Email</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
            </div>
          </div>

          {/* Image URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Image URL</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </span>
              <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400">
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Confirm Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input type={showConfirmPassword ? "text" : "password"} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 text-slate-400">
                {showConfirmPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          {/* Select Role Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Select Role</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">👤</span>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white appearance-none cursor-pointer"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <span className="absolute right-4 text-xs pointer-events-none text-slate-400">▼</span>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2.5 pt-1">
            <input type="checkbox" id="terms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="w-4 h-4 mt-0.5" />
            <label htmlFor="terms" className="text-sm text-slate-500 cursor-pointer">
              I agree to the <Link href="/terms" className="text-emerald-600 font-bold">Terms of Service</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={loading} className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl disabled:bg-emerald-700/60">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
          <span className="mx-4 text-xs font-semibold text-slate-400">or continue with</span>
          <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
        </div>

        {/* Google Signup */}
        <button type="button" onClick={handleGoogleLogin} className="w-full py-3.5 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
          Sign in with Google
        </button>

        <p className="text-center text-sm text-slate-500">
          Already have an account? <Link href="/login" className="text-emerald-600 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;