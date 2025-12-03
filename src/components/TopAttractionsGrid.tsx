import React from 'react';
import AttractionCard from './AttractionCard';

const TopAttractionsGrid: React.FC = () => {
  const topAttractions = [
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,national-park',
      title: 'Nairobi National Park',
      description: 'Experience wildlife in the heart of the city, home to the Big Five.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?giraffe,centre',
      title: 'Giraffe Centre',
      description: 'Get up close with Rothschild giraffes and learn about conservation.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,museum',
      title: 'National Museum of Kenya',
      description: 'Explore Kenya\'s rich history, art, and cultural heritage.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,david-sheldrick',
      title: 'David Sheldrick Wildlife Trust',
      description: 'Visit orphaned elephants and support wildlife conservation.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,karen-blixen',
      title: 'Karen Blixen Museum',
      description: 'Step into the world of Out of Africa at this historic home.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,uhuru-park',
      title: 'Uhuru Park',
      description: 'A green oasis in the city center, perfect for relaxation and events.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Top Attractions in Nairobi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the must-see sights and experiences that make Nairobi unforgettable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {topAttractions.map((attraction, index) => (
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

export default TopAttractionsGrid;
