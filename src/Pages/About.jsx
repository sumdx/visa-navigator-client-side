import React from 'react';
import cover12 from './../assets/cover12.jpg' 

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
          <div className="flex gap-4">
            <img
              src={cover12}
              alt="About Us"
              className="pb-4 rounded-xl h-96 shadow-lg"
            />
            <img
              src={cover12}
              alt="About Us"
              className="rounded-xl h-96 shadow-lg bg-white"
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


      
    </div>
    );
};

export default About;