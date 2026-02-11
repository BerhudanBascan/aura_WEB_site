import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Stethoscope, 
  Sparkles, 
  Plane, 
  ArrowUpRight, 
  ShieldCheck, 
  Download
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Data for industries
const SECTORS = [
  {
    id: 'hospitality',
    label: 'Hospitality',
    title: 'The Art of Arrival',
    subtitle: '5-Star Hotels & Resorts',
    desc: 'In the ultra-luxury segment, the guest experience is defined by the subconscious. We engineer textiles and amenities that signal quality through touch, scent, and sight, elevating the perceived value of every room night.',
    stats: [
      { label: 'Client Retention', val: '+15%' },
      { label: 'Linen Lifespan', val: '200 Wash Cycles' },
    ],
    features: ['Bespoke Scent Architecture', '600GSM+ Low-Lint Textiles', 'Plastic-Free Turndown'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000',
    icon: <Building2 size={24} />
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Clinical Precision',
    subtitle: 'Hospitals & Private Clinics',
    desc: 'Reliability is non-negotiable. We deliver sterile, high-volume solutions that meet ISO 13485 compliance. Our "Patient-First" design philosophy brings hotel-grade comfort to clinical environments, proven to improve patient recovery satisfaction.',
    stats: [
      { label: 'Sterility Grade', val: 'ISO 13485' },
      { label: 'Supply Speed', val: '24hr JIT' },
    ],
    features: ['Gamma Irradiation Protocols', 'Hypoallergenic Materials', 'Dignity-Preserving Gowns'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
    icon: <Stethoscope size={24} />
  },
  {
    id: 'wellness',
    label: 'Wellness',
    title: 'Holistic Harmony',
    subtitle: 'Spas & Retreats',
    desc: 'Synthetic materials break the trance of relaxation. Our spa collection utilizes raw organic cotton, bamboo fibers, and botanical extracts to maintain the integrity of the wellness journey from treatment room to relaxation lounge.',
    stats: [
      { label: 'Organic Material', val: '100%' },
      { label: 'Microplastics', val: '0%' },
    ],
    features: ['Waffle-Weave Technology', 'Biodegradable Slippers', 'Essential Oil Blends'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000',
    icon: <Sparkles size={24} />
  },
  {
    id: 'aviation',
    label: 'Aviation',
    title: 'Altitude & Space',
    subtitle: 'First Class & Private Jets',
    desc: 'Where weight and space are premium currencies. We design hyper-compact, lightweight amenity kits and textiles that deliver maximum luxury with minimum footprint, optimized for galley storage and aircraft weight limits.',
    stats: [
      { label: 'Weight Redux', val: '-30%' },
      { label: 'Space Saver', val: 'Compact Fold' },
    ],
    features: ['Ultralight Merino Wool', 'Waterless Toiletries', 'Noise-Canceling Textiles'],
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2000',
    icon: <Plane size={24} />
  }
];

const Industries: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hospitality');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset
      
      SECTORS.forEach(sector => {
        const element = document.getElementById(sector.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(sector.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 140, // Adjust for sticky header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#F9F9F7] min-h-screen">
       <SEOHead
         title="Industry Sectors — Hospitality, Healthcare, Wellness, Aviation"
         description="Tailored supply chain solutions for hotels, hospitals, spas, and aviation. ISO certified, globally delivered."
         path="/industries"
         jsonLd={{
           '@context': 'https://schema.org',
           '@type': 'BreadcrumbList',
           itemListElement: [
             { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aura-supply.com/' },
             { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://aura-supply.com/industries' },
           ],
         }}
       />
       
       {/* --- CINEMATIC HEADER --- */}
      <div className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 bg-white border-b border-brand-900/5">
        <div className="container mx-auto max-w-[1920px]">
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400 mb-8 font-mono">
              <Link to="/" className="hover:text-brand-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-900">Sectors</span>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                 <h1 className="text-6xl md:text-9xl font-serif text-brand-900 leading-[0.85] tracking-tight">
                    Critical <br/> <span className="italic text-brand-600 font-light">Environments</span>
                 </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full">
                 <p className="text-brand-600 text-sm md:text-base font-light leading-relaxed max-w-sm text-left lg:text-right mb-8 lg:mb-0">
                    We configure our supply chain to meet the distinct and demanding KPIs of specialized global industries.
                 </p>
                 
                 <div className="flex items-center gap-8 border-t border-brand-900/10 pt-6 w-full lg:justify-end">
                    <div className="text-right">
                       <span className="block text-3xl font-serif text-brand-900 leading-none">04</span>
                       <span className="text-[9px] uppercase tracking-widest text-brand-400">Key Sectors</span>
                    </div>
                    <div className="w-px h-8 bg-brand-900/10"></div>
                    <div className="text-right">
                       <span className="block text-3xl font-serif text-brand-900 leading-none">50+</span>
                       <span className="text-[9px] uppercase tracking-widest text-brand-400">Countries</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- STICKY NAV --- */}
      <div className="sticky top-20 md:top-24 z-40 bg-[#F9F9F7]/90 backdrop-blur-md border-b border-brand-900/5 px-6">
         <div className="container mx-auto max-w-[1920px] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-8 md:gap-12 min-w-max">
               {SECTORS.map((sector) => (
                  <button
                     key={sector.id}
                     onClick={() => scrollToSection(sector.id)}
                     className={`py-6 text-xs uppercase tracking-[0.2em] transition-all relative ${
                        activeSection === sector.id ? 'text-brand-900 font-bold' : 'text-brand-400 hover:text-brand-600'
                     }`}
                  >
                     {sector.label}
                     {activeSection === sector.id && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-900"></span>
                     )}
                  </button>
               ))}
               <div className="flex-grow"></div>
               <button className="hidden md:flex items-center gap-2 py-6 text-[10px] uppercase tracking-widest text-brand-900 hover:text-brand-500 transition-colors" aria-label="Download capabilities deck">
                  <Download size={14}/> Capabilities Deck
               </button>
            </div>
         </div>
      </div>

      {/* --- SECTOR SECTIONS --- */}
      <div className="container mx-auto px-6 max-w-[1920px]">
         
         {SECTORS.map((sector, index) => (
            <section 
               key={sector.id} 
               id={sector.id} 
               className="py-24 md:py-32 border-b border-brand-900/5 last:border-0 min-h-[80vh] flex items-center"
            >
               <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Text Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                     <div className="flex items-center gap-4 mb-8">
                        <span className="w-8 h-8 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 text-[10px]">
                           0{index + 1}
                        </span>
                        <span className="text-xs uppercase tracking-[0.3em] text-brand-400">{sector.subtitle}</span>
                     </div>
                     
                     <h2 className="text-5xl md:text-7xl font-serif text-brand-900 mb-8 leading-none">
                        {sector.title}
                     </h2>
                     
                     <p className="text-lg text-brand-600 font-light leading-relaxed mb-12 max-w-xl">
                        {sector.desc}
                     </p>

                     {/* Stats Grid */}
                     <div className="grid grid-cols-2 gap-8 mb-12 border-y border-brand-900/10 py-8">
                        {sector.stats.map((stat, i) => (
                           <div key={i}>
                              <div className="text-3xl font-serif text-brand-900 mb-1">{stat.val}</div>
                              <div className="text-[9px] uppercase tracking-widest text-brand-400">{stat.label}</div>
                           </div>
                        ))}
                     </div>

                     {/* Features List */}
                     <ul className="space-y-4 mb-12">
                        {sector.features.map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm text-brand-800 font-mono">
                              <ShieldCheck size={14} className="text-brand-400"/>
                              {feature}
                           </li>
                        ))}
                     </ul>

                     <Link 
                        to="/products" 
                        className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-brand-900 hover:text-brand-500 transition-colors"
                     >
                        View {sector.label} Catalog <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                     </Link>
                  </div>

                  {/* Visual */}
                  <div className={`relative h-[600px] w-full overflow-hidden group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                     <div className="absolute inset-0 bg-brand-900/5 transition-all duration-500 group-hover:bg-transparent z-10"></div>
                     <img 
                        src={sector.image} 
                        alt={sector.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                     />
                     
                     {/* Floating Label */}
                     <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-4 z-20">
                        <div className="flex items-center gap-3 text-brand-900">
                           {sector.icon}
                           <span className="text-xs uppercase tracking-widest">{sector.label} Division</span>
                        </div>
                     </div>
                  </div>

               </div>
            </section>
         ))}

      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="bg-brand-900 text-white py-32">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Supply Chain Architecture</h2>
              <p className="text-brand-300 max-w-xl mx-auto mb-12 font-light text-lg">
                  We build resilient, global procurement strategies tailored to your specific operational geography.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                 <Link to="/contact" className="bg-white text-brand-900 px-12 py-5 text-xs uppercase tracking-[0.2em] hover:bg-brand-200 transition-all">
                     Schedule Consultation
                 </Link>
                 <button className="border border-white/30 px-12 py-5 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-900 transition-all flex items-center justify-center gap-3" aria-label="Download annual report">
                     <Download size={14}/> Download Annual Report
                 </button>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Industries;