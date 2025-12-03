import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AttractionCard from './AttractionCard';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Meet us at Cannes',
      description: 'Cannes Lions International Festival of Creativity 2025, June 17-20, 2025, Cannes, France. This year, Visit Nairobi will be attending the Cannes Lions International Festival of Creativity 2025, the world\'s first-of-its-kind festival. Nairobi\'s creative, innovative, and just a tourism destination strategy during Cannes Lions, our teams will host strategic networking sessions, insightful teams, and host coffee sharings. Nairobi\'s bold new narrative with the world\'s top marketers, creatives, and decision-makers.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'cannes-lions'
    },
    {
      title: 'Nairobi Tech Summit',
      description: 'Nairobi Tech Summit 2025, March 10-12, 2025, Kenyatta International Convention Centre. Join innovators, startups, and tech leaders for workshops, keynotes, and networking on emerging technologies and digital transformation in East Africa.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'nairobi-tech-summit'
    },
    {
      title: 'Cultural Heritage Festival',
      description: 'Nairobi Cultural Heritage Festival 2025, April 20-22, 2025, Uhuru Park. Celebrate Nairobi\'s diverse cultures through music, dance, art exhibitions, and traditional food stalls showcasing Kenya\'s rich heritage.',
      image: 'https://images.unsplash.com/photo-1578631610676-7e0a8b4e9d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'cultural-heritage'
    },
    {
      title: 'East Africa Music Awards',
      description: 'East Africa Music Awards 2025, May 15, 2025, Bomas of Kenya. An evening of stellar performances by top African artists, honoring excellence in music across the region with live concerts and awards.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'eama'
    },
    {
      title: 'Nairobi International Art Fair',
      description: 'Nairobi International Art Fair 2025, July 5-7, 2025, Nairobi National Museum. Explore contemporary African art, installations, and artist talks in one of East Africa\'s premier art events.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'nairobi-art-fair'
    },
    {
      title: 'Business Innovation Expo',
      description: 'Business Innovation Expo 2025, August 25-27, 2025, KICC. Connect with entrepreneurs, investors, and industry experts through panels, demos, and pitch sessions focused on sustainable business growth.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'business-expo'
    }
  ];

  const pastEvents = [
    {
      title: 'UNGA "Gateway to Africa"',
      description: 'September 20-23, 2024, Times Square, New York. The UNGA "Gateway to Africa" reception, hosted by Visit Nairobi in collaboration with the United Nations General Assembly High Level Week, was held on September 25, 2024, at Times Square, New York.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'unga-gateway'
    },
    {
      title: 'Nairobi Innovation Week',
      description: 'November 12-16, 2024, Nairobi Tech Hub. Nairobi Innovation Week 2024 brought together tech enthusiasts, entrepreneurs, and investors for a week of workshops, hackathons, and networking events focused on driving innovation in East Africa.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'nairobi-innovation-week'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      {/* Hero Section for Events */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519452634762-1d9d7a5b4b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Events</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">From premier Nairobi-curated events to global summits, tech shows, attend moments that must-see and feel the city\'s energy, one celebration at a time.</p>
            <button className="btn-primary text-lg px-8 py-3">Discover Events</button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <AttractionCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Past Events</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <AttractionCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
