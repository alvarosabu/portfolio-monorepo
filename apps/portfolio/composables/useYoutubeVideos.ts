import { computed } from 'vue'
import { RemovableRef, useStorage } from '@vueuse/core'
import { differenceInHours } from 'date-fns'

export type YoutubeVideo = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  channelTitle: string
  channelId: string
  duration: string
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
  tags: string[]
}

export type VideosState = {
  videos: Array<YoutubeVideo>
  pending: boolean
  error?: any
  updatedAt?: Date
}

let preservedState: RemovableRef<Partial<VideosState>> = useStorage('videos', {
  videos: [],
})

let state = reactive({
  pending: false,
  error: null,
})

const formatVideos = item => {
  const { id, snippet } = item
  return {
    id: id.videoId,
    title: snippet.title,
    description: snippet.description,
    thumbnail: snippet.thumbnails.default.url,
    publishedAt: snippet.publishedAt,
    channelTitle: snippet.channelTitle,
    channelId: snippet.channelId,
  }
}

export const useYoutubeVideos = () => {
  const config = useRuntimeConfig()

  const fetchVideos = async () => {
    const timeSinceLastUpdated = differenceInHours(
      Date.now(),
      new Date(preservedState.value.updatedAt),
    )
    if (preservedState.value.videos.length === 0 || timeSinceLastUpdated > 4) {
      try {
        const { data, pending, error } = await useFetch(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: 'UC6D2KveNVcuuPqOKp0YWO3w',
              key: config.youtubeKey,
              maxResults: 5,
              order: 'date',
            },
          },
        )
        preservedState.value.videos = [...data?.value?.items.map(formatVideos)]
        preservedState.value.updatedAt = new Date()
        state.pending = pending.value
        state.error = error.value
      } catch (error) {
        console.error('There was an error fetching youtube videos', error)
        // logError(error);
      }
    }
  }

  const popularVideos = computed(() =>
    preservedState.value.videos.filter(video => video.id),
  )

  return {
    popularVideos,
    fetchVideos,
    ...toRefs(state),
  }
}
