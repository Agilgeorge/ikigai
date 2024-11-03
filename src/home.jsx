import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // If you prefer a different carousel, let me know!
import 'bootstrap/dist/css/bootstrap.min.css'; // Keep this if you're using react-bootstrap for the carousel

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="my-8">
        <img src={"ikigailogo"} alt="Ikigai Logo" className="w-32 h-auto" />
      </div>

      {/* Carousel for Definitions */}
      <div className="w-full max-w-lg">
        <Carousel>
          <Carousel.Item>
            <div className="text-center p-4">
              <h3 className="text-2xl font-bold">Ikigai</h3>
              <p className="text-gray-700 mt-2">
                Your reason for being; a harmonious balance between what you love, what you’re good at,
                what the world needs, and what you can be paid for.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center p-4">
              <h3 className="text-2xl font-bold">Kaizen</h3>
              <p className="text-gray-700 mt-2">
                Continuous improvement; a philosophy that encourages constant, incremental progress in all
                areas of life.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Get Started Button */}
      <div className="mt-8">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
