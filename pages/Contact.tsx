import React from 'react';
import { Mail, ArrowRight, ArrowDownRight, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#F9F9F7] min-h-screen">
      <SEOHead
        title="Contact — Start a Dialogue"
        description="Request proposals, bulk quotations, and custom manufacturing consultations. Offices in Zurich, Dubai, and New York."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aura-supply.com/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://aura-supply.com/contact' },
          ],
        }}
      />
      {/* Reduced mobile padding (pt-32) to ensure content is visible immediately */}
      <div className="relative pt-32 pb-16 md:pt-56 md:pb-24 px-6 border-b border-brand-900/5">
         <div className="container mx-auto max-w-[1920px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
               <div>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="h-px w-12 bg-brand-400"></span>
                     <span className="text-brand-500 text-xs uppercase tracking-[0.3em]">Partnership Inquiries</span>
                  </div>
                  <h1 className="text-6xl md:text-9xl font-serif text-brand-900 leading-[0.85] animate-fade-in-up">
                     Start a <br/> <span className="italic text-brand-600 font-light">Dialogue</span>
                  </h1>
               </div>
               <div className="max-w-md mb-2">
                  <p className="text-brand-600 text-lg font-light leading-relaxed border-l border-brand-900/10 pl-6">
                     Our global team is ready to assist with bulk quotations, custom manufacturing requests, and supply chain solutions.
                  </p>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Directory */}
          <div className="lg:col-span-4 space-y-20">
             
             {/* Locations */}
             <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-900 mb-8 flex items-center gap-2">
                   <Globe size={14} /> Global Hubs
                </h2>
                <div className="space-y-12">
                   {[
                      { city: "Zurich HQ", address: "Bahnhofstrasse 10", zip: "8001 Zurich, CH", phone: "+41 44 500 20 20" },
                      { city: "Dubai", address: "Design District, Bldg 4", zip: "Dubai, UAE", phone: "+971 4 123 4567" },
                      { city: "New York", address: "45 Grand St, SoHo", zip: "NY 10013, USA", phone: "+1 212 555 0199" }
                   ].map((loc, i) => (
                      <div key={i} className="group cursor-default">
                         <div className="flex items-baseline justify-between border-b border-brand-900/10 pb-4 mb-4 group-hover:border-brand-900 transition-colors duration-500">
                            <span className="text-2xl font-serif text-brand-900">{loc.city}</span>
                            <ArrowDownRight size={18} className="text-brand-300 group-hover:text-brand-900 transition-colors" />
                         </div>
                         <div className="pl-0 space-y-1 text-sm text-brand-500 font-mono">
                            <p>{loc.address}</p>
                            <p>{loc.zip}</p>
                            <p className="text-brand-400 mt-2">{loc.phone}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Direct Contacts */}
             <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-900 mb-8 flex items-center gap-2">
                   <Mail size={14} /> Departments
                </h2>
                <div className="grid grid-cols-1 gap-6">
                   {[
                      { role: "Wholesale & Trade", email: "sales@aura-supply.com" },
                      { role: "Press & Media", email: "press@aura-supply.com" },
                      { role: "Careers", email: "talent@aura-supply.com" }
                   ].map((dept, i) => (
                      <div key={i} className="flex flex-col">
                         <span className="text-[10px] uppercase tracking-widest text-brand-400 mb-1">{dept.role}</span>
                         <a href={`mailto:${dept.email}`} className="text-lg font-serif text-brand-900 hover:text-brand-600 hover:underline decoration-1 underline-offset-4 transition-all">
                            {dept.email}
                         </a>
                      </div>
                   ))}
                </div>
             </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
             <div className="bg-white p-8 md:p-16 border border-brand-900/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
                <div className="mb-12 flex justify-between items-end">
                   <div>
                      <h2 className="font-serif text-4xl text-brand-900 mb-2">Request Proposal</h2>
                      <p className="text-brand-400 text-sm">Fields marked with <span className="text-brand-900">*</span> are mandatory</p>
                   </div>
                   <div className="hidden md:block w-16 h-16 rounded-full border border-brand-100 flex items-center justify-center">
                      <ArrowDownRight size={24} className="text-brand-200" />
                   </div>
                </div>

                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                   
                   {/* Row 1 */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="group relative">
                         <input type="text" id="fname" aria-required="true" className="peer w-full border-b border-brand-200 py-4 text-brand-900 focus:outline-none focus:border-brand-900 transition-colors bg-transparent placeholder-transparent" placeholder="Name" />
                         <label htmlFor="fname" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-brand-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-900">
                            First Name *
                         </label>
                      </div>
                      <div className="group relative">
                         <input type="text" id="lname" aria-required="true" className="peer w-full border-b border-brand-200 py-4 text-brand-900 focus:outline-none focus:border-brand-900 transition-colors bg-transparent placeholder-transparent" placeholder="Name" />
                         <label htmlFor="lname" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-brand-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-900">
                            Last Name *
                         </label>
                      </div>
                   </div>

                   {/* Row 2 */}
                   <div className="group relative">
                      <input type="email" id="email" aria-required="true" className="peer w-full border-b border-brand-200 py-4 text-brand-900 focus:outline-none focus:border-brand-900 transition-colors bg-transparent placeholder-transparent" placeholder="Email" />
                      <label htmlFor="email" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-brand-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-900">
                         Business Email *
                      </label>
                   </div>

                   {/* Row 3 */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="group relative">
                         <input type="text" id="company" className="peer w-full border-b border-brand-200 py-4 text-brand-900 focus:outline-none focus:border-brand-900 transition-colors bg-transparent placeholder-transparent" placeholder="Company" />
                         <label htmlFor="company" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-brand-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-900">
                            Organization
                         </label>
                      </div>
                      <div className="group relative">
                         <select id="scale" className="peer w-full border-b border-brand-200 py-4 text-brand-900 focus:outline-none focus:border-brand-900 transition-colors bg-transparent appearance-none">
                            <option value="" disabled selected>Select Volume</option>
                            <option value="1">1k - 5k Units</option>
                            <option value="2">5k - 20k Units</option>
                            <option value="3">Enterprise (20k+)</option>
                         </select>
                         <label htmlFor="scale" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-brand-400">
                            Project Scale
                         </label>
                         <ArrowDownRight className="absolute right-0 bottom-4 text-brand-300 pointer-events-none" size={16}/>
                      </div>
                   </div>

                   {/* Message */}
                   <div className="group relative">
                      <textarea id="msg" className="peer w-full border-b border-brand-200 py-4 text-brand-900 focus:outline-none focus:border-brand-900 transition-colors bg-transparent h-32 resize-none placeholder-transparent" placeholder="Message"></textarea>
                      <label htmlFor="msg" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-brand-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-900">
                         Message Details
                      </label>
                   </div>

                   <div className="pt-8 flex justify-end">
                      <button className="bg-brand-900 text-white px-12 py-5 text-xs uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center gap-6 group w-full md:w-auto justify-center">
                         Submit Proposal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                      </button>
                   </div>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;