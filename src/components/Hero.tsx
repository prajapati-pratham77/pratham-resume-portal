
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
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
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '1.2s' }} />
      
      <div 
        className={`max-w-4xl mx-auto text-center appear-animation transition-all duration-1000 ${
          loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Flutter Developer</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Pratham Prajapati
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
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
