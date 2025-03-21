
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
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/3 left-1/5 w-24 h-24 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '0.8s' }} />
      
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
            className="bg-white px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border"
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
