import React from "react";

interface CaseDetailModalProps {
  open: boolean;
  onClose: () => void;
  caseData?: {
    title: string;
    type: string;
    status: string;
    category?: string;
    suspect?: string;
    officer?: string;
    evidence?: File[];
    notes?: string;
    description: string;
  };
  onDelete?: () => void;
}

const CaseDetailModal: React.FC<CaseDetailModalProps> = ({ open, onClose, caseData, onDelete }) => {
  if (!open || !caseData) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-2">{caseData.title}</h2>
        <div className="mb-1 text-sm text-gray-500">Type: <span className="font-semibold">{caseData.type}</span></div>
        <div className="mb-1 text-sm text-gray-500">Status: <span className="font-semibold">{caseData.status}</span></div>
        {caseData.category && <div className="mb-1 text-sm text-gray-500">Category: <span className="font-semibold">{caseData.category}</span></div>}
        {caseData.suspect && <div className="mb-1 text-sm text-gray-500">Suspect: <span className="font-semibold">{caseData.suspect}</span></div>}
        {caseData.officer && <div className="mb-1 text-sm text-gray-500">Officer: <span className="font-semibold">{caseData.officer}</span></div>}
        {caseData.notes && <div className="mb-3 text-sm text-gray-500">Notes: <span className="font-normal">{caseData.notes}</span></div>}
        <div className="mb-6 text-gray-700 dark:text-gray-200 whitespace-pre-line">{caseData.description}</div>
        {caseData.evidence && caseData.evidence.length > 0 && (
          <div className="mb-6">
            <div className="font-semibold text-xs text-gray-700 dark:text-gray-300 mb-1">Evidence:</div>
            <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc ml-4">
              {caseData.evidence.map((file: any, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>{file.name || file}</span>
                  {file instanceof File && (
                    <a
                      href={URL.createObjectURL(file)}
                      download={file.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-xs"
                    >
                      Download
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700" onClick={onClose}>Close</button>
          {onDelete && (
            <button className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700" onClick={onDelete}>Delete Case</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseDetailModal;
