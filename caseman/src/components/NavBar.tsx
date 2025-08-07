import React from "react";
import ShieldBadgeLogo from "@/components/ShieldBadgeLogo";

interface NavBarProps {
  onNewCase?: () => void;
  onFilter?: (type: string) => void;
  activeFilter?: string;
}

const NavBar: React.FC<NavBarProps> = ({ onNewCase, onFilter, activeFilter }) => (
  <nav className="w-full flex items-center justify-between py-4 px-6 bg-gray-900 text-white shadow-lg rounded-xl mb-8">
    <div className="flex items-center gap-4">
      <ShieldBadgeLogo />
    </div>
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow"
      onClick={onNewCase}
    >
      New Case
    </button>
  </nav>
);

export default NavBar;
