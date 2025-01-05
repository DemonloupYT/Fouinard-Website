import React from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Fouinard</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#process" className="text-gray-600 hover:text-indigo-600">Processus</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Démarrer un projet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}