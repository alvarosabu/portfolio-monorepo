export enum Language {
  JavaScript = 'JavaScript',
  Python = 'Python',
  C = 'C',
  CPP = 'C++',
  CSharp = 'C#',
  Java = 'Java',
  Go = 'Go',
  Ruby = 'Ruby',
  PHP = 'PHP',
  Swift = 'Swift',
  ObjectiveC = 'Objective-C',
  CPlusPlus = 'C++',
  CSharpPlus = 'C#',
  Typescript = 'Typescript',
  Vue = 'Vue',
}

export type GithubOrganization = {
  name: string
  avatarUrl: string
  url: string
}

export type GithubRepo = {
  name: string
  fullname: string
  description: string
  language: Language
  fork: boolean
  url: string
  forks: number
  watchers: number
  stars: number
  archived: boolean
  languageColor?: string
  organization?: GithubOrganization
}

export type LanguageColor = {
  color: string
  url: string
}
