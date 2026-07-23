import SpotlightCard from "./SpotlightCard";

const experiences = [
  {
    company: "Olym",
    role: "Founder",
    period: "jun/2025–atual",
    current: true,
    description: [
      "Desenvolvimento de produto HealthTech da concepção à produção",
      "Aplicação de LLMs e agentes de IA na evolução do produto",
      "Implementação Full Stack com React e Node.js",
      "Atuação hands-on da arquitetura à evolução contínua",
    ],
  },
  {
    company: "Gálata",
    role: "Engenheiro Líder de Suporte",
    period: "abr/2025–atual",
    current: true,
    description: [
      "Liderança da operação de suporte técnico corporativo",
      "Atuação técnica em migrações complexas de sistemas",
      "Manutenção de infraestrutura crítica em ambientes web",
    ],
  },
  {
    company: "Volpe",
    role: "Desenvolvedor Full Stack & Especialista em Automação",
    period: "jul/2024–jun/2025",
    current: false,
    description: [
      "Desenvolvimento Full Stack de produtos digitais e automações de marketing",
      "Construção e evolução da infraestrutura tecnológica de vendas",
      "Infraestrutura que apoiou R$ 180 mil+ em faturamento",
    ],
  },
  {
    company: "UpSites",
    role: "Engenheiro de Sistemas Web",
    period: "mar/2022–fev/2024",
    current: false,
    description: [
      "Desenvolvimento e sustentação de sistemas web focados em conversão, segurança e alta performance",
      "Atuação direta na resolução de problemas estruturais e otimização de interfaces web",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">Experiência</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Trajetória <span className="text-primary">Profissional</span>
            </h2>
          </div>
          <div className="space-y-3">
            {experiences.map((exp, i) => (
              <SpotlightCard
                key={exp.company}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                          {exp.current && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium mt-1">{exp.company}</p>
                      </div>
                      <ul className="space-y-1.5">
                        {exp.description.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-sm leading-5 flex gap-2">
                            <span className="text-primary/60 text-[5px] leading-5 shrink-0">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mono shrink-0 ${
                      exp.current ? "bg-primary/10 text-primary border border-primary/20" : "bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                    }`}>{exp.period}</span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-10">
            <SpotlightCard className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up">
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">Formação</h3>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                    <p className="text-sm font-medium text-foreground">Análise e Desenvolvimento de Sistemas (ADS)</p>
                    <p className="text-sm text-muted-foreground mt-1">Universidade Católica de Brasília</p>
                    <p className="text-xs text-primary mono mt-3">Concluído em dez/2022</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                    <p className="text-sm font-medium text-foreground">Desenvolvimento Web Completo</p>
                    <p className="text-sm text-muted-foreground mt-1">Carga horária: 114,5h</p>
                    <p className="text-xs text-primary mono mt-3">Concluído em dez/2022</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
