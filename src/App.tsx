import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import VideoSection from './components/VideoSection';
import NewsletterSection from './components/NewsletterSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <VideoSection />
      <NewsletterSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;