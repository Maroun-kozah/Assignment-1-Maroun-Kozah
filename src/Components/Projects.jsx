import React, { useState } from 'react';
import project1Image from '../../public/images/project1.jpeg';
import project2Image from '../../public/images/project2.png';
import project3Image from '../../public/images/project3.jpeg';

function Projects() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleMouseEnter = (image) => {
    setEnlargedImage(image);
  };

  const handleMouseLeave = () => {
    setEnlargedImage(null);
  };

  return (
    <div id="projects" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Drift Cars Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            image={project1Image}
            title="BMW"
            description="BMW E46 Suspension."
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            enlargedImage={enlargedImage}
          />
          <ProjectCard
            image={project2Image}
            title="NISSAN"
            description="NISSAN GTR R34 hand break."
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            enlargedImage={enlargedImage}
          />
          <ProjectCard
            image={project3Image}
            title="GOLF"
            description="GOLF GTI MK5 Suspension."
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            enlargedImage={enlargedImage}
          />
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ image, title, description, onMouseEnter, onMouseLeave, enlargedImage }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => {
        onMouseEnter(image);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        onMouseLeave();
        setIsHovering(false);
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      {enlargedImage === image && isHovering && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <img src={image} alt={`Enlarged ${title}`} className="max-w-full max-h-full" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Projects;
