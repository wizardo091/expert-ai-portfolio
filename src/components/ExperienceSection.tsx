import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Blue Yonder",
    role: "Generative AI Engineer",
    location: "Remote",
    period: "Sep 2022 – Mar 2025",
    highlights: [
      "Designed and developed AI Agents using LLMs with custom datasets and fine-tuning",
      "Built enterprise RAG pipeline using Vector and Graph databases (Neo4j)",
      "Optimized model inference with Azure GPU, TensorRT achieving 20% latency reduction",
      "Integrated RASA for contextual chatbots and Lex for conversational AI",
    ],
  },
  {
    company: "Nike, Inc",
    role: "Sr. Data Scientist - ML/NLP Specialist",
    location: "Remote",
    period: "Feb 2019 – Aug 2022",
    highlights: [
      "Leveraged AWS SageMaker to optimize supply chain, reducing inventory costs by 15%",
      "Created AI-powered solutions using Amazon Personalize and Rekognition",
      "Built and deployed advanced ML models for business intelligence",
    ],
  },
  {
    company: "Urbint",
    role: "ML/Data Engineer",
    location: "Hybrid",
    period: "Sep 2015 – Feb 2019",
    highlights: [
      "Built recommendation systems using collaborative filtering and matrix factorization",
      "Developed AI-powered medical imaging analysis with YOLOv3 and Faster R-CNN",
      "Created personalized medicine platform for patient outcome prediction",
      "Deployed sentiment analysis for social media monitoring using NLP",
    ],
  },
  {
    company: "Amazon",
    role: "Machine Learning Intern",
    location: "Illinois",
    period: "May 2014 – Jul 2015",
    highlights: [
      "Contributed to Amazon Alexa development focusing on NLU and speech recognition",
      "Collaborated on ML models for voice recognition and personalized recommendations",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="experience">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Professional Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building AI solutions at industry-leading companies
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary animate-glow-pulse border-4 border-background z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"} pl-8 md:pl-0`}>
                  <div className={`card-elevated p-6 rounded-xl glow-border ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-xl font-bold text-foreground">{exp.company}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-primary mb-2">{exp.role}</h3>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "" : "md:text-right"}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex gap-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
