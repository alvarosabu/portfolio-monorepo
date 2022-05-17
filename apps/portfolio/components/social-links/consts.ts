export interface StoryLink {
  id: string
  url: string
  linktype: string
  fieldtype: string
  cached_url: string
}

export interface SocialLink {
  icon: string
  url: StoryLink
}
