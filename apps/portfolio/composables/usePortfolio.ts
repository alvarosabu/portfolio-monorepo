import { useStoryblokApi } from '@storyblok/vue'
import { Story, StoryAsset } from './useStories'

export interface ProjectStory extends Story {
  title: string
  media: StoryAsset
  excerpt: string
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

  return {
    ...toRefs(state),
    fetchProjects,
  }
}
