import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-white border-b border-slate-100 px-4 shadow-sm">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm text-orange-500 hover:bg-orange-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border border-slate-100 font-medium text-slate-700">
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-start hidden lg:flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-purple-600 shadow-md">
          <span className="absolute font-bold text-white text-sm tracking-wider drop-shadow">DS</span>
        </div>
        <span className="text-xl font-bold tracking-tight">
          <span className="text-orange-500">Dev</span>
          <span className="text-pink-500">Stack</span>
        </span>
      </div>

      <div className="navbar-center lg:hidden flex items-center gap-2">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-purple-600 shadow-sm shrink-0">
          <span className="absolute font-bold text-white text-xs tracking-wider">DS</span>
        </div>
        <span className="text-lg font-bold tracking-tight">
          <span className="text-orange-500">Dev</span>
          <span className="text-pink-500">Stack</span>
        </span>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-slate-700">
          <li><a href="#home">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-sm font-semibold hidden sm:flex">Sign In</button>
        <button className="btn btn-sm bg-gradient-to-r from-orange-500 to-purple-600 text-white border-none shadow-md hover:opacity-90">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;