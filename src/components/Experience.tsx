
import { Briefcase, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "MAR '23 - PRESENT",
    position: "Flutter Developer",
    company: "Achyut labs",
    location: "Ahmedabad, Gujarat",
    portfolioLink: "#projects",
    responsibilities: [
      "Design app architecture, including app structure, data flow, state management, and UI/UX design.",
      "Write clean, maintainable, and efficient code using Dart programming language and Flutter framework to implement app features and functionalities.",
      "Implement UI designs provided by designers or create custom UI components using Flutter widgets to ensure a visually appealing and user-friendly interface.",
      "Integrate the app with backend APIs, third-party services, and databases to fetch and update data as needed.",
      "Optimize app performance, including app startup time, rendering performance, and memory usage, to provide a smooth and responsive user experience."
    ]
  },
  {
    period: "JAN '23 - FEB '23",
    position: "Flutter Developer",
    company: "Torbit Multisoft Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    portfolioLink: "#projects",
    responsibilities: [
      "Designing, developing, testing, and deploying mobile applications using Flutter framework and Dart programming language.",
      "Bringing UI/UX designs to life by creating visually appealing and user-friendly interfaces using Flutter widgets and custom components.",
      "Integrating the mobile application with backend APIs, databases, and third-party services to fetch and update data as needed.",
      "Implementing efficient state management solutions such as getx to manage the app's state and ensure a smooth user experience.",
      "Optimizing app performance by reducing startup time, improving rendering performance, and optimizing memory usage to provide a seamless user experience."
    ]
  },
  {
    period: "SEP '22 - OCT '22",
    position: "Website Developer",
    company: "Techwitty",
    location: "Ahmedabad, Gujarat",
    portfolioLink: "#projects",
    responsibilities: [
      "Designed website layouts and user interfaces according to client specifications.",
      "Developed and maintained websites using HTML, CSS, JavaScript, JQuery, PHP and MySQL.",
      "Conducted usability tests on new features of the website to ensure quality assurance standards are met.",
      "Implemented responsive design techniques for optimal viewing experiences across multiple devices."
    ]
  }
];

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each experience card when scrolled into view
      gsap.utils.toArray<Element>('.experience-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 50 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            },
            delay: index * 0.2
          }
        );
      });

      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        { 
          scaleY: 1, 
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top center",
            toggleActions: "play none none none"
          }
        }
      );
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={experienceRef}
      id="experience" 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-green-50 bg-grid-white/[0.02] relative"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading text-center">Experience</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          My professional journey building mobile applications and websites.
        </p>
        
        <div className="mt-12 md:mt-16 relative">
          {!isMobile && <div className="h-full absolute left-6 md:left-1/2 md:-ml-px top-0 w-px bg-primary/20 timeline-line"></div>}
          <div className="space-y-8 md:space-y-12 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`experience-card relative ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
                } md:w-1/2`}
              >
                <div 
                  className={`absolute top-0 hidden md:block ${
                    index % 2 === 0 ? 'right-0 -translate-x-1/2' : 'left-0 translate-x-1/2'
                  } z-10 w-5 h-5 rounded-full bg-background border-2 border-primary`}
                ></div>
                
                <div className="glass-card rounded-xl p-5 sm:p-6 md:p-8 relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                    <div className="flex items-center gap-3 mb-3 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Briefcase size={16} className="sm:size-18" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">{exp.position}</h3>
                        <p className="text-primary text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm inline-block text-center mb-1 sm:mb-2">
                        {exp.period}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                        <span className="text-muted-foreground text-xs sm:text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-end mt-3 sm:mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="group bg-primary/10 border-primary/30 hover:bg-primary/20 hover:text-primary text-primary/90 text-xs sm:text-sm"
                    >
                      <a href={exp.portfolioLink}>
                        View Portfolio
                        <ExternalLink size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
