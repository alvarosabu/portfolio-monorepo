import { useStoryblokApi } from '@storyblok/vue'
import { Story, StoryAsset, StoryContent } from './useStories'

export interface ProjectStoryContent extends StoryContent {
  title: string
  media: StoryAsset
  excerpt: string
  featured: boolean
}
export interface ProjectStory extends Story {
  content: ProjectStoryContent
}

export interface PortfolioState {
  projects: ProjectStory[]
}

const state: PortfolioState = reactive({
  projects: [],
})

export function usePortfolio() {
  const storyapi = useStoryblokApi()

  async function fetchProjects() {
    const { data } = await storyapi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'portfolio/',
      resolve_relations: 'categories',
      is_startpage: false,
    })
    state.projects = data.stories
  }

  const featuredProject = computed(() => state.projects.filter(project => project.content.featured)[0])
  const projectList = computed(() => state.projects.filter(project => !project.content.featured))

  return {
    ...toRefs(state),
    fetchProjects,
    featuredProject,
    projectList,
  }
}
