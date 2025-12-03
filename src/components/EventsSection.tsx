import React from 'react';
import AttractionCard from './AttractionCard';

const EventsSection: React.FC = () => {
  const events = [
    {
      image: '/cultural.jpg',
      title: 'Cultural Festival',
      description: 'Join the vibrant cultural festival celebrating Nairobi\'s heritage.',
    },
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      title: 'Business Conference',
      description: 'Network at the leading business conference in East Africa.',
    },
    {
      image: '/alchemist.jpeg',
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
