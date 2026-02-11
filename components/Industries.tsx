import React from 'react';

const Industries: React.FC = () => {
  const sectors = [
    { title: "Hotels & Resorts", desc: "Elevating the guest experience from check-in to checkout." },
    { title: "Hospitals & Healthcare", desc: "Clinical sterility meets patient comfort." },
    { title: "Spa & Wellness", desc: "Enhancing relaxation through tactile luxury." },
    { title: "Medical Facilities", desc: "Reliable, bulk-scale hygiene solutions." },
  ];

  return (
    <section id="industries" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Serving the World's<br/>
              Most Demanding<br/>
              Environments.
            </h2>
            <p className="text-brand-300 max-w-sm leading-relaxed mb-8">
              From 5-star suites in Dubai to surgical theaters in Zurich, AURA delivers consistency, quality, and trust.
            </p>
            <div className="flex gap-4">
               <div className="text-center p-4 border border-brand-700 rounded-lg">
                  <div className="text-2xl font-serif">50+</div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-400">Countries</div>
               </div>
               <div className="text-center p-4 border border-brand-700 rounded-lg">
                  <div className="text-2xl font-serif">10k+</div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-400">Clients</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map((item, idx) => (
              <div key={idx} className="p-8 bg-brand-800 rounded-2xl hover:bg-brand-700 transition-colors duration-300">
                <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-brand-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
