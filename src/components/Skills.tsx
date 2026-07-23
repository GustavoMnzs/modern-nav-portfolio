import { Code2, Brain, Server, Database, Terminal } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const skillCategories = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    skills: [
      "IA Generativa",
      "LLMs",
      "RAG",
      "Agentes de IA",
      "LangChain",
      "OpenAI API",
      "Prompt Engineering",
      "NLP",
      "Automação de Workflows",
    ],
  },
  {
    icon: Server,
    title: "Backend e Integrações",
    skills: ["Python", "Node.js", "APIs REST", "Integrações de APIs", "Processamento Documental"],
  },
  {
    icon: Code2,
    title: "Frontend",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Dados",
    skills: ["PostgreSQL", "SQL", "Supabase"],
  },
  {
    icon: Terminal,
    title: "Infraestrutura e Produto",
    skills: ["Docker", "Linux", "Git", "Vercel", "CI/CD", "Arquitetura SaaS", "Roadmap", "Troubleshooting"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">Stack</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Especialidades <span className="text-primary">técnicas</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat, i) => (
              <SpotlightCard
                key={cat.title}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                      <cat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 text-xs bg-white/[0.04] text-muted-foreground rounded-lg border border-white/[0.06] group-hover:border-white/[0.1] group-hover:text-foreground/80 transition-all duration-300 mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
