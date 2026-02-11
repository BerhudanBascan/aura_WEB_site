import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        // Direct transform for performance
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Animated follow for elegance
        followerRef.current.animate({
          transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        }, { duration: 500, fill: 'forwards' });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="hidden md:block cursor-dot fixed top-0 left-0 w-2 h-2 bg-brand-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={followerRef} className="hidden md:block cursor-follower fixed top-0 left-0 w-12 h-12 border border-brand-900/30 rounded-full pointer-events-none z-[9998] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-darken" />
    </>
  );
};

export default CustomCursor;