import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-neutral-100 hover:text-[#EF626C]"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="text-neutral-100 hover:text-[#EF626C]"
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className="text-neutral-100 hover:text-[#EF626C]"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="text-neutral-100 hover:text-[#EF626C]"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#02111B]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-13 relative">
        <div className="text-2xl font-bold text-[#EF626C]">
          <Link to="/">ST</Link>
        </div>
        {/* Hamburger menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-neutral-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">{navLinks}</ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#02111B] flex flex-col space-y-2 py-4 px-4 md:hidden z-10 shadow-lg">
            {navLinks}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
