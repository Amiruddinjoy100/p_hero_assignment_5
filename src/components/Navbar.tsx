import React from 'react';
import { Layers, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-gradient rounded-xl text-white">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-brand-gradient">DevStack</span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-700">
            <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-amber-600 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-amber-600 transition-colors">Projects</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn btn-ghost btn-sm text-slate-700 hover:bg-slate-100">Sign In</button>
            <button className="btn btn-sm border-none bg-brand-gradient text-white rounded-full px-5 hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>

{/* MObile Nav er shuru*/}
        <div className="flex md:hidden items-center justify-between h-16">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-700">
              <Menu className="w-6 h-6" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-white border border-slate-200 rounded-box w-52 text-slate-800">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-brand-gradient rounded-lg text-white">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-brand-gradient">DevStack</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-xs text-slate-700">Sign In</button>
            <button className="btn btn-xs border-none bg-brand-gradient text-white rounded-full px-3">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};