import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    school: "Indian Institute of Technology, Kanpur",
    year: "2023-Present",
    description: "CPI: 7.6/10"
  },
  {
    degree: "12th",
    school: "The Gramodaya International College, Mauranipur",
    year: "2023",
    description: "91.4%"
  },
  {
    degree: "10th",
    school: "The Gramodaya International College, Mauranipur",
    year: "2021",
    description: "94.8%"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-dark-darker via-dark to-dark-lighter">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full mr-6">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="bg-dark-lighter p-6 rounded-lg border border-primary/20 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.school}</p>
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
              {index < education.length - 1 && (
                <div className="ml-6 mt-6 border-l-2 border-primary/20 h-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}