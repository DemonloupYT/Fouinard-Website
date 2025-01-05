import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prêt à lancer votre projet ? Nous sommes là pour vous accompagner
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">contact@fouinard.fr</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                <p className="text-gray-600">123 Avenue des Entrepreneurs<br />75001 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}