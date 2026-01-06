# PizzaShop — Admin Web

Um frontend administrativo em Vite + React + TypeScript para gerenciar uma pizzaria.

## Funcionalidades

- UI de gerenciamento para pedidos, relatórios de faturamento e perfis
- API Mockada para desenvolvimento local usando MSW (`mode=test`)
- Páginas com React Router e componentes de UI reutilizáveis
- Gráficos e relatórios com seleção de período

## Stack Tecnológica

- Frameworks: React, Vite, TypeScript
- Estado e dados: @tanstack/react-query, axios
- UI: Tailwind CSS, Radix primitives, lucide-react
- Testes: Vitest, @testing-library/react, MSW

## Início Rápido

Requisitos: Node 18+ (ou compatível), pnpm ou npm.

Instale as dependências:

```bash
pnpm install
# ou
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
pnpm dev
```

Execute o servidor de desenvolvimento com mocks (recomendado para desenvolvimento):

```bash
npm run dev:test
```

## Build

```bash
npm run build
# build com modo de teste (inclui o worker do MSW):
npm run build:test
```

Pré-visualize a build de produção:

```bash
npm run preview
```

## Scripts (do package.json)

- `dev` — inicia o servidor de desenvolvimento Vite
- `dev:test` — inicia o Vite em `mode=test` (usa MSW na porta 50789 por padrão)
- `build` — build do TypeScript + build do Vite
- `build:test` — build com `mode=test` (útil para deploy que precisa de mocks)
- `vercel-build` — hook de build da Vercel (executa `vite build --mode test`)
- `preview` — pré-visualiza a build de produção
- `test` — executa os testes unitários com Vitest
- `biome:fix` — formata com o Biome

## Notas de Desenvolvimento

- **MSW**: O projeto inclui um script de mock service worker em `public/mockServiceWorker.js` e handlers de mock em `src/api/mocks`. Use `mode=test` para habilitar os mocks tanto em desenvolvimento quanto na build.
- **API**: Helpers de requisição e endpoints estão em `src/api`. Componentes de UI e páginas estão em `src/components` e `src/pages`.

## Estrutura do Repositório (alto nível)

- `src/`
  - `api/` — Endpoints da API e mocks
  - `components/` — Componentes compartilhados e primitivas de UI
  - `lib/` — Configuração do axios, react-query e utilitários
  - `pages/` — Páginas de rota e layouts
  - `main.tsx` / `App.tsx` — Entrada da aplicação
- `public/` — Arquivos estáticos (contém o worker do MSW)
- `test/` — Configuração dos testes

## Testes

- Execute os testes unitários com `npm run test`.
- Os testes de componentes usam `@testing-library/react` e `vitest`.

## Deploy

- Este aplicativo está configurado para gerar assets estáticos. Para a Vercel, o `vercel.json` está incluído e o `vercel-build` executa `vite build --mode test` para que os mocks permaneçam disponíveis na saída da build.
