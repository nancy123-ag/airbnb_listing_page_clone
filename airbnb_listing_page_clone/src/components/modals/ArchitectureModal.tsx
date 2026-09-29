import React from 'react';
import { X, Download } from 'lucide-react';

interface ArchitectureModalProps {
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Architecture diagram"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#222222] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-5 md:p-7 space-y-5 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-4 border-b border-gray-200 pb-4">
          <div>
            <h3 className="font-bold text-xl md:text-2xl text-[#222222]">
              Architecture diagram
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Production vacation-rental marketplace — frontend, backend, search, storage, deployment
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <img
            src="/architecture_diagram.svg"
            alt="Production vacation-rental marketplace architecture"
            className="w-full h-auto block"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-gray-200 text-sm text-gray-500">
          <span>
            File: <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">public/architecture_diagram.svg</code>
            {' · '}
            Details in <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">ARCHITECTURE.md</code>
          </span>
          <a
            href="/architecture_diagram.svg"
            download="architecture_diagram.svg"
            className="inline-flex items-center gap-2 bg-[#FF385C] hover:bg-[#E61E4D] text-white font-bold py-2.5 px-4 rounded-xl transition"
          >
            <Download size={14} /> Download SVG
          </a>
        </div>
      </div>
    </div>
  );
};
