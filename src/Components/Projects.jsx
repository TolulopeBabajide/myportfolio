import React, { useState } from 'react';

const Projects = (props) => {
  const [hoveredImages, setHoveredImages] = useState({});

  // Function to handle mouse enter and set the hover state for a specific item
  const handleMouseEnter = (id) => {
    setHoveredImages((prevImages) => ({
      ...prevImages,
      [id]: true,
    }));
  };

  // Function to handle mouse leave and reset the hover state for a specific item
  const handleMouseLeave = (id) => {
    setHoveredImages((prevImages) => ({
      ...prevImages,
      [id]: false,
    }));
  };

  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="flex justify-evenly">
        {props.projectLink.map((data) => (
          <div
            key={data.id}
            className="w-44 border-gray-300 h-32 text-center border-2 relative"
            onMouseEnter={() => handleMouseEnter(data.id)}
            onMouseLeave={() => handleMouseLeave(data.id)}
          >
            <h3>{data.name}</h3>
            <img
              src={hoveredImages[data.id] ? data.hover : data.image}
              alt=""
              className="w-full h-full object-cover transition duration-300 ease-in-out"
            />
            <a className="rounded-full bg-slate-800 text-white p-1 text-xs" href={data.link}>
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
