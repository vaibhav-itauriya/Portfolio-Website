import React from 'react';
import { Code2, Database, Wrench, Library } from 'lucide-react';

const skills = {
  languages: ['C', 'C++', 'Python', 'JavaScript'],
  frameworks: ['Next.js', 'Django'],
  tools: ['Git', 'LATEX', 'MATLAB', 'Hugging Face', 'Selenium'],
  libraries: ['React.js', 'NumPy', 'Pandas', 'Matplotlib']
};

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <SkillCategory 
            title="Languages" 
            items={skills.languages} 
            icon={<Code2 className="text-orange-500" size={24} />} 
          />
          <SkillCategory 
            title="Frameworks" 
            items={skills.frameworks} 
            icon={<Database className="text-orange-500" size={24} />} 
          />
          <SkillCategory 
            title="Tools" 
            items={skills.tools} 
            icon={<Wrench className="text-orange-500" size={24} />} 
          />
          <SkillCategory 
            title="Libraries" 
            items={skills.libraries} 
            icon={<Library className="text-orange-500" size={24} />} 
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, icon }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold text-white ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}