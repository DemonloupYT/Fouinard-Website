import React from 'react';
import { MessageSquare, Pencil, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: 'Consultation',
    description: 'Discussion approfondie de vos besoins et objectifs'
  },
  {
    icon: <Pencil className="h-8 w-8 text-white" />,
    title: 'Design',
    description: 'Création de maquettes personnalisées'
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: 'Développement',
    description: 'Codage et intégration des fonctionnalités'
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: 'Lancement',
    description: 'Mise en ligne et support continu'
  }
];

export default function Process() {
  return (
    <div id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une approche structurée pour des résultats exceptionnels
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="bg-indigo-600 rounded-full p-4 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}