import { useLogger } from '@alvarosabu/use'
import { format } from 'date-fns'
import { Story, StoryAsset, StoryContent, StoryStatus, StoryVersion } from './useStories'

export interface ProjectStoryContent extends StoryContent {
  title: string
  media: StoryAsset
  excerpt: string
  featured: boolean
  category: Partial<StoryContent>
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
  const { error } = useLogger('[ AS 🐧]')

  async function fetchProjects() {
    try {
      const { data } = await storyapi.get('cdn/stories/', {
        ...storiesConfig,
        starts_with: 'portfolio/',
        resolve_relations: 'category',
        is_startpage: false,
      })
      state.projects = data.stories.map(story => {
        story.content.category = data.rels.find(({ uuid }) => story.content.category === uuid)
        return formatPortfolioStory(story)
      })
    } catch (errorMsg) {
      error('There was an error fetching projects from Storyblok', errorMsg as Error)
    }
  }

  async function fetchProjectBySlug(slug: string) {
    try {
      const { data } = await storyapi.get('cdn/stories', {
        ...storiesConfig,
        starts_with: 'portfolio/',
        // Prepend */ to match with the first part of the full_slug
        by_slugs: '*/' + slug,
        resolve_relations: 'category',
      })
      const story = data.stories[0]
      story.content.category = data.rels.find(({ uuid }) => story.content.category === uuid)
      return formatPortfolioStory(story)
    } catch (errorMsg) {
      error(`There was an error fetching project ${slug} from Storyblok`, errorMsg as Error)
    }
  }

  const featuredProject = computed(() => state.projects.filter(project => project.content.featured)[0])
  const projectList = computed(() =>
    state.projects.filter(project => !project.content.featured && project.status === StoryStatus.PUBLISHED),
  )

  return {
    ...toRefs(state),
    fetchProjects,
    fetchProjectBySlug,
    featuredProject,
    projectList,
  }
}
