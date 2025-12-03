import React from 'react';

const Safaris: React.FC = () => {
  const safaris = [
    {
      id: 1,
      title: 'Nairobi National Park Full Day Safari',
      description: 'A convenient full-day safari in Nairobi National Park, where you can see the Big Five animals including lions, elephants, and rhinos, all within close proximity to the city.',
      duration: 'Full Day',
      price: 'Starting from KES 8,000',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      highlights: ['Big Five sighting', 'Guided tour', 'Hotel pickup']
    },
    {
      id: 2,
      title: 'Maasai Mara 2-Day Safari',
      description: 'Experience the world-famous Maasai Mara with an overnight stay, witnessing the Great Migration and abundant wildlife in the savannah plains.',
      duration: '2 Days / 1 Night',
      price: 'Starting from KES 25,000',
      image: '/nationalpark2.jpg',
      highlights: ['Great Migration', 'Cultural Maasai visit', 'Luxury tented camp']
    },
    {
      id: 3,
      title: 'Amboseli National Park Day Trip',
      description: 'Journey to Amboseli for stunning views of Mount Kilimanjaro and large elephant herds roaming the park.',
      duration: 'Full Day',
      price: 'Starting from KES 12,000',
      image: '/nationalpark.jpg',
      highlights: ['Elephant herds', 'Kilimanjaro backdrop', 'Bird watching']
    },
    {
      id: 4,
      title: 'Tsavo East & West Combined Safari',
      description: 'Explore the vast Tsavo parks known for their red elephants, diverse landscapes, and unique wildlife experiences.',
      duration: '3 Days / 2 Nights',
      price: 'Starting from KES 35,000',
      image: '/nationalpark2.jpg',
      highlights: ['Red elephants', 'Mzima Springs', 'Diverse ecosystems']
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section - Inspired by tourism sites: Large banner with overlay text */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/nationalpark.jpg')" }}> {/* Savanna background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              Nairobi Safaris
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover Kenya's incredible wildlife adventures starting from Nairobi. From urban parks to remote reserves, embark on thrilling safaris tailored for every traveler.
            </p>
            <button className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Book Your Safari
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-dark-text font-heading">
            Why Safari with Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our expert-guided safaris offer safe, comfortable, and authentic experiences. Whether you're a first-time visitor or seasoned explorer, we ensure unforgettable moments in Kenya's premier wildlife destinations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🦁</div>
              <h3 className="text-xl font-semibold mb-2">Big Five Sightings</h3>
              <p className="text-gray-600">Guaranteed encounters with lions, leopards, elephants, buffaloes, and rhinos.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Transport</h3>
              <p className="text-gray-600">Air-conditioned vehicles with pop-up roofs for optimal viewing.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍✈️</div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Knowledgeable rangers sharing insights on flora, fauna, and culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safaris Packages Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark-text font-heading">
            Our Safari Packages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safaris.map((safari) => (
              <div key={safari.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative">
                  <img 
                    src={safari.image} 
                    alt={safari.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="relative z-10 text-white text-center flex items-center justify-center h-full px-4">
                    <h3 className="text-xl font-bold">{safari.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{safari.description}</p>
                  <ul className="text-sm text-gray-500 mb-4 space-y-1">
                    {safari.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-orange rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-primary-orange">{safari.duration}</p>
                    <p className="text-2xl font-bold text-dark-text">{safari.price}</p>
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
            Ready for Your Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to customize your perfect safari experience. Limited spots available!
          </p>
          <button className="bg-white hover:bg-gray-100 text-primary-orange px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Safaris;
