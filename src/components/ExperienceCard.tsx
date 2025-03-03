
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export type Experience = {
  title: string;
  role?: string;
  workType: "asEmployee" | "asFreelancer" | "asHobbyist";
  techs?: string[];
  description: string;
  link?: string;
  image?: string;
  icon?: ReactNode;
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
        {experience.image ? (
          <div className="flex-shrink-0">
            <img 
              src={experience.image} 
              alt={experience.title}
              className="w-12 h-12 object-contain rounded-md"
            />
          </div>
        ) : experience.icon && (
          <div className="flex-shrink-0 p-2 bg-secondary rounded-md">
            {experience.icon}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-lg">{experience.title}</h3>
              
              {experience.role && (
                <div className="text-sm text-muted-foreground mt-1">
                  {experience.role}
                </div>
              )}
            </div>
            
            <span className="text-xs font-medium bg-secondary px-2 py-1 rounded-full">
              {experience.workType === "asEmployee" ? "Employee" : 
               experience.workType === "asFreelancer" ? "Freelancer" : 
               "Hobbyist"}
            </span>
          </div>
          
          <div className="mt-3 text-muted-foreground whitespace-pre-line">
            {experience.description}
          </div>
          
          {experience.link && (
            <a 
              href={experience.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 group mt-3"
            >
              Visit Website
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
          
          {experience.techs && experience.techs.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.techs.map((tech) => (
                <span 
                  key={tech} 
                  className="tech-tag bg-secondary/50 hover:bg-secondary text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
