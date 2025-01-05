import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">Fouinard</span>
            </div>
            <p className="text-gray-400">
              Créateur de sites web professionnels pour entrepreneurs ambitieux.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Design Personnalisé</li>
              <li>Développement Web</li>
              <li>SEO</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-gray-400">
              <li>À propos</li>
              <li>Blog</li>
              <li>Carrières</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>CGV</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Fouinard. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}