
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="text-xl font-medium tracking-tight mb-4 inline-block">
              <span className="text-fast">Product</span>
              <span className="text-foreground">Engineer</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Fast, pragmatic, energetic & fun. Building great products that users love.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <div className="flex space-x-4 text-muted-foreground">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              © {currentYear} • Built with React & Tailwind
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
