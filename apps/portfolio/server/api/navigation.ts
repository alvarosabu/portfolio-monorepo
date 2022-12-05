const navigationContentTypes = ['ThePage', 'overview']

const filterPageByContentType = (story: Story) => {
  return navigationContentTypes.includes(story.content.component)
}

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const url = `https://api.storyblok.com/v2/cdn/stories?token=${config.public.apiToken}&version=${
    process.env.NODE_ENV === 'development' ? 'draft' : 'published'
  }`
  const { stories } = await $fetch(url, { query })

  return stories
    .filter(filterPageByContentType)
    .map(story => ({
      label: story.name,
      path: story.slug === 'home' ? '' : story.slug,
      order: story.content.order,
    }))
    .sort((a, b) => a.order - b.order)
})
