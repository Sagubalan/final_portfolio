import React, { useEffect, useRef } from 'react';
import './MouseGlitter.css';

const MouseGlitter = () => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      createGlitterStar(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createGlitterStar = (x, y) => {
    if (!containerRef.current) return;

    // Create star element
    const star = document.createElement('div');
    star.className = 'glitter-star';
    
    // Random size between 4px and 8px
    const size = Math.random() * 4 + 4;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // Random offset from cursor
    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;
    
    star.style.left = (x + offsetX) + 'px';
    star.style.top = (y + offsetY) + 'px';

    // Random rotation
    star.style.transform = `rotate(${Math.random() * 360}deg)`;

    containerRef.current.appendChild(star);

    // Remove star after animation
    setTimeout(() => {
      star.remove();
    }, 1000);
  };

  return <div ref={containerRef} className="glitter-container"></div>;
};

export default MouseGlitter;
