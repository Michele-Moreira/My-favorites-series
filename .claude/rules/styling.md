---
paths:
  - "**/*.{tsx,css}"
---

# Estilo (CSS puro)

- Todo o estilo está em `src/index.css`, que nasceu do CSS da versão de 2025 (`legacy/style.css`). Não há
  Tailwind nem biblioteca de componentes: não adicione sem a Mi pedir.
- **Sem `style` inline** no JSX. Estilo novo vira classe no `index.css`, em uma seção com o cabeçalho no padrão
  do arquivo: `/* ========== NOME DA SEÇÃO ========== */`.
- Cores sempre pelas variáveis do `:root`: `var(--cor-fundo)`, `var(--cor-texto)`, `var(--cor-destaque)`,
  `var(--cor-borda)`. Cor nova vira variável antes de ser usada.
- Mantenha os nomes de classe que já existem (`galeria`, `imagem_preview`, `texto-negrito`,
  `detalhes-container`, `descricao-serie`, `filtros`, `sem-resultado`). Classe nova em português e kebab-case.
- O `body` não define cor de texto: todo texto novo sobre o fundo escuro precisa de `color: var(--cor-texto)`,
  senão fica invisível.
- `input` e `select` não herdam a fonte: use `font-family: inherit`.
- Layout com flex-box e grid. Responsividade pelo `@media (max-width: 768px)` que já existe; confira sempre no
  modo celular do DevTools.
- Acessibilidade não é opcional: imagem com `alt` descritivo, campo de formulário com `aria-label` ou `<label>`,
  foco visível em tudo que é clicável.
