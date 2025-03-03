
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  duration: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
};

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const isEven = index % 2 === 0;
  const cardAnimations = [
    "animate-slide-up", 
    "animate-slide-left", 
    "animate-slide-right"
  ];
  
  // Cycle through different animations for variety
  const animation = cardAnimations[index % cardAnimations.length];
  
  // Cycle through different accent colors for variety
  const accentColors = ["border-fast", "border-energy", "border-pragmatic", "border-fun"];
  const accentColor = accentColors[index % accentColors.length];
  
  return (
    <div 
      className={cn(
        "rounded-xl p-6 shadow-subtle border bg-white relative",
        animation,
        "hover:shadow-md transition-all duration-300",
        "border-l-4", 
        accentColor
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 bg-secondary rounded-md">
          {experience.icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-lg">{experience.title}</h3>
              
              <div className="flex items-center mt-1">
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 group"
                >
                  {experience.company}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            <span className="text-xs font-medium bg-secondary px-2 py-1 rounded-full">
              {experience.duration}
            </span>
          </div>
          
          <p className="mt-3 text-muted-foreground">
            {experience.description}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span 
                key={tech} 
                className="tech-tag bg-secondary/50 hover:bg-secondary text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
