/* eslint-disable no-use-before-define */
import { ComputedRef } from 'vue'

export interface Slot {
  type: string
  content: StoryContent[]
}

export interface StoryAsset {
  id: number
  alt: string
  name: string
  focus: string
  title: string
  filename: string
  copyright: string
  fieldtype: string
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
  [key: string]: any
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

export enum StoryStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export interface StoriesState {
  stories: Story[]
}

const state: StoriesState = reactive({
  stories: [],
})

const navigationContentTypes = ['ThePage', 'overview']

export function useStories() {
  const config = useRuntimeConfig()

  const storyapi = useStoryblokApi()

  async function fetchStories() {
    const { data } = await storyapi.get('cdn/stories', {
      version: config.public.storyblokVersion,
    })
    state.stories = data.stories
  }

  const filterPageByContentType = (story: Story) => {
    return navigationContentTypes.includes(story.content.component)
  }

  const storiesForNav: ComputedRef<
    {
      label: string
      path: string
      order: number
    }[]
  > = computed(() =>
    state.stories
      .filter(filterPageByContentType)
      .map(story => ({
        label: story.name,
        path: story.slug === 'home' ? '' : story.slug,
        order: story.content.order,
      }))

      .sort((a, b) => a.order - b.order),
  )

  async function getStory(id = 'home') {
    const story: Story = await useStoryblok(id, {
      version: config.public.storyblokVersion,
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
