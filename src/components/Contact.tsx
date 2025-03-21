
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Contact Me</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          Let's connect and discuss how we can work together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <a 
            href="mailto:pathu6990@gmail.com"
            className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground break-all">pathu6990@gmail.com</p>
          </a>
          
          <a 
            href="tel:+919054484449"
            className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 90544 84449</p>
          </a>
          
          <div className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground">Dehgam, Gujarat 382305</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://prajapati-pratham77.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-gray-700 hover:text-primary hover:shadow-lg transition-all duration-300"
              aria-label="Portfolio"
            >
              <Github size={22} />
            </a>
            
            <a 
              href="#"
              className="w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-gray-700 hover:text-primary hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
