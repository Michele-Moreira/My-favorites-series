---
paths:
  - "**/*.tsx"
---

# React

- Apenas componentes de função. Nada de classes.
- Um componente por arquivo, com `export default` no fim (padrão do projeto: `export default Galeria`).
- Props sempre tipadas com `type Props` logo acima do componente, desestruturadas na assinatura:
  `function SerieCard({ serie }: Props)`.
- **Regras de hooks são inegociáveis:** só chame hooks no topo do componente, nunca em condicional ou loop.
- Campo de formulário é controlado: `value={estado}` + `onChange={(e) => setEstado(e.target.value)}`.
- Derive em vez de duplicar: o que dá para calcular a partir do estado (ex.: `seriesFiltradas`) é variável
  comum, não vira novo `useState`.
- Valor que nunca muda (ex.: a lista `generos`) fica fora do componente, pra não ser recalculado a cada render.
- Listas usam `key` estável e única: o `slug` da série, nunca o índice.
- Navegação interna usa `<Link to>` do `react-router`, nunca `<a href>` (que recarrega a página).
- `useEffect` só para sincronizar com algo externo. Filtro, busca e contagem se resolvem com variável derivada.
