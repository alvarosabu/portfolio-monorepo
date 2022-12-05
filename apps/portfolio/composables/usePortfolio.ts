import { format } from 'date-fns'
import { Story, StoryAsset, StoryContent, StoryVersion, StoryStatus } from '../types/storyblok'

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
  const { logError } = useLogger()

  async function fetchProjects() {
    try {
      const { data } = await useFetch('/api/stories/', {
        params: {
          starts_with: 'portfolio/',
          resolve_relations: 'category',
          is_startpage: false,
        },
      })

      state.projects = data.value.map(formatPortfolioStory)
    } catch (error) {
      logError('There was an error fetching projects from Storyblok', error)
    }
  }

  async function fetchProjectBySlug(slug: string) {
    try {
      const { data: story } = await useFetch(`/api/stories/portfolio/${slug}`, {
        params: {
          resolve_relations: 'category',
        },
      })

      /*   story.value.content.category = story.value.rels.find(({ uuid }) => story.value.content.category === uuid) */
      return formatPortfolioStory(story.value)
    } catch (error) {
      logError(`There was an error fetching project ${slug} from Storyblok`, error)
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
