import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Search, ChevronDown, ChevronRight, Package, Grid, List, Filter, X, Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

interface CategoryStructure {
  id: string;
  label: string;
  subCategories: string[];
}

const CATEGORY_TREE: CategoryStructure[] = [
  { 
    id: 'Disposable Footwear', 
    label: 'Footwear', 
    subCategories: ['Hotel Slippers', 'Spa Slippers', 'Premium Slippers', 'Eco-friendly Slippers']
  },
  { 
    id: 'Guest Textiles', 
    label: 'Textiles', 
    subCategories: ['Towels', 'Bathrobes', 'Slipper bags']
  },
  { 
    id: 'Toiletries & Liquids', 
    label: 'Liquids', 
    subCategories: ['Shampoo', 'Conditioner', 'Shower gel', 'Soap']
  },
  { 
    id: 'Personal Care Kits', 
    label: 'Amenity Kits', 
    subCategories: ['Dental kits', 'Shaving kits', 'Sewing kits', 'Hygiene kits']
  },
];

const COLLECTIONS = ['Noir Series', 'Eco-Luxe', 'Standard Issue', 'Spa Line'];
const MATERIALS = ['Organic Cotton', 'Bamboo', 'Recycled PET', 'Velvet', 'Waffle Weave'];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Disposable Footwear', 'Guest Textiles']);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [addedItems, setAddedItems] = useState<string[]>([]);

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (catId: string) => {
    if (expandedCategories.includes(catId)) {
      setExpandedCategories(prev => prev.filter(c => c !== catId));
    } else {
      setExpandedCategories(prev => [...prev, catId]);
    }
    setActiveCategory(catId);
    setActiveSubCategory(null);
  };

  const toggleAddItem = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    e.preventDefault();
    if (addedItems.includes(id)) {
        setAddedItems(prev => prev.filter(item => item !== id));
    } else {
        setAddedItems(prev => [...prev, id]);
    }
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSubCategory = activeSubCategory ? p.subCategory === activeSubCategory : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F9F9F7] min-h-screen">
      <SEOHead
        title="Material Index — Product Collection"
        description="Explore curated hospitality amenities: slippers, robes, toiletries, and hygiene kits for luxury hotels and healthcare."
        path="/products"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aura-supply.com/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://aura-supply.com/products' },
          ],
        }}
      />
      <div className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 border-b border-brand-900/5 bg-white">
        <div className="container mx-auto max-w-[1920px]">
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400 mb-8 font-mono">
              <Link to="/" className="hover:text-brand-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-900">Archive</span>
              {activeCategory !== 'All' && (
                  <>
                    <span>/</span>
                    <span className="text-brand-900">{activeCategory}</span>
                  </>
              )}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                 <h1 className="text-6xl md:text-9xl font-serif text-brand-900 leading-[0.85] tracking-tight">
                    Material <br/> <span className="italic text-brand-600 font-light">Index</span>
                 </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full">
                 <p className="text-brand-600 text-sm md:text-base font-light leading-relaxed max-w-sm text-left lg:text-right mb-8 lg:mb-0">
                    A curated compendium of sensory artifacts designed for the world's most demanding environments.
                 </p>
                 
                 <div className="flex items-center gap-8 border-t border-brand-900/10 pt-6">
                    <div className="text-right">
                       <span className="block text-3xl font-serif text-brand-900 leading-none">{filteredProducts.length}</span>
                       <span className="text-[9px] uppercase tracking-widest text-brand-400">Items</span>
                    </div>
                    <div className="w-px h-8 bg-brand-900/10"></div>
                    <div className="text-right">
                       <span className="block text-3xl font-serif text-brand-900 leading-none">{CATEGORY_TREE.length}</span>
                       <span className="text-[9px] uppercase tracking-widest text-brand-400">Cats</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- CONTROL BAR --- */}
      <div className="sticky top-20 md:top-24 z-30 bg-[#F9F9F7]/95 backdrop-blur-md border-b border-brand-900/5 px-6 py-4">
          <div className="container mx-auto max-w-[1920px] flex justify-between items-center">
             
             {/* Left: Filter Toggle (Mobile) & Active Chips */}
             <div className="flex items-center gap-4">
                <button 
                    onClick={() => setMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-brand-900 border border-brand-900/20 px-4 py-2 hover:bg-brand-900 hover:text-white transition-colors"
                >
                    <Filter size={14} /> Filter
                </button>
                
                {/* Active Filters Display */}
                <div className="hidden md:flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-brand-400 mr-2">Active:</span>
                    <button onClick={() => {setActiveCategory('All'); setActiveSubCategory(null);}} className={`px-3 py-1 text-[10px] uppercase tracking-wider border rounded-full transition-all ${activeCategory === 'All' ? 'bg-brand-900 text-white border-brand-900' : 'border-brand-200 text-brand-500 hover:border-brand-400'}`}>
                        All
                    </button>
                    {activeCategory !== 'All' && (
                        <div className="px-3 py-1 text-[10px] uppercase tracking-wider border border-brand-900 text-brand-900 rounded-full flex items-center gap-2">
                            {activeCategory}
                            <X size={10} className="cursor-pointer" onClick={() => setActiveCategory('All')} />
                        </div>
                    )}
                </div>
             </div>

             {/* Right: View Toggle & Sort */}
             <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-4 text-xs uppercase tracking-widest text-brand-500">
                    <span className="opacity-50">Sort by:</span>
                    <select className="bg-transparent border-none focus:ring-0 text-brand-900 font-bold p-0 cursor-pointer">
                        <option>Recommended</option>
                        <option>Newest Arrival</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
                <div className="h-4 w-px bg-brand-900/10 hidden md:block"></div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setViewMode('grid')}
                        aria-label="Grid view"
                        className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-brand-900' : 'text-brand-300 hover:text-brand-600'}`}
                    >
                        <Grid size={18} />
                    </button>
                    <button 
                        onClick={() => setViewMode('list')}
                        aria-label="List view"
                        className={`p-2 transition-colors ${viewMode === 'list' ? 'text-brand-900' : 'text-brand-300 hover:text-brand-600'}`}
                    >
                        <List size={18} />
                    </button>
                </div>
             </div>
          </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="container mx-auto px-6 py-12 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* --- SIDEBAR DIRECTORY (Desktop) --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-40 max-h-[calc(100vh-10rem)] overflow-y-auto pr-8 border-r border-brand-900/5 space-y-12 scrollbar-hide pb-20">
              
              {/* Search */}
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-brand-200 py-3 text-sm focus:outline-none focus:border-brand-900 transition-colors placeholder:text-brand-300 font-sans"
                />
                <Search size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-300 group-focus-within:text-brand-900 transition-colors" />
              </div>

              {/* Categories */}
              <div>
                 <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-400">Taxonomy</span>
                 </div>
                 
                 <nav className="space-y-1">
                    {CATEGORY_TREE.map(cat => (
                       <div key={cat.id} className="group">
                          <button 
                            onClick={() => toggleCategory(cat.id)}
                            className="w-full text-left py-3 flex items-center justify-between group-hover:text-brand-600 transition-colors"
                          >
                             <span className={`font-serif text-xl text-brand-900 transition-all ${activeCategory === cat.id ? 'italic font-medium' : ''}`}>{cat.label}</span>
                             {expandedCategories.includes(cat.id) ? 
                                <div className="h-px w-3 bg-brand-900"></div> : 
                                <Plus size={12} className="text-brand-200 group-hover:text-brand-400"/>
                             }
                          </button>
                          
                          <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedCategories.includes(cat.id) ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                             <ul className="space-y-2 pl-4 border-l border-brand-100 ml-1">
                                {cat.subCategories.map(sub => (
                                   <li key={sub}>
                                      <button 
                                        onClick={() => setActiveSubCategory(sub)}
                                        className={`text-[11px] uppercase tracking-widest text-left w-full transition-all hover:translate-x-1 ${activeSubCategory === sub ? 'text-brand-900 font-bold' : 'text-brand-400 hover:text-brand-600'}`}
                                      >
                                         {sub}
                                      </button>
                                   </li>
                                ))}
                             </ul>
                          </div>
                       </div>
                    ))}
                 </nav>
              </div>

              {/* Collections Filter */}
              <div>
                 <div className="flex items-center justify-between mb-6 pt-8 border-t border-brand-900/5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-400">Collections</span>
                 </div>
                 <div className="space-y-3">
                    {COLLECTIONS.map((col, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-3 h-3 border border-brand-200 rounded-sm flex items-center justify-center group-hover:border-brand-400 transition-colors">
                                <div className="w-1.5 h-1.5 bg-brand-900 opacity-0"></div>
                            </div>
                            <span className="text-sm font-light text-brand-600 group-hover:text-brand-900 transition-colors">{col}</span>
                        </label>
                    ))}
                 </div>
              </div>

               {/* Materials Filter */}
              <div>
                 <div className="flex items-center justify-between mb-6 pt-8 border-t border-brand-900/5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-400">Materials</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {MATERIALS.map((mat, i) => (
                        <span key={i} className="px-2 py-1 border border-brand-100 text-[10px] text-brand-500 uppercase tracking-wider hover:border-brand-300 cursor-pointer transition-colors">
                            {mat}
                        </span>
                    ))}
                 </div>
              </div>

              {/* Download CTA */}
              <div className="pt-12">
                  <button className="w-full py-5 border border-brand-900 text-brand-900 text-[10px] uppercase tracking-[0.2em] hover:bg-brand-900 hover:text-white transition-all flex items-center justify-center gap-3" aria-label="Download product index">
                      <Package size={14}/> Download Index
                  </button>
              </div>

            </div>
          </aside>

          {/* --- MOBILE FILTER PANEL --- */}
          <div className={`fixed inset-0 z-50 lg:hidden pointer-events-none ${mobileFiltersOpen ? 'pointer-events-auto' : ''}`}>
             <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${mobileFiltersOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileFiltersOpen(false)}></div>
             <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 h-full overflow-y-auto">
                    <div className="flex justify-between items-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-brand-900 font-bold">Filters</span>
                        <button onClick={() => setMobileFiltersOpen(false)}><X size={20} className="text-brand-400"/></button>
                    </div>
                    {/* Replicated Mobile Filters */}
                    <div className="space-y-8">
                        {CATEGORY_TREE.map(cat => (
                           <div key={cat.id}>
                               <h3 className="font-serif text-xl mb-4 text-brand-900">{cat.label}</h3>
                               <div className="pl-4 space-y-3 border-l border-brand-100">
                                   {cat.subCategories.map(sub => (
                                       <button key={sub} onClick={() => {setActiveSubCategory(sub); setMobileFiltersOpen(false);}} className="block text-sm text-brand-500">{sub}</button>
                                   ))}
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>

          {/* --- PRODUCT GRID --- */}
          <div className="lg:col-span-9">
            
            {/* Grid Header Info */}
            <div className="flex justify-between items-end mb-12">
                <span className="text-[10px] uppercase tracking-widest text-brand-400">
                    Displaying {activeSubCategory || activeCategory} Series
                </span>
            </div>

            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20' : 'grid-cols-1 gap-8'}`}>
              {filteredProducts.map((product, index) => (
                viewMode === 'grid' ? (
                    // --- GRID CARD ---
                    <div key={product.id} className="group cursor-pointer flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    
                    {/* Image Stage */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#F2F2F0] mb-6 border border-brand-900/5">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                        />
                        
                        {/* Overlay Mask */}
                        <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-500"></div>

                        {/* Add to Quote Button (Corner) */}
                        <button 
                            onClick={(e) => toggleAddItem(e, product.id)}
                            aria-label={`Add ${product.name} to quote`}
                            className={`absolute bottom-0 right-0 w-14 h-14 bg-white flex items-center justify-center transition-all duration-300 border-l border-t border-brand-900/5 ${addedItems.includes(product.id) ? 'bg-brand-900 text-white' : 'hover:bg-brand-900 hover:text-white text-brand-900'}`}
                        >
                            {addedItems.includes(product.id) ? <Check size={18} /> : <Plus size={18} />}
                        </button>

                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/80 backdrop-blur-sm text-brand-900 text-[9px] uppercase tracking-widest px-3 py-1 font-medium border border-brand-900/5">
                                {product.id}
                            </span>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="flex flex-col flex-grow px-1">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-serif text-brand-900 leading-tight group-hover:text-brand-600 transition-colors duration-300">
                                {product.name}
                            </h2>
                        </div>
                        
                        <span className="text-[10px] uppercase tracking-widest text-brand-400 mb-4 block">
                            {product.subCategory}
                        </span>

                        <div className="mt-auto pt-4 border-t border-brand-900/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] font-mono text-brand-500 uppercase tracking-wider">MOQ: {product.minOrder}</span>
                            <span className="text-[10px] font-mono text-brand-500 uppercase tracking-wider">{product.specs[0]?.value}</span>
                        </div>
                    </div>

                    </div>
                ) : (
                    // --- LIST CARD ---
                    <div key={product.id} className="group cursor-pointer flex flex-col md:flex-row gap-8 items-center bg-white border border-brand-900/5 p-4 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
                        <div className="w-full md:w-48 aspect-square bg-[#F2F2F0] overflow-hidden shrink-0">
                             <img src={product.image} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name}/>
                        </div>
                        <div className="flex-1 w-full md:w-auto">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest text-brand-400 mb-1 block">{product.subCategory}</span>
                                    <h2 className="text-2xl font-serif text-brand-900 mb-2">{product.name}</h2>
                                    <p className="text-sm text-brand-500 font-light max-w-xl">{product.description}</p>
                                </div>
                                <div className="text-right hidden md:block">
                                    <span className="text-xs font-mono text-brand-400 block mb-1">ID: {product.id}</span>
                                    <span className="text-xs font-mono text-brand-900 block">In Stock</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex flex-wrap gap-4 items-center">
                                {product.specs.map((spec, i) => (
                                    <span key={i} className="px-3 py-1 bg-brand-50 text-[10px] uppercase tracking-wider text-brand-600 border border-brand-100">
                                        {spec.label}: {spec.value}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex justify-end">
                            <button 
                                onClick={(e) => toggleAddItem(e, product.id)}
                                className={`px-8 py-3 text-xs uppercase tracking-widest border transition-all ${addedItems.includes(product.id) ? 'bg-brand-900 text-white border-brand-900' : 'border-brand-200 text-brand-900 hover:border-brand-900'}`}
                            >
                                {addedItems.includes(product.id) ? 'Added' : 'Add to Quote'}
                            </button>
                        </div>
                    </div>
                )
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
               <div className="py-48 text-center bg-white border border-dashed border-brand-200 rounded-sm">
                  <Package size={48} strokeWidth={1} className="mx-auto text-brand-300 mb-6"/>
                  <h2 className="text-2xl font-serif text-brand-900 mb-2">Archive Search Empty</h2>
                  <p className="text-brand-400 text-sm mb-8 font-light">We couldn't locate any artifacts matching your criteria.</p>
                  <button onClick={() => {setActiveCategory('All'); setSearchQuery('');}} className="text-xs uppercase tracking-widest text-brand-900 border-b border-brand-900 pb-1 hover:opacity-60 transition-opacity">
                      Clear All Filters
                  </button>
               </div>
            )}
            
            {/* Pagination / End */}
            {filteredProducts.length > 0 && (
                <div className="mt-32 border-t border-brand-900/10 pt-12 flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-brand-400">Page 01 / 01</span>
                    <div className="flex gap-2">
                        <button disabled className="w-10 h-10 border border-brand-200 flex items-center justify-center text-brand-300 cursor-not-allowed"><ChevronDown className="rotate-90" size={14}/></button>
                        <button disabled className="w-10 h-10 border border-brand-200 flex items-center justify-center text-brand-300 cursor-not-allowed"><ChevronRight size={14}/></button>
                    </div>
                </div>
            )}

          </div>

        </div>
      </div>
      
      {/* Footer Teaser */}
      <div className="bg-brand-900 text-white py-32 mt-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
              <span className="text-brand-400 text-xs uppercase tracking-[0.3em] mb-6 block">Custom Fabrication</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Private Label <br/><span className="italic text-brand-400">Services</span></h2>
              <p className="text-brand-300 max-w-xl mx-auto mb-12 font-light text-lg leading-relaxed">
                  Our studio can engineer bespoke amenities tailored to your brand's specific sensory requirements, from custom molds to signature scents.
              </p>
              <Link to="/contact" className="inline-block bg-white text-brand-900 px-12 py-5 text-xs uppercase tracking-[0.2em] hover:bg-brand-100 transition-all">
                  Initialize Project
              </Link>
          </div>
      </div>

    </div>
  );
};

export default Products;