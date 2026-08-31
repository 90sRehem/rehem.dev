# rehem.dev

Portfolio pessoal, blog e contato — construído com Astro e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Para gerar a versão estática de produção:

```bash
npm run build
npm run preview
```

O build gera os arquivos em `dist/`, prontos para Cloudflare Pages. O comando
`npm run check` valida os componentes Astro e as coleções de conteúdo.

## Conteúdo

- Projetos: edite `src/data/projects.ts` e adicione imagens em `public/work/`.
- Blog: crie arquivos Markdown em `src/content/blog/` com o frontmatter usado
  pelos posts existentes.
- SEO: o sitemap é gerado pelo `@astrojs/sitemap`; metadados e Open Graph ficam
  no layout compartilhado.

O formulário de contato usa o FormSubmit e envia para `hello@rehem.dev`. Após
o envio, você será redirecionado para uma página de confirmação. Na primeira
utilização, o endereço precisa confirmar a ativação recebida por email.
