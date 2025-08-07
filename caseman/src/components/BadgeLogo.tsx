import React from "react";

const BadgeLogo = () => (
  <div className="flex items-center gap-2">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 shadow-lg border-4 border-white dark:border-gray-900">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#2563eb" />
        <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="text-2xl font-extrabold tracking-tight text-blue-900 dark:text-blue-200 drop-shadow">Caseman</span>
  </div>
);

export default BadgeLogo;
