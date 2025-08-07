import React, { useState, useEffect } from "react";

interface EditNodeModalProps {
  open: boolean;
  node?: { id: string; label: string };
  onSave: (node: { id: string; label: string }) => void;
  onDelete?: (node: { id: string; label: string }) => void;
  onClose: () => void;
}

const EditNodeModal: React.FC<EditNodeModalProps> = ({ open, node, onSave, onDelete, onClose }) => {
  const [label, setLabel] = useState(node?.label || "");

  useEffect(() => {
    setLabel(node?.label || "");
  }, [node]);

  if (!open || !node) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Edit Node</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSave({ ...node, label });
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <input
            className="border rounded px-3 py-2"
            value={label}
            onChange={e => setLabel(e.target.value)}
            required
            placeholder="Node Label"
          />
          <div className="flex gap-2 justify-end mt-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700" onClick={onClose}>Cancel</button>
            {onDelete && (
              <button
                type="button"
                className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700"
                onClick={() => { onDelete(node); }}
              >
                Delete
              </button>
            )}
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNodeModal;
