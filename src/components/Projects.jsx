import React from 'react';
import chalchitra from '../assets/chalchitra.png';
import example from '../assets/example.png'; // Adjust the path as necessary
//added projects data in a constant file so it can be easily displayed and mapped.
const projects = [
  {
    name: 'Chalchitra',
    description: 'A Simple HTML CSS and JavaScript based movie website.',
    github: 'https://github.com/safal-hash/chalchitra',
    image: `${chalchitra}`, // Replace with actual image path or URL
  },
  {
    name: 'Todo List',
    description: 'A React-based todo list with CRUD operations.',
    github: 'https://github.com/example/todo-list',
    image: `${example}`,
  },
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio website built with React and CSS.',
    github: 'https://github.com/example/portfolio-website',
    image:  `${example}`, // Replace with actual image path or URL
  },
];

const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#8693AB]">PROJECTS</h1>
      <ul className="space-y-6">
        {projects.map((project, idx) => (
          <li key={idx} className="flex items-center space-x-6">
            {/* Project Image */}
            <div className="w-32 h-32 flex items-center justify-center rounded-lg border border-gray-300 bg-gray-200 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Project Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#EF626C]">{project.name}</h2>
              <p className="text-[#CBD2D0] mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View on GitHub
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
