import React from 'react';
import Header from './Header';
import AttractionCard from './AttractionCard';

const News: React.FC = () => {
  const newsItems = [
    {
      title: 'JUMP at the Hub: Nairobi\'s Playground for Culture and Celebration',
      description: 'Discover how JUMP at the Hub is transforming Nairobi into a vibrant cultural hub with events, art, and community gatherings. March 15, 2024.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'jump-hub'
    },
    {
      title: 'Why You Should Attend the International Comedy Festival',
      description: 'Laugh out loud at Nairobi\'s premier comedy event featuring international and local talents. Get your tickets now! April 5, 2024.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'comedy-festival'
    },
    {
      title: 'The Nairobi Weekend: Unconventional Events to Explore',
      description: 'From street art walks to underground music nights, make the most of your weekend in Nairobi. March 20, 2024.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'nairobi-weekend'
    },
    {
      title: 'Okavango\'s JUMP at the Hub: A Must-Visit Event',
      description: 'Experience the fusion of music and culture at this exciting event in the heart of Nairobi. April 10, 2024.',
      image: 'https://images.unsplash.com/photo-1578631610676-7e0a8b4e9d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'okavango-jump'
    },
    {
      title: 'Karen\'s Playgrounds for the Brave: Adventure Awaits',
      description: 'Thrilling outdoor activities and nature escapes in Karen, perfect for adrenaline seekers. March 25, 2024.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'karen-playgrounds'
    },
    {
      title: 'Nairobi International Film Festival Highlights',
      description: 'Catch the best in African cinema and global stories at this year\'s film fest. May 1, 2024.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'film-festival'
    },
    {
      title: 'Sustainable Tourism Trends in Kenya',
      description: 'Exploring eco-friendly travel options and conservation efforts in Nairobi and beyond. April 15, 2024.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'sustainable-tourism'
    },
    {
      title: 'Top Food Festivals Coming to Nairobi This Year',
      description: 'Savor the flavors of Kenya at these upcoming culinary events. March 30, 2024.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'food-festivals'
    }
  ];

  const featuredNews = newsItems.slice(0, 4); // First 4 as featured
  const latestNews = newsItems.slice(4); // Remaining as latest

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/news.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Latest News</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Stay updated with the latest happenings in Nairobi and Kenya, from events and culture to tourism trends.</p>
            <button className="btn-primary text-lg px-8 py-3">Explore Stories</button>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredNews.map((item) => (
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

      {/* Latest News Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((item) => (
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

export default News;
