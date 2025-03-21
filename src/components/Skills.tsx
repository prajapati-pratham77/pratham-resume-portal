
import { Code } from 'lucide-react';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    category: "Programming & Frameworks",
    skills: [
      { name: "Dart Programming Language", proficiency: 95 },
      { name: "Flutter Framework", proficiency: 92 },
      { name: "PHP", proficiency: 70 },
      { name: "Java", proficiency: 65 },
      { name: "HTML", proficiency: 85 },
      { name: "CSS", proficiency: 80 },
      { name: "Android", proficiency: 75 }
    ]
  },
  {
    category: "Development Skills",
    skills: [
      { name: "UI/UX Design", proficiency: 88 },
      { name: "State Management", proficiency: 90 },
      { name: "RESTful APIs", proficiency: 85 },
      { name: "Database Integration", proficiency: 82 },
      { name: "Debugging and Performance Optimization", proficiency: 85 },
      { name: "Problem-Solving", proficiency: 90 }
    ]
  }
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(proficiency);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [proficiency]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-medium">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Skills</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          Technical proficiencies and competencies that I've developed during my career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Code size={18} />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
