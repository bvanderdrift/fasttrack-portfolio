import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link
              to="/"
              className="text-xl font-medium tracking-tight mb-4 inline-block"
            >
              <span className="text-foreground">Beer</span>
              <span className="text-fast"> van der Drift</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Love building products that users love.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="flex space-x-4">
              <a
                href="https://github.com/bvanderdrift"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bvanderdrift/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm bg-[#0A66C2] text-white rounded-md hover:bg-[#0A66C2]/90 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              © {currentYear} • Built with{" "}
              <a
                href="https://lovable.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI
              </a>
              , React & Tailwind
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
