"use client";
import React, { useRef, useEffect, useState } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
}

interface CaseMapCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodeClick?: (id: string) => void;
  onNodesChange?: (nodes: Node[]) => void;
  onEdgesChange?: (edges: Edge[]) => void;
}

const CaseMapCanvas: React.FC<CaseMapCanvasProps> = ({ nodes, edges, onNodeClick, onNodesChange, onEdgesChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [edgeStart, setEdgeStart] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 2;
    edges.forEach(edge => {
      const from = nodes.find(n => n.id === edge.from);
      const to = nodes.find(n => n.id === edge.to);
      if (from && to) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }
    });

    // Draw nodes
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 28, 0, 2 * Math.PI);
      ctx.fillStyle = "#2563eb";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x, node.y);
    });
  }, [nodes, edges]);

  // Node click handler
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (const node of nodes) {
      const dx = node.x - x;
      const dy = node.y - y;
      if (dx * dx + dy * dy < 28 * 28) {
        onNodeClick?.(node.id);
        break;
      }
    }
  };

  // Drag and drop node logic
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (const node of nodes) {
      const dx = node.x - x;
      const dy = node.y - y;
      if (dx * dx + dy * dy < 28 * 28) {
        setDraggedNode(node.id);
        setOffset({ x: dx, y: dy });
        return;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!draggedNode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const updatedNodes = nodes.map(n => n.id === draggedNode ? { ...n, x: x + offset.x, y: y + offset.y } : n);
    onNodesChange?.(updatedNodes);
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  // Edge creation logic
  const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (const node of nodes) {
      const dx = node.x - x;
      const dy = node.y - y;
      if (dx * dx + dy * dy < 28 * 28) {
        if (edgeStart) {
          if (edgeStart !== node.id) {
            onEdgesChange?.([...edges, { from: edgeStart, to: node.id }]);
          }
          setEdgeStart(null);
        } else {
          setEdgeStart(node.id);
        }
        return;
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="rounded-lg border shadow-lg bg-gray-100 dark:bg-gray-800 cursor-pointer"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDoubleClick={handleDoubleClick}
      />
      <div className="text-xs text-gray-500 mt-2">Drag nodes to move. Double-click nodes to create edges.</div>
    </div>
  );
};

export default CaseMapCanvas;
