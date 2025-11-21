# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Deploy na Vercel

- Recomendado: fazer o build em modo `test` (já inclui os mocks do MSW quando a aplicação for construída em `mode=test`) e publicar a pasta `dist`.
- O repositório já inclui um `vercel.json` que instrui a Vercel a usar `dist` como saída.

Scripts úteis:

- `npm run dev:test`: roda o Vite em `mode=test` para desenvolvimento local (porta `50789`).
- `npm run build:test` (adicionado): compila com `mode=test` — a Vercel irá executar este comando automaticamente (`vercel-build`).

Para configurar no painel da Vercel, use estas opções (opcional se usar `vercel.json`):

- Build Command: `npm run build:test`
- Output Directory: `dist`

Observação importante:

- A Vercel não é feita para executar um servidor de desenvolvimento (processos long-running como `vite` em modo dev). Por isso configuramos a build para gerar os arquivos estáticos (`dist`) e a Vercel servirá esses arquivos — dessa forma sua aplicação continua usando os mocks em `mode=test` sem publicar a API real.
