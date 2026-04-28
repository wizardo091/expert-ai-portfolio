import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Glowing orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Open to discussing AI opportunities, collaborations, or just chatting about the latest in ML
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:a122691.craft@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground">a122691.craft@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">+1 (813) 501-7241</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground">Dayton, TX</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full glow-border"
              asChild
            >
              <a href="https://github.com/wizardo091" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full glow-border"
              asChild
            >
              <a href="https://www.linkedin.com/in/adamgon091/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full glow-border"
              asChild
            >
              <a href="https://x.com/Adam666565" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg animate-gradient hover:scale-105 transition-transform"
            asChild
          >
            <a href="mailto:a122691.craft@gmail.com">
              Get In Touch
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-4 mt-24">
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Adam Dean Gonzalez. Built with AI-powered precision.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
