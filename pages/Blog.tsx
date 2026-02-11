
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Calendar, 
  User, 
  Tag, 
  Search, 
  Clock, 
  ChevronRight, 
  Hash,
  Bookmark
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CATEGORIES = ['All', 'Guest Experience', 'Sustainability', 'Healthcare', 'Design'];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = BLOG_POSTS[0];
  
  // Filter logic
  const displayPosts = activeCategory === 'All' 
    ? BLOG_POSTS.slice(1) // Show all except featured
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#F9F9F7] min-h-screen">
      <SEOHead
        title="Journal — Market Intelligence"
        description="Proprietary analysis on material science, sustainable supply chains, and global hospitality standards."
        path="/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aura-supply.com/' },
            { '@type': 'ListItem', position: 2, name: 'Journal', item: 'https://aura-supply.com/blog' },
          ],
        }}
      />
      <div className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 border-b border-brand-900/5 bg-white">
        <div className="container mx-auto max-w-[1920px]">
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400 mb-8 font-mono">
              <Link to="/" className="hover:text-brand-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-900">Journal</span>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                 <h1 className="text-6xl md:text-9xl font-serif text-brand-900 leading-[0.85] tracking-tight">
                    Market <br/> <span className="italic text-brand-600 font-light">Intelligence</span>
                 </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full">
                 <p className="text-brand-600 text-sm md:text-base font-light leading-relaxed max-w-sm text-left lg:text-right mb-8 lg:mb-0">
                    Proprietary analysis on the intersection of material science, sustainable supply chains, and global hospitality standards.
                 </p>
                 
                 <div className="flex items-center gap-8 border-t border-brand-900/10 pt-6 w-full lg:justify-end">
                    <div className="text-right">
                       <span className="block text-3xl font-serif text-brand-900 leading-none">{BLOG_POSTS.length}</span>
                       <span className="text-[9px] uppercase tracking-widest text-brand-400">Articles</span>
                    </div>
                    <div className="w-px h-8 bg-brand-900/10"></div>
                    <div className="text-right">
                       <span className="block text-3xl font-serif text-brand-900 leading-none">Weekly</span>
                       <span className="text-[9px] uppercase tracking-widest text-brand-400">Updates</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- STICKY FILTER BAR --- */}
      <div className="sticky top-20 md:top-24 z-30 bg-[#F9F9F7]/95 backdrop-blur-md border-b border-brand-900/5 px-6 py-6">
        <div className="container mx-auto max-w-[1920px] flex flex-col md:flex-row justify-between items-center gap-6">
           
           <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide w-full md:w-auto">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-brand-900 font-bold' : 'text-brand-400 hover:text-brand-600'}`}
                >
                   {cat}
                </button>
              ))}
           </div>

           <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search Journal..." 
                className="w-full bg-transparent border-b border-brand-200 py-2 text-sm focus:outline-none focus:border-brand-900 transition-colors placeholder:text-brand-300"
              />
              <Search size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-400"/>
           </div>

        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-[1920px]">
        
        {/* --- FEATURED ARTICLE (Only shown when 'All' is active) --- */}
        {activeCategory === 'All' && (
           <Link to={`/blog/${featuredPost.id}`} className="block mb-24 group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                 <div className="lg:col-span-8 overflow-hidden relative aspect-[16/9] lg:aspect-auto lg:h-[700px]">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 border border-brand-900/5">
                       <span className="text-[10px] uppercase tracking-widest text-brand-900 font-bold">Latest Issue</span>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-4 flex flex-col justify-center h-full">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-brand-400 mb-6">
                       <span className="text-brand-600 border border-brand-200 px-2 py-1 rounded-sm">{featuredPost.category}</span>
                       <span>{featuredPost.date}</span>
                       <span className="flex items-center gap-1"><Clock size={12}/> 5 Min Read</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-900 mb-8 leading-[1.1] group-hover:text-brand-600 transition-colors">
                       {featuredPost.title}
                    </h2>
                    
                    <p className="text-lg text-brand-500 font-light leading-relaxed mb-12 border-l border-brand-900/10 pl-6">
                       {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-900 font-serif italic">
                          {featuredPost.author.charAt(0)}
                       </div>
                       <div>
                          <span className="block text-xs font-bold text-brand-900 uppercase tracking-wider">{featuredPost.author}</span>
                          <span className="block text-[10px] text-brand-400 uppercase tracking-wider">{featuredPost.role || 'Editor'}</span>
                       </div>
                    </div>
                 </div>
              </div>
           </Link>
        )}

        {/* --- ARTICLE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
           {displayPosts.map((post, index) => (
              <article key={post.id}>
              <Link
                to={`/blog/${post.id}`}
                className="group cursor-pointer flex flex-col h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                 <div className="relative aspect-[4/3] overflow-hidden mb-8 border border-brand-900/5 bg-brand-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-500"></div>
                    
                    {/* Hover Overlay Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                       <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-brand-900 shadow-sm">
                          <ArrowUpRight size={16} />
                       </div>
                    </div>
                 </div>

                 <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-brand-400 mb-4">
                       <span className="text-brand-600">{post.category}</span>
                       <span className="w-1 h-1 bg-brand-300 rounded-full"></span>
                       <span>{post.date}</span>
                    </div>

                    <h3 className="text-2xl font-serif text-brand-900 mb-4 leading-snug group-hover:underline decoration-1 underline-offset-4 decoration-brand-300 transition-all">
                       {post.title}
                    </h3>

                    <p className="text-sm text-brand-500 font-light leading-relaxed line-clamp-3 mb-6">
                       {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-brand-900/5 pt-6">
                       <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400">
                          <User size={12} /> {post.author}
                       </div>
                       <button className="text-[10px] uppercase tracking-widest text-brand-900 opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          Read Now <ChevronRight size={10} />
                       </button>
                    </div>
                 </div>
              </Link>
              </article>
           ))}
        </div>

        {/* --- EDITORIAL NEWSLETTER --- */}
        <div className="mt-40 border-t border-brand-900/10 pt-24">
           <div className="bg-brand-900 text-white p-12 md:p-24 relative overflow-hidden">
              {/* Abstract BG */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <span className="text-brand-400 text-xs uppercase tracking-[0.3em] mb-6 block flex items-center gap-2">
                       <Hash size={12}/> The AURA Briefing
                    </span>
                    <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                       Material Science <br/> in your Inbox.
                    </h3>
                    <p className="text-brand-300 text-lg font-light leading-relaxed max-w-md">
                       Join 10,000+ hospitality leaders receiving our monthly intelligence reports on sustainability and luxury trends.
                    </p>
                 </div>

                 <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                       <div>
                          <label htmlFor="blog-newsletter-email" className="block text-[10px] uppercase tracking-widest text-brand-400 mb-2">Email Address</label>
                          <input 
                             id="blog-newsletter-email"
                             type="email" 
                             placeholder="name@company.com" 
                             className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                          />
                       </div>
                       <div className="flex items-start gap-3">
                          <input type="checkbox" className="mt-1 bg-transparent border-white/20 rounded-none cursor-pointer" />
                          <p className="text-[10px] text-brand-400 leading-relaxed">
                             I agree to receive editorial newsletters and accept the data privacy statement.
                          </p>
                       </div>
                       <button className="w-full bg-white text-brand-900 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brand-200 transition-colors font-bold">
                          Subscribe
                       </button>
                    </form>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
