import React, { useState } from 'react';
import { Mail, Download, FileText } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // GA4 tracking event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: 'newsletter_form',
        value: 1
      });
    }
    
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleDownloadCatalog = () => {
    // GA4 tracking event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_download', {
        event_category: 'engagement',
        event_label: 'product_catalog',
        file_name: 'product-catalog.pdf'
      });
    }
    
    // Simulate file download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFByb2R1Y3QgQ2F0YWxvZykKL0NyZWF0b3IgKEVsaXRlU2hvcCkKL1Byb2R1Y2VyIChFbGl0ZVNob3ApCi9TdWJqZWN0IChQcm9kdWN0IENhdGFsb2cpCj4+CmVuZG9iagp4cmVmCjAgMQowMDAwMDAwMDAwIDY1NTM1IGYgCnRyYWlsZXIKPDwKL1NpemUgMQovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKOTQKJSVFT0Y=';
    link.download = 'product-catalog.pdf';
    link.click();
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Deals
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals, product updates, and tech insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Newsletter Signup</h3>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="marketing"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="marketing" className="text-sm text-gray-600">
                  I agree to receive marketing emails and promotional offers
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Download Section */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Download className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Download Resources</h3>
              </div>
              
              <p className="text-blue-100 mb-6">
                Get instant access to our product catalog, user manuals, and technical specifications
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleDownloadCatalog}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Download Product Catalog (PDF)
                </button>
                
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'file_download', {
                        event_category: 'engagement',
                        event_label: 'user_manual',
                        file_name: 'user-manual.pdf'
                      });
                    }
                  }}
                  className="w-full bg-transparent border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Download User Manual
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;