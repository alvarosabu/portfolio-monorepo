import { snakeToCamel } from '@alvarosabu/utils'
import { reactive } from 'vue'
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

export enum UserType {
  Organization = 'Organization',
  User = 'User',
}

export const orderByStarsDesc = (a: GithubRepo, b: GithubRepo) => b.stars - a.stars

const formatRepo = (repo: any): GithubRepo => {
  const { name, fullname, description, language, fork, forks, htmlUrl, archived, owner, stargazersCount, watchers } =
    snakeToCamel(repo)

  const formattedRepo: GithubRepo = {
    name,
    fullname,
    description,
    language,
    fork,
    forks,
    url: htmlUrl,
    archived,
    stars: stargazersCount,
    watchers,
  }

  if (owner?.type === UserType.Organization) {
    const { login, url, avatarUrl } = owner
    formattedRepo.organization = {
      name: login,
      url,
      avatarUrl,
    }
  }
  return formattedRepo
}

const state = reactive({
  repositories: [] as Array<GithubRepo>,
  colors: {} as { [key: string]: LanguageColor },
})

export default defineEventHandler(async () => {
  try {
    const [colors, repos] = await Promise.all([
      $fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'),
      $fetch('https://api.github.com/users/alvarosabu/repos', {
        params: {
          per_page: 100,
        },
      }),
    ])
    state.colors = colors as { [key: string]: LanguageColor }
    state.repositories = (repos as Array<GithubRepo>)
      .map(formatRepo)
      .map((repo: GithubRepo): GithubRepo => {
        if (repo.language) {
          return {
            ...repo,
            languageColor: state.colors[repo.language]?.color || '#34D399',
          }
        }
        return repo
      })
      .sort(orderByStarsDesc)
    return state.repositories.filter((repo: GithubRepo) => !repo.archived && !repo.fork && repo.stars > 1).slice(0, 3)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: `There was an error fetching github repos' ${error}`,
    })
  }
})
