
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
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const formattedDate = format(new Date(post.date), "MMM d, yyyy");
  
  // Animation delay based on index
  const delay = index * 0.1;
  
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={cn(
        "block p-6 rounded-xl border border-border bg-white",
        "hover:shadow-md transition-all duration-300",
        "animate-scale"
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="tech-tag bg-secondary/50 text-xs"
            >
              {tag}
            </span>
          ))}
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
          
          <div className="text-sm font-medium text-primary flex items-center gap-1 group">
            Read post
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
