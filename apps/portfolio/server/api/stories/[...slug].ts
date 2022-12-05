export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const url = `https://api.storyblok.com/v2/cdn/stories/${event.context.params.slug}?token=${
    config.public.apiToken
  }&version=${process.env.NODE_ENV === 'production' ? 'published' : 'draft'}`
  const { story, rels } = await $fetch(url, { query })

  if (query.resolve_relations) {
    story.content[query.resolve_relations] = rels.find(
      ({ uuid }: { uuid: string }) => story.content[query.resolve_relations] === uuid,
    )
  }

  return story
})
