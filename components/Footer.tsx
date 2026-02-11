import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#888] pt-32 pb-12 overflow-hidden relative">
      
      {/* Massive Brand Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
         <span className="text-[35vw] font-serif leading-none tracking-tighter text-white">AURA</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1920px]">
        
        {/* Top Grid: Value & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-b border-white/10 pb-24 mb-24">
           
           <div className="lg:col-span-5">
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[0.9]">
               Refining the<br/>Details.
             </h2>
             <p className="text-sm font-light max-w-md leading-relaxed mb-12">
                AURA defines the unseen standards of luxury hospitality. 
                We engineer the tactile moments that transform a stay into a memory.
             </p>
             <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest text-xs">
                Start a Project <ArrowUpRight size={14}/>
             </Link>
           </div>

           <div className="lg:col-span-7 flex flex-col justify-end">
              <label className="text-[10px] uppercase tracking-[0.2em] mb-6 text-white/40">Market Intelligence</label>
              <div className="flex gap-0 border-b border-white/20 pb-4 group hover:border-white transition-colors">
                 <input 
                   type="email" 
                   placeholder="Enter your business email" 
                   aria-label="Business email address"
                   className="bg-transparent w-full text-2xl text-white placeholder:text-white/20 focus:outline-none font-serif"
                 />
                 <button className="text-white text-xs uppercase tracking-widest hover:text-white/50 transition-colors">
                    Subscribe
                 </button>
              </div>
           </div>
        </div>

        {/* Middle Grid: Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
           
           {/* Col 1 */}
           <div>
              <h3 className="text-white text-xs uppercase tracking-widest mb-8">Index</h3>
              <ul className="space-y-4 font-light text-sm">
                 <li><Link to="/products" className="hover:text-white transition-colors">Collection</Link></li>
                 <li><Link to="/industries" className="hover:text-white transition-colors">Sectors</Link></li>
                 <li><Link to="/studio" className="hover:text-white transition-colors">Design Studio</Link></li>
                 <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              </ul>
           </div>

           {/* Col 2 */}
           <div>
              <h3 className="text-white text-xs uppercase tracking-widest mb-8">Social</h3>
              <ul className="space-y-4 font-light text-sm">
                 <li><a href="https://instagram.com/aurasupply" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                 <li><a href="https://linkedin.com/company/aurasupply" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                 <li><a href="https://x.com/aurasupply" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a></li>
                 <li><a href="https://pinterest.com/aurasupply" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
              </ul>
           </div>

           {/* Col 3 */}
           <div>
              <h3 className="text-white text-xs uppercase tracking-widest mb-8">Legal</h3>
              <ul className="space-y-4 font-light text-sm">
                 <li><Link to="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                 <li><Link to="/legal/terms-of-supply" className="hover:text-white transition-colors">Terms of Supply</Link></li>
                 <li><Link to="/legal/imprint" className="hover:text-white transition-colors">Imprint</Link></li>
                 <li><Link to="/legal/cookie-settings" className="hover:text-white transition-colors">Cookie Settings</Link></li>
              </ul>
           </div>

           {/* Col 4 */}
           <div>
              <h3 className="text-white text-xs uppercase tracking-widest mb-8">Contact</h3>
              <ul className="space-y-4 font-light text-sm">
                 <li className="flex gap-2 items-center"><Mail size={14}/> hello@aura-supply.com</li>
                 <li className="flex gap-2 items-center"><MapPin size={14}/> Zurich • Dubai • NY</li>
                 <li className="mt-4 text-xs opacity-50">Mon - Fri: 08:00 - 18:00 CET</li>
              </ul>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
           <div className="mb-4 md:mb-0">
             <span className="text-[10px] uppercase tracking-widest opacity-40">© 2025 AURA Supply Co.</span>
           </div>
           
           <div className="flex gap-4">
              <span className="text-[10px] border border-white/20 px-2 py-1 rounded text-white/50">ISO 9001</span>
              <span className="text-[10px] border border-white/20 px-2 py-1 rounded text-white/50">ECOVADIS GOLD</span>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;