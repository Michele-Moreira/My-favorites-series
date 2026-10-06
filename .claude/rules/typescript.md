---
paths:
  - "**/*.{ts,tsx}"
---

# TypeScript

- `strict` ligado. Erro do compilador é bloqueante, não aviso: `npm run build` roda `tsc -b` antes do Vite.
- **Nunca use `any`.** Quando o tipo é incerto, use `unknown` e refine.
- O formato de uma série é o `type Serie` em `src/types/serie.ts`. Campo novo entra primeiro no `type`, depois
  nos dados em `src/data/series.ts`. O compilador então aponta toda série que ficou sem o campo.
- Cada campo tem o tipo que serve pro uso: `genero` é `string[]` (pra filtrar), `nota`, `ano` e `temporadas` são
  `number` (pra ordenar e calcular). Não guarde número ou lista como texto.
- Imports de tipo são explícitos: `import type { Serie } from '../types/serie'`.
- Não anote o que o compilador já infere. Anote parâmetros de função (`texto: string`) e props.
- Evite asserção `as` e o `!` de não-nulo. O único `!` aceito é o do `getElementById('root')` no `main.tsx`.
- Lembre: o TypeScript confere o **formato**, não o conteúdo. Um caminho de imagem errado passa no compilador;
  confira se o arquivo existe em `public/img/`.
