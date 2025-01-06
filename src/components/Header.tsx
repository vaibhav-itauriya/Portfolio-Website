import React from 'react';
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white">Vaibhav | Portfolio</a>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">About</a>
      <a href="#experience" className="text-gray-300 hover:text-orange-500 transition-colors">Experience</a>
      <a href="#projects" className="text-gray-300 hover:text-orange-500 transition-colors">Projects</a>
      <a href="#education" className="text-gray-300 hover:text-orange-500 transition-colors">Education</a>
      <a href="#skills" className="text-gray-300 hover:text-orange-500 transition-colors">Skills</a>
      <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/vaibhav-itauriya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://in.linkedin.com/in/vaibhav-itauriya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/vaibhav_itauriya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </>
  );
}