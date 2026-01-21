import { Github, Linkedin, Twitter, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">10+ Years in AI & Machine Learning</span>
          </div>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Adam </span>
            <span className="text-gradient">Gonzalez</span>
          </h1>

          {/* Title */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground font-mono animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-primary">{"<"}</span>
            Sr. ML/Generative AI Engineer
            <span className="text-primary">{" />"}</span>
          </p>

          {/* Summary */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Building intelligent systems at scale. Specialized in LLMs, RAG pipelines, 
            and deploying ML solutions that power products at{" "}
            <span className="text-foreground font-semibold">Google</span>,{" "}
            <span className="text-foreground font-semibold">Nike</span>, and{" "}
            <span className="text-foreground font-semibold">Amazon</span>.
          </p>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group glow-border"
              asChild
            >
              <a href="https://github.com/wizardo091" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group glow-border"
              asChild
            >
              <a href="https://www.linkedin.com/in/adam-g-7525153a7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group glow-border"
              asChild
            >
              <a href="https://x.com/Adam666565" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                X
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <div 
            className="pt-4 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg animate-gradient hover:scale-105 transition-transform"
              asChild
            >
              <a href="mailto:a122691.craft@gmail.com">
                Let's Build Something Amazing
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;