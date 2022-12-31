import { useLogger } from '@alvarosabu/use'
import { Story, StoryAsset, StoryContent, StoryStatus, StoryVersion } from './useStories'
export interface ArticleStoryContent extends StoryContent {
  title: string
  media: StoryAsset
  excerpt: string
  featured: boolean
}
export interface ArticleStory extends Story {
  content: ArticleStoryContent
  status: StoryVersion
  readingTime: string
  publishedDateFormatted: string
  createdDateFormatted: string
}

export interface BlogState {
  articles: ArticleStory[]
}

const state: BlogState = reactive({
  articles: [],
})

function formatArticleStory(story: ArticleStory): ArticleStory {
  if (story.published_at) {
    story.status = StoryStatus.PUBLISHED
  } else {
    story.status = StoryStatus.DRAFT
  }
  // TODO: add reading time
  /*  story.readingTime = `${Math.ceil(story.content.split(/\s/g).length / 200)} min read` */
  return story
}

export function useBlog() {
  /* const storyapi = useStoryblokApi() */
  const { error } = useLogger('[ AS 🐧]')

  async function fetchArticles() {
    try {
      const { data } = await useFetch('/api/stories/', {
        params: {
          starts_with: 'blog/',
          is_startpage: false,
        },
      })
      state.articles = data.value.map(formatArticleStory)
    } catch (errorMsg) {
      error('There was an error fetching articles from Storyblok', errorMsg)
    }
  }

  async function fetchArticleBySlug(slug: string) {
    try {
      const { data: story } = await useFetch(`/api/stories/blog/${slug}`, {
        params: {
          resolve_relations: 'category',
        },
      })

      /* story.content.category = data.rels.find(({ uuid }) => story.content.category === uuid) */
      return formatArticleStory(story.value)
    } catch (errorMsg) {
      error(`There was an error fetching article ${slug} from Storyblok`, errorMsg)
    }
  }

  const featuredArticle = computed(() => state.articles.filter(article => article.content.featured)[0])
  const articleList = computed(() =>
    state.articles.filter(article => !article.content.featured /*  && article.status === StoryStatus.PUBLISHED */),
  )

  return {
    ...toRefs(state),
    fetchArticles,
    fetchArticleBySlug,
    featuredArticle,
    articleList,
  }
}
