import { MetaObject } from '#app'

const OPEN_GRAPH = [
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'AS Portfolio',
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: 'Welcome to my front-end planet. Alvaro Saburido personal portfolio made with Nuxt.js + Storyblok ',
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: 'AS Portfolio',
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: 'http://alvarosaburido.dev',
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: '/og-home.png',
  },
  { property: 'og:updated_time', content: new Date().toISOString() },
]

const TWITTER = [
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@alvarosabu' },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: 'AS Portfolio',
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: 'Welcome to my front-end planet. Alvaro Saburido personal portfolio made with Nuxt.js + Storyblok ',
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: '/og-home.png',
  },
  {
    hid: 'twitter:image:alt',
    name: 'twitter:image:alt',
    content: 'Alvaro Saburido Portfolio',
  },
]

const head: MetaObject = {
  title: 'Alvaro Saburido | Creative Engineer & Front-end Developer',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Welcome to my front-end planet. Alvaro Saburido personal portfolio made with Nuxt.js + Storyblok ',
    },
    { hid: 'author', name: 'author', content: 'Alvaro Saburido' },
    ...OPEN_GRAPH,
    ...TWITTER,
    {
      hid: 'keywords',
      property: 'keywords',
      keywords: 'portfolio, frontend, developer, web, nuxt',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}
export default head
