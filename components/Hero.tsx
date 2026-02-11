import React, { useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
    title?: string;
    subtitle?: string;
    image?: string;
}

const Hero: React.FC<HeroProps> = ({ 
    title = "Redefining Essentials", 
    subtitle = "Global Supply Chain", 
    image = "https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=1200" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    // Smoother, subtle rotation
    setRotation({ x: y * 5, y: -x * 5 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section 
        className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#F9F9F7]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
    >
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F0F0EB] -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-200 rounded-full blur-[150px] opacity-20 -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Typography */}
        <div className="order-2 lg:order-1 z-10">
          <div className="overflow-hidden mb-6">
             <div className="flex items-center gap-4 animate-slide-up">
                <div className="h-px w-12 bg-brand-900"></div>
                <span className="text-xs font-bold tracking-[0.3em] text-brand-900 uppercase">{subtitle}</span>
             </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-brand-900 leading-[0.9] mb-8 mix-blend-darken">
            {title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-4 hover:italic transition-all duration-300 cursor-default">{word}</span>
            ))}
          </h1>
          
          <div className="flex gap-8 items-center">
            <button className="bg-brand-900 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brand-800 transition-all duration-300">
              Explore
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-500 animate-bounce">
               Scroll <ArrowDown size={14}/>
            </div>
          </div>
        </div>

        {/* 3D Visual */}
        <div className="order-1 lg:order-2 flex justify-center items-center perspective-1000">
          <div 
            className="relative w-full max-w-lg aspect-[4/5] transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(0)`,
              transformStyle: 'preserve-3d'
            }}
          >
             {/* Floating Elements mimicking 3D */}
             <div 
                className="absolute inset-4 bg-white shadow-2xl opacity-40 border border-brand-100"
                style={{ transform: 'translateZ(-40px)' }} 
             />
             <img 
               src={image} 
               alt="Hero Visual"
               className="absolute inset-0 w-full h-full object-cover shadow-xl"
               style={{ transform: 'translateZ(0px)' }}
             />
             
             {/* Overlay Text Element */}
             <div 
               className="absolute bottom-10 -left-10 bg-white p-6 shadow-xl max-w-xs border border-brand-100 hidden md:block"
               style={{ transform: 'translateZ(40px)' }}
             >
                <p className="font-serif text-2xl text-brand-900 italic">"The invisible art of hospitality."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;