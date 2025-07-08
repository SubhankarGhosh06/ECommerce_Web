import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartClick = () => {
    // GA4 tracking event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_cart', {
        event_category: 'ecommerce',
        event_label: 'header_cart_click'
      });
    }
  };

  const handleSearchClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        event_category: 'engagement',
        event_label: 'header_search_click'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <ShoppingCart className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">EliteShop</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#products" className="text-gray-900 hover:text-blue-600 transition-colors duration-200">Products</a>
            <a href="#about" className="text-gray-900 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleSearchClick}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button 
              onClick={handleCartClick}
              className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#products" className="block px-3 py-2 text-gray-900 hover:bg-gray-50">Products</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:bg-gray-50">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;