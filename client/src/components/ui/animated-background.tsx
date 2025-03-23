import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    
    const container = starsRef.current;
    
    // Only create 50 stars to reduce performance impact
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      // Slightly larger stars for better visibility
      const size = Math.random() * 4 + 1.5; // Random size between 1.5-5.5px
      
      // Set star properties
      star.className = 'star';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Longer animation duration for smoother effect
      const duration = 4 + Math.random() * 5;
      star.style.setProperty('--duration', `${duration}s`);
      
      // Higher minimum opacity for better visibility
      const opacity = 0.5 + Math.random() * 0.5;
      star.style.setProperty('--opacity', `${opacity}`);
      
      // Random delay so stars don't all twinkle at once
      star.style.animationDelay = `${Math.random() * duration}s`;
      
      // Add to container
      container.appendChild(star);
    }
    
    // Cleanup function
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="animated-bg">
      <div className="animated-bg-gradient"></div>
      <div ref={starsRef} className="stars"></div>
    </div>
  );
}