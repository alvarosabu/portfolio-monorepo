import { useLogger } from '@alvarosabu/use'
import { format } from 'date-fns'
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
}

export interface TalkState {
  talks: TalkStory[]
}

const state: TalkState = reactive({
  talks: [],
})

function formatTalkStory(story: TalkStory): TalkStory {
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
      state.talks = data.stories.map(story => {
        return formatTalkStory(story)
      })
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

  const talkList = computed(() => state.talks.filter(talk => talk.status === StoryStatus.PUBLISHED))

  return {
    ...toRefs(state),
    fetchTalks,
    fetchTalkBySlug,
    talkList,
  }
}
