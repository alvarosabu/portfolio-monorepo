/* eslint-disable no-use-before-define */
import { ComputedRef } from 'vue'
import { useStoryblok, useStoryblokApi } from '@storyblok/vue'

export interface Slot {
  type: string
  content: StoryContent[]
}

export interface StoryBody {
  _uid: string
  slot?: Slot
  title: any
  content?: StoryContent
  reverse?: boolean
  component: string
  _editable: string

  icon?: string
  errorState?: string
  githubLabel?: string
  sponsorLabel?: string
  youtubeLabel?: string
  author?: string
  framework?: string
}

export type StoryContent = {
  _uid: string
  body: StoryBody[]
  order: number
  component: string
  _editable: string
}

export type Story = {
  name: string
  created_at: string
  published_at?: string
  id: number
  uuid: string
  content: StoryContent
  slug: string
  full_slug: string
  sort_by_date?: boolean
  position: number
  tag_list: unknown[]
  is_startpage: boolean
  parent_id: number
  meta_data: unknown
  group_id: string
  first_published_at?: string
  release_id: unknown
  lang: string
  path: string
  alternates: unknown[]
  default_full_slug: unknown
  translated_slugs: unknown
}
export type StoryVersion = 'draft' | 'published'

export interface StoriesConfig {
  version: StoryVersion
}

export interface StoriesState {
  stories: Story[]
}

export const storiesConfig: StoriesConfig = {
  version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
}

const state: StoriesState = reactive({
  stories: [],
})

export function useStories() {
  const storyapi = useStoryblokApi()

  async function fetchStories() {
    const { data } = await storyapi.get('cdn/stories', storiesConfig)
    state.stories = data.stories
  }

  const storiesForNav: ComputedRef<
    {
      label: string
      path: string
      order: number
    }[]
  > = computed(() =>
    state.stories
      .map(story => ({
        label: story.name,
        path: story.path,
        order: story.content.order,
      }))
      .sort((a, b) => a.order - b.order),
  )

  async function getStory(id = 'home') {
    const story: Story = await useStoryblok(id, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    })

    return story
  }

  return {
    ...toRefs(state),
    storiesForNav,
    fetchStories,
    getStory,
  }
}
