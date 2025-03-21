
import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

// Tech icons that will animate in the background
const techIcons = [
  { name: 'Flutter', x: 15, y: 20, delay: 0.2 },
  { name: 'Dart', x: 80, y: 35, delay: 0.5 },
  { name: 'Firebase', x: 25, y: 65, delay: 0.8 },
  { name: 'REST API', x: 70, y: 75, delay: 1.1 },
  { name: 'UI/UX', x: 40, y: 50, delay: 1.4 },
  { name: 'Android', x: 85, y: 15, delay: 1.7 },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const techIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    setLoaded(true);
    
    // GSAP animations for the title and subtitle
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });
    
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });
    
    // Animate tech icons
    techIconsRef.current.forEach((icon, index) => {
      if (icon) {
        // Initial state
        gsap.set(icon, { 
          opacity: 0,
          scale: 0.8
        });
        
        // Animate in
        gsap.to(icon, {
          opacity: 0.7,
          scale: 1,
          duration: 0.8,
          delay: techIcons[index].delay,
          ease: "power2.out"
        });
        
        // Continuous floating animation
        gsap.to(icon, {
          y: "+=10",
          repeat: -1,
          yoyo: true,
          duration: 2 + Math.random(),
          delay: techIcons[index].delay,
          ease: "sine.inOut"
        });
      }
    });
    
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none"></div>
      
      {/* Grid effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      
      {/* Tech icons floating in the background */}
      {techIcons.map((icon, index) => (
        <div
          key={icon.name}
          ref={el => (techIconsRef.current[index] = el)}
          className="absolute font-mono text-xs md:text-sm bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
        >
          {icon.name}
        </div>
      ))}
      
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Flutter Developer</h1>
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Pratham Prajapati
        </h2>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          Crafting beautiful, functional mobile experiences with Flutter
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Contact Me
          </a>
          <a 
            href="#about" 
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            About Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
