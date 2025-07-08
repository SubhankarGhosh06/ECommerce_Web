import React, { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    // GA4 tracking event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', isPlaying ? 'video_pause' : 'video_play', {
        event_category: 'engagement',
        event_label: 'product_demo_video',
        video_title: 'Product Demo Video'
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our Products in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our comprehensive product demonstration and discover why customers love our electronics
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="h-12 w-12 text-white" />
                  ) : (
                    <Play className="h-12 w-12 text-white ml-2" />
                  )}
                </button>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="text-white hover:text-gray-300">
                    <Volume2 className="h-5 w-5" />
                  </button>
                  <span className="text-white text-sm">2:34 / 5:42</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-32 h-1 bg-white bg-opacity-30 rounded-full">
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;