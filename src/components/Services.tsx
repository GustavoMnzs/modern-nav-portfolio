import { Cpu, Layers, Rocket, Bot, GitBranch, BarChart3 } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    icon: Cpu,
    title: "IA generativa e LLMs",
    description: "Desenvolvo soluções com LLMs, prompt engineering e fluxos generativos conectados ao produto.",
  },
  {
    icon: Layers,
    title: "RAG e inteligência documental",
    description: "Estruturo busca semântica e respostas contextualizadas sobre documentos e bases de conhecimento.",
  },
  {
    icon: Bot,
    title: "Agentes de IA e automação",
    description: "Crio agentes conectados a ferramentas para automatizar processos e operações.",
  },
  {
    icon: Rocket,
    title: "Produtos Full Stack com IA",
    description: "Entrego aplicações que integram IA, backends escaláveis e interfaces modernas.",
  },
  {
    icon: GitBranch,
    title: "APIs e integrações",
    description: "Construo APIs REST e integrações entre modelos, serviços, dados e sistemas de negócio.",
  },
  {
    icon: BarChart3,
    title: "Arquitetura e liderança técnica",
    description: "Defino arquitetura, evolução técnica e roadmap com atuação hands-on até o deploy.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">
              Especialidades
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Como transformo <span className="text-primary">IA em produto</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Do modelo ao deploy, unindo inteligência artificial, produto e engenharia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <SpotlightCard
                key={s.title}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
