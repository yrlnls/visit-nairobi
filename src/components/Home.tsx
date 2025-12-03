import React from 'react';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';
import AttractionsGrid from './AttractionsGrid';
import EventsSection from './EventsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Hero />
      <FeaturedSection />
      <AttractionsGrid />
      <EventsSection />
    </div>
  );
};

export default Home;
