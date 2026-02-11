import React from 'react';

const SkipNav: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand-900 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-sans focus:outline-none focus:ring-2 focus:ring-brand-gold"
  >
    Skip to main content
  </a>
);

export default SkipNav;
