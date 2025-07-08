import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const handleShopNowClick = () => {
    // GA4 tracking event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'cta',
        event_label: 'hero_shop_now',
        value: 1
      });
    }
  };

  const handleWatchVideoClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'play_video', {
        event_category: 'engagement',
        event_label: 'hero_video_play'
      });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Premium
              <span className="text-blue-600 block">Electronics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Experience the latest in technology with our curated collection of premium electronics. 
              From smartphones to smart home devices, we have everything you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleShopNowClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={handleWatchVideoClick}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium Electronics"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 transform animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;