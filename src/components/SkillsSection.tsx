import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Code, Database, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Generative AI",
    icon: Brain,
    skills: ["LLMs", "RAG", "LangChain", "LlamaIndex", "Prompt Engineering", "Fine-tuning", "Autogen", "Vertex AI", "TruLens"],
    color: "primary",
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    skills: ["Deep Learning", "NLP", "NLU", "Supervised", "Unsupervised", "Reinforcement Learning", "PyTorch", "TensorFlow"],
    color: "secondary",
  },
  {
    title: "Computer Vision",
    icon: Layers,
    skills: ["YOLO", "OpenCV", "Stable Diffusion", "Object Detection", "Image Classification", "Segmentation", "Tracking"],
    color: "accent",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "SageMaker", "Databricks", "Azure OpenAI", "Docker", "Kubernetes"],
    color: "primary",
  },
  {
    title: "Languages & Tools",
    icon: Code,
    skills: ["Python", "TypeScript", "R", "C++", "Git", "CI/CD", "Jenkins", "Kafka"],
    color: "secondary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["VectorDB", "Neo4j", "GraphDB", "PostgreSQL", "MongoDB", "Pinecone", "Zilliz"],
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    border: "border-primary/30 hover:border-primary/60",
    bg: "bg-primary/5 hover:bg-primary/10",
    icon: "text-primary",
    glow: "group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
  },
  secondary: {
    border: "border-secondary/30 hover:border-secondary/60",
    bg: "bg-secondary/5 hover:bg-secondary/10",
    icon: "text-secondary",
    glow: "group-hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]",
  },
  accent: {
    border: "border-accent/30 hover:border-accent/60",
    bg: "bg-accent/5 hover:bg-accent/10",
    icon: "text-accent",
    glow: "group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]",
  },
};

const SkillsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="skills">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Technical Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A decade of experience building intelligent systems across the full ML stack
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              const Icon = category.icon;
              
              return (
                <div
                  key={category.title}
                  className={`group p-6 rounded-xl border ${colors.border} ${colors.bg} ${colors.glow} transition-all duration-300 card-elevated`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-background/50 ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-muted text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* LLM Models highlight */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Experienced with leading LLM models</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["GPT-4", "Llama 2", "Gemini", "PaLM 2", "Claude", "LaMDA"].map((model) => (
                <span
                  key={model}
                  className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-sm"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;