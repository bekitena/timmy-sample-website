import React from 'react';
import './Portfolio.css';

const portfolioProjects = [
  {
    id: 1,
    name: "Luxury Branding Website",
    description: "A full website redesign for a high-end cosmetics brand.",
    image: "/timmy-sample-website/assets/project1.png",
    link: "https://www.loreal.com/en/beauty-science-and-technology/beauty-research-and-innovation/"
  },
  {
    id: 2,
    name: "E-commerce Product Page",
    description: "Interactive product showcase with image gallery and animations.",
    image: "/timmy-sample-website/assets/project2.png",
    link: "https://craft.co/loreal/locations"
  },
  {
    id: 3,
    name: "Portfolio Landing Page",
    description: "A clean and aesthetic landing page to display creative projects.",
    image: "/timmy-sample-website/assets/wikipedia-logo.png",
    link: "https://en.wikipedia.org/wiki/L%27Or%C3%A9al"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>L'Oréal's Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioProjects.map(project => (
          <div key={project.id} className="portfolio-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
              <hr className='line' />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
