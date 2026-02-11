import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Circle, Microscope, ChevronRight, ChevronLeft, Droplets, Leaf, Fingerprint, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

// --- SECTION 1: ULTIMATE HERO SLIDER (FIXED) ---
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0); // Forces re-render for progress bar
  const DURATION = 6000;
  
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000',
      subtitle: 'Zurich — Est. 2024',
      titleLine1: 'The Art of',
      titleLine2: 'Arrival',
      desc: 'Engineering the subconscious perception of luxury through tactile amenity design.',
      cta: 'View Collection',
      alt: 'Luxury hotel lobby with warm ambient lighting'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000',
      subtitle: 'Material Science',
      titleLine1: 'Absolute',
      titleLine2: 'Silence',
      desc: 'Textiles woven to absorb sound and soften light. A sanctuary in every detail.',
      cta: 'Our Methodology',
      alt: 'Five-star hotel exterior at twilight'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000',
      subtitle: 'Sustainable Future',
      titleLine1: 'Zero',
      titleLine2: 'Compromise',
      desc: 'The world’s first 100% biodegradable luxury amenity line. No plastic. All performance.',
      cta: 'Eco Roadmap',
      alt: 'Premium hotel suite with modern furnishings'
    }
  ];

  // Robust Auto-Play Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setKey(prev => prev + 1); // Reset progress animation
    }, DURATION);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setKey(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setKey(prev => prev + 1);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a1a15] text-[#F9F9F7]">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image with Cinematic Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
               <img 
                 src={slide.image} 
                 className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`}
                 alt={slide.alt}
               />
               <div className="absolute inset-0 bg-black/30"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
               
               {/* Subtitle */}
               <div className="overflow-hidden mb-4">
                  <div className={`flex items-center gap-4 transition-transform duration-1000 delay-300 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    <span className="h-px w-8 bg-brand-200"></span>
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-200">
                      {slide.subtitle}
                    </span>
                  </div>
               </div>
               
               {/* Main Title */}
               <div className="relative z-20">
                  <div className="overflow-hidden">
                     <h1 className={`font-serif text-7xl md:text-9xl leading-[0.85] text-white mix-blend-overlay transition-transform duration-[1200ms] ease-out delay-300 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                       {slide.titleLine1}
                     </h1>
                  </div>
                  <div className="overflow-hidden">
                     <span className={`block font-serif text-7xl md:text-9xl leading-[0.85] text-white transition-transform duration-[1200ms] ease-out delay-500 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                       <span className="italic font-light mr-4"> — </span>{slide.titleLine2}
                     </span>
                  </div>
               </div>

               {/* Description & CTA */}
               <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
                  <div className="overflow-hidden max-w-md">
                     <p className={`text-lg text-white/80 font-light leading-relaxed transition-transform duration-1000 delay-700 ${isActive ? 'translate-y-0' : 'translate-y-[150%]'}`}>
                       {slide.desc}
                     </p>
                  </div>
                  
                  <div className={`transition-opacity duration-1000 delay-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <Link to="/products" className="group flex items-center gap-4 text-white hover:text-brand-200 transition-colors">
                          <div className="relative w-14 h-14 rounded-full border border-white/30 flex items-center justify-center overflow-hidden">
                              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                              <ArrowRight size={18} className="relative z-10 group-hover:text-brand-900 transition-colors" />
                          </div>
                          <span className="text-xs uppercase tracking-[0.2em]">{slide.cta}</span>
                      </Link>
                  </div>
               </div>
            </div>
          </div>
        );
      })}

      {/* Modern Pagination / Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center gap-12">
         {/* Slide Counter */}
         <div className="text-white font-mono text-sm">
            <span className="text-2xl">{currentSlide + 1}</span>
            <span className="mx-2 opacity-50">/</span>
            <span className="opacity-50">{slides.length}</span>
         </div>

         {/* Navigation Buttons */}
         <div className="flex gap-2">
            <button 
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
            >
                <ChevronLeft size={16} />
            </button>
            <button 
                onClick={handleNext}
                aria-label="Next slide"
                className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
            >
                <ChevronRight size={16} />
            </button>
         </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
         <div 
            key={key} 
            className="h-full bg-white origin-left"
            style={{ 
                animation: `progress ${DURATION}ms linear`
            }}
         ></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce">
         <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
         <ArrowDown size={14} className="text-white"/>
      </div>
      
      <style>{`
        @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

// --- SECTION 2: LUXURY TICKER ---
const TrustTicker = () => {
  const partners = [
    "Four Seasons", "Ritz Carlton", "Six Senses", "Aman", "Mandarin Oriental", 
    "Rosewood", "St. Regis", "Park Hyatt", "One&Only", "Belmond"
  ];
  
  return (
    <div className="bg-[#F9F9F7] py-20 border-b border-brand-900/5 relative overflow-hidden flex items-center">
       
       {/* Label */}
       <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-32 bg-[#F9F9F7] z-20 items-center justify-center border-r border-brand-900/5 shadow-[5px_0_20px_rgba(0,0,0,0.02)]">
          <span className="text-[10px] uppercase tracking-[0.3em] -rotate-90 text-brand-400 whitespace-nowrap">
             Curated Clients
          </span>
       </div>

       {/* Gradient Masks */}
       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F9F7] to-transparent z-10 pointer-events-none"></div>
       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F9F7] to-transparent z-10 pointer-events-none"></div>
       
       {/* Marquee Content */}
       <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] items-center">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
             <div key={i} className="mx-16 group cursor-default">
               <span className="font-serif text-3xl md:text-5xl text-brand-900/20 group-hover:text-brand-900 transition-colors duration-500 ease-out">
                 {partner}
               </span>
               <div className="h-px w-0 bg-brand-900 mt-2 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
             </div>
          ))}
       </div>
    </div>
  );
}

// --- SECTION 3: MANIFESTO ---
const Manifesto = () => (
    <section className="bg-[#F9F9F7] py-32 md:py-48 px-6 md:px-20 relative border-t border-brand-900/5">
         <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/4 sticky top-32">
                    <span className="text-brand-400 text-xs uppercase tracking-[0.4em] block mb-2 flex items-center gap-2">
                        <Circle size={8} className="fill-brand-400" /> The Manifesto
                    </span>
                    <div className="w-12 h-px bg-brand-900/20 mt-4"></div>
                </div>
                <div className="md:w-3/4">
                    <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-brand-900 indent-24">
                    We do not just sell products. We engineer 
                    <span className="italic text-brand-600 px-2 font-light">sensory experiences</span>. 
                    We design the tactile moments that tell a guest they have arrived. 
                    From the weight of the cotton to the viscosity of the emulsion. 
                    AURA is the <span className="underline decoration-1 underline-offset-8 decoration-brand-300">invisible art</span> of hospitality.
                    </p>
                </div>
            </div>
         </div>
      </section>
);

// --- SECTION 4: THE COLLECTION (HORIZONTAL SCROLL) ---
const HorizontalScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const start = containerTop;
      const end = containerTop + containerHeight - windowHeight;
      
      if (scrollY > start && scrollY < end) {
        const percentage = (scrollY - start) / (end - start);
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const moveAmount = (trackWidth - viewportWidth) * percentage;
        trackRef.current.style.transform = `translate3d(-${moveAmount}px, 0, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collection = [
    { id: '01', cat: 'Footwear', title: 'Velvet Noir', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800', desc: '400GSM Memory Foam' },
    { id: '02', cat: 'Textile', title: 'Royal 600', img: 'https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=800', desc: 'Egyptian Cotton Loop' },
    { id: '03', cat: 'Ritual', title: 'White Tea', img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800', desc: 'Botanical Extracts' },
    { id: '04', cat: 'Wellness', title: 'Eco Dental', img: 'https://images.unsplash.com/photo-1629198772922-0d627c2447b1?auto=format&fit=crop&q=80&w=800', desc: 'Wheat Straw Body' },
    { id: '05', cat: 'Liquids', title: 'Argan Gold', img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800', desc: 'Moroccan Oil Blend' }
  ];

  return (
    <div ref={containerRef} className="hidden md:block h-[300vh] relative bg-[#F9F9F7]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
          <span className="text-[20vw] font-serif italic tracking-tighter">Signature Series</span>
        </div>

        <div ref={trackRef} className="flex gap-16 px-20 absolute left-0 h-full items-center pl-[20vw]">
          
          <div className="w-[20vw] shrink-0 mr-12 self-end pb-32">
             <div className="w-12 h-1 bg-brand-900 mb-8"></div>
             <h2 className="text-6xl font-serif text-brand-900 mb-6 leading-none">
                The<br/>Collection.
             </h2>
             <p className="text-brand-600 text-sm leading-relaxed mb-8 max-w-xs">
                A curated selection of artifacts designed to define the guest experience.
             </p>
             <Link to="/products" className="group flex items-center gap-3 text-xs uppercase tracking-widest text-brand-900">
                View Index <div className="w-8 h-px bg-brand-900 group-hover:w-12 transition-all"></div>
             </Link>
          </div>

          {collection.map((item, i) => (
            <div 
              key={i} 
              className="w-[30vw] shrink-0 h-[60vh] relative group cursor-pointer perspective-1000"
            >
              <div className="w-full h-full relative overflow-hidden bg-white/50">
                 {/* Image with Parallax Effect on hover */}
                 <div className="w-full h-full overflow-hidden relative">
                    <img 
                      src={item.img} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-all duration-500"></div>
                 </div>

                 {/* Minimal Floating Metadata */}
                 <div className="absolute -bottom-1 left-0 bg-white px-6 py-4 z-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-500 block mb-1">{item.cat}</span>
                    <span className="text-2xl font-serif text-brand-900 italic">{item.title}</span>
                 </div>
                 
                 <div className="absolute top-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <span className="text-4xl font-serif text-white">{item.id}</span>
                 </div>
              </div>
            </div>
          ))}
          
           <div className="w-[30vw] shrink-0 flex items-center justify-center pl-12 pr-[20vw]">
             <Link to="/products" className="w-48 h-48 rounded-full border border-brand-900 flex flex-col items-center justify-center hover:bg-brand-900 hover:text-white transition-all duration-500 group cursor-pointer hover:scale-110">
                <span className="text-3xl font-serif mb-1 transition-all">Explore</span>
                <span className="text-[10px] uppercase tracking-widest">All Items</span>
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- SECTION 4B: MOBILE PRODUCT STACK ---
const MobileProductSection: React.FC = () => (
  <div className="md:hidden py-24 px-6 bg-[#F9F9F7]">
    <div className="mb-16">
      <h2 className="text-5xl font-serif text-brand-900 mb-4 leading-none">
        Signature <br/> <span className="italic font-light">Series</span>
      </h2>
      <Link to="/products" className="text-xs uppercase tracking-widest border-b border-brand-900 pb-1">View Full Catalog</Link>
    </div>

    <div className="space-y-12">
      {[
          { id: '01', cat: 'Footwear', title: 'Velvet Noir', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
          { id: '02', cat: 'Textile', title: 'Royal 600', img: 'https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=800' },
          { id: '03', cat: 'Ritual', title: 'White Tea', img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800' },
      ].map((item) => (
        <div key={item.id} className="group">
          <div className="aspect-[4/5] overflow-hidden mb-6 relative">
            <img src={item.img} loading="lazy" className="w-full h-full object-cover" alt={item.title} />
            <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest">
              {item.cat}
            </div>
          </div>
          <h3 className="text-3xl font-serif text-brand-900">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

// --- SECTION 5: THE ROYAL WAFFLE (DARK MODE CINEMATIC) ---
const ProductSpotlight = () => (
    <section className="bg-brand-900 text-brand-50 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            
            {/* Left: Sticky Image with Magnify Effect Idea */}
            <div className="relative h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden group">
                 <img src="https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=1200" loading="lazy" className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] ease-linear group-hover:scale-110" alt="Royal waffle weave cotton textile close-up" />
                 <div className="absolute inset-0 bg-black/20"></div>
                 
                 {/* Decorative Overlay */}
                 <div className="absolute bottom-10 left-10 border border-white/20 p-6 backdrop-blur-sm">
                    <div className="text-4xl font-serif mb-1">01.</div>
                    <div className="text-[10px] uppercase tracking-[0.3em]">Royal Waffle Weave</div>
                 </div>
            </div>

            {/* Right: Content Scroll */}
            <div className="flex items-center p-12 lg:p-24 bg-brand-900">
                <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-12 opacity-60">
                        <span className="px-3 py-1 border border-brand-50 text-[10px] uppercase tracking-widest rounded-full">Featured Item</span>
                        <div className="h-px bg-brand-50 flex-grow opacity-30"></div>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.9]">
                        Air. <br/> <span className="italic text-brand-400 font-light">Structure.</span> <br/> Flow.
                    </h2>

                    <p className="text-xl text-brand-200 mb-16 leading-relaxed font-light">
                        The Royal Waffle slipper is not just footwear; it is an engineering feat for high-humidity environments. 
                        Merging the breathability of organic cotton with the structural integrity of a honeycomb lattice.
                    </p>

                    <div className="grid grid-cols-2 gap-12 mb-16 border-t border-white/10 pt-12">
                        <div>
                            <div className="text-4xl font-serif text-white mb-2">40%</div>
                            <div className="text-xs uppercase tracking-widest text-brand-400">Faster Drying</div>
                            <p className="text-xs text-brand-500 mt-2">Vs standard terry cloth</p>
                        </div>
                        <div>
                            <div className="text-4xl font-serif text-white mb-2">ISO</div>
                            <div className="text-xs uppercase tracking-widest text-brand-400">9001 Certified</div>
                            <p className="text-xs text-brand-500 mt-2">Medical grade hygiene</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/contact" className="bg-brand-50 text-brand-900 px-10 py-4 text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-4">
                            Request Sample <ArrowRight size={16}/>
                        </Link>
                        <Link to="/products" className="border border-brand-50/30 text-brand-50 px-10 py-4 text-xs uppercase tracking-widest hover:border-brand-50 transition-all text-center">
                            View Tech Specs
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
);

// --- SECTION 6: MATERIAL SCIENCE (ACCORDION) ---
const MaterialScience = () => {
  const [activePanel, setActivePanel] = useState<number>(0);

  const panels = [
    {
      id: 0,
      icon: <Droplets size={24}/>,
      label: "Hydro-Balance",
      title: "Absorption Dynamics",
      desc: "Our textiles undergo rigorous wicking tests. The result is a weave that absorbs 4x its weight in water while maintaining a cloud-like tactile surface.",
      img: "https://images.unsplash.com/photo-1605218427368-35b80a3dc31d?auto=format&fit=crop&q=80&w=1200",
      alt: "Water droplets on premium textile surface demonstrating absorption"
    },
    {
      id: 1,
      icon: <Leaf size={24}/>,
      label: "Zero-Plastic",
      title: "Biopolymer Research",
      desc: "Eliminating petroleum-based polymers entirely, replacing them with corn-starch PLA and bamboo derivatives for a 100% compostable lifecycle.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      alt: "Sustainable plant-based biopolymer materials in laboratory"
    },
    {
      id: 2,
      icon: <Fingerprint size={24}/>,
      label: "Sensory Lab",
      title: "Tactile Engineering",
      desc: "Calibrating the friction coefficient of slipper soles and the GSM weight of robes to trigger specific psychological responses of comfort and safety.",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
      alt: "Minimalist interior design showcasing tactile material textures"
    }
  ];

  return (
    <section className="py-32 bg-[#F0F0EB] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <span className="text-brand-500 text-xs uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
           <Microscope size={14} /> The AURA Lab
        </span>
        <h2 className="text-5xl md:text-6xl font-serif text-brand-900 leading-[0.9]">
           The Science <br/> of <span className="italic text-brand-600">Comfort.</span>
        </h2>
      </div>

      <div className="w-full h-[600px] flex flex-col md:flex-row border-y border-brand-900/10">
         {panels.map((panel, idx) => (
           <div 
             key={idx}
             onMouseEnter={() => setActivePanel(idx)}
             className={`relative h-[200px] md:h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden group cursor-pointer border-b md:border-b-0 md:border-r border-brand-900/10 ${activePanel === idx ? 'flex-[3]' : 'flex-[1]'}`}
           >
              {/* Background Image */}
              <div className="absolute inset-0">
                 <img src={panel.img} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={panel.alt} />
                 <div className={`absolute inset-0 bg-brand-900/60 transition-opacity duration-700 ${activePanel === idx ? 'opacity-40' : 'opacity-80'}`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between text-white">
                 <div className="flex justify-between items-start">
                    <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full uppercase tracking-widest">{panel.label}</span>
                    <div className={`transition-opacity duration-500 ${activePanel === idx ? 'opacity-100' : 'opacity-50'}`}>
                       {panel.icon}
                    </div>
                 </div>

                 <div className={`transform transition-all duration-500 origin-bottom-left ${activePanel === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-50 md:opacity-0'}`}>
                    <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">{panel.title}</h3>
                    <p className={`text-sm md:text-base text-brand-100 max-w-md leading-relaxed ${activePanel === idx ? 'block' : 'hidden md:block'}`}>
                       {panel.desc}
                    </p>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </section>
  );
};

// --- SECTION 8: JOURNAL (REVERSE HORIZONTAL SCROLL) ---
const JournalScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const start = containerTop;
      const end = containerTop + containerHeight - windowHeight;
      
      if (scrollY > start && scrollY < end) {
        const percentage = (scrollY - start) / (end - start);
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        // Reverse direction: Content slides RIGHT (revealing Left items)
        // We start visually at the "Right" end of the content (Title) and scroll to the "Left"
        const moveAmount = (trackWidth - viewportWidth);
        const x = -(moveAmount) + (moveAmount * percentage);
        
        trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
      } else if (scrollY <= start) {
         // Reset to start position (show right side/title)
         if (trackRef.current) {
            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const moveAmount = (trackWidth - viewportWidth);
            trackRef.current.style.transform = `translate3d(-${moveAmount}px, 0, 0)`;
         }
      } else if (scrollY >= end) {
         // Stick to end position (show left side)
         trackRef.current.style.transform = `translate3d(0, 0, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const docs = [
    { title: "The Tactile Economy", cat: "Trends", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800", date: "Oct 12" },
    { title: "Scent Architecture", cat: "Design", img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800", date: "Sep 28" },
    { title: "Zero Waste 2030", cat: "Future", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", date: "Aug 15" },
    { title: "Bioplastic Reality", cat: "Science", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", date: "Jul 22" },
  ];

  return (
    <div ref={containerRef} className="hidden md:block h-[300vh] relative bg-[#F9F9F7]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
           <span className="text-[20vw] font-serif italic tracking-tighter">The Journal</span>
        </div>

        {/* Track Container - Items ordered from Left to Right, but we view Right to Left */}
        <div ref={trackRef} className="flex gap-16 px-20 absolute left-0 h-full items-center">
            
            {/* View All Button (Far Left) */}
            <div className="w-[30vw] shrink-0 flex items-center justify-center pl-[10vw]">
                <Link to="/blog" className="w-48 h-48 rounded-full border border-brand-900 flex flex-col items-center justify-center hover:bg-brand-900 hover:text-white transition-all duration-500 group cursor-pointer hover:scale-110">
                    <span className="text-3xl font-serif mb-1 transition-all">Read</span>
                    <span className="text-[10px] uppercase tracking-widest">All Articles</span>
                </Link>
            </div>

            {/* Journal Items */}
            {docs.map((doc, i) => (
                <div key={i} className="w-[35vw] shrink-0 h-[65vh] group relative perspective-1000">
                     <div className="w-full h-full relative overflow-hidden bg-white/50">
                        <img 
                            src={doc.img} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                            alt={doc.title}
                        />
                        <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-all duration-500"></div>

                         <div className="absolute bottom-0 left-0 w-full p-8 bg-white/90 backdrop-blur-sm z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] uppercase tracking-widest text-brand-500">{doc.cat}</span>
                                <span className="text-[10px] uppercase tracking-widest text-brand-400">{doc.date}</span>
                            </div>
                            <h3 className="text-3xl font-serif text-brand-900">{doc.title}</h3>
                         </div>
                     </div>
                </div>
            ))}

            {/* Title Block (Far Right - Start Here) */}
             <div className="w-[30vw] shrink-0 ml-12 self-start pt-32 pr-[15vw] text-right">
                <div className="w-12 h-1 bg-brand-900 mb-8 ml-auto"></div>
                <h2 className="text-6xl font-serif text-brand-900 mb-6 leading-none">
                    Journal <br/> <span className="italic font-light">Notes</span>
                </h2>
                <p className="text-brand-600 text-sm leading-relaxed mb-8 max-w-xs ml-auto">
                    Deep dives into material science, sustainability trends, and the psychology of comfort.
                </p>
                <div className="flex justify-end gap-2 text-brand-400 text-xs uppercase tracking-widest">
                   <ChevronLeft size={16} /> Scroll to Explore
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

// --- SECTION 9: FOOTER CTA ---
const FooterCTA = () => (
    <section className="h-[70vh] bg-white text-brand-900 flex items-center justify-center relative overflow-hidden">
         {/* Subtle Background */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0EB] to-white"></div>
         
         <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.4em] mb-8 text-brand-400">The Future of Hospitality</span>
            
            <Link to="/contact" className="group relative block w-full text-center">
               <span className="block text-[12vw] font-serif leading-[0.8] tracking-tight text-brand-900 group-hover:opacity-60 transition-opacity duration-700">
                  Connect
               </span>
               <div className="h-px bg-brand-900/20 w-0 group-hover:w-full transition-all duration-1000 ease-in-out mx-auto mt-8"></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                   <div className="bg-brand-900 text-white px-8 py-3 text-xs uppercase tracking-widest rounded-full">
                       Start Project
                   </div>
               </div>
            </Link>
         </div>
      </section>
);

// --- MAIN HOME COMPONENT ---
const Home: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AURA Supply Co.',
    url: 'https://aura-supply.com',
    logo: 'https://aura-supply.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-44-500-2020',
      contactType: 'sales',
      areaServed: ['EU', 'ME', 'US'],
    },
    sameAs: [],
  };

  return (
    <>
      <SEOHead
        title="Premium Hospitality Supplies"
        description="AURA engineers tactile amenities for 5-star hotels, clinics, and spas across Europe and the Middle East."
        path="/"
        jsonLd={organizationSchema}
      />
      <HeroSlider />
      
      <TrustTicker />
      
      <Manifesto />
      
      <HorizontalScrollSection />
      <MobileProductSection />
      
      <ProductSpotlight />
      
      <MaterialScience />
      
      <JournalScrollSection />
      
      <FooterCTA />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;