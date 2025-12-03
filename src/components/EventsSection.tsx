import React from 'react';
import AttractionCard from './AttractionCard';

const EventsSection: React.FC = () => {
  const events = [
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,festival',
      title: 'Cultural Festival',
      description: 'Join the vibrant cultural festival celebrating Nairobi\'s heritage.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,conference',
      title: 'Business Conference',
      description: 'Network at the leading business conference in East Africa.',
    },
    {
      image: 'https://source.unsplash.com/400x300/?nairobi,workshop',
      title: 'Innovation Workshop',
      description: 'Participate in workshops on innovation and technology.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest festivals, conferences, and cultural events.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <AttractionCard
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
