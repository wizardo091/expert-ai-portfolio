import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Home Design",
    description: "AI-powered interior design app that guides homeowners through the design process. Features 'Create With AI' for translating ideas into visuals and a social platform for sharing inspiration.",
    skills: ["Stable Diffusion", "YOLO v8", "Deep Learning", "Computer Vision"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Study Buddy",
    description: "iOS application leveraging LLMs and Google Cloud Platform to enhance learning through Q&A with course materials, flashcard creation, and quiz image solving.",
    skills: ["Vertex AI", "TruLens", "Zilliz", "LLM", "iOS"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "NextTail",
    description: "AI-powered suite that helps developers convert traditional CSS to Tailwind CSS effortlessly. Automates the transition process, saving time and ensuring consistent designs.",
    skills: ["Gemini AI", "LangChain", "LlamaIndex", "TruLens"],
    gradient: "from-accent to-primary",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="projects">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Personal projects showcasing innovation in AI and machine learning
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-xl overflow-hidden card-elevated glow-border transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted/50 text-foreground/80 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="glow-border"
              asChild
            >
              <a href="https://github.com/wizardo091" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;