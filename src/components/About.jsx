import React from 'react';
import resume from '../assets/safal.pdf'; // Adjust the path as necessary  
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-[#8693AB] mb-6 text-center">About Me</h1>
        <p className="text-lg mb-4 text-center">
          Hi, I’m <span className="font-semibold text-[#EF626C]">Safal Tiwari;</span> a passionate and evolving UI/UX designer currently pursuing my studies in software development @ <span className="font-semibold text-[#EF626C]">Centennial College</span>. With a deep interest in web technologies, machine learning, and data science, I’m on a journey to bring curiosity into life.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#8693AB] mb-2">Education & Skills</h2>
          <p className="mb-2">
            I’m currently studying a range of courses including Web Application Development, and working with databases like MySQL and MongoDB. I love experimenting with tools like <span className="font-medium text-[#EF626C]">React</span>, <span className="font-medium text-[#EF626C]">Tailwind CSS</span>, and <span className="font-medium text-[#EF626C]">Node.js</span>, and I’ve been trying to gain hands-on with MERN stack projects.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#8693AB] mb-2">Beyond Coding</h2>
          <p>
            Outside of coding, I’m also exploring trading, and learning French. I’m passionate about clean code, thoughtful design, and always eager to learn something new.
          </p>
        </div>
        <div className="mb-6 text-center">
          <a
            href={resume}
            target="_blank"
            className="inline-block px-6 py-2 bg-[#EF626C] text-white rounded hover:bg-[#d94a53] transition-colors font-semibold"
          >
            View Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
