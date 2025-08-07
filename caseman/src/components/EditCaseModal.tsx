import React, { useState, useEffect } from "react";

interface EditCaseModalProps {
  open: boolean;
  caseData?: any;
  onSave: (data: any) => void;
  onClose: () => void;
}

const categories = ["General", "SIGINT", "OSINT", "HUMINT", "Other"];

const EditCaseModal: React.FC<EditCaseModalProps> = ({ open, caseData, onSave, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    status: "Active",
    description: "",
    category: "General",
    suspect: "",
    officer: "",
    evidence: "",
    notes: ""
  });

  useEffect(() => {
    if (caseData) setForm({ ...form, ...caseData });
  }, [caseData]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Case</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSave(form);
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <input className="border rounded px-3 py-2" placeholder="Case Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
          <select className="border rounded px-3 py-2" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
            <option value="Active">Active</option>
            <option value="Under Review">Under Review</option>
            <option value="Closed">Closed</option>
          </select>
          <select className="border rounded px-3 py-2" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <input className="border rounded px-3 py-2" placeholder="Suspect(s)" value={form.suspect} onChange={e => setForm(f => ({ ...f, suspect: e.target.value }))} />
          <input className="border rounded px-3 py-2" placeholder="Lead Officer" value={form.officer} onChange={e => setForm(f => ({ ...f, officer: e.target.value }))} />
          <textarea className="border rounded px-3 py-2" placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required />
          <textarea className="border rounded px-3 py-2" placeholder="Evidence" value={form.evidence} onChange={e => setForm(f => ({ ...f, evidence: e.target.value }))} />
          <textarea className="border rounded px-3 py-2" placeholder="Notes" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
          <div className="flex gap-2 justify-end mt-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCaseModal;
