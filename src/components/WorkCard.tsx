import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { TechTag } from "./TechTag";
import { marked } from "marked";

export type Work = {
  title: string;
  role?: string;
  workType: "asEmployee" | "asFreelancer" | "asHobbyist";
  techs?: string[];
  description: string;
  link?: string;
  image: string;
};

interface WorkCardProps {
  experience: Work;
  index: number;
}

// Configure marked to open links in new tabs
marked.use({
  renderer: {
    link({ href, title, text }) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${
        title || ""
      }">${text}</a>`;
    },
  },
});

const WorkCard = ({ experience, index }: WorkCardProps) => {
  const isEven = index % 2 === 0;
  const cardAnimations = [
    "animate-slide-up",
    "animate-slide-left",
    "animate-slide-right",
  ];

  // Cycle through different animations for variety
  const animation = cardAnimations[index % cardAnimations.length];

  // Cycle through different accent colors for variety
  const accentColors = [
    "border-fast",
    "border-energy",
    "border-pragmatic",
    "border-fun",
  ];
  const accentColor = accentColors[index % accentColors.length];

  // Parse markdown in description
  const parsedDescription = marked.parse(experience.description);

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
        {
          <div className="flex-shrink-0">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-12 h-12 object-contain rounded-md"
            />
          </div>
        }

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
          </div>

          <div
            className="mt-3 text-muted-foreground prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: parsedDescription }}
          />

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
              {experience.techs.map((tech, index) => (
                <TechTag key={tech} index={index}>
                  {tech}
                </TechTag>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
