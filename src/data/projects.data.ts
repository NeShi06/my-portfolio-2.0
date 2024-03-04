import { knowledgeData as TAGS } from "./knowledge.data"

export const projectsData: (lang: any) => Project[] = (lang) => ([
  {
    title: lang[0].title,
    body: lang[0].body,
    links: {
      Front: { link: 'https://pokedex-pokemon-five.vercel.app/' }
    },
    img: '/projects/pokedex.webp',
    altImg: lang[0].alt,
    tags: [TAGS.html5, TAGS.css3, TAGS.javascript, TAGS.typescript, TAGS.react, TAGS.nextdotjs],
    type: 'front-end'
  },
  {
    title: lang[1].title,
    body: lang[1].body,
    links: {
      Front: { link: 'https://frankcff-tictactoe.netlify.app/' },
      Github: { link: 'https://github.com/NeShi06/tres-en-raya' }
    },
    img: '/projects/tictactoe.webp',
    altImg: lang[0].alt,
    tags: [TAGS.html5, TAGS.css3, TAGS.javascript, TAGS.typescript, TAGS.react],
    type: 'front-end'
  },
  {
    title: lang[2].title,
    body: lang[2].body,
    links: {
      Front: { link: 'https://imcp-page.netlify.app/' },
      Github: { link: 'https://github.com/NeShi06/IMCP' }
    },
    img: '/projects/imcp.webp',
    altImg: lang[0].alt,
    tags: [TAGS.html5, TAGS.css3, TAGS.javascript, TAGS.react],
    type: 'front-end'
  }
])
  