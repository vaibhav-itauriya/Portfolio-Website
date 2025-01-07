import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import POR from './components/POR';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <POR />
        <Education />
        <TechnicalSkills />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Vaibhav Itauriya. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;