import React from 'react';
import { Star, Check } from 'lucide-react';
import type { Technology } from '../types/technology';

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, isAdded, onAdd }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg p-2 flex items-center justify-center shadow-xs">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
              }}
            />
          </div>
          <span className="badge bg-brand-gradient text-white border-none font-medium px-2.5 py-1">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">{tech.name}</h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">{tech.description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between gap-2 mb-4 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-800 font-medium">{tech.category}</span>
          <span className="text-slate-600 font-medium">{tech.difficulty}</span>
          <div className="flex items-center text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-current mr-1" />
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full btn btn-sm border-none ${
            isAdded
              ? 'bg-emerald-100 text-emerald-800 cursor-not-allowed font-semibold'
              : 'bg-brand-gradient text-white hover:opacity-90'
          }`}
        >
          {isAdded ? (
            <span className="flex items-center justify-center gap-1">
              <Check className="w-4 h-4" /> Added to Stack
            </span>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};