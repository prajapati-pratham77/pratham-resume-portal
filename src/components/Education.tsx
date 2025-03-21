
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    period: "MAY '22",
    degree: "Bachelor of Computer Applications",
    field: "Information Technology",
    institution: "Dharamsinh desai university",
    location: "Nadiad"
  },
  {
    period: "MAY '19",
    degree: "HSC",
    field: "",
    institution: "Sandipani Gurukul Vidhyalay",
    location: "Dehgam"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Education</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          My academic background and qualifications.
        </p>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {edu.period}
                      </span>
                    </div>
                    
                    {edu.field && (
                      <p className="text-primary mb-1">{edu.field}</p>
                    )}
                    
                    <div className="mt-1">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
