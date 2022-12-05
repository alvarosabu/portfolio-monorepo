export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const url = `https://api.storyblok.com/v2/cdn/stories?token=${config.public.apiToken}&version=${
    process.env.NODE_ENV === 'development' ? 'draft' : 'published'
  }`
  const res = await $fetch(url, { query })
  console.log('Blog', res)

  return res.stories
})
