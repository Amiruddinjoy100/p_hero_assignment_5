import React from 'react';
import bannerStackImg from '../assets/banner-stack.png';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Build Your Ultimate <br />
            <span className="text-brand-gradient">Developer Stack</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Discover, evaluate, and assemble top-tier technologies for your next web development project. Simplify your architecture workflow with DevStack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#technologies" className="btn border-none bg-brand-gradient text-white px-8 hover:opacity-90">
              Explore Technologies
            </a>
            <button className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100 px-8">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerStackImg}
            alt="DevStack Architecture Banner"
            className="object-contain w-full h-72 md:h-96"
          />
        </div>
      </div>
    </div>
  );
};