export interface ProjectData {
  slug: string;
  name: string;
  url: string;
  role: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  tags: string[];
  hasPreview: boolean;
}

export const allProjects: ProjectData[] = [
  {
    slug: "olym",
    name: "Olym",
    url: "https://olym.com.br/",
    role: "Founder",
    tagline: "HealthTech com IA aplicada a rotinas que importam.",
    description:
      "A Olym é uma HealthTech criada para conectar tecnologia e operação. Como Founder, conduzo o produto da concepção à produção, com foco no uso prático de IA em rotinas operacionais e tarefas administrativas.",
    challenge:
      "Transformar rotinas operacionais e tarefas administrativas em fluxos mais simples, mantendo produto, dados e automações conectados em uma única experiência.",
    solution:
      "Construí uma arquitetura full stack com React, TypeScript, Node.js e PostgreSQL, integrando LLMs e fluxos de agentes para automatizar etapas recorrentes da operação.",
    result:
      "Rotinas operacionais e tarefas administrativas mais simples, com LLMs e agentes de IA assumindo etapas repetitivas dos fluxos.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "LLMs", "Agentes de IA"],
    tags: ["HealthTech", "LLMs", "Agentes de IA"],
    hasPreview: true,
  },
  {
    slug: "atlasbase",
    name: "AtlasBase",
    url: "https://atlasbase.com.br/",
    role: "Especialista em IA & Full Stack",
    tagline: "Documentos não estruturados transformados em dados úteis.",
    description:
      "AtlasBase é uma plataforma B2B de IA documental que processa PDFs e outros documentos não estruturados, transformando informação em dados organizados para fluxos de auditoria e compliance.",
    challenge:
      "Ler, organizar e estruturar manualmente informações espalhadas em documentos não estruturados tornava os fluxos de auditoria e compliance lentos e dependentes de trabalho repetitivo.",
    solution:
      "Desenvolvi uma solução full stack que combina NLP, processamento documental, APIs e persistência em PostgreSQL para extrair e estruturar as informações dos documentos.",
    result:
      "Automação da leitura, organização e estruturação de informações antes tratadas manualmente.",
    stack: ["NLP", "Processamento Documental", "APIs", "Full Stack", "PostgreSQL"],
    tags: ["IA documental", "B2B", "Compliance"],
    hasPreview: true,
  },
  {
    slug: "condor-inova-ia",
    name: "Condor Inova IA",
    url: "#",
    role: "Especialista em IA & Full Stack",
    tagline: "Agentes de IA que colaboram para conduzir tarefas de ponta a ponta.",
    description:
      "Condor Inova IA é uma iniciativa de inovação da Condor baseada em um sistema multiagente. Com uma abordagem semelhante à do CrewAI, estruturei agentes de IA especializados que assumem papéis definidos e colaboram entre si para conduzir tarefas do início ao fim.",
    challenge:
      "Tarefas operacionais dependiam de várias etapas manuais e de decisões humanas em cada ponto do fluxo, o que tornava o processo lento e difícil de escalar.",
    solution:
      "Desenvolvi uma arquitetura de agentes orquestrados, com papéis, objetivos e ferramentas definidos para cada agente. Os agentes se comunicam, delegam subtarefas e usam LLMs para interpretar o contexto, decidir os próximos passos e encadear as etapas do fluxo.",
    result:
      "Fluxos conduzidos por agentes de IA que colaboram entre si, reduzindo a dependência de intervenção manual a cada etapa.",
    stack: ["Python", "LLMs", "Agentes de IA", "Orquestração Multiagente", "APIs"],
    tags: ["Agentes de IA", "Multiagente", "LLMs"],
    hasPreview: false,
  },
  {
    slug: "tichub",
    name: "TicHub",
    url: "https://tichub.com.br/",
    role: "Full Stack & Especialista em IA",
    tagline: "Atendimento omnichannel com inteligência aplicada à triagem.",
    description:
      "TicHub é uma plataforma omnichannel que centraliza conversas de WhatsApp, e-mail e chat, usando IA para análise de sentimento, classificação e triagem.",
    challenge:
      "Reunir canais distintos de atendimento e organizar o volume de conversas para que cada contato pudesse ser compreendido e direcionado com mais agilidade.",
    solution:
      "Desenvolvi uma experiência full stack unificada e integrei IA ao fluxo para identificar sentimento, classificar mensagens e apoiar a triagem das conversas.",
    result: "Unificação dos canais de atendimento e automação da triagem de conversas.",
    stack: ["React", "TypeScript", "Node.js", "Supabase", "IA", "APIs"],
    tags: ["Omnichannel", "IA", "Atendimento"],
    hasPreview: true,
  },
  {
    slug: "sabido",
    name: "Sabido",
    url: "https://sabido.pro/",
    role: "Desenvolvimento & Liderança Técnica",
    tagline: "Um ecossistema EdTech com aprendizagem personalizada por IA.",
    description:
      "O Sabido é um ecossistema EdTech que usa IA para personalizar a experiência de aprendizagem. Minha trajetória no produto evoluiu de QA para desenvolvimento e liderança técnica.",
    challenge:
      "Evoluir a qualidade e a experiência do produto enquanto a plataforma incorporava personalização por IA ao percurso de aprendizagem.",
    solution:
      "Combinei a visão de qualidade construída em QA com atuação em desenvolvimento e liderança técnica para apoiar a evolução do produto e da personalização por IA.",
    result:
      "Experiência educacional com personalização por IA, apoiada por uma atuação que conecta qualidade, desenvolvimento e liderança técnica.",
    stack: ["React", "TypeScript", "Node.js", "Supabase", "IA"],
    tags: ["EdTech", "IA", "Liderança Técnica"],
    hasPreview: true,
  },
  {
    slug: "vestgo",
    name: "VestGo",
    url: "https://vestgo.com.br/",
    role: "Full Stack & Arquitetura",
    tagline: "Preparação para vestibular com uma experiência digital integrada.",
    description:
      "VestGo é uma plataforma focada em preparação para vestibular. Atuei no desenvolvimento full stack e na arquitetura da experiência usada pelos estudantes.",
    challenge:
      "Organizar conteúdo interativo, simulados e acompanhamento de desempenho em uma plataforma responsiva e preparada para a rotina de estudos.",
    solution:
      "Estruturei uma arquitetura com foco em performance, incluindo simulados com correção automática e dashboard de desempenho para os alunos.",
    result:
      "Conteúdo, simulados, correção automática e acompanhamento de desempenho reunidos em uma única experiência.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    tags: ["EdTech", "Full Stack", "Arquitetura"],
    hasPreview: true,
  },
  {
    slug: "wolfex",
    name: "Wolfex",
    url: "https://wolfex.com.br/",
    role: "Tech Lead & Full Stack",
    tagline: "ERP logístico redesenhado com workflows assistidos por IA.",
    description:
      "Na Wolfex, atuei como Tech Lead e Full Stack na refatoração e no redesign do ERP logístico, modernizando a base do produto e incorporando workflows assistidos por IA.",
    challenge:
      "Refatorar e redesenhar um ERP logístico legado sem perder a continuidade dos fluxos essenciais da operação.",
    solution:
      "Conduzi a evolução para uma arquitetura moderna, com redesign da interface, APIs mais organizadas e workflows assistidos por IA para apoiar etapas da operação logística.",
    result: "Redução estimada do ciclo de seis meses para um mês.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "IA"],
    tags: ["Logística", "Tech Lead", "IA"],
    hasPreview: true,
  },
  {
    slug: "condor-contratos",
    name: "Condor Contratos",
    url: "#",
    role: "Desenvolvedor Full Stack",
    tagline: "Automação de contratos do início à assinatura.",
    description:
      "Desenvolvi um sistema full stack para automatizar a criação, aprovação e assinatura de contratos da Condor.",
    challenge:
      "O processo era manual, com criação de documentos, envio por e-mail, assinatura, digitalização e arquivamento em etapas separadas.",
    solution:
      "Implementei templates dinâmicos, preenchimento de dados, assinatura digital, armazenamento e um fluxo automatizado de aprovação e notificações.",
    result: "Processo de contratos reduzido de 10 dias para 1 dia.",
    stack: ["React", "Node.js", "PostgreSQL", "Assinatura Digital"],
    tags: ["Full Stack", "Automação", "Contratos"],
    hasPreview: false,
  },
  {
    slug: "condor-facilities",
    name: "Condor Facilities",
    url: "#",
    role: "Desenvolvedor Full Stack",
    tagline: "Operações de facilities reunidas em um fluxo rastreável.",
    description:
      "Desenvolvi um sistema full stack para centralizar a gestão de operações e manutenção de facilities da Condor.",
    challenge:
      "Ordens e rotinas de facilities estavam distribuídas entre planilhas e conversas no WhatsApp, dificultando o acompanhamento das atividades.",
    solution:
      "A solução reúne ordens de serviço, checklists operacionais, identificação por QR Code e apoio à comunicação pelo WhatsApp em um fluxo centralizado.",
    result:
      "Operações de facilities centralizadas, com mais rastreabilidade para ordens, checklists e execução em campo.",
    stack: ["React", "Node.js", "PostgreSQL", "QR Code", "WhatsApp"],
    tags: ["Facilities", "Operações", "Full Stack"],
    hasPreview: false,
  },
];
