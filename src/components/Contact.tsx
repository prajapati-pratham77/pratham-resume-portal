
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading text-center">Contact Me</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          Let's connect and discuss how we can work together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <a 
            href="mailto:pathu6990@gmail.com"
            className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all duration-300">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground break-all group-hover:text-primary/80 transition-colors duration-300">pathu6990@gmail.com</p>
          </a>
          
          <a 
            href="tel:+919054484449"
            className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all duration-300">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">+91 90544 84449</p>
          </a>
          
          <div className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all duration-300">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">Dehgam, Gujarat 382305</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://prajapati-pratham77.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-lg transition-all duration-300"
              aria-label="Portfolio"
            >
              <Github size={22} />
            </a>
            
            <a 
              href="#"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="relative overflow-hidden bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-4 rounded-full text-base font-medium shadow-lg transform hover:scale-105 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Send Message
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
