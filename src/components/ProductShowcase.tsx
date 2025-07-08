import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Audio"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Wearable"
    },
    {
      id: 3,
      name: "Smartphone",
      price: 799,
      originalPrice: 899,
      rating: 4.9,
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile"
    },
    {
      id: 4,
      name: "Laptop",
      price: 1299,
      originalPrice: 1499,
      rating: 4.7,
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Computing"
    }
  ];

  const handleAddToCart = (product: any) => {
    // GA4 tracking event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'add_to_cart', {
        event_category: 'ecommerce',
        event_label: product.name,
        value: product.price,
        currency: 'USD',
        items: [{
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: 1
        }]
      });
    }
  };

  const handleViewProduct = (product: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        event_category: 'ecommerce',
        event_label: product.name,
        value: product.price,
        currency: 'USD',
        items: [{
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price
        }]
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium electronics with exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    Sale
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleViewProduct(product)}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
                  >
                    <Eye className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                </div>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;