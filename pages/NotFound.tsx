import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center px-6">
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />      <div className="text-center max-w-lg">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-400 mb-6 block">Error 404</span>
        <h1 className="text-6xl md:text-8xl font-serif text-brand-900 mb-6 leading-[0.9]">
          Page <br /><span className="italic text-brand-600 font-light">Not Found</span>
        </h1>
        <p className="text-brand-500 font-light text-lg mb-12 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-brand-900 text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-brand-800 transition-colors"
        >
          Return Home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
