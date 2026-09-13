import React from 'react';
import { Layers } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-6 mt-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-gradient rounded-xl text-white">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-brand-gradient">DevStack</span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Discover and organize modern web development technologies to craft high-performing application stacks.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-xs text-slate-600 hover:text-amber-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-xs text-slate-600 hover:text-amber-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-xs text-slate-600 hover:text-amber-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-900">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#home" className="hover:text-amber-600">Overview</a></li>
              <li><a href="#technologies" className="hover:text-amber-600">Technologies</a></li>
              <li><a href="#projects" className="hover:text-amber-600">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-amber-600">About Us</a></li>
              <li><a href="#careers" className="hover:text-amber-600">Careers</a></li>
              <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-900">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#privacy" className="hover:text-amber-600">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-amber-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};