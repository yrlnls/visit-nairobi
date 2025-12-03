import React from 'react';
import TopAttractionsGrid from './TopAttractionsGrid';

const TopAttractions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Top Attractions</h1>
        <TopAttractionsGrid />
      </div>
    </div>
  );
};

export default TopAttractions;
