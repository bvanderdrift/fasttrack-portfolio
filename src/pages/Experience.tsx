
import { useState, useEffect } from "react";
import { Briefcase, Code, Terminal, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import experiencesData from "@/data/experiences.json";

// Map icon names to actual components
const getIconComponent = (index: number) => {
  const icons = [
    <Briefcase className="h-5 w-5 text-fast" />,
    <Code className="h-5 w-5 text-energy" />,
    <Terminal className="h-5 w-5 text-pragmatic" />,
    <Rocket className="h-5 w-5 text-fun" />
  ];
  
  return icons[index % icons.length];
};

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  
  useEffect(() => {
    // In a real app, this might fetch data from an API or parse JSON files
    // Here we're just using the imported JSON and adding icons
    const experiencesWithIcons = experiencesData.map((exp, index) => ({
      ...exp,
      icon: getIconComponent(index)
    }));
    
    setExperiences(experiencesWithIcons);
  }, []);
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of my professional journey building products for startups and established companies.
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
          
          {/* Key Technologies Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-medium mb-8 animate-slide-up">
              Technologies I Work With
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {[
                "JavaScript", "TypeScript", "React", "Node.js", 
                "Express", "Next.js", "GraphQL", "REST APIs",
                "PostgreSQL", "MongoDB", "Redis", "AWS",
                "Docker", "CI/CD", "Jest", "Cypress"
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-white border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index % 4)}s` }}
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExperiencePage;
