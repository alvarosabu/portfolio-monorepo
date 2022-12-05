export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const url = `https://api.storyblok.com/v2/cdn/stories/${event.context.params.slug}?token=${
    config.public.apiToken
  }&version=${process.env.NODE_ENV === 'production' ? 'published' : 'draft'}`
  const res = await $fetch(url, { query })

  return res.story
})
