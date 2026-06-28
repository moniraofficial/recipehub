"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-gray-300 pt-16 pb-8 transition-colors duration-300">
     
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-gray-800 pb-12">
        

        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            {/* <span className="text-emerald-500 text-3xl">🌿</span> */}

            <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C17 12.5 13.5 16 9 16C7.5 16 6.1 15.5 5 14.7C6.6 11.2 10.1 8.5 14.3 7.3C11.5 5.2 7.7 4.5 4.2 5.5C3.5 7.2 3 9.1 3 11C3 16.5 7.5 21 13 21C18.5 21 21 16.5 21 12C21 9.5 19.3 8.5 17 8Z" />
            </svg>
            <span>Recipe<span className="text-orange-500">Hub</span></span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Discover, cook & share delicious recipes from food lovers around the world.
          </p>
          {/* icons */}
          <div className="flex items-center gap-3 pt-2">
            {["facebook", "instagram", "twitter", "pinterest", "youtube"].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-sm"
              >
                {social === "facebook" && "f"}
                {social === "instagram" && "📷"}
                {social === "twitter" && "𝕏"}
                {social === "pinterest" && "P"}
                {social === "youtube" && "▶"}
              </a>
            ))}
          </div>
        </div>

        {/* quick links */}
        <div className="space-y-4">
          <h4 className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/recipes" className="hover:text-white transition-colors">Browse Recipes</Link></li>
            <li><Link href="/premium" className="hover:text-white transition-colors">Premium</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* categories */}
        <div className="space-y-4">
          <h4 className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Categories</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#breakfast" className="hover:text-white transition-colors">Breakfast</a></li>
            <li><a href="#lunch" className="hover:text-white transition-colors">Lunch</a></li>
            <li><a href="#dinner" className="hover:text-white transition-colors">Dinner</a></li>
            <li><a href="#desserts" className="hover:text-white transition-colors">Desserts</a></li>
            <li><a href="#drinks" className="hover:text-white transition-colors">Drinks</a></li>
            <li><a href="#snacks" className="hover:text-white transition-colors">Snacks</a></li>
          </ul>
        </div>

        {/* support */}
        <div className="space-y-4">
          <h4 className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Support</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#refund" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>

        {/* newsletter */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1 min-w-[200px]">
          <h4 className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Newsletter</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Subscribe to get the latest recipes and cooking tips in your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2 pt-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-md transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* copyright and payment methods */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div>
          © 2026 RecipeHub. All rights reserved.
        </div>
        {/* payment methods */}
        <div className="flex items-center gap-3 text-base filter grayscale opacity-60">
          <span>💳 VISA</span>
          <span>💳 MasterCard</span>
          <span>💳 Amex</span>
          <span>💳 PayPal</span>
        </div>
      </div>
    </footer>
  );
}