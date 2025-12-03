import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-dark-text py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Visit Nairobi Kenya. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#privacy" className="hover:text-primary-orange transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-primary-orange transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-primary-orange transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
