import React, { useEffect, useRef } from 'react';
import { Palette, Gauge, Search, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Palette className="h-8 w-8 text-indigo-600" />,
    title: 'Design Personnalisé',
    description: 'Des designs uniques qui reflètent votre identité et captent l\'attention de vos visiteurs.'
  },
  {
    icon: <Gauge className="h-8 w-8 text-indigo-600" />,
    title: 'Performance Optimale',
    description: 'Sites web rapides et réactifs pour une expérience utilisateur exceptionnelle.'
  },
  {
    icon: <Search className="h-8 w-8 text-indigo-600" />,
    title: 'SEO Intégré',
    description: 'Optimisation pour les moteurs de recherche dès la conception pour une meilleure visibilité.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
    title: 'Sécurité Maximale',
    description: 'Protection avancée de vos données et de celles de vos clients.'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter(Boolean);

    // Animation d'entrée des cartes avec effet 3D
    cards.forEach((card, index) => {
      gsap.set(card, {
        rotationY: -90,
        opacity: 0,
        transformPerspective: 1000
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        onEnter: () => {
          gsap.to(card, {
            rotationY: 0,
            opacity: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out"
          });
        }
      });
    });

    // Animation continue des cartes au survol
    cards.forEach(card => {
      card?.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card?.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.in"
        });
      });
    });
  }, []);

  return (
    <div ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour votre présence en ligne
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="p-8 rounded-lg bg-white transform-gpu"
              style={{
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-100 rounded-full transform -rotate-6 scale-110" />
                <div className="relative">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}