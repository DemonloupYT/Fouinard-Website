import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.set(image, { scale: 1.3 });

    gsap.to(image, {
      y: '30%',
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img ref={imageRef} src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}