import React, { useRef } from "react";

interface EvidenceUploadProps {
  onUpload: (files: File[]) => void;
  label?: string;
}

const EvidenceUpload: React.FC<EvidenceUploadProps> = ({ onUpload, label }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        multiple
        ref={fileInput}
        className="hidden"
        onChange={e => {
          if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            onUpload(filesArray);
          }
        }}
      />
      <button
        type="button"
        className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow"
        onClick={() => fileInput.current?.click()}
      >
        {label || "Upload Evidence"}
      </button>
    </div>
  );
};

export default EvidenceUpload;
