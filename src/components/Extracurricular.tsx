import React from 'react';
import { Trophy } from 'lucide-react';

const activities = [
  {
    title: "National Cadet Corps (NCC)",
    role: "Cadet – Technical Regiment",
    organization: "2 UP CTR, NCC IIT Kanpur",
    description: "Participated in various training camps and community service activities."
  },
  {
    title: "SATHEE",
    role: "Volunteer",
    organization: "IIT Kanpur",
    description: "Mentoring underprivileged students for Boards & JEE/NEET preparation."
  }
];

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Extracurricular Activities</h2>
        <div className="max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg mb-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-full mr-6">
                  <Trophy size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                  <p className="text-orange-500 mb-2">{activity.role}</p>
                  <p className="text-gray-400 mb-2">{activity.organization}</p>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}