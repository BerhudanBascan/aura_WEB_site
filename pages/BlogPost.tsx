
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Share2, Linkedin, Twitter, Bookmark, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BlogPost: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);

    const postIndex = BLOG_POSTS.findIndex(p => p.id === Number(id));
    const post = BLOG_POSTS[postIndex];
    const nextPost = BLOG_POSTS[(postIndex + 1) % BLOG_POSTS.length];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7]">
                <div className="text-center">
                    <h2 className="text-2xl font-serif text-brand-900 mb-4">Article Not Found</h2>
                    <Link to="/blog" className="text-xs uppercase tracking-widest text-brand-500 border-b border-brand-500 pb-1">Return to Journal</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="bg-[#F9F9F7] min-h-screen relative">
            <SEOHead
              title={post.title}
              description={post.excerpt}
              path={`/blog/${post.id}`}
            />
            <div className="fixed top-0 left-0 h-1 bg-brand-900 z-[60]" style={{ width: `${scrollProgress * 100}%` }}></div>

            {/* --- HERO SECTION --- */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover animate-scale-in"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-24 px-6">
                    <div className="container mx-auto max-w-4xl relative z-10">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-[10px] uppercase tracking-widest transition-colors">
                            <ArrowLeft size={14}/> Back to Journal
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 text-[10px] uppercase tracking-widest border border-white/10">
                                {post.category}
                            </span>
                            <span className="text-white/80 text-[10px] uppercase tracking-widest flex items-center gap-2">
                                <Calendar size={12}/> {post.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 max-w-3xl">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 border-t border-white/20 pt-6 max-w-xs">
                             <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-serif italic text-lg backdrop-blur-sm">
                                {post.author.charAt(0)}
                             </div>
                             <div>
                                <span className="block text-white text-xs uppercase tracking-wider font-bold">{post.author}</span>
                                <span className="block text-white/60 text-[10px] uppercase tracking-wider">{post.role}</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ARTICLE BODY --- */}
            <div className="container mx-auto px-6 py-24 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Sidebar (Sticky) */}
                    <div className="hidden lg:block lg:col-span-2">
                        <div className="sticky top-32 flex flex-col gap-6 items-center border-r border-brand-900/10 pr-8">
                             <span className="text-[10px] uppercase tracking-widest text-brand-400 rotate-180 py-4 writing-vertical">Share Issue</span>
                             <button aria-label="Share article" className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all">
                                <Share2 size={14}/>
                             </button>
                             <button aria-label="Share on LinkedIn" className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                                <Linkedin size={14}/>
                             </button>
                             <button aria-label="Share on Twitter" className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 hover:bg-black hover:text-white hover:border-black transition-all">
                                <Twitter size={14}/>
                             </button>
                             <div className="w-px h-12 bg-brand-900/10 my-2"></div>
                             <button aria-label="Bookmark article" className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all">
                                <Bookmark size={14}/>
                             </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 lg:px-8">
                        {/* Editor's Note / Excerpt */}
                        <div className="mb-12">
                             <p className="text-xl md:text-2xl font-serif italic text-brand-600 leading-relaxed">
                                "{post.excerpt}"
                             </p>
                        </div>

                        {/* HTML Content Render */}
                        <div 
                            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-brand-900 prose-p:text-brand-600 prose-p:leading-loose prose-p:font-light prose-blockquote:border-l-brand-900 prose-blockquote:text-3xl prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-brand-900 prose-blockquote:not-italic prose-blockquote:leading-tight prose-blockquote:py-4 prose-img:rounded-sm"
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}
                        >
                        </div>

                        {/* Article Footer */}
                        <div className="mt-24 pt-12 border-t border-brand-900/10 flex justify-between items-center">
                            <div className="flex gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-brand-400 px-3 py-1 border border-brand-200 rounded-full">#Strategy</span>
                                <span className="text-[10px] uppercase tracking-widest text-brand-400 px-3 py-1 border border-brand-200 rounded-full">#Luxury</span>
                            </div>
                            <span className="text-xs font-serif italic text-brand-400">Published in Zurich, CH</span>
                        </div>
                    </div>

                    {/* Meta Sidebar (Right) */}
                    <div className="hidden lg:block lg:col-span-2">
                       <div className="sticky top-32 border-l border-brand-900/10 pl-8">
                           <h2 className="text-[10px] uppercase tracking-widest text-brand-900 mb-6 font-bold">In This Issue</h2>
                           <ul className="space-y-4 text-xs text-brand-500 font-medium">
                               <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-300 rounded-full"></div> Market Analysis</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-300 rounded-full"></div> Material Science</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-300 rounded-full"></div> Consumer Psych</li>
                           </ul>

                           <div className="mt-12 p-6 bg-brand-100/50 border border-brand-200 rounded-sm">
                               <span className="text-[10px] uppercase tracking-widest text-brand-400 block mb-2">Editor's Pick</span>
                               <img src={nextPost.image} loading="lazy" className="w-full aspect-square object-cover mb-3 grayscale hover:grayscale-0 transition-all duration-500" alt={nextPost.title}/>
                               <h3 className="font-serif text-lg leading-tight mb-2">{nextPost.title}</h3>
                               <Link to={`/blog/${nextPost.id}`} className="text-[10px] uppercase tracking-widest text-brand-900 border-b border-brand-900 pb-px">Read Now</Link>
                           </div>
                       </div>
                    </div>

                </div>
            </div>

            {/* --- READ NEXT NAV --- */}
            <div 
                className="bg-white border-t border-brand-900/5 py-24 cursor-pointer group"
                onClick={() => {
                    navigate(`/blog/${nextPost.id}`);
                    window.scrollTo(0,0);
                }}
            >
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-400 mb-4 block">Next Story</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-900 mb-8 group-hover:italic transition-all">
                        {nextPost.title}
                    </h2>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-900 border-b border-transparent group-hover:border-brand-900 pb-1 transition-all">
                        Continue Reading <ChevronRight size={14}/>
                    </div>
                </div>
            </div>

        </article>
    );
};

export default BlogPost;
