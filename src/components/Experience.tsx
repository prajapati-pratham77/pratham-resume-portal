
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: "MAR '23 - PRESENT",
    position: "Flutter Developer",
    company: "Achyut labs",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Design app architecture, including app structure, data flow, state management, and UI/UX design.",
      "Write clean, maintainable, and efficient code using Dart programming language and Flutter framework to implement app features and functionalities.",
      "Implement UI designs provided by designers or create custom UI components using Flutter widgets to ensure a visually appealing and user-friendly interface.",
      "Integrate the app with backend APIs, third-party services, and databases to fetch and update data as needed.",
      "Optimize app performance, including app startup time, rendering performance, and memory usage, to provide a smooth and responsive user experience."
    ]
  },
  {
    period: "JAN '23 - FEB '23",
    position: "Flutter Developer",
    company: "Torbit Multisoft Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Designing, developing, testing, and deploying mobile applications using Flutter framework and Dart programming language.",
      "Bringing UI/UX designs to life by creating visually appealing and user-friendly interfaces using Flutter widgets and custom components.",
      "Integrating the mobile application with backend APIs, databases, and third-party services to fetch and update data as needed.",
      "Implementing efficient state management solutions such as getx to manage the app's state and ensure a smooth user experience.",
      "Optimizing app performance by reducing startup time, improving rendering performance, and optimizing memory usage to provide a seamless user experience."
    ]
  },
  {
    period: "SEP '22 - OCT '22",
    position: "Website Developer",
    company: "Techwitty",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Designed website layouts and user interfaces according to client specifications.",
      "Developed and maintained websites using HTML, CSS, JavaScript, JQuery, PHP and MySQL.",
      "Conducted usability tests on new features of the website to ensure quality assurance standards are met.",
      "Implemented responsive design techniques for optimal viewing experiences across multiple devices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Experience</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          My professional journey building mobile applications and websites.
        </p>
        
        <div className="mt-16 relative">
          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="timeline-dot"></div>
                <div className="glass-card rounded-xl p-8 mb-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block text-center">
                        {exp.period}
                      </span>
                      <span className="text-sm text-muted-foreground mt-1">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
