import React from "react";

type CaseType = "SIGINT" | "OSINT" | "HUMINT";

interface CaseCardProps {
  title: string;
  type: string; // Accept string for compatibility with dashboard
  status: string;
  description: string;
  onClick?: () => void;
}

const typeColors = {
  SIGINT: "border-blue-400",
  OSINT: "border-green-400",
  HUMINT: "border-yellow-400",
};

const CaseCard: React.FC<CaseCardProps> = ({ title, type, status, description, onClick }) => {
  const color = typeColors[type as keyof typeof typeColors] || "border-gray-400";
  return (
    <div className={`border-l-4 p-4 bg-white dark:bg-gray-800 shadow rounded-lg mb-4 ${color}`} onClick={onClick}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{type}</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</div>
      <div className="text-xs font-semibold text-right text-blue-600 dark:text-blue-400">Status: {status}</div>
    </div>
  );
};

export default CaseCard;
