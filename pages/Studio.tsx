import React from 'react';
import DesignStudio from '../components/DesignStudio';
import SEOHead from '../components/SEOHead';

const Studio: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEOHead
        title="Design Studio — AURA Atelier"
        description="AI-powered product concept generator for bespoke hospitality amenity design."
        path="/studio"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aura-supply.com/' },
            { '@type': 'ListItem', position: 2, name: 'Design Studio', item: 'https://aura-supply.com/studio' },
          ],
        }}
      />
      <DesignStudio />
    </div>
  );
};

export default Studio;
