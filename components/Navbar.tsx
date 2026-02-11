
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Define navigation items with explicit paths to fix routing issues
  const navItems = [
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Journal', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const mobileNavItems = [
    { label: 'Home', path: '/' },
    ...navItems
  ];

  // Define which pages have a Dark Hero section (needing white text)
  // Home and Sustainability now have full-screen dark cinematic intros.
  const isDarkHeroPage = ['/', '/sustainability'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine text color class
  const getTextColorClass = () => {
    if (isScrolled) return 'text-brand-900'; // Always dark on scrolled glass background
    return isDarkHeroPage ? 'text-white' : 'text-brand-900'; // White on dark pages, Dark on light pages
  };

  const textColorClass = getTextColorClass();

  return (
    <>
      <nav 
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-brand-900/5 shadow-sm' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-[1920px]">
          
          {/* Logo */}
          <Link to="/" className={`relative z-50 group transition-colors duration-500 ${textColorClass}`}>
            <span className="font-serif text-3xl md:text-4xl tracking-widest font-medium">
              AURA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-12 transition-colors duration-500 ${textColorClass}`}>
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.path}
                className="group relative text-[10px] uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-500 py-2"
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled || !isDarkHeroPage ? 'bg-brand-900' : 'bg-white'}`}></span>
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className={`px-6 py-2 border rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                isScrolled || !isDarkHeroPage 
                  ? 'border-brand-900/30 hover:bg-brand-900 hover:text-white' 
                  : 'border-white/30 hover:bg-white hover:text-brand-900'
              }`}
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className={`md:hidden relative z-50 p-2 transition-colors duration-500 ${textColorClass}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F9F9F7] z-40 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full blur-[100px] opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-300 rounded-full blur-[120px] opacity-20"></div>

         <div className="flex flex-col items-center gap-8 relative z-10">
            {mobileNavItems.map((item, i) => (
               <Link 
                  key={item.label}
                  to={item.path}
                  className="font-serif text-5xl md:text-7xl text-brand-900/30 hover:text-brand-900 hover:italic transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
               >
                  {item.label}
               </Link>
            ))}
         </div>
      </div>
    </>
  );
};

export default Navbar;
