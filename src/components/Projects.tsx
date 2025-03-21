
import { ExternalLink, Laptop } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Flakes Bakes",
    description: "A cake delivery application that enables users to browse, customize, and order cakes online with real-time delivery tracking.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Dart", "API Integration", "Payment Gateway"]
  },
  {
    title: "Barber Crew",
    description: "Platform for booking barber services, managing appointments, and discovering nearby salons with reviews and ratings.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Firebase", "Google Maps", "Push Notifications"]
  },
  {
    title: "SaleswiseB2b",
    description: "Comprehensive warehouse management solution for businesses to track inventory, manage orders, and optimize supply chain processes.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "State Management", "RESTful API", "Data Visualization"]
  },
  {
    title: "Restaurant App",
    description: "Food delivery application featuring menu browsing, ordering, payment processing, and real-time order tracking functionality.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Firebase", "Payment Integration", "Push Notifications"]
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Projects</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          Highlights from my portfolio of mobile applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
