// AboutMe.jsx
import React from 'react';

function AboutMe() {
  return (
    <div  id="about" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-4">I've been passionate about cars and automotive accessories since I was a kid. My fascination with the roar of engines and the thrill of speed led me to pursue a career in the automotive industry.</p>
          <p className="text-lg mb-4">Over the years, I've gained extensive knowledge and experience in various aspects of car modification and customization. From performance upgrades to aesthetic enhancements, I've delved deep into the world of automotive engineering and design.</p>
          <p className="text-lg">Whether it's fine-tuning the engine for optimal performance or installing the latest accessories to enhance the look and feel of a vehicle, I'm dedicated to pushing the boundaries of what's possible in the world of automotive customization.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
