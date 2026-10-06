---
paths:
  - "**/*.{ts,tsx}"
---

# Naming

## Arquivos e pastas

- **Pastas** em inglês e minúsculo: `components/`, `pages/`, `data/`, `types/`.
- **Componentes** em PascalCase, um por arquivo: `SerieCard.tsx`, `Galeria.tsx`, `SerieDetalhe.tsx`.
- **Dados e tipos** em minúsculo: `data/series.ts`, `types/serie.ts`.
- `components/` guarda pedaços de tela; `pages/` guarda uma tela inteira por rota.
- Imagens em `public/img/`, minúsculo, sem acento e com hífen: `operacao-lioness.avif`.

## Símbolos

- O vocabulário do domínio é em português (`Serie`, `Galeria`, `busca`, `genero`, `semAcento`); o vocabulário
  técnico do React fica como é (`useState`, `Props`, `key`). Siga o que já existe no arquivo.
- **Componentes e tipos:** PascalCase — `SerieCard`, `Serie`, `Props`.
- **Funções e variáveis:** camelCase — `seriesFiltradas`, `bateGenero`, `semAcento`.
- **Estado:** par `[valor, setValor]` — `[busca, setBusca]`, `[genero, setGenero]`.
- Campos de dados **sem acento**: `genero`, `titulo` (não `gênero`, `título`).

## Slug

- O `slug` de cada série é minúsculo, sem acento e com hífen (`the-last-of-us`). Ele vira endereço
  (`/serie/<slug>`), `key` da lista e chave de busca no `find`, então precisa ser único e nunca mudar.

O nome deve dispensar comentário. Se precisar comentar para explicar o que é, renomeie.
