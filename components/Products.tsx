import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-brand-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-500 uppercase block mb-4">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-900">
              Curated for Comfort.
            </h2>
          </div>
          <button className="text-brand-900 text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300">
            Download Catalogue <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-t-[2rem] overflow-hidden cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                   <div>
                      <p className="text-xs text-brand-500 uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-xl font-serif text-brand-900">{product.name}</h3>
                   </div>
                </div>
                <p className="text-brand-600 text-sm leading-relaxed mb-4 border-l-2 border-brand-200 pl-4">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-400 italic">
                  <span>✦</span> {product.sensory}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
