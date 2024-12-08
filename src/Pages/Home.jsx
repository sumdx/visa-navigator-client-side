import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import cover6 from "./../assets/cover6.jpg";
import cover7 from "./../assets/cover7.jpg";
import cover8 from "./../assets/cover8.jpg";
import cover9 from "./../assets/cover9.jpg";
import cover10 from "./../assets/cover10.jpg";
import cover11 from "./../assets/cover11.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link, useLoaderData } from "react-router-dom";
import VisaCard from "../Components/VisaCard";

const Home = () => {
    const data = useLoaderData();
   
  return (
    <div>
      <div className="w-full rounded-2xl overflow-hidden">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          swipeable={true}
        >
          <div className="w-full h-[400px] relative">
            <img className="w-full h-[500px] object-cover" src={cover6} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Welcome to Visa Navigation!
              </h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={cover7} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Start your travelling with
                <br />
                Visa Navigator
              </h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={cover10} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Easy to apply, Easy to travel
              </h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={cover9} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Visa Navigator – All in one visa solution!!
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-left text-gray-800 mb-8">
              About Us
            </h2>
            <hr className="w-1/2" />
            <div className="flex flex-col md:flex-row items-center gap-8 border-r pr-4 pt-2 rounded-lg border-b">
              <div className="flex-1 text-center md:text-left">
                <p className="text-4xl mb-6  text-gray-600">
                  <span className="font-semibold">
                    Where is your next destination :{" "}
                  </span>
                  <br />
                  <Typewriter
                    words={["Canada ?", "Australia ?", "New Zealand ?"]}
                    loop={0} // 0 means infinite loop, or you can set a number for limited loops
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </p>
                <p className="text-md font-light text-gray-600 mb-4">
                  Welcome to Visa Navigator! Obtaining a visa is a crucial step
                  for anyone planning to study or travel abroad. It opens doors
                  to new experiences, learning, and opportunities. Whether
                  you're seeking a student visa, work permit, or tourist visa,
                  understanding the process is key.
                </p>
                <p className="text-md font-light text-gray-600 mb-4">
                  For students like me, securing a study visa involves preparing
                  documents like acceptance letters, proof of finances, and
                  personal identification. It's not just a formality; it's a
                  testament to your dedication and readiness to take on the
                  challenges of studying in a different country.
                </p>
                <p className="text-md font-light text-gray-600 mb-4">
                Our experience with the visa application process has taught me the importance of thorough preparation, attention to detail, and timely submission. From gathering the right paperwork to making sure each part of the application is accurate, every step matters.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={cover11}
                  alt="About Us"
                  className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto text-center mt-20 my-20 text-4xl font-bold">
            <h1>Check Our Recent Visa Published</h1>
            <p className="text-lg font-light w-3/4 mx-auto mt-6">Our latest visa application has just been published, streamlining the process and providing more opportunities for applicants to explore new horizons. Stay tuned for updates and details on the new visa program!</p>
        </div>
        <div className="container mx-auto gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                data.map(visa => <VisaCard visa ={visa}></VisaCard>)
            }
        </div>
        <div className="text-center my-16"> 
            <Link className="btn btn-primary" to={"/all-visas"}>See More</Link>
        </div>
        {/* Call to Action Section */}
      <div className="container mx-auto rounded-lg border border-blue-600 mb-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
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
    </div>
  );
};

export default Home;
