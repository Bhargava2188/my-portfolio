import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      name: " Dice Roller",
      link: "https://bhargava2188.github.io/Dice-Roller/",
    },
    {
      name: " Temperature Converter",
      link: "https://bhargava2188.github.io/Temperature-Converter/",
    },
    {
      name: " Number Guessing Game",
      link: "https://bhargava2188.github.io/Number-Guessing/",
    },
  ];

  return (
    <div className="portfolio">
      <h2>My JavaScript Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
