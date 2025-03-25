
import { CalendarDays, MapPin, User, Mail, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!aboutRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animate profile cards
      gsap.utils.toArray<Element>('.profile-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 30,
            x: index % 2 === 0 ? -10 : 10 
          },
          { 
            opacity: 1, 
            y: 0,
            x: 0,
            duration: 0.7, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            },
            delay: index * 0.1
          }
        );
      });
      
      // Animate about content
      gsap.fromTo(
        '.about-content',
        { 
          opacity: 0, 
          y: 40
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.about-content',
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Animate language tags
      gsap.fromTo(
        '.language-tag',
        { 
          opacity: 0, 
          scale: 0.9
        },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.6, 
          ease: "back.out(1.2)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.language-container',
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Decorative stickers/elements */}
        <div className="hidden sm:block absolute -top-4 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="hidden sm:block absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-1/4 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="section-heading">Profile</h2>
            
            <div className="mt-8 md:mt-10 space-y-4 sm:space-y-6">
              <div className="profile-card glass-card p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={16} className="sm:size-20" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm text-muted-foreground">Full Name</h3>
                  <p className="font-medium text-sm sm:text-base">Pratham Prajapati</p>
                </div>
              </div>
              
              <div className="profile-card glass-card p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={16} className="sm:size-20" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm text-muted-foreground">Phone</h3>
                  <p className="font-medium text-sm sm:text-base">090544 84449</p>
                </div>
              </div>
              
              <div className="profile-card glass-card p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={16} className="sm:size-20" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm text-muted-foreground">Email</h3>
                  <p className="font-medium text-sm sm:text-base break-all">pathu6990@gmail.com</p>
                </div>
              </div>
              
              <div className="profile-card glass-card p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={16} className="sm:size-20" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm text-muted-foreground">Location</h3>
                  <p className="font-medium text-sm sm:text-base">Dehgam, Gujarat 382305</p>
                </div>
              </div>
              
              <div className="profile-card glass-card p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CalendarDays size={16} className="sm:size-20" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm text-muted-foreground">Date of Birth</h3>
                  <p className="font-medium text-sm sm:text-base">13th August, 2002</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 about-content">
            <h2 className="section-heading">About Me</h2>
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl mt-8 md:mt-10">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Flutter developer with hands-on experience in building cross-platform mobile applications. Proficient in Dart programming language and Flutter framework, with a solid understanding of mobile app development concepts and best practices.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Skilled in creating engaging user interfaces and seamless user experiences using Flutter's widget-based UI framework and material design principles. Experienced in implementing state management solutions, integrating RESTful APIs, and optimizing app performance for enhanced speed and responsiveness.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Proven ability to work collaboratively in agile environments, contributing to all stages of the software development lifecycle from ideation to deployment. Successfully delivered and maintained Flutter applications for various industries, demonstrating adaptability and problem-solving skills.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Passionate about exploring new technologies and continuously improving skills to stay abreast of industry trends. Committed to delivering high-quality, scalable mobile solutions that meet client requirements and exceed user expectations.
              </p>
              
              <div className="mt-8 pt-6 sm:pt-8 border-t border-gray-100/10 language-container">
                <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="language-tag bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm">Hindi (Advanced)</span>
                  <span className="language-tag bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm">English (Conversational)</span>
                  <span className="language-tag bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm">Gujarati (Advanced)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <a 
                href="https://prajapati-pratham77.github.io/portfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center gap-2 text-sm sm:text-base"
              >
                View Portfolio
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
