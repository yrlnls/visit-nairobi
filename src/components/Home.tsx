import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';
import AttractionsGrid from './AttractionsGrid';
import EventsSection from './EventsSection';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      <Hero />
      <FeaturedSection />
      <AttractionsGrid />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Home;
