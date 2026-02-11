import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
          Begin the Conversation.
        </h2>
        <p className="text-brand-500 mb-12 max-w-lg mx-auto">
          Contact us for bulk orders, custom quotations, and tailored B2B solutions.
        </p>

        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-brand-400 mb-2">Name</label>
              <input type="text" className="w-full border-b border-brand-200 py-3 focus:border-brand-900 focus:outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-brand-400 mb-2">Company</label>
              <input type="text" className="w-full border-b border-brand-200 py-3 focus:border-brand-900 focus:outline-none transition-colors" placeholder="Hotel Group / Hospital" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-400 mb-2">Email</label>
            <input type="email" className="w-full border-b border-brand-200 py-3 focus:border-brand-900 focus:outline-none transition-colors" placeholder="email@company.com" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-400 mb-2">Inquiry Details</label>
            <textarea className="w-full border-b border-brand-200 py-3 focus:border-brand-900 focus:outline-none transition-colors resize-none h-32" placeholder="Tell us about your volume requirements..."></textarea>
          </div>
          <div className="pt-6 text-center">
            <button className="bg-brand-900 text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-brand-800 transition-all duration-300">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
