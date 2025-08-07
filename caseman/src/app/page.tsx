"use client";

import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import CaseCard from "@/components/CaseCard";
import NewCaseModal from "@/components/NewCaseModal";
import CaseDetailModal from "@/components/CaseDetailModal";
import CaseMapCanvas from "@/components/CaseMapCanvas";
import EditNodeModal from "@/components/EditNodeModal";
import EditCaseModal from "@/components/EditCaseModal";
import EvidenceUpload from "@/components/EvidenceUpload";

interface Case {
  id: number;
  title: string;
  type: string;
  status: string;
  category: string;
  suspect: string;
  officer: string;
  evidence: any[];
  notes: string;
  description: string;
}

export default function Home() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [mapCase, setMapCase] = useState<any>(null);
  const [editNodeModalOpen, setEditNodeModalOpen] = useState(false);
  const [editNode, setEditNode] = useState<any>(null);
  const [editCaseModalOpen, setEditCaseModalOpen] = useState(false);
  const [editCase, setEditCase] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [uploadedEvidence, setUploadedEvidence] = useState<Record<string, File[]>>({});

  // Store map data per case
  const [caseMaps, setCaseMaps] = useState<Record<string, { nodes: any[]; edges: any[] }>>({});

  const [connectMode, setConnectMode] = useState(false);
  const [connectStart, setConnectStart] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCases() {
      setLoading(true);
      try {
        const res = await fetch("/api/cases");
        const data = await res.json();
        setCases(data);
        setError(null);
      } catch (e) {
        setError("Failed to load cases");
      } finally {
        setLoading(false);
      }
    }
    fetchCases();
  }, []);

  const handleCreateCase = async (data: any) => {
    try {
      const res = await fetch("/api/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const created = await res.json();
      setCases(cs => [created, ...cs]);
    } catch {
      setError("Failed to create case");
    }
  };

  const handleDeleteCase = async (id: number) => {
    try {
      await fetch(`/api/cases/${id}`, { method: "DELETE" });
      setCases(cs => cs.filter(c => c.id !== id));
    } catch {
      setError("Failed to delete case");
    }
  };

  // Fetch evidence for a case from the API
  const fetchEvidence = async (caseId: number) => {
    try {
      const res = await fetch(`/api/cases/${caseId}/evidence`);
      return await res.json();
    } catch {
      setError("Failed to load evidence");
      return [];
    }
  };

  // Upload evidence to the API
  const handleEvidenceUpload = async (caseId: number, files: File[]) => {
    try {
      for (const file of files) {
        // For now, just store metadata; real file upload would use FormData and a file handler
        await fetch(`/api/cases/${caseId}/evidence`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: file.name,
            mimetype: file.type,
            url: "local-upload-not-implemented" // Placeholder
          })
        });
      }
      // Refresh cases to get new evidence
      const res = await fetch("/api/cases");
      setCases(await res.json());
    } catch {
      setError("Failed to upload evidence");
    }
  };

  const filteredCases = cases.filter((c) => {
    const matchesFilter = filter === "ALL" || c.type === filter || c.category === filter;
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      (c.suspect && c.suspect.toLowerCase().includes(search.toLowerCase())) ||
      (c.officer && c.officer.toLowerCase().includes(search.toLowerCase())) ||
      (c.category && c.category.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Example map data (replace with real data or API integration later)
  const mapNodes = [
    { id: "1", label: "Suspect A", x: 120, y: 120 },
    { id: "2", label: "Phone #1", x: 320, y: 80 },
    { id: "3", label: "Location X", x: 500, y: 200 },
    { id: "4", label: "Suspect B", x: 220, y: 300 },
  ];
  const mapEdges = [
    { from: "1", to: "2" },
    { from: "2", to: "3" },
    { from: "1", to: "4" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <NavBar
        onNewCase={() => setModalOpen(true)}
        onFilter={setFilter}
        activeFilter={filter}
      />
      <NewCaseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateCase}
      />
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
          Case Dashboard
        </h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Manage and track cases, suspects, and evidence with a modern, intuitive interface.
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search cases, suspects, officers, or categories..."
            className="w-full md:w-1/2 px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-48 px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm bg-white dark:bg-gray-800 dark:text-white"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="ALL">All Types</option>
            <option value="SIGINT">SIGINT</option>
            <option value="OSINT">OSINT</option>
            <option value="HUMINT">HUMINT</option>
            <option value="Communications">Communications</option>
            <option value="Cybercrime">Cybercrime</option>
            <option value="Trafficking">Trafficking</option>
          </select>
        </div>
        {loading && <div className="text-center py-8 text-gray-500">Loading cases...</div>}
        {error && <div className="text-center py-8 text-red-500">{error}</div>}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredCases.map((c, i) => (
            <div key={i} className="cursor-pointer group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-800 transition hover:shadow-2xl">
              <CaseCard
                {...c}
                onClick={() => {
                  setSelectedCase(c);
                  setDetailOpen(true);
                }}
              />
              <div className="mt-2">
                <EvidenceUpload
                  onUpload={files => handleEvidenceUpload(c.id, files)}
                  label="Add Evidence"
                />
                {c.evidence && c.evidence.length > 0 && (
                  <div className="mt-2">
                    <span className="font-semibold text-xs text-gray-700 dark:text-gray-300">Evidence:</span>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc ml-4">
                      {c.evidence.map((file: any, idx: number) => (
                        <li key={idx}>{file.name || file}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition"
                onClick={e => {
                  e.stopPropagation();
                  setMapCase(c);
                  setMapModalOpen(true);
                }}
                title="Open Mapping Canvas"
              >
                Map
              </button>
              <button
                className="absolute bottom-2 right-2 bg-blue-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition"
                onClick={e => {
                  e.stopPropagation();
                  setEditCase(c);
                  setEditCaseModalOpen(true);
                }}
                title="Edit Case"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </main>
      <CaseDetailModal
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        caseData={selectedCase}
        onDelete={() => selectedCase && handleDeleteCase(selectedCase.id)}
      />
      {mapModalOpen && mapCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 w-full max-w-2xl relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white" onClick={() => setMapModalOpen(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Mapping for: <span className="text-blue-700 dark:text-blue-300">{mapCase?.title}</span></h2>
            <button
              className="mb-4 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 shadow"
              onClick={() => {
                setCaseMaps(m => {
                  const nodes = m[mapCase.title]?.nodes || [];
                  const newId = (nodes.length + 1).toString();
                  return {
                    ...m,
                    [mapCase.title]: {
                      nodes: [
                        ...nodes,
                        { id: newId, label: `Node ${newId}`, x: 100 + nodes.length * 40, y: 100 + nodes.length * 30 }
                      ],
                      edges: m[mapCase.title]?.edges || []
                    }
                  };
                });
              }}
            >
              + Add Node
            </button>
            <button
              className={`mb-4 px-4 py-2 rounded font-semibold shadow ml-2 ${connectMode ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-yellow-900'}`}
              onClick={() => {
                setConnectMode(m => !m);
                setConnectStart(null);
              }}
            >
              {connectMode ? 'Connecting: Click two nodes' : 'Connect Nodes'}
            </button>
            <CaseMapCanvas
              nodes={caseMaps[mapCase.title]?.nodes || []}
              edges={caseMaps[mapCase.title]?.edges || []}
              onNodesChange={nodes => setCaseMaps(m => ({ ...m, [mapCase.title]: { nodes, edges: m[mapCase.title]?.edges || [] } }))}
              onEdgesChange={edges => setCaseMaps(m => ({ ...m, [mapCase.title]: { nodes: m[mapCase.title]?.nodes || [], edges } }))}
              onNodeClick={id => {
                if (connectMode) {
                  if (!connectStart) {
                    setConnectStart(id);
                  } else if (connectStart !== id) {
                    setCaseMaps(m => {
                      const edges = m[mapCase.title]?.edges || [];
                      return {
                        ...m,
                        [mapCase.title]: {
                          nodes: m[mapCase.title]?.nodes || [],
                          edges: [...edges, { from: connectStart, to: id }]
                        }
                      };
                    });
                    setConnectStart(null);
                  }
                  return;
                }
                const node = (caseMaps[mapCase.title]?.nodes || []).find((n: any) => n.id === id);
                setEditNode(node);
                setEditNodeModalOpen(true);
              }}
            />
            {connectMode && connectStart && (
              <div className="text-xs text-yellow-700 mt-2">Select another node to connect from <b>{connectStart}</b></div>
            )}
            <EditNodeModal
              open={editNodeModalOpen}
              node={editNode}
              onSave={node => {
                setCaseMaps(m => ({
                  ...m,
                  [mapCase.title]: {
                    nodes: (m[mapCase.title]?.nodes || []).map((n: any) => n.id === node.id ? node : n),
                    edges: m[mapCase.title]?.edges || []
                  }
                }));
              }}
              onDelete={node => {
                setCaseMaps(m => {
                  const nodes = (m[mapCase.title]?.nodes || []).filter((n: any) => n.id !== node.id);
                  const edges = (m[mapCase.title]?.edges || []).filter((e: any) => e.from !== node.id && e.to !== node.id);
                  return {
                    ...m,
                    [mapCase.title]: { nodes, edges }
                  };
                });
                setEditNodeModalOpen(false);
              }}
              onClose={() => setEditNodeModalOpen(false)}
            />
          </div>
        </div>
      )}
      <EditCaseModal
        open={editCaseModalOpen}
        caseData={editCase}
        onSave={data => {
          setCases(cs => cs.map(c => c.title === editCase.title ? { ...c, ...data } : c));
        }}
        onClose={() => setEditCaseModalOpen(false)}
      />
      <footer className="text-center text-xs text-gray-500 py-6">
        Caseman © {new Date().getFullYear()} | For Law Enforcement Use Only
      </footer>
    </div>
  );
}
