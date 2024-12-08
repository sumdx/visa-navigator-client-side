import React from 'react';

const About = () => {
    return (
        <div className="about-page">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            We are dedicated to providing exceptional service and making a difference in the world.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto my-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="about-image">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-xl shadow-lg"
            />
          </div>
          {/* Content */}
          <div className="about-content">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600">
              We are a team of passionate individuals committed to providing the best solutions for our customers. 
              Our mission is to innovate, inspire, and make a positive impact in everything we do.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              With years of experience in the industry, we have built a strong reputation for excellence, quality, 
              and trustworthiness.
            </p>
          </div>
        </div>
      </div>


      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-lg mb-8">
            Join us on our journey to innovate, inspire, and make a difference.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    );
};

export default About;