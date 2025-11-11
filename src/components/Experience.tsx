import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Gálata Tecnologia",
    role: "Suporte Técnico e Desenvolvedor Web",
    period: "Atual",
    current: true,
    description: [
      "Suporte ao cliente e resolução de problemas via tickets",
      "Desenvolvimento e migração de sites",
      "Trabalho em equipe junto ao time de desenvolvimento",
    ],
  },
  {
    company: "UpSites",
    role: "Desenvolvedor Web Low Code",
    period: "1 ano e 11 meses",
    current: false,
    description: [
      "Desenvolvimento de sites e landing pages WordPress",
      "Implementação de boas práticas de desenvolvimento web",
      "Aplicação de conceitos de SEO e otimização",
    ],
  },
  {
    company: "Volpe Marketing Digital",
    role: "Sócio Proprietário",
    period: "1 ano",
    current: false,
    description: [
      "Especialista em marketing digital",
      "Gestão de vendas e tráfego",
      "Análise de marketing digital",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative scroll-fade-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-primary text-xs mb-6 tracking-[0.25em] uppercase font-semibold">
              Experiência
            </h2>
            <p className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Trajetória{" "}
              <span className="text-primary">Profissional</span>
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="group relative overflow-hidden border-2 border-primary/20 bg-card/70 backdrop-blur-xl hover:border-primary/50 hover:bg-card/90 transition-all duration-300 animate-fade-in-up shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_hsl(180,100%,50%,0.2)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
                </div>

                <CardContent className="p-8 relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-all duration-300">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-base text-muted-foreground/80 font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 ml-15">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground/70 text-[15px] flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 md:flex-col md:items-end">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
