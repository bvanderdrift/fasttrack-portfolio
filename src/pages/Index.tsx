import { Link } from "react-router-dom";
import { ArrowRight, Code, Github, Linkedin, Rocket, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
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
                  Beer van der Drift
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mt-2">
                  Building <span className="text-energy">fast</span>,{" "}
                  <span className="text-pragmatic">pragmatic</span>, and{" "}
                  <span className="text-fun">engaging</span> digital products
                </h2>

                <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                  I specialize in creating elegant solutions for fast-moving
                  startups, focusing on user experience and clean, maintainable
                  code.
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

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/work"
                    className="bg-primary inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:border-primary transition-colors font-medium"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/thoughts"
                    className="inline-flex items-center gap-2 px-4 py-2  text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Read my thoughts
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
