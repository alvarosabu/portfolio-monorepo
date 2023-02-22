import { useLogger } from '@alvarosabu/use'
import { format, compareDesc } from 'date-fns'
import { Story, StoryAsset, StoryContent, StoryStatus, StoryVersion } from './useStories'

export interface TalkStoryContent extends StoryContent {
  title: string
  media: StoryAsset
  excerpt: string
  featured: boolean
  category: Partial<StoryContent>
}
export interface TalkStory extends Story {
  content: TalkStoryContent
  status: StoryVersion
  readingTime: string
  publishedDateFormatted: string
  createdDateFormatted: string
  videoId: string
  eventDate: string
}

export interface TalkState {
  talks: TalkStory[]
}

const state: TalkState = reactive({
  talks: [],
})

const videoRegex = /(?:\?v=|&v=|^v\/|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11}).*/

function formatTalkStory(story: TalkStory): TalkStory {
  const videoMatch = story?.content?.url?.url.match(videoRegex)
  if (story.published_at) {
    story.publishedDateFormatted = format(new Date(story.published_at), 'MMMM dd, yyyy')
    story.status = StoryStatus.PUBLISHED
  } else {
    story.createdDateFormatted = format(new Date(story.created_at), 'MMMM dd, yyyy')
    story.status = StoryStatus.DRAFT
  }
  story.videoId = videoMatch ? videoMatch[1] : ''
  story.eventDate = format(new Date(story.content.date), 'MMMM dd, yyyy')
  // TODO: add reading time
  /*  story.readingTime = `${Math.ceil(story.content.split(/\s/g).length / 200)} min read` */
  return story
}

export function useTalks() {
  const storyapi = useStoryblokApi()
  const config = useRuntimeConfig()
  const { error } = useLogger('[ AS 🐧]')

  async function fetchTalks() {
    try {
      const { data } = await storyapi.get('cdn/stories/', {
        version: config.public.storyblokVersion,
        starts_with: 'talks/',
        is_startpage: false,
      })
      state.talks = data.stories.map(formatTalkStory)
    } catch (errorMsg) {
      error('There was an error fetching talks from Storyblok', errorMsg as Error)
    }
  }

  async function fetchTalkBySlug(slug: string) {
    try {
      const { data } = await storyapi.get('cdn/stories', {
        version: config.public.storyblokVersion,
        starts_with: 'talks/',
        // Prepend */ to match with the first part of the full_slug
        by_slugs: '*/' + slug,
        resolve_relations: 'category',
      })
      const story = data.stories[0]

      return formatTalkStory(story)
    } catch (errorMsg) {
      error(`There was an error fetching talk ${slug} from Storyblok`, errorMsg as Error)
    }
  }

  const talksList = computed(() =>
    state.talks.sort((a, b) => compareDesc(new Date(a.content.date), new Date(b.content.date))),
  )

  return {
    ...toRefs(state),
    fetchTalks,
    fetchTalkBySlug,
    talksList,
  }
}
