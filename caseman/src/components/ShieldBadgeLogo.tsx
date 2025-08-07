import React from "react";

// Modern police badge SVG: gold/blue, star, shield shape
const ShieldBadgeLogo = () => (
  <div className="flex items-center gap-2">
    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-yellow-400 shadow-lg border-4 border-white dark:border-gray-900">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
        {/* Outer shield shape */}
        <path d="M20 3C20 3 8 5 8 15C8 31 20 37 20 37C20 37 32 31 32 15C32 5 20 3 20 3Z" fill="#facc15" stroke="#1e40af" strokeWidth="2.2"/>
        {/* Inner blue shield */}
        <path d="M20 6C20 6 11 8 11 15C11 27 20 33 20 33C20 33 29 27 29 15C29 8 20 6 20 6Z" fill="#2563eb" stroke="#fff" strokeWidth="1.2"/>
        {/* Star in the center */}
        <polygon points="20,14 21.8,18.2 26.8,18.6 22.9,21.7 24.2,26.2 20,23.5 15.8,26.2 17.1,21.7 13.2,18.6 18.2,18.2" fill="#fff" stroke="#facc15" strokeWidth="0.7"/>
      </svg>
    </span>
    <span className="text-2xl font-extrabold tracking-tight text-blue-900 dark:text-blue-200 drop-shadow">Caseman</span>
  </div>
);

export default ShieldBadgeLogo;
