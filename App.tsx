import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CustomCursor from './components/CustomCursor';
import SkipNav from './components/SkipNav';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded page components
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Industries = React.lazy(() => import('./pages/Industries'));
const Sustainability = React.lazy(() => import('./pages/Sustainability'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Studio = React.lazy(() => import('./pages/Studio'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-brand-50 flex items-center justify-center z-[100]">
    <div className="text-center animate-pulse">
      <div className="w-12 h-12 bg-brand-900 rounded-sm flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-serif text-2xl italic">A</span>
      </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="antialiased text-brand-800 bg-brand-50 selection:bg-brand-200 min-h-screen flex flex-col">
        <SkipNav />
        <CustomCursor />
        <ScrollToTop />
        <header>
          <Navbar />
        </header>
        <main id="main-content" className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/legal/:slug" element={<LegalPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
