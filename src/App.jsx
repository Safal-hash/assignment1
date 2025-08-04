import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInform';

import './App.css'
import { AuthContext, AuthProvider } from './context/authcontext';

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </div>
    </AuthProvider>
  );

}

export default App;
