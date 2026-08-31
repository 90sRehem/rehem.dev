# rehem.dev

Site pessoal de Jonathan Rehem — construído com Astro e Tailwind CSS.

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

O build gera os arquivos em `dist/`. O comando `npm run check` valida os
componentes Astro.

## Conteúdo

- Perfil, bio e links sociais: `src/data/profile.ts`.
- Projetos em destaque: `src/data/projects.ts`.
- Stack técnico: `src/data/stack.ts`.

Todo o conteúdo é real — sem projetos fictícios, sem timeline de experiência
(isso já existe no LinkedIn).

## Deploy

O deploy é gerenciado como infraestrutura via Terraform, em `infra/`.

### Via Terraform (recomendado)

```bash
cd infra
terraform init
terraform apply
```

Requer um token de API da Cloudflare com permissão `Pages:Edit` e o ID da
conta Cloudflare. Passe-os como variáveis de ambiente (`TF_VAR_cloudflare_api_token`,
`TF_VAR_cloudflare_account_id`) ou copie `terraform.tfvars.example` para
`terraform.tfvars` (gitignored) e preencha os valores.

O `terraform apply` cria o projeto Cloudflare Pages e conecta ao repositório
GitHub `90sRehem/rehem.dev`; a partir daí, todo push na branch `main` dispara
um deploy de produção automaticamente, e outras branches/PRs geram preview
deployments.

Um workflow do GitHub Actions (`.github/workflows/terraform.yml`) roda
`terraform plan` em pull requests que tocam `infra/` e `terraform apply`
automaticamente em push para `main`. Requer os secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` e
`TF_API_TOKEN`, além das variáveis de repositório `TF_ORGANIZATION` e
`TF_WORKSPACE`. O estado é armazenado no workspace remoto do Terraform Cloud;
crie esse workspace antes do primeiro deploy. Em pull requests de forks, o
workflow executa apenas validações quando os secrets não estão disponíveis.

### Deploy manual (fallback)

Sem depender do Terraform ou da integração Git, também é possível publicar
diretamente com o `wrangler`:

```bash
npm run build
npx wrangler pages deploy dist --project-name=rehem-dev
```

### Portabilidade

O Terraform está isolado em `infra/` e usa apenas um recurso
(`cloudflare_pages_project`), o que facilita trocar de provedor no futuro:

- **Cloudflare Pages → GitHub Pages**: trocar o provider `cloudflare` pelo
  `github`, usando o recurso `github_repository_pages` e um workflow de
  Actions para publicar `dist/` na branch `gh-pages`.
- **Cloudflare Pages → AWS**: trocar por `aws_s3_bucket` (hosting estático)
  + `aws_cloudfront_distribution` (CDN/HTTPS), publicando `dist/` no bucket
  via `aws s3 sync` no CI.

Em qualquer um dos casos, o site em si (Astro + Tailwind, saída estática em
`dist/`) não muda — só o alvo do deploy.
