# CLAUDE.md

Galeria das séries favoritas da Mi, com página de detalhe, busca sem acento e filtro por gênero.
No ar em https://my-favorites-series.vercel.app. A história do projeto está no `README.md`.

## Como trabalhar aqui

- **Quem escreve o código é a Mi.** Este é um projeto de portfólio: ela precisa conseguir explicar cada linha
  numa entrevista. Explique o porquê, dê exemplo de outro assunto e deixe a parte central para ela completar.
  Só escreva o código por ela quando ela pedir explicitamente.
- Passo a passo em partes pequenas, cada uma terminando com um **✅ Confere** do que deve aparecer na tela.
  Para assunto novo, ela prefere o nível "como para iniciante".
- Antes de dizer que algo está certo, rode `npm run build` e `npm run lint`.

## Stack

React 19 + TypeScript + Vite · React Router 7 (modo declarativo) · CSS puro · deploy na Vercel.

## Estrutura

| Caminho | O que é |
|---|---|
| `src/types/serie.ts` | `type Serie`, o formato de cada série |
| `src/data/series.ts` | a lista das 14 séries (fonte única dos dados) |
| `src/components/` | `Header`, `Galeria` (busca + filtro + `.map()`), `SerieCard` |
| `src/pages/SerieDetalhe.tsx` | página de uma série, rota `/serie/:slug` |
| `src/index.css` | todo o estilo, vindo do CSS de 2025 |
| `public/img/` | capas das séries |
| `legacy/` | a primeira versão em HTML (2025), guardada como "antes" — não editar |
| `vercel.json` | manda toda rota pro `index.html`, senão `/serie/<slug>` dá 404 na Vercel |

## Comandos

```bash
npm run dev      # servidor local em http://localhost:5173
npm run build    # confere TypeScript (tsc -b) e monta a pasta dist
npm run lint     # ESLint
```

Depois de instalar biblioteca nova, pare o `npm run dev` e rode de novo.

## Fluxo de entrega

- Toda mudança vai num branch próprio e entra na `main` por pull request, que a Mi aceita.
  A `main` é o site no ar: a Vercel publica cada commit nela.
- Commits e PR seguem as skills `git-commit` e `create-pr` (Conventional Commits, minúsculo, em inglês,
  sem co-autor). Subir pro GitHub sempre com OK da Mi.
- Vercel: preset **Vite** sem override e Node **24.x**.

## Convenções por tipo de arquivo

`.claude/rules/` carrega sozinho conforme o arquivo aberto.
