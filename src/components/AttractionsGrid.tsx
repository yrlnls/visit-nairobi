import React from 'react';
import AttractionCard from './AttractionCard';

const AttractionsGrid: React.FC = () => {
  const attractions = [
    {
      image: '/kicc.jpg',
      title: 'Iconic Landmarks',
      description: 'Visit the famous landmarks that define Nairobi\'s skyline.',
    },
    {
      image: '/nationalpark.jpg',
      title: 'National Parks',
      description: 'Explore wildlife and nature in Nairobi\'s national parks.',
    },
    {
      image: '/museum2.jpeg',
      title: 'Cultural Museums',
      description: 'Discover history and culture through Nairobi\'s museums.',
    },
    {
      image: '/market.jpg',
      title: 'Local Markets',
      description: 'Experience vibrant markets and local crafts.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Explore Nairobi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With Nairobi, experience endless possibilities from unforgettable landscapes and groundbreaking innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={index}
              image={attraction.image}
              title={attraction.title}
              description={attraction.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsGrid;
