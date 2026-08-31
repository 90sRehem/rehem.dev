export interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Mosaico',
    type: 'Produto digital',
    description: 'Um espaço calmo para organizar referências, ideias e o trabalho que ainda está tomando forma.',
    image: '/work/mosaico.svg',
    tags: ['Produto', 'UX/UI', 'Astro'],
    href: '/projects/mosaico/',
    featured: true,
  },
  {
    title: 'Sinal aberto',
    type: 'Identidade + web',
    description: 'Sistema editorial para transformar dados complexos em histórias que qualquer pessoa consegue acompanhar.',
    image: '/work/sinal-aberto.svg',
    tags: ['Direção', 'Web design', 'Conteúdo'],
    href: '/projects/sinal-aberto/',
    featured: true,
  },
  {
    title: 'Ritmo',
    type: 'Ferramenta interna',
    description: 'Um painel enxuto para times pequenos verem o que importa, decidirem mais rápido e seguirem em frente.',
    image: '/work/ritmo.svg',
    tags: ['Interface', 'Sistemas', 'Frontend'],
    href: '/projects/ritmo/',
  },
  {
    title: 'Caderno 01',
    type: 'Experimento',
    description: 'Uma publicação digital sobre atenção, tecnologia e os pequenos rituais que sustentam bons projetos.',
    image: '/work/caderno.svg',
    tags: ['Editorial', 'Pesquisa', 'Web'],
    href: '/projects/caderno-01/',
  },
];
