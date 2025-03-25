
import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef(null);
  const roleRef = useRef(null);
  const techIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const nameCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setLoaded(true);
    
    // GSAP animations for the role
    gsap.from(roleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      delay: 0.1,
      ease: "power4.out"
    });
    
    // Animate each character of the name separately for a more modern effect
    const nameEl = titleRef.current;
    if (nameEl) {
      const name = "Pratham Prajapati";
      nameEl.innerHTML = '';
      
      // Create character spans
      [...name].forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        charSpan.style.transitionDelay = `${index * 0.05}s`;
        charSpan.textContent = char === ' ' ? '\u00A0' : char;
        nameEl.appendChild(charSpan);
        nameCharsRef.current.push(charSpan);
      });
      
      // Trigger animation after a short delay
      setTimeout(() => {
        nameCharsRef.current.forEach(char => {
          if (char) char.classList.add('char-visible');
        });
      }, 500);
    }
    
    // Subtitle animation
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1.2, // Delayed to start after name animation
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
          delay: techIcons[index].delay + 0.5, // Additional delay to let name animation finish
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
    
    // Text reveal animations for Information Technology
    const textElement = document.querySelector('.text-reveal');
    if (textElement) {
      const text = textElement.textContent || '';
      textElement.innerHTML = '';
      
      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(10px)';
        textElement.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 1.5 + index * 0.04, // Increased delay to start after name animation
          ease: "power3.out"
        });
      });
    }
    
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Gradient background with updated colors */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-background to-background pointer-events-none"></div>
      
      {/* Grid effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>
      
      {/* Floating shapes with updated colors */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
      
      {/* Tech icons floating in the background */}
      {techIcons.map((icon, index) => (
        <div
          key={icon.name}
          ref={el => (techIconsRef.current[index] = el)}
          className={`absolute font-mono text-xs md:text-sm bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 ${
            isMobile ? 'hidden sm:block' : ''
          }`}
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
        <h1 
          ref={roleRef}
          className="text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 font-medium text-glow"
        >
          Flutter Developer
        </h1>
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight px-2 overflow-hidden"
        >
          {/* Name will be inserted dynamically with js for character animation */}
        </h2>
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-2 px-2"
        >
          Crafting beautiful, functional mobile experiences with Flutter
        </p>
        <p className="text-reveal text-sm sm:text-lg md:text-xl text-primary/80 font-mono max-w-2xl mx-auto px-2">
          Bachelor of Computer Applications in Information Technology
        </p>
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button 
            size={isMobile ? "default" : "lg"}
            className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 text-sm sm:text-base"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
          <Button
            size={isMobile ? "default" : "lg"}
            variant="outline"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 sm:px-8 py-5 sm:py-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            asChild
          >
            <a href="#about">About Me</a>
          </Button>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="sm:w-[30px] sm:h-[30px]" />
      </a>
    </section>
  );
};

export default Hero;
