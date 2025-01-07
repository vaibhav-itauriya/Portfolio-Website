import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-darker/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white hover:text-primary transition-colors">
            Vaibhav | Portfolio
          </a>
          
          <button 
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-darker/95 backdrop-blur-md border-t border-gray-800">
            <div className="py-4 px-6 space-y-4">
              <NavLinks mobile={true} onClick={closeMenu} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile = false, onClick = () => {} }) {
  const linkClass = `text-gray-300 hover:text-primary transition-colors ${
    mobile ? 'block py-2' : ''
  }`;

  const links = [
    { href: "#home", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#education", text: "Education" },
    { href: "#skills", text: "Skills" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <div className={`${mobile ? 'flex flex-col' : 'flex items-center space-x-8'}`}>
      {links.map((link) => (
        <a 
          key={link.href}
          href={link.href}
          className={linkClass}
          onClick={onClick}
        >
          {link.text}
        </a>
      ))}
      <div className={`flex items-center ${mobile ? 'mt-4 space-x-6' : 'space-x-4'}`}>
        <a href="https://github.com/vaibhav-itauriya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://in.linkedin.com/in/vaibhav-itauriya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/vaibhav_itauriya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  );
}