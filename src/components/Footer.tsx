
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-secondary/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-primary/10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pratham<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-md">
              Flutter developer with hands-on experience in building cross-platform mobile applications.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/prajapati-pratham77" className="bg-secondary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="mailto:pathu6990@gmail.com" className="bg-secondary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+919054484449" className="bg-secondary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300" aria-label="Phone">
                <Phone size={20} />
              </a>
              <a href="https://linkedin.com/in/" className="bg-secondary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p>
            &copy; {currentYear} Pratham Prajapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
