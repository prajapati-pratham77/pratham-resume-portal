
import { CalendarDays, MapPin, User, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="section-heading">Profile</h2>
            
            <div className="mt-10 space-y-6">
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">Full Name</h3>
                  <p className="font-medium">Pratham Prajapati</p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">Phone</h3>
                  <p className="font-medium">090544 84449</p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">Email</h3>
                  <p className="font-medium break-all">pathu6990@gmail.com</p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">Location</h3>
                  <p className="font-medium">Dehgam, Gujarat 382305</p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">Date of Birth</h3>
                  <p className="font-medium">13th August, 2002</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="section-heading">About Me</h2>
            <div className="glass-card p-8 rounded-xl mt-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Flutter developer with hands-on experience in building cross-platform mobile applications. Proficient in Dart programming language and Flutter framework, with a solid understanding of mobile app development concepts and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Skilled in creating engaging user interfaces and seamless user experiences using Flutter's widget-based UI framework and material design principles. Experienced in implementing state management solutions, integrating RESTful APIs, and optimizing app performance for enhanced speed and responsiveness.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Proven ability to work collaboratively in agile environments, contributing to all stages of the software development lifecycle from ideation to deployment. Successfully delivered and maintained Flutter applications for various industries, demonstrating adaptability and problem-solving skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about exploring new technologies and continuously improving skills to stay abreast of industry trends. Committed to delivering high-quality, scalable mobile solutions that meet client requirements and exceed user expectations.
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Hindi (Advanced)</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">English (Conversational)</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Gujarati (Advanced)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://prajapati-pratham77.github.io/portfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border shadow-md hover:shadow-lg px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-300"
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
                  className="ml-1"
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
