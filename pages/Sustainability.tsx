
import React, { useEffect, useState } from 'react';
import { 
  Leaf, 
  Recycle, 
  Droplets, 
  ArrowRight, 
  Sprout, 
  Wind, 
  CircleDashed, 
  Microscope,
  Globe,
  ScanLine,
  CheckCircle2,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Sustainability: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F9F7] min-h-screen font-sans selection:bg-brand-900 selection:text-white">
      <SEOHead
        title="Sustainability — The 2030 Roadmap"
        description="Regenerative supply chain architecture. 100% plastic-free, carbon-negative hospitality amenities by 2030."
        path="/sustainability"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aura-supply.com/' },
            { '@type': 'ListItem', position: 2, name: 'Sustainability', item: 'https://aura-supply.com/sustainability' },
          ],
        }}
      />
      <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 opacity-60">
           <img 
             src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover scale-105 animate-pulse-slow" // Subtle scale animation handled by CSS
             style={{ animationDuration: '20s' }}
             alt="Deep Forest Texture"
           />
        </div>
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

        <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                    <span className="w-12 h-px bg-brand-200"></span>
                    <span className="text-xs uppercase tracking-[0.3em] text-brand-200">The 2030 Roadmap</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 mix-blend-overlay opacity-90">
                  Regenerative <br/>
                  <span className="italic font-light opacity-80">Architecture.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed border-l border-white/20 pl-8 animate-fade-in-up delay-200">
                    Sustainability is no longer about doing less harm. It is about designing systems that actively restore the environment. 
                    Welcome to the era of the carbon-negative supply chain.
                </p>
              </div>

              {/* Hero Stats */}
              <div className="lg:col-span-4 flex flex-col justify-end pb-4 animate-fade-in-up delay-300">
                  <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                      <div className="p-6 backdrop-blur-sm">
                          <span className="block text-3xl font-serif">100%</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/60">Plastic Free</span>
                      </div>
                      <div className="p-6 backdrop-blur-sm bg-white/5">
                          <span className="block text-3xl font-serif">2025</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/60">Net Zero</span>
                      </div>
                      <div className="p-6 backdrop-blur-sm bg-white/5">
                          <span className="block text-3xl font-serif">45d</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/60">Degradation</span>
                      </div>
                      <div className="p-6 backdrop-blur-sm">
                          <span className="block text-3xl font-serif">ISO</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/60">14001</span>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- THE PHILOSOPHY: TYPOGRAPHIC LAYOUT --- */}
      <section className="py-32 container mx-auto px-6 md:px-12 max-w-[1920px]">
         <div className="flex flex-col lg:flex-row gap-24 items-start border-b border-brand-900/10 pb-24">
            <div className="lg:w-1/3 sticky top-32">
               <span className="text-brand-400 text-xs uppercase tracking-[0.4em] mb-4 block flex items-center gap-2">
                  <Globe size={14} /> Global Impact
               </span>
               <h2 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight mb-8">
                  The Linear Economy is Obsolete.
               </h2>
               <Link to="/contact" className="text-xs uppercase tracking-widest text-brand-900 border-b border-brand-900 pb-1 hover:text-brand-500 hover:border-brand-500 transition-colors">
                  Read Our Whitepaper
               </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="font-serif text-xl mb-4 text-brand-900">Take-Make-Waste</h3>
                  <p className="text-brand-600 text-sm leading-relaxed mb-8">
                     The traditional hospitality model relies on single-use petrochemical plastics that exist for 400 years after a 5-minute use. This model is fiscally and ecologically unsustainable.
                  </p>
                  <div className="h-px w-full bg-red-900/20 mb-2"></div>
                  <span className="text-[10px] uppercase tracking-widest text-red-900/60">Legacy Model</span>
               </div>
               <div>
                  <h3 className="font-serif text-xl mb-4 text-brand-900">The Circular Imperative</h3>
                  <p className="text-brand-600 text-sm leading-relaxed mb-8">
                     AURA implements a "Cradle-to-Cradle" philosophy. Every product we manufacture is designed with its end-of-life in mind, ensuring it returns to the earth as a nutrient, not a pollutant.
                  </p>
                  <div className="h-px w-full bg-green-900/20 mb-2"></div>
                  <span className="text-[10px] uppercase tracking-widest text-green-900/60">AURA Model</span>
               </div>
            </div>
         </div>
      </section>

      {/* --- MATERIAL LAB: INTERACTIVE SPECIFICATION --- */}
      <section className="bg-brand-900 text-brand-50 py-32 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex justify-between items-end mb-20">
               <div>
                  <span className="text-brand-400 text-xs uppercase tracking-[0.3em] mb-4 block">AURA Material Lab</span>
                  <h2 className="text-5xl md:text-7xl font-serif leading-none text-white">
                     Bio-Material <br/> <span className="italic text-brand-400 font-light">Library</span>
                  </h2>
               </div>
               <div className="hidden md:flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                     <Recycle size={18} />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                     <Microscope size={18} />
                  </div>
               </div>
            </div>

            {/* The Material Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
               {[
                  {
                     id: "01",
                     name: "Mycelium",
                     desc: "Root structure of mushrooms. Grown in 7 days. Replaces styrofoam.",
                     specs: ["Home Compostable", "Water Resistant", "Fire Retardant"],
                     img: "https://images.unsplash.com/photo-1591857177580-dc82b9e4e1aa?auto=format&fit=crop&q=80&w=800"
                  },
                  {
                     id: "02",
                     name: "Moso Bamboo",
                     desc: "Fastest growing plant on Earth. Naturally antibacterial fiber source.",
                     specs: ["Pesticide Free", "High Tensile Strength", "Carbon Sink"],
                     img: "https://images.unsplash.com/photo-1596329707282-38378732734a?auto=format&fit=crop&q=80&w=800"
                  },
                  {
                     id: "03",
                     name: "Bio-PLA",
                     desc: "Polylactic Acid derived from fermented plant starch (corn/sugarcane).",
                     specs: ["Industrial Compost", "Non-Toxic", "Transparent"],
                     img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
                  }
               ].map((mat, i) => (
                  <div key={i} className="group relative h-[500px] overflow-hidden bg-[#111] hover:bg-brand-800 transition-colors duration-500">
                     <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
                        <img src={mat.img} loading="lazy" className="w-full h-full object-cover grayscale" alt={mat.name + ' bio-material close-up'} />
                     </div>
                     
                     <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start border-b border-white/10 pb-6">
                           <span className="font-mono text-2xl text-white/40">{mat.id}</span>
                           <ScanLine size={20} className="text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"/>
                        </div>
                        
                        <div>
                           <h3 className="text-3xl font-serif mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">{mat.name}</h3>
                           <p className="text-brand-300 text-sm leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                              {mat.desc}
                           </p>
                           
                           <ul className="space-y-3">
                              {mat.specs.map((spec, j) => (
                                 <li key={j} className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-400">
                                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>
                                    {spec}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CIRCULAR ECONOMY: SCHEMATIC --- */}
      <section className="py-32 container mx-auto px-6 max-w-[1920px]">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <span className="text-[10px] uppercase tracking-[0.3em] text-brand-400 mb-6 block">System Design</span>
             <h2 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight mb-8">
                The Closed-Loop Protocol
             </h2>
             <p className="text-brand-600 font-light">
                We take responsibility for our products even after they leave your property. Our proprietary return-scheme ensures textiles are re-spun and polymers are re-polymerized.
             </p>
          </div>

          <div className="relative">
             {/* Center Line */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-brand-900/10 -translate-y-1/2 hidden md:block"></div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {[
                   { icon: Sprout, title: "Regenerative Source", detail: "FSC Certified Forests" },
                   { icon: Wind, title: "Clean Manufacturing", detail: "Solar Powered Plants" },
                   { icon: CheckCircle2, title: "Guest Utilization", detail: "Premium Experience" },
                   { icon: Recycle, title: "Industrial Recovery", detail: "Material Re-integration" }
                ].map((step, i) => (
                   <div key={i} className="relative z-10 bg-[#F9F9F7] p-8 text-center group">
                      <div className="w-20 h-20 mx-auto bg-white border border-brand-200 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-brand-900 transition-all duration-500">
                         <step.icon size={28} className="text-brand-400 group-hover:text-brand-900 transition-colors"/>
                      </div>
                      <h3 className="font-serif text-xl text-brand-900 mb-2">{step.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-brand-400">{step.detail}</p>
                   </div>
                ))}
             </div>
          </div>
      </section>

      {/* --- DATA & TRANSPARENCY --- */}
      <section className="bg-white py-32 border-y border-brand-900/5">
         <div className="container mx-auto px-6 max-w-[1920px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               
               <div className="relative aspect-square bg-brand-100 overflow-hidden order-2 lg:order-1">
                  <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200" loading="lazy" className="w-full h-full object-cover grayscale opacity-80" alt="Luxury hotel interior showcasing sustainable design" />
                  
                  {/* Floating Data Card */}
                  <div className="absolute bottom-12 right-12 bg-white p-8 shadow-2xl max-w-xs border border-brand-900/5">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                         <span className="text-[10px] uppercase tracking-widest text-brand-900 font-bold">Live Impact Tracker</span>
                      </div>
                      <div className="space-y-6">
                         <div>
                            <span className="block text-3xl font-serif text-brand-900">2.4M</span>
                            <span className="text-[10px] uppercase tracking-widest text-brand-400">Bottles Diverted (YTD)</span>
                         </div>
                         <div>
                            <span className="block text-3xl font-serif text-brand-900">14k</span>
                            <span className="text-[10px] uppercase tracking-widest text-brand-400">Trees Planted</span>
                         </div>
                      </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2">
                  <span className="text-brand-400 text-xs uppercase tracking-[0.3em] mb-4 block">Total Transparency</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight mb-8">
                     From Farm to <br/> Front Desk.
                  </h2>
                  <p className="text-brand-600 leading-relaxed mb-12 font-light">
                     We utilize Blockchain technology to track the provenance of every fiber in our textiles. 
                     Scan the QR code on any AURA shipping carton to view the exact coordinates of the cotton field 
                     and the carbon footprint of that specific batch.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                     <div className="flex items-start gap-4">
                        <BarChart3 className="text-brand-400 shrink-0 mt-1" size={20} />
                        <div>
                           <h3 className="font-serif text-lg text-brand-900">Scope 3 Analysis</h3>
                           <p className="text-xs text-brand-500 mt-1">Full supply chain carbon auditing.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <CheckCircle2 className="text-brand-400 shrink-0 mt-1" size={20} />
                        <div>
                           <h3 className="font-serif text-lg text-brand-900">Fair Trade</h3>
                           <p className="text-xs text-brand-500 mt-1">Ethical labor standards verified.</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-12 pt-12 border-t border-brand-900/10">
                     <p className="text-xs uppercase tracking-widest text-brand-400 mb-6">Our Certifications</p>
                     <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* CSS-only logos for elegance */}
                        <div className="border border-brand-900 px-3 py-1 text-[10px] font-bold tracking-tighter">B CORP</div>
                        <div className="border border-brand-900 px-3 py-1 text-[10px] font-bold tracking-tighter">LEED</div>
                        <div className="border border-brand-900 px-3 py-1 text-[10px] font-bold tracking-tighter">GOTS ORGANIC</div>
                        <div className="border border-brand-900 px-3 py-1 text-[10px] font-bold tracking-tighter">CRADLE 2 CRADLE</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-brand-900 py-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Future-Proof Your Brand</h2>
            <p className="text-brand-300 max-w-xl mx-auto mb-12 font-light text-lg">
               Transitioning to sustainable amenities increases guest satisfaction scores by an average of 18%.
            </p>
            <Link to="/contact" className="inline-block bg-white text-brand-900 px-12 py-5 text-xs uppercase tracking-[0.2em] hover:bg-brand-200 transition-all font-bold">
               Request Eco-Audit
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Sustainability;
