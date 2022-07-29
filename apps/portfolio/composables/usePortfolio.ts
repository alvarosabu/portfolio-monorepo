import { useStoryblokApi } from '@storyblok/vue'
import { format } from 'date-fns'
import { Story, StoryAsset, StoryContent, StoryStatus, StoryVersion } from './useStories'

export interface ProjectStoryContent extends StoryContent {
  title: string
  media: StoryAsset
  excerpt: string
  featured: boolean
}
export interface ProjectStory extends Story {
  content: ProjectStoryContent
  status: StoryVersion
  readingTime: string
  publishedDateFormatted: string
  createdDateFormatted: string
}

export interface PortfolioState {
  projects: ProjectStory[]
}

const state: PortfolioState = reactive({
  projects: [],
})

function formatPortfolioStory(story: ProjectStory): ProjectStory {
  if (story.published_at) {
    story.publishedDateFormatted = format(new Date(story.published_at), 'MMMM dd, yyyy')
    story.status = StoryStatus.PUBLISHED
  } else {
    story.createdDateFormatted = format(new Date(story.created_at), 'MMMM dd, yyyy')
    story.status = StoryStatus.DRAFT
  }
  // TODO: add reading time
  /*  story.readingTime = `${Math.ceil(story.content.split(/\s/g).length / 200)} min read` */
  return story
}

export function usePortfolio() {
  const storyapi = useStoryblokApi()

  async function fetchProjects() {
    const { data } = await storyapi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'portfolio/',
      resolve_relations: 'category',
      is_startpage: false,
    })
    state.projects = data.stories
  }

  async function fetchProjectBySlug(slug: string): Promise<ProjectStory> {
    const { data } = await storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'portfolio/',
      // Prepend */ to match with the first part of the full_slug
      by_slugs: '*/' + slug,
      resolve_relations: 'category',
    })
    const story = data.stories[0]
    story.content.category = data.rels.find(({ uuid }) => story.content.category === uuid)
    return formatPortfolioStory(story)
  }

  const featuredProject = computed(() => state.projects.filter(project => project.content.featured)[0])
  const projectList = computed(() => state.projects.filter(project => !project.content.featured))

  return {
    ...toRefs(state),
    fetchProjects,
    fetchProjectBySlug,
    featuredProject,
    projectList,
  }
}
