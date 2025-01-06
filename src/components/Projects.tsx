import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: "Deeploy CV",
    description: "In this project, I have learnt about using OpenCV, Pillow and also used some pre-trained models.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/vaibhav-itauriya/231115_Vaibhav_Itauriya_DeeployCV",
    // demo: "https://demo.com",
    tags: ["OpenCV", "Python", "Deep Learning"]
  },
  {
    title: "Vidya Vaani",
    description: "This project is under Prof. Dr. Ashutosh Modi, Department of CSE, in this I am developing mobile application for the ASR and NLP enabled model which will generate real time captioning for engineering class lectures.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    // github: "https://github.com",
    // demo: "https://demo.com",
    tags: ["NLP", "ASR", "Mobile App"]
  },
  {
    title: "Inter IIT Tech Meet 13.0",
    description: "Worked on a energy consulting problem statement for solving issues in recycling of solar PV waste.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    // github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Energy", "Consulting"]
  },
  {
    title: "Project Allocation Website",
    description: "Making a project allocation system for IITK's R&D office, enabling efficient assignment of research projects.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/AnC-Council-IIT-Kanpur/ProjectPortal",
    // demo: "https://demo.com",
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    title: "Academic & Career Council Website",
    description: "Made the council's website, using Next.js and TypeScript and also improved performance and user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/AnC-Council-IIT-Kanpur/Website",
    demo: "https://www.anciitk.in/",
    tags: ["Next.js", "TypeScript", "UI/UX"]
  },
  {
    title: "Lluminating Language",
    description: "This project was under BCS IITK, in this we built an IITK community-focused chatbot using RAG and LLMs (Llama3-7b-instruct), fine-tuned on IIT Kanpur data.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/udbhav-44/BCS-Lluminating-Language",
    // demo: "https://demo.com",
    tags: ["LLM", "RAG", "NLP"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-lighter to-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-dark-darker rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-primary/20 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-darker opacity-60 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6 relative z-20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-light transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-light transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
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