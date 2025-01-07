import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-darker via-dark to-dark-lighter pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="gradient-text">Vaibhav Itauriya</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A passionate developer crafting beautiful and functional web experiences and also doing some machine learning stuffs.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Get in touch
              </a>
              <a 
                href="#projects"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Card className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-6 opacity-75"></div>
              <div className="absolute inset-0 bg-dark rounded-2xl transform -rotate-6"></div>
              <img
                src="../src/public/images/Hero.JPG"
                alt="Vaibhav Itauriya"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-darker to-transparent opacity-50 rounded-2xl"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}