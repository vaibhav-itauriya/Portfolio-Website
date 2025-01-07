import React from 'react';
import { Briefcase } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const positions = [
  {
    title: "Company Coordinator",
    organization: "Student Placement Office, IIT Kanpur",
    duration: "June '24 - Present",
    description: [
      "Managing internship and placement drives, coordinating with recruiters to facilitate student placements.",
      "Coordinated with companies such as WorldQuant, Quant Box, SLB, Adobe, Deutsche Bank, EightfoldAI, and VISA."
    ]
  },
  {
    title: "Secretary",
    organization: "Academic & Career Council, IIT Kanpur",
    duration: "May '24 - Present",
    description: [
      "Development of the council’s official website along with other secretaries and coordinator.",
      "Organized the successful Career Connect program and worked under Career Fair, which benefits 1000+ students."
    ]
  },
  {
    title: "Secretary",
    organization: "Product Club, IIT Kanpur",
    duration: "April '24 - Present",
    description: [
      "Coordinated student-centric product development events, including Product Talks and Prod-A-Thon.",
      "Secured 3rd place in The Product League and 1st Runner-Up in Inter-IIT Product Pitch Competition Bizzaro by SARC, IIT Bombay."
    ]
  }
];

export default function POR() {
  return (
    <section id="por" className="py-20 bg-gradient-to-br from-dark-darker to-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Positions of Responsibility</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="max-w-4xl mx-auto"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
          }}
        >
          {positions.map((position, index) => (
            <SwiperSlide key={index}>
              <div className="bg-dark-lighter p-6 rounded-lg shadow-xl mb-8 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-primary mb-2">{position.organization}</p>
                    <p className="text-gray-400 mb-4">{position.duration}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {position.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}