import React from 'react';
import AttractionCard from './AttractionCard';

const ThingsToDo: React.FC = () => {
  const activities = [
    {
      title: 'White Water Rafting',
      description: 'Experience the thrill of navigating the rapids on Nairobi\'s rivers with professional guides.',
      image: '/whitewaterrafting.jpeg',
      id: 'white-water-rafting'
    },
    {
      title: 'Skydiving',
      description: 'Soar above the city and savannas for an unforgettable adrenaline rush.',
      image: '/skydiving.jpeg',
      id: 'skydiving'
    },
    {
      title: 'Zip Lining',
      description: 'Glide through the treetops and enjoy stunning views of the landscape.',
      image: '/ziplining.jpeg',
      id: 'zip-lining'
    },
    {
      title: 'Hot Air Balloon Safari',
      description: 'Witness the wildlife from above in a serene hot air balloon ride at dawn.',
      image: '/hotairbaloon.jpeg',  
      id: 'hot-air-balloon'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section for Things to Do */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Adventure Activities</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Find your next exciting adventure. Try thrilling activities like skydiving or zip lining for an unforgettable experience.</p>
            <button className="btn-primary text-lg px-8 py-3">Get Started</button>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Featured Adventures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity) => (
              <AttractionCard
                key={activity.id}
                title={activity.title}
                description={activity.description}
                image={activity.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThingsToDo;
