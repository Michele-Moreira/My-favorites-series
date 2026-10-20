// Função da Vercel: recebe o pedido do site e repassa pro TMDB com o token,
// que fica guardado no servidor e nunca chega no navegador.
export async function GET(request: Request) {
  const url = new URL(request.url)
  const caminho = url.searchParams.get('path') ?? ''

  const permitido = caminho.startsWith('search/tv') || caminho.startsWith('tv/')
  if (!permitido || caminho.includes('..')) {
    return new Response('Caminho não permitido', { status: 403 })
  }

  url.searchParams.delete('path')
  const resposta = await fetch(
    `https://api.themoviedb.org/3/${caminho}?${url.searchParams}`,
    { headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` } },
  )

  return new Response(await resposta.text(), {
    status: resposta.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
