export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  kind: 'projeto' | 'contribuição';
}

export const projects: Project[] = [
  {
    title: 'design-system',
    description: 'Sistema de design em TypeScript: componentes, tokens e padrões reutilizáveis entre produtos.',
    tags: ['TypeScript', 'Design System'],
    href: 'https://github.com/90sRehem/design-system',
    kind: 'projeto',
  },
  {
    title: 'notifications-service',
    description: 'Serviço de notificações desacoplado, construído para ser plugado em diferentes produtos.',
    tags: ['TypeScript', 'Node.js', 'Serviços'],
    href: 'https://github.com/90sRehem/notifications-service',
    kind: 'projeto',
  },
  {
    title: 'DOE',
    description: 'Aplicação de registro de doadores com persistência em banco de dados.',
    tags: ['CSS', 'Full Stack'],
    href: 'https://github.com/90sRehem/DOE',
    kind: 'projeto',
  },
  {
    title: 'conceitos-nodejs',
    description: 'Aplicação dos conceitos fundamentais de Node.js explorados durante o bootcamp GoStack.',
    tags: ['JavaScript', 'Node.js'],
    href: 'https://github.com/90sRehem/conceitos-nodejs',
    kind: 'projeto',
  },
  {
    title: 'agent-skills',
    description: 'Skills de engenharia para agentes de código com IA.',
    tags: ['AI Engineering', 'JavaScript'],
    href: 'https://github.com/addyosmani/agent-skills',
    kind: 'contribuição',
  },
  {
    title: 'career-ops',
    description: 'Busca de emprego com IA open source: varre portais, avalia vagas, ajusta o currículo e acompanha candidaturas no CLI.',
    tags: ['AI Engineering', 'JavaScript'],
    href: 'https://github.com/santifer/career-ops',
    kind: 'contribuição',
  },
  {
    title: 'harness',
    description: 'Harness multiagente para o Pi, com guardas, verificação, avaliações, resiliência, memória e roteamento por código.',
    tags: ['AI Engineering', 'TypeScript'],
    href: 'https://github.com/runecraftai/harness',
    kind: 'projeto',
  },
  {
    title: 'squad',
    description: 'Distro de agentes para executar trabalho de código com operadores visíveis, worktrees isolados e sessões supervisionadas.',
    tags: ['AI Engineering', 'TypeScript'],
    href: 'https://github.com/runecraftai/squad',
    kind: 'projeto',
  },
  {
    title: 'arcanum',
    description: 'Monorepo das ferramentas Runecraft para OpenCode, com pacotes de orquestração, skills, instalação e visibilidade no terminal.',
    tags: ['AI Engineering', 'TypeScript'],
    href: 'https://github.com/runecraftai/arcanum',
    kind: 'projeto',
  },
];
