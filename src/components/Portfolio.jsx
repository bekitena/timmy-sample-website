import React from 'react';
import './Portfolio.css';
import proj1 from '../../public/assets/project1.jpg';
import proj2 from '../../public/assets/project2.jpg';

let nextId = 1;

const portfolioProjects = [
  { id: nextId++, name: "Luxury Branding Website", description: "A full website redesign for a high-end cosmetics brand.", image: proj1, link: "https://www.loreal.com/en/beauty-science-and-technology/beauty-research-and-innovation/" },
  { id: nextId++, name: "E-commerce Product Page", description: "Interactive product showcase with image gallery and animations.", image: proj2, link: "https://craft.co/loreal/locations" },
  { id: nextId++, name: "Portfolio Landing Page", description: "A clean and aesthetic landing page to display creative projects.", image: "assets/wikipedia-logo.png", link: "https://en.wikipedia.org/wiki/L%27Or%C3%A9al" }
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
