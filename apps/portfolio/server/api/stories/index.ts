export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const url = `https://api.storyblok.com/v2/cdn/stories?token=${config.public.apiToken}&version=${
    process.env.NODE_ENV === 'development' ? 'draft' : 'published'
  }`
  const { stories, rels } = await $fetch(url, { query })

  if (query.resolve_relations) {
    const formatted = stories.map(story => {
      story.content[query.resolve_relations] = rels.find(
        ({ uuid }: { uuid: string }) => story.content[query.resolve_relations] === uuid,
      )
      return story
    })
    return formatted
  } else {
    return stories
  }
})
