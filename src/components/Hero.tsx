import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nairobi,skyline')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-bg/80"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-dark-text">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          Discover Nairobi,
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Your Gateway to Africa.
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl">
          Welcome Nairobi, thriving hub for tourism, trade, and innovation.
        </p>
        <div className="flex space-x-4">
          <button className="btn-secondary">
            Partner with us
          </button>
          <button className="btn-primary">
            Explore Nairobi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
