import React from 'react';
import me from'../assets/me.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-12 px-4">
      <img
        src={me}
        alt="Safal"
        className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover mb-6 md:mb-0 md:mr-8 shadow-lg"
      />
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hi there; I am <span className="text-[#EF626C]">Safal.</span>
        </h1>
        <p className="text-lg mb-6 font-medium">
          I am a <span className="text-[#EF626C]">design</span> enthusiast with a passion for creating beautiful and functional user experiences.
          <br />
          Welcome to my portfolio website, where you can explore my work and learn more about me.
        </p>
        <div className="mt-4 flex justify-center md:justify-start space-x-6">
          <Link to="/about" className="hover:text-[#EF626C] font-bold">
            About Me
          </Link>
          <Link to="/contact" className="hover:text-[#EF626C] font-bold">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
