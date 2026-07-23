import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  Code2,
  Crown,
  FileSignature,
  Globe,
  GraduationCap,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "./SpotlightCard";

const featuredProject = {
  slug: "olym",
  name: "Olym",
  role: "Founder",
  description:
    "HealthTech com LLMs e fluxos de agentes que automatizam rotinas operacionais e tarefas administrativas.",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "LLMs", "Agentes de IA"],
};

const projects = [
  {
    name: "AtlasBase",
    slug: "atlasbase",
    role: "Especialista em IA & Full Stack",
    icon: BarChart3,
    description:
      "IA documental B2B que transforma PDFs e documentos não estruturados em dados para auditoria e compliance.",
    tags: ["IA documental", "NLP", "Compliance"],
  },
  {
    name: "Condor Inova IA",
    slug: "condor-inova-ia",
    role: "Especialista em IA & Full Stack",
    icon: Bot,
    description:
      "Sistema multiagente que orquestra agentes de IA especializados para executar tarefas e apoiar decisões em fluxos operacionais da Condor.",
    tags: ["Agentes de IA", "Multiagente", "LLMs"],
  },
  {
    name: "TicHub",
    slug: "tichub",
    role: "Full Stack & Especialista em IA",
    icon: Code2,
    description:
      "Omnichannel que centraliza WhatsApp, e-mail e chat, com IA para sentimento, classificação e triagem.",
    tags: ["Omnichannel", "IA", "Atendimento"],
  },
  {
    name: "Sabido",
    slug: "sabido",
    role: "Desenvolvimento & Liderança Técnica",
    icon: GraduationCap,
    description:
      "Ecossistema EdTech com IA para personalização, em uma trajetória de QA a desenvolvimento e liderança técnica.",
    tags: ["EdTech", "IA", "Liderança Técnica"],
  },
  {
    name: "VestGo",
    slug: "vestgo",
    role: "Full Stack & Arquitetura",
    icon: Globe,
    description:
      "Plataforma de preparação para vestibular com simulados, correção automática e acompanhamento de desempenho.",
    tags: ["EdTech", "Full Stack", "Arquitetura"],
  },
  {
    name: "Wolfex",
    slug: "wolfex",
    role: "Tech Lead & Full Stack",
    icon: Truck,
    description:
      "Refatoração e redesign de um ERP logístico com workflows assistidos por IA.",
    tags: ["Logística", "Tech Lead", "IA"],
  },
  {
    name: "Condor Contratos",
    slug: "condor-contratos",
    role: "Desenvolvedor Full Stack",
    icon: FileSignature,
    description:
      "Automação do fluxo de contratos, reduzindo o processo de 10 dias para 1 dia.",
    tags: ["Automação", "Contratos", "10 → 1 dia"],
  },
  {
    name: "Condor Facilities",
    slug: "condor-facilities",
    role: "Desenvolvedor Full Stack",
    icon: Building2,
    description:
      "Gestão de facilities com ordens de serviço, checklists, QR Code e apoio pelo WhatsApp.",
    tags: ["Facilities", "Operações", "Full Stack"],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">Cases</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              IA aplicada a <span className="text-primary">produtos reais</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Conecto modelos, dados, automação e engenharia para resolver problemas reais e transformar complexidade em produtos úteis.
            </p>
          </div>

          {/* Featured */}
          <SpotlightCard
            className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] mb-4 animate-fade-in-up cursor-pointer"
          >
            <div className="p-8 md:p-10 relative" onClick={() => navigate("/projeto/olym")}>
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mono">Destaque</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{featuredProject.name}</h3>
                  <span className="text-sm text-primary font-medium mono">{featuredProject.role}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs bg-white/[0.04] text-muted-foreground rounded-lg border border-white/[0.06] mono">{t}</span>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold shadow-[0_0_20px_hsl(180,100%,50%,0.15)] hover:shadow-[0_0_30px_hsl(180,100%,50%,0.3)] transition-all duration-300">
                Ver case completo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </SpotlightCard>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <SpotlightCard
                key={p.slug}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6 space-y-4" onClick={() => navigate(`/projeto/${p.slug}`)}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                        <p.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{p.name}</h3>
                        <span className="text-xs text-primary/80 font-medium mono">{p.role}</span>
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs bg-white/[0.04] text-muted-foreground rounded-lg border border-white/[0.06] group-hover:border-white/[0.1] group-hover:text-foreground/80 transition-all duration-300 mono">{tag}</span>
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

export default Projects;
