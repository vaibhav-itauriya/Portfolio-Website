import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: "Natural Language Processing with Classification and Vector Spaces",
    provider: "Coursera and DeepLearning.AI",
    id: "P6AM5ZB94Z4T",
    link: "https://coursera.org/share/294bcd515ccae9ec4e09bea6d0b04f4e"
  },
  {
    name: "Neural Networks and Deep Learning",
    provider: "Coursera and DeepLearning.AI",
    id: "S6Y5FER8HQHE",
    link: "https://coursera.org/share/d0f9b6533b1e1c2e10915aa567851ea1"
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    provider: "Coursera and IBM",
    id: "2WYW78RQG65Z",
    link: "https://coursera.org/share/8d7e182faa756f088847fce31bb0cd79"
  },
  {
    name: "Matlab Onramp",
    provider: "MATLAB",
    id: "789a41ba-38de-4128-8ba5-d2ed38c47e79",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=789a41ba-38de-4128-8ba5-d2ed38c47e79&"
  },
  {
    name: "Simulink Onramp",
    provider: "MATLAB",
    id: "da5c24e5-fa35-4623-83ad-f572185af38a",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=da5c24e5-fa35-4623-83ad-f572185af38a&"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <Award className="text-orange-500 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-400 mb-2">{cert.provider}</p>
                  <p className="text-gray-500 text-sm mb-4">ID: {cert.id}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    Verify Certificate →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}