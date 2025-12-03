import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AttractionCard from './AttractionCard';

const ListYourBusiness: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Business Listing Submission:', formData);
    alert('Business listing submitted! (Check console for details)');
  };

  const categories = [
    {
      title: 'Places to Visit',
      description: 'Attractions, landmarks, and cultural sites that draw tourists to Nairobi.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'places-to-visit'
    },
    {
      title: 'Bars and Restaurants',
      description: 'Dining spots from fine dining to street food, showcasing Nairobi\'s culinary scene.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'bars-restaurants'
    },
    {
      title: 'Experiences',
      description: 'Unique adventures, tours, and activities for memorable Nairobi visits.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'experiences'
    },
    {
      title: 'Explore',
      description: 'Guided explorations and hidden gems beyond the usual tourist paths.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      id: 'explore'
    }
  ];

  const benefits = [
    {
      title: 'Reach New Customers',
      description: 'Connect with thousands of locals and visitors searching for top spots in Nairobi.',
      id: 'reach-customers'
    },
    {
      title: 'Boost Visibility',
      description: 'Get featured on our platform to increase your business exposure and foot traffic.',
      id: 'boost-visibility'
    },
    {
      title: 'Grow Your Business',
      description: 'Leverage targeted listings to attract more clients and expand your reach.',
      id: 'grow-business'
    },
    {
      title: 'Local Engagement',
      description: 'Engage with the community and showcase your unique offerings to authentic audiences.',
      id: 'local-engagement'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Grow & Put Your Business on the Map</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Be seen by thousands of locals and visitors searching for the best places to stay, eat, drink, and experience Nairobi and Kenya.</p>
            <button className="btn-primary text-lg px-8 py-3" onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Listed Today
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">Discover the Best of Nairobi & Kenya – All in One Place</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto">Visit Nairobi is your ultimate guide to exploring the vibrant city and beyond. From iconic landmarks to hidden gems, find everything you need for an unforgettable trip.</p>
          <img 
            src="https://images.unsplash.com/photo-1578631610676-7e0a8b4e9d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Nairobi skyline" 
            className="mx-auto rounded-lg shadow-lg max-w-4xl"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Why List Your Business with Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Reach Audiences in These Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <AttractionCard
                key={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Basic', price: 'KSh 10,000', popular: false, features: ['1 year listing', 'Basic submission', 'Limited support'], id: 'basic' },
              { title: 'Standard', price: 'KSh 25,000', popular: true, features: ['1 year listing', 'Featured submission', 'Priority support', 'Social media boost'], id: 'standard' },
              { title: 'Premium', price: 'KSh 50,000', popular: false, features: ['1 year listing', 'Premium submission', 'Dedicated support', 'Homepage feature', '1 blog post'], id: 'premium' },
              { title: 'Ultimate', price: 'KSh 100,000', popular: false, features: ['1 year listing', 'Ultimate submission', 'Dedicated support', 'Homepage feature', 'Social media campaign', 'Newsletter inclusion', '1 blog post'], id: 'ultimate' }
            ].map((plan) => (
              <div key={plan.id} className={`bg-gray-800 p-6 rounded-lg text-center border-2 ${plan.popular ? 'border-orange-500 bg-orange-900/20' : 'border-gray-600'}`}>
                {plan.popular && <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm mb-4">Most Popular</span>}
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-heading font-bold text-orange-400 mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    console.log(`Selected ${plan.title} plan`);
                    alert(`Selected ${plan.title} plan! (Check console for details)`);
                  }}
                  className="w-full btn-primary py-3"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Listing my restaurant on Visit Nairobi has brought in so many new customers. The visibility is incredible!',
                author: 'Jane Doe',
                business: 'Mama\'s Kitchen',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                id: '1'
              },
              {
                quote: 'The premium plan helped us feature our hotel on the homepage. Bookings have doubled since then!',
                author: 'John Smith',
                business: 'Nairobi Heights Hotel',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                id: '2'
              },
              {
                quote: 'Great support and easy submission process. Our tour company is now reaching international visitors.',
                author: 'Aisha Kenya',
                business: 'Safari Adventures Ltd',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                id: '3'
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-center">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-400">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="form-section" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Get Listed Today</h2>
          <p className="text-center mb-8 text-gray-300">Fill out the form below to start showcasing your business to thousands of visitors.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Business Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-2">Business Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
              >
                <option value="">Select a category</option>
                <option value="hotel">Hotel/Accommodation</option>
                <option value="restaurant">Restaurant/Bar</option>
                <option value="attraction">Attraction/Experience</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                placeholder="Tell us about your business..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Contact Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
              />
            </div>
            <button type="submit" className="w-full btn-primary py-3 text-lg">
              Submit Listing
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListYourBusiness;
