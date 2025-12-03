import React from 'react';
import Header from './Header';
import AttractionCard from './AttractionCard';

const WhereToGo: React.FC = () => {
  const hiddenGems = [
    {
      title: 'Beyond the Guidebook',
      description: 'Explore hidden spots that capture Nairobi\'s charm.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'beyond-guidebook'
    },
    {
      title: 'Local Favorites',
      description: 'Skip the tourist guidebook and visit authentic food joints that locals love, from sunset spots to relaxing eateries.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'local-favorites'
    }
  ];

  const foodDrinks = [
    {
      title: 'Motown Bar',
      description: 'Nairobi\'s newest hidden gem.',
      image: 'motown.jpeg',
      id: 'motown-bar'
    },
    {
      title: 'Myna Restaurant',
      description: 'All-day dining venue stylish in the heart of Nairobi.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'myna-restaurant'
    },
    {
      title: 'Meko Restaurant',
      description: 'Contemporary dining within Kweu Nairobi.',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'meko-restaurant'
    }
  ];

  const nightlife = [
    {
      title: 'The Alchemist',
      description: 'Based right in the heart of Nairobi City, the best food.',
      image: '/alchemist.jpeg',
      id: 'the-alchemist'
    },
    {
      title: 'Myna',
      description: 'Restaurant with rainforest canopies.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'myna-nightlife'
    },
    {
      title: '270° Rooftop',
      description: 'Rooftop standout dining destination unique in Nairobi.',
      image:'/270rooftop.jpeg',
      id: '270-rooftop'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      {/* Hero Section for Where to Go */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Where to Go</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Explore unforgettable destinations within Nairobi and beyond.</p>
            <button className="btn-primary text-lg px-8 py-3">Explore Now</button>
          </div>
        </div>
      </section>

      {/* Hidden Gems Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Hidden Gems</h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">Step off the tourist path and discover unique places that even locals haven\'t explored yet.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {hiddenGems.map((gem) => (
              <AttractionCard
                key={gem.id}
                title={gem.title}
                description={gem.description}
                image={gem.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Food & Drinks Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">Food & Drinks</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">Experience our food scene from casual street food to fancy restaurants, rooftop bars, and cozy wine spots.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodDrinks.map((item) => (
              <AttractionCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nightlife & Entertainment Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">Nightlife & Entertainment</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">Explore vibrant nightlife with DJs, music performances, rooftop parties, and live fun.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nightlife.map((item) => (
              <AttractionCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhereToGo;
