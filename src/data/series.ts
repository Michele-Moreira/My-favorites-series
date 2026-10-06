import type { Serie } from '../types/serie'

export const series: Serie[] = [
  {
    slug: 'the-vampire-diaries',
    titulo: 'The Vampire Diaries',
    imagem: '/img/tvd.jfif',
    genero: ['Drama', 'Romance', 'Sobrenatural'],
    sinopse: 'A adolescente Elena se vê dividida entre dois irmãos vampiros — Stefan e Damon — enquanto lida com segredos obscuros e forças sobrenaturais.',
    temporadas: 8,
    ano: 2009,
    nota: 7.5
  },
  {
    slug: 'american-horror-story',
    titulo: 'American Horror Story',
    imagem: '/img/ahs.jpg',
    genero: ['Terror', 'Sobrenatural', 'Slasher', 'Drama'],
    sinopse: 'A série apresenta cada temporada com uma história independente, seguindo um conjunto diferente de personagens e ambientações distintas no mesmo universo ficcional e um enredo com seu próprio "início, meio e fim". Alguns elementos da trama de cada temporada são vagamente inspirados em eventos reais.',
    temporadas: 12,
    ano: 2011,
    nota: 7.9
  },
  {
    slug: 'hemlock-grove',
    titulo: 'Hemlock Grove',
    imagem: '/img/hemlock-grove.jfif',
    genero: ['Terror', 'Suspense'],
    sinopse: 'Hemlock Grove é uma série de suspense sobrenatural que se passa na sombria e misteriosa cidade de Hemlock Grove, na Pensilvânia. A trama começa com o brutal assassinato de uma jovem, o que abala a comunidade e dá início a uma investigação repleta de segredos e criaturas sobrenaturais.',
    temporadas: 3,
    ano: 2013,
    nota: 7
  },
  {
    slug: 'the-walking-dead',
    titulo: 'The Walking Dead',
    imagem: '/img/twd.jfif',
    genero: ['Terror', 'Drama', 'Apocalipse zumbi'],
    sinopse: 'Baseado na história em quadrinhos escrita por Robert Kirkman, este drama potente e visceral retrata a vida nos Estados Unidos pós-apocalíptico. Um grupo de sobreviventes, liderado pelo policial Rick Grimes, segue viajando em busca de uma nova moradia segura e distante dos mortos-vivos.',
    temporadas: 11,
    ano: 2010,
    nota: 8.1
  },
  {
    slug: 'peaky-blinders',
    titulo: 'Peaky Blinders',
    imagem: '/img/peaky-blinders.jfif',
    genero: ['Ficção Histórica', 'Crime', 'Drama'],
    sinopse: 'Peaky Blinders é uma série de TV britânica que se passa na década de 1920 em Birmingham, Inglaterra, e acompanha a família Shelby, uma gangue criminosa liderada pelo ambicioso e carismático Thomas "Tommy" Shelby.',
    temporadas: 6,
    ano: 2013,
    nota: 8.7
  },
  {
    slug: 'breaking-bad',
    titulo: 'Breaking Bad',
    imagem: '/img/breaking-bad.jfif',
    genero: ['Ação', 'Suspense', 'Drama', 'Crime', 'Humor Negro'],
    sinopse: 'Breaking Bad é a história de Walter White, um professor de química no ensino médio, que é diagnosticado com câncer terminal. Para garantir o futuro da sua família, ele se junta ao seu ex-aluno Jesse Pinkman e passa a produzir e distribuir metanfetamina.',
    temporadas: 5,
    ano: 2008,
    nota: 9.5
  },
  {
    slug: 'origem',
    titulo: 'Origem',
    imagem: '/img/origem.jfif',
    genero: ['Terror', 'Ficção Científica'],
    sinopse: 'A série gira em torno de uma família que, durante uma viagem de trailer, se perde e entra em uma cidade misteriosa no interior dos Estados Unidos. Eles logo descobrem que a cidade os aprisiona e que ninguém que entra consegue sair, sendo constantemente ameaçados por criaturas monstruosas que surgem à noite.',
    temporadas: 3,
    ano: 2022,
    nota: 7.8
  },
   {
    slug: 'the-last-of-us',
    titulo: 'The Last of Us',
    imagem: '/img/tlo.webp',
    genero: ['Pós-Apocalíptico', 'Drama', 'Thriller'],
    sinopse: 'The Last of Us conta a história de um mundo pós-apocalíptico, devastado por uma pandemia fúngica que transforma humanos em criaturas violentas. A série acompanha Joel, um sobrevivente, e Ellie, uma jovem de 14 anos, que pode ser a chave para encontrar uma cura para a doença.',
    temporadas: 2,
    ano: 2023,
    nota: 8.6
  },
   {
    slug: 'silo',
    titulo: 'Silo',
    imagem: '/img/silo.jpg',
    genero: ['Distopia', 'Drama', 'Ficção Científica'],
    sinopse: 'Silo é uma série distópica de ficção científica que se passa num futuro pós-apocalíptico, onde a humanidade sobrevive em um silo subterrâneo devido à toxicidade da superfície. A série acompanha Juliette, uma engenheira que, ao investigar a morte de um colega, descobre segredos chocantes sobre o silo e as regras que governam a vida dentro dele.',
    temporadas: 2,
    ano: 2023,
    nota: 8.1
  },
  {
    slug: 'operacao-lioness',
    titulo: 'Operação Lioness',
    imagem: '/img/operacao-lioness.avif',
    genero: ['Drama', 'Espionagem', 'Ação'],
    sinopse: 'Em Operação Lioness, uma fuzileira naval marcada por traumas está determinada a fazer de tudo para derrubar uma organização terrorista. Na série produzida por Nicole Kidman e Zoe Saldana, Cruz Manuelos (Laysla de Oliveira) é recrutada pela CIA para se infiltrar entre as mulheres de terroristas. Para sobreviver a diversas situações de vida ou morte e evitar ao máximo erros que podem custar sua própria segurança, e do país, ela é treinada e orientada por Joe (Zoe Saldana), a chefe da Operação Lioness.',
    temporadas: 2,
    ano: 2023,
    nota: 7.8
  },
   {
    slug: 'wandavision',
    titulo: 'WandaVision',
    imagem: '/img/wandavision.jfif',
    genero: ['Ação', 'Comédia', 'Fantasia'],
    sinopse: 'Após os eventos de Vingadores: Ultimato (2019), Wanda Maximoff/Feiticeira Escarlate (Elizabeth Olsen) e Visão (Paul Bettany) se esforçam para levar uma vida normal no subúrbio e esconder seus poderes. Mas a dupla de super-heróis logo começa a suspeitar que nem tudo está tão certo assim. Eles se encontram, na verdade, dentro de uma constante sitcom, que vai desde a década de 50 até os dias de hoje. Conforme o tempo passa, Wanda e Visão perdem o controle da situação, sem saber mais o que é real e o que é ficção. Eles ficam presos em um eterno vai e vem.',
    temporadas: 1,
    ano: 2021,
    nota: 7.9
  },
  {
    slug: 'loki',
    titulo: 'Loki',
    imagem: '/img/loki.jfif',
    genero: ['Ação', 'Aventura', 'Ficção Científica'],
    sinopse: 'Após roubar o Tesseract durante os eventos de Vingadores: Ultimato, Loki é capturado pela Autoridade de Variância Temporal, uma organização burocrática que existe fora do tempo e espaço, e que monitora a linha do tempo. Eles oferecem a Loki uma escolha: ser apagado da existência por perturbar o tempo ou ajudá-los a consertar a linha do tempo e impedir uma ameaça ainda maior.',
    temporadas: 2,
    ano: 2021,
    nota: 8.2
  },
  {
    slug: 'invencivel',
    titulo: 'Invencível',
    imagem: '/img/invencivel.jfif',
    genero: ['Ação', 'Aventura', 'Animação', 'Fantasia'],
    sinopse: 'Baseada na série homônima de quadrinhos criada por Robert Kirkman (The Walking Dead), Invencível acompanha Mark Grayson, um adolescente que tenta levar uma vida comum, exceto por um pequeno detalhe: ele é filho do super-herói mais poderoso da Terra.',
    temporadas: 2,
    ano: 2021,
    nota: 8.7
  },
   {
    slug: 'the-boys',
    titulo: 'The Boys',
    imagem: '/img/the-boys.jfif',
    genero: ['Ação', 'Drama', 'Ficção Científica'],
    sinopse: 'Em The Boys, quando a fama sobe à cabeça, alguns super-heróis passam a se corromper e usar seu status para se promoverem ainda mais, o que pode colocar em risco a própria população. Uma equipe independente de foras-da-lei, então, se prepara para cuidar do caso. Conhecidos como "Os Meninos", Billy Butcher (Karl Urban) e seus companheiros têm a missão de vigiar o trabalho dessas personalidades, assim como controlar o surgimento de novos heróis.',
    temporadas: 4,
    ano: 2019,
    nota: 8.6
  },
]
