
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  published: boolean;
};

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isLoaded?: boolean;
}

const BlogCard = ({ post, index, isLoaded = true }: BlogCardProps) => {
  const formattedDate = format(new Date(post.date), "MMM d, yyyy");
  
  // Animation delay based on index
  const delay = index * 0.1;
  
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={cn(
        "block p-6 rounded-xl border border-primary/10 bg-white/95",
        "hover:shadow-md transition-all duration-300 hover:bg-white",
        "transform-gpu",
        isLoaded ? "opacity-100" : "opacity-0",
        isLoaded && "animate-fade-in"
      )}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: "both" 
      }}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {post.tags.slice(0, 3).map((tag, i) => {
            // Cycle through tag variants for a playful look
            const tagClasses = [
              "tag-primary",
              "tag-secondary",
              "tag-accent"
            ];
            return (
              <span 
                key={tag}
                className={tagClasses[i % tagClasses.length]}
              >
                {tag}
              </span>
            );
          })}
        </div>
        
        <h3 className="font-medium text-xl tracking-tight">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-muted-foreground">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          
          <div className="text-sm font-medium text-accent flex items-center gap-1 group">
            Read post
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
