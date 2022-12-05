/* eslint-disable no-use-before-define */
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
export interface StoriesConfig {
  version: StoryVersion
}

export interface StoriesState {
  stories: Story[]
}

export const storiesConfig: StoriesConfig = {
  version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
  /*   version: 'published', */
}
