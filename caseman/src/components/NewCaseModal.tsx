import React, { useState } from "react";

interface NewCaseModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (data: { title: string; type: string; description: string; status: string }) => void;
}

const types = ["SIGINT", "OSINT", "HUMINT"];
const statuses = ["Open", "Closed", "Under Investigation"];

const NewCaseModal: React.FC<NewCaseModalProps> = ({ open, onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(types[0]);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(statuses[0]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">New Case</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onCreate({ title, type, description, status });
            setTitle("");
            setType(types[0]);
            setDescription("");
            setStatus(statuses[0]);
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <input
            className="border rounded px-3 py-2"
            placeholder="Case Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <select
            className="border rounded px-3 py-2"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select
            className="border rounded px-3 py-2"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            {statuses.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <textarea
            className="border rounded px-3 py-2"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <div className="flex gap-2 justify-end mt-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCaseModal;
