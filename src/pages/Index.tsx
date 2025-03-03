import { Link } from "react-router-dom";
import { ArrowRight, Code, Github, Linkedin, Rocket, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 rounded-full bg-secondary border-4 border-primary/20 flex items-center justify-center mx-auto md:mx-0 mb-6 md:mb-0">
                <img
                  src="/img/portrait.jpg"
                  alt="Pretty Picture of me"
                  className="w-40 h-40 rounded-full
                object-cover"
                />
              </div>

              <div className="animate-slide-up">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                  <span className="mr-1">✦</span> Fullstack JS Product Engineer
                </div>

                <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                  Hi, I'm <span className="text-energy">Beer</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mt-2">
                  I value <span className="text-pragmatic">speed</span>,{" "}
                  <span className="text-fast">pragmatism</span>, and{" "}
                  <span className="text-fun">curiousity</span>.
                </h2>

                <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                  Check out some of my{" "}
                  <Link to="/work" className="text-energy hover:underline">
                    work
                  </Link>{" "}
                  or{" "}
                  <Link to="/thoughts" className="text-energy hover:underline">
                    thoughts
                  </Link>
                  .
                </p>

                {/* Social Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://github.com/bvanderdrift"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bvanderdrift/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-[#0A66C2]/90 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
