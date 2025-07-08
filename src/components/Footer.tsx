import React from 'react';
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';

const Footer = () => {
  const handleOutboundLink = (platform: string, url: string) => {
    // GA4 tracking event for outbound links
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'outbound_link',
        event_label: platform,
        transport_type: 'beacon'
      });
    }
    
    // Open link in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFooterLinkClick = (linkName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'footer_link',
        event_label: linkName
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EliteShop</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner for premium electronics and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleOutboundLink('facebook', 'https://facebook.com/eliteshop')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleOutboundLink('twitter', 'https://twitter.com/eliteshop')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleOutboundLink('instagram', 'https://instagram.com/eliteshop')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleOutboundLink('youtube', 'https://youtube.com/eliteshop')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  onClick={() => handleFooterLinkClick('products')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleFooterLinkClick('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleFooterLinkClick('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={() => handleFooterLinkClick('careers')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#help"
                  onClick={() => handleFooterLinkClick('help_center')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  onClick={() => handleFooterLinkClick('shipping_info')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  onClick={() => handleFooterLinkClick('returns')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#warranty"
                  onClick={() => handleFooterLinkClick('warranty')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Partners & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners & Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleOutboundLink('tech_partner', 'https://techpartner.com')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  Tech Partner
                  <ExternalLink className="h-4 w-4" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOutboundLink('manufacturer', 'https://manufacturer.com')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  Manufacturer Portal
                  <ExternalLink className="h-4 w-4" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOutboundLink('affiliate', 'https://affiliate.eliteshop.com')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  Affiliate Program
                  <ExternalLink className="h-4 w-4" />
                </button>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={() => handleFooterLinkClick('privacy_policy')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EliteShop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#terms"
                onClick={() => handleFooterLinkClick('terms_of_service')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#privacy"
                onClick={() => handleFooterLinkClick('privacy_policy')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#cookies"
                onClick={() => handleFooterLinkClick('cookie_policy')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;