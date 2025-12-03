import React from 'react';
import AttractionCard from './AttractionCard';

const FeaturedSection: React.FC = () => {
  const featuredItems = [
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,attractions',
      title: 'Top Attractions',
      description: 'Discover Nairobi\'s must-see iconic landmarks to hidden gems.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,events',
      title: 'Upcoming Events',
      description: 'Stay updated with festivals, conferences, cultural events.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,networking',
      title: 'Connect Insights',
      description: 'Experience diverse culture, thriving business opportunities.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Featured</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Nairobi's top attractions, innovation, and community stories.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <AttractionCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
