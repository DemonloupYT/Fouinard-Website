import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation initiale
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out"
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power4.out"
      });

      // Animation du fond au scroll
      gsap.to(".gradient-bg", {
        backgroundPosition: "400% 400%",
        duration: 15,
        repeat: -1,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 gradient-bg bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-gradient" />
      
      {/* Grille de points */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={titleRef} className="text-7xl font-bold text-white mb-8 leading-tight">
          Créons ensemble votre<br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            présence numérique
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Des sites web innovants qui transcendent les standards du web et propulsent 
          votre entreprise vers l'excellence digitale.
        </p>

        <div ref={ctaRef} className="flex justify-center space-x-6">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10 font-medium">
              Démarrer un projet
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">
            Découvrir nos services
          </button>
        </div>
      </div>

      {/* Effet de vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}