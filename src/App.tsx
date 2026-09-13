import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { TechCard } from './components/TechCard';
import { StackSidebar } from './components/StackSidebar';
import { Footer } from './components/Footer';
import type { Technology } from './types/technology';

export const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
  const fetchTechnologies = async () => {
    try {
      const res = await fetch('/technologies.json');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data: Technology[] = await res.json();
      setTechnologies(data);
    } 
    catch (err) {
      console.error('Data fetching error:', err);
      toast.error('Could not load technologies data');
    } 
    finally {
      setLoading(false);
    }
  };

  fetchTechnologies();
}, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack`);
    }
  };

  const handleClearAll = () => {
    setStack([]);
    toast.error('Cleared all items from stack');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <ToastContainer position="bottom-right" theme="light" />
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow bg-white">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Explore Technologies</h2>
          <p className="text-slate-600">Select technologies to build your ideal tech stack.</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm text-slate-500">Fetching technology stack data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;