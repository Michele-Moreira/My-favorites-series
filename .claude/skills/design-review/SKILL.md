---
name: design-review
description: Use ao revisar uma mudança de UI antes de finalizar ou abrir PR. Avalia responsividade, acessibilidade (foco, rótulos, contraste, teclado), consistência com as variáveis de cor do index.css e aderência às regras de estilo do projeto. Use quando o usuário pedir "revisa o visual", "ficou bom?", "design review", ou após implementar tela/componente com peso visual.
---

# design-review

Revisa uma mudança de UI sob três lentes. Reporte achados concretos (arquivo + o que muda), não elogios genéricos.

## Lente 1 — Responsividade

- A tela funciona em 375px, 768px e desktop? O `@media (max-width: 768px)` do `index.css` cobre o que mudou?
- Quebra em telas estreitas (texto estourando, overflow horizontal, toque pequeno demais)?
- Grid e flex se adaptam em vez de ter largura fixa?

## Lente 2 — Acessibilidade

- Todo elemento interativo é alcançável por teclado e tem estado de foco visível.
- Campos têm rótulo acessível (`aria-label` ou `<label>` associado).
- Contraste de texto suficiente sobre o fundo escuro (`--cor-fundo`). Texto sem `color` fica invisível.
- Capa de série tem `alt` descritivo; imagem decorativa tem `alt=""`.
- `<html lang="pt-br">` mantido no `index.html`.

## Lente 3 — Consistência

- Cores pelas variáveis do `:root` (`--cor-fundo`, `--cor-texto`, `--cor-destaque`, `--cor-borda`), não cor crua.
- Reaproveita classes existentes (`texto-negrito`, `imagem_preview`...) em vez de recriar.
- Segue `.claude/rules/styling.md`.

## Saída

Para cada problema: **arquivo:linha → o que está errado → por quê → correção sugerida**, agrupado por lente.
Se não der para abrir o navegador, peça para a Mi conferir no modo celular do DevTools (F12) e mandar print.
