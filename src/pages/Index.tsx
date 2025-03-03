
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
                <span className="text-muted-foreground text-lg">Profile Photo</span>
              </div>
              
              <div className="animate-slide-up">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                  <span className="mr-1">✦</span> Fullstack JS Product Engineer
                </div>
                
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                  Beer van der Drift
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mt-2">
                  Building <span className="text-energy">fast</span>, <span className="text-pragmatic">pragmatic</span>, and <span className="text-fun">engaging</span> digital products
                </h2>
                
                <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
                  I specialize in creating elegant solutions for fast-moving startups, 
                  focusing on user experience and clean, maintainable code.
                </p>
                
                {/* Social Links */}
                <div className="mt-6 flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
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
                    to="/experience" 
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:border-primary transition-colors font-medium"
                  >
                    View my experience
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Read my blog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Skills Section */}
        <section className="py-16 px-6 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-center mb-12">
              How I Approach Product Engineering
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Skill 1 */}
              <div className="bg-white p-6 rounded-xl shadow-subtle border border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 bg-fast/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-fast" />
                </div>
                <h3 className="text-xl font-medium mb-2">Fast Execution</h3>
                <p className="text-muted-foreground">
                  I prioritize speed without sacrificing quality, delivering MVPs quickly and iterating based on real user feedback.
                </p>
              </div>
              
              {/* Skill 2 */}
              <div className="bg-white p-6 rounded-xl shadow-subtle border border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 bg-pragmatic/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-pragmatic" />
                </div>
                <h3 className="text-xl font-medium mb-2">Pragmatic Solutions</h3>
                <p className="text-muted-foreground">
                  I build solutions that work today while architecting for tomorrow, focusing on business impact and technical excellence.
                </p>
              </div>
              
              {/* Skill 3 */}
              <div className="bg-white p-6 rounded-xl shadow-subtle border border-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 bg-energy/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-energy" />
                </div>
                <h3 className="text-xl font-medium mb-2">Energetic Collaboration</h3>
                <p className="text-muted-foreground">
                  I bring enthusiasm and creativity to every project, working closely with cross-functional teams to create meaningful products.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gradient-border p-[1px] animate-pulse">
              <div className="gradient-border-content py-10 px-6">
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Whether you're a startup looking to launch quickly or an established company needing fresh expertise, I'm ready to help turn your vision into reality.
                </p>
                <a 
                  href="mailto:contact@example.com" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Get in touch
                  <ArrowRight className="h-5 w-5" />
                </a>
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
