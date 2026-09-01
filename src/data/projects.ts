export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  kind: 'projeto' | 'contribuição';
}

export const projects: Project[] = [
  {
    title: 'squad',
    description:
      'Distribuição de agentes que coordena trabalho paralelo em worktrees git isoladas, supervisiona a execução e entrega PRs revisados ou relatórios de investigação.',
    tags: ['Shell', 'Multi-agent', 'Worktrees'],
    href: 'https://github.com/runecraftai/squad',
    kind: 'projeto',
  },
  {
    title: 'pi-extensions',
    description:
      'Monorepo de extensões para o agente Pi — TUI unificada e customizável (header, footer, editor) e ferramentas de consulta ao knowledge graph via graphify.',
    tags: ['TypeScript', 'Pi', 'TUI'],
    href: 'https://github.com/runecraftai/pi-extensions',
    kind: 'projeto',
  },
  {
    title: 'harness',
    description:
      'Harness multiagente para agentes de código: subagentes com gates, workflows DAG verificáveis, goal-loop com auditor isolado e revisão paralela de PRs.',
    tags: ['TypeScript', 'Agents', 'Verification'],
    href: 'https://github.com/runecraftai/harness',
    kind: 'projeto',
  },
  {
    title: 'career-coach',
    description:
      'Aplicação web de auditoria de currículo e LinkedIn, com score, diagnóstico de lacunas e sugestões objetivas de melhoria para o perfil profissional.',
    tags: ['Web', 'Resume', 'LinkedIn'],
    href: 'https://github.com/runecraftai/career-coach',
    kind: 'projeto',
  },
  {
    title: 'arcanum',
    description:
      'Monorepo dos plugins de agentes OpenCode — Spells (17 skills), Summon (CLI de instalação), Runes (memória SQLite), Guild (8 agentes orquestrados) e Spawn (tmux pane).',
    tags: ['TypeScript', 'OpenCode', 'Agents'],
    href: 'https://github.com/runecraftai/arcanum',
    kind: 'projeto',
  },
];
