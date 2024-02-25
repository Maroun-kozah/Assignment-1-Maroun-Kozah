// Home.jsx
import React from 'react';
import homeImage from '../../public/images/Home.jpg';

function Home() {
  return (
    <div id="home" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={homeImage} alt="Home" className="mb-4 rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Drift Cars Project</h2>
            <p className="text-lg mb-4">This is the home page of our drift cars project website. Here you can find all the latest information and updates about our drift cars projects.</p>
            <p className="text-lg">Check out our <a href="#projects" className="text-blue-500 hover:underline">projects</a> to see our latest builds!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
