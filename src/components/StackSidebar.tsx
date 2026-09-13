import React from 'react';
import { X, Trash2, Layers } from 'lucide-react';
import type { Technology } from '../types/technology';

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const StackSidebar: React.FC<StackSidebarProps> = ({ stack, onRemove, onClearAll }) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sticky top-24 shadow-sm">
      <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onClearAll}
            className="btn btn-ghost btn-xs text-rose-600 hover:bg-rose-50 flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-12 px-4 border-2 border-dashed border-slate-300 rounded-lg">
          <Layers className="w-10 h-10 mx-auto text-slate-400 mb-2" />
          <p className="font-semibold text-slate-700">Your stack is currently empty</p>
          <p className="text-xs text-slate-500 mt-1">
            Click "Add to Stack" on any card to assemble your tech stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-500px overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
                  }}
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                  <span className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                    {item.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="btn btn-ghost btn-circle btn-xs text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                aria-label="Remove item"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};