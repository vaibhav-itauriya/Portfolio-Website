import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "SDE Intern",
    company: "Paritranaya Global Pvt Ltd (Turantlo)",
    duration: "July '24 – Sept '24",
    link: "https://drive.google.com/file/d/1yqAFw6tncIwy5F56ovMNQS67rEOMA3vC/view",
    points: [
      "Developed a recommendation engine for Turantlo's app with personalized product recommendations.",
      "Built and optimized a responsive website using Next.js and React.js."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-full mr-6">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-orange-500 mb-2">{exp.company}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors mb-4"
                  >
                    Experience Letter →
                  </a>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}