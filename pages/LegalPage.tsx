import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const LEGAL_CONTENT: Record<string, { title: string; content: string }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content:
      'AURA Supply Co. is committed to protecting your personal data. This policy outlines how we collect, use, and safeguard information provided through our website and business interactions. We process data in accordance with the EU General Data Protection Regulation (GDPR) and applicable Swiss data protection laws. For inquiries regarding your data rights, please contact our Data Protection Officer at privacy@aura-supply.com.',
  },
  'terms-of-supply': {
    title: 'Terms of Supply',
    content:
      'These terms govern the supply of products and services by AURA Supply Co. to business clients. All orders are subject to our standard commercial terms, including minimum order quantities, delivery schedules, and payment conditions. Pricing is quoted in EUR unless otherwise agreed. Disputes shall be resolved under Swiss law with jurisdiction in Zurich.',
  },
  imprint: {
    title: 'Imprint',
    content:
      'AURA Supply Co. AG, Bahnhofstrasse 42, 8001 Zurich, Switzerland. Commercial Register: CHE-123.456.789. Managing Director: [Name]. VAT ID: CHE-123.456.789 MWST. Contact: hello@aura-supply.com, +41 44 500 2020.',
  },
  'cookie-settings': {
    title: 'Cookie Settings',
    content:
      'This website uses essential cookies to ensure proper functionality. Analytics and marketing cookies are only activated with your explicit consent. You may adjust your preferences at any time. Essential cookies cannot be disabled as they are required for core site operations. For detailed information on the cookies we use, please refer to our Privacy Policy.',
  },
};

const LegalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? LEGAL_CONTENT[slug] : undefined;

  if (!page) {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-brand-900 mb-4">Page Not Found</h1>
          <Link to="/" className="text-xs uppercase tracking-widest text-brand-600 border-b border-brand-600 pb-1 hover:text-brand-900 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-50 pt-40 pb-24 px-6">
      <SEOHead
        title={page.title}
        description={page.content.substring(0, 150)}
        path={`/legal/${slug}`}
      />      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-400 mb-12 font-mono">
          <Link to="/" className="hover:text-brand-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-900">{page.title}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-brand-900 mb-12 leading-[0.9]">
          {page.title}
        </h1>

        <div className="prose prose-brand max-w-none">
          <p className="text-brand-600 font-light text-lg leading-relaxed">
            {page.content}
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-200">
          <p className="text-xs text-brand-400">
            Last updated: January 2025. For questions, contact{' '}
            <a href="mailto:hello@aura-supply.com" className="text-brand-600 hover:text-brand-900 transition-colors">
              hello@aura-supply.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
