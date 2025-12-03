import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-dark-bg text-dark-text z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-heading font-bold text-primary-orange">
          Nairobi
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-dark-text hover:text-primary-orange transition-colors">Home</Link>
          <div className="relative group">
          <Link to="/things-to-do" className="text-dark-text hover:text-primary-orange transition-colors">Things to do</Link>
           <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <li><Link to="/top-attractions" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Top Attractions</Link></li>
              <li><Link to="/safaris" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Safaris</Link></li>
              <li><Link to="/adventure-activities" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Adventure Activities</Link></li>
              <li><Link to="/experiences" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Experiences</Link></li>
              <li><Link to="/places-to-visit" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Places to Visit</Link></li>
              <li><Link to="/real-estate" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/startups" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Startups</Link></li>
              <li><Link to="/accelerators" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Accelerators</Link></li>
            </ul>
          </div>
          <div className="relative group">
            <Link to="/where-to-go" className="text-dark-text hover:text-primary-orange transition-colors inline-block">Where to Go</Link>
            <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <li><Link to="/hidden-gems" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Hidden Gems</Link></li>
              <li><Link to="/art-and-music" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Art, Music & Cultural Experiences</Link></li>
              <li><Link to="/history-and-education" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">History & Education</Link></li>
              <li><Link to="/wellness-and-relaxation" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Wellness & Relaxation</Link></li>
              <li><Link to="/nightlife-and-entertainment" className="block px-4 py-2 text-gray-800 hover:bg-primary-orange hover:text-white transition-colors">Nightlife & Entertainment</Link></li>
            </ul>
          </div>
          <Link to="/events" className="text-dark-text hover:text-primary-orange transition-colors">Events</Link>
          <Link to="/list-business" className="text-dark-text hover:text-primary-orange transition-colors">List Your Business</Link>
          <Link to="/news" className="text-dark-text hover:text-primary-orange transition-colors">News</Link>
        </nav>
        
        {/* Search and Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-dark-text hover:text-primary-orange">
            {/* Search Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="btn-primary">
            Explore
          </button>
          <button className="btn-secondary">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
