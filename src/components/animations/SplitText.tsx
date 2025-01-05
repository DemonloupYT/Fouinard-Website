import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplitTextProps {
  children: string;
  className?: string;
}

export default function SplitText({ children, className = '' }: SplitTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.innerText.split('');
    textRef.current.innerHTML = '';
    
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.textContent = char === ' ' ? '\u00A0' : char;
      textRef.current?.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      }
    });
  }, [children]);

  return <div ref={textRef} className={className}>{children}</div>;
}