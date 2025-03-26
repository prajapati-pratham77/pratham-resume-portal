
import { Mail, Phone, MapPin, Linkedin, Github, SendIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

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
          <div className="glass-card rounded-xl p-8 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            
            <h3 className="text-xl font-bold mb-8 text-center">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="h-12 bg-white/50 border-white/20 focus:border-primary/30"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 bg-white/50 border-white/20 focus:border-primary/30"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="h-12 bg-white/50 border-white/20 focus:border-primary/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[120px] bg-white/50 border-white/20 focus:border-primary/30 resize-none"
                  required
                />
              </div>
              
              <div className="pt-4 flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full md:w-auto md:min-w-[200px] overflow-hidden group bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white h-14 px-8 rounded-full font-medium shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
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
