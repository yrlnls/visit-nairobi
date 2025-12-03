import React from 'react';

const AdventureActivities: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: 'Bungee Jumping at Nairobi Dam',
      description: 'Leap into adrenaline with a thrilling bungee jump over the scenic Nairobi Dam, offering stunning views and an unforgettable rush.',
      duration: 'Half Day',
      price: 'Starting from KES 5,000',
      image: '/skydiving.jpeg',
      highlights: ['Professional instructors', 'Safety equipment', 'Scenic views']
    },
    {
      id: 2,
      title: 'Ngong Hills Hiking',
      description: 'Trek through the iconic Ngong Hills, famous from "Out of Africa," with panoramic views and moderate trails suitable for all levels.',
      duration: 'Full Day',
      price: 'Starting from KES 3,500',
      image: '/park3.jpg',
      highlights: ['Guided hike', 'Picnic lunch', 'Wildlife spotting']
    },
    {
      id: 3,
      title: 'Hot Air Balloon Safari',
      description: 'Soar above the Masai Mara at dawn in a hot air balloon, witnessing wildlife from the skies in a serene and magical experience.',
      duration: 'Half Day',
      price: 'Starting from KES 45,000',
      image: '/hotairbaloon.jpeg',
      highlights: ['Champagne breakfast', 'Aerial views', 'Expert pilot']
    },
    {
      id: 4,
      title: 'White Water Rafting on Tana River',
      description: 'Navigate rapids on the Tana River for an exhilarating rafting adventure, combining teamwork and excitement in Kenya\'s wild waters.',
      duration: 'Full Day',
      price: 'Starting from KES 6,000',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      highlights: ['Class III rapids', 'Safety briefing', 'Post-raft BBQ']
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/ziplining.jpeg')" }}> {/* Pexels: Adventure jumping background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              Adventure Activities
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Fuel your spirit with thrilling outdoor challenges from heart-pumping excursions to hands-on exploration that push the limits.
            </p>
            <button className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Book Your Adventure
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-dark-text font-heading">
            Why Choose Adventure?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Dive into Kenya's rugged landscapes with safe, exhilarating activities led by experts. Perfect for adrenaline seekers and nature lovers alike.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">Certified gear and trained professionals ensure a secure experience.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Pure Thrill</h3>
              <p className="text-gray-600">Heart-racing activities that create lasting memories.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Local knowledge for an authentic and immersive adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Packages Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark-text font-heading">
            Our Adventure Packages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="relative z-10 text-white text-center flex items-center justify-center h-full px-4">
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <ul className="text-sm text-gray-500 mb-4 space-y-1">
                    {activity.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-orange rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-primary-orange">{activity.duration}</p>
                    <p className="text-2xl font-bold text-dark-text">{activity.price}</p>
                  </div>
                  <button className="w-full bg-primary-orange hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-orange text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 font-heading">
            Ready for Thrills?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to book your adventure and push your limits. Spots fill up fast!
          </p>
          <button className="bg-white hover:bg-gray-100 text-primary-orange px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdventureActivities;
