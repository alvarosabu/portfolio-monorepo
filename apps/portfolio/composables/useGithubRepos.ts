import { computed } from 'vue'
import { RemovableRef, useStorage } from '@vueuse/core'
import { differenceInHours } from 'date-fns'

import { snakeToCamel } from '@alvarosabu/utils'

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

export type GithubState = {
  repositories: Array<GithubRepo>
  colors: { [key: string]: LanguageColor }
  pending: boolean
  error: boolean
  updatedAt?: Date
}

export enum UserType {
  Organization = 'Organization',
  User = 'User',
}

let preservedState: RemovableRef<Partial<GithubState>> = useStorage('repos', {
  repositories: [],
  colors: {},
})

const state: Partial<GithubState> = reactive({
  pending: false,
  error: false,
})

export const orderByStarsDesc = (a: GithubRepo, b: GithubRepo) =>
  b.stars - a.stars

const formatRepo = (repo: any): GithubRepo => {
  const {
    name,
    fullname,
    description,
    language,
    fork,
    forks,
    htmlUrl,
    archived,
    owner,
    stargazersCount,
    watchers,
  } = snakeToCamel(repo)

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

  if (owner.type === UserType.Organization) {
    const { login, url, avatarUrl } = owner
    formattedRepo.organization = {
      name: login,
      url,
      avatarUrl,
    }
  }
  return formattedRepo
}

export const useGithubRepo = () => {
  const fetchRepos = async () => {
    const timeSinceLastUpdated = differenceInHours(
      Date.now(),
      new Date(preservedState.value.updatedAt),
    )
    if (
      preservedState.value.repositories.length === 0 ||
      timeSinceLastUpdated > 4
    ) {
      try {
        const [
          { data: colors, pending: colorsPending, error: colorsErrors },
          { data: userRepos, pending: usersPending, error: usersErrors },
          { data: orgRepos, pending: orgsPending, error: orgsErrors },
        ] = await Promise.all([
          useFetch(
            'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
            {
              parseResponse: JSON.parse,
            },
          ),
          useFetch(`https://api.github.com/users/alvarosabu/repos`, {
            params: {
              per_page: 100,
            },
          }),
          useFetch(`https://api.github.com/orgs/asigloo/repos`, {
            params: {
              per_page: 20,
            },
          }),
        ])
        preservedState.value.updatedAt = new Date()
        state.pending =
          colorsPending.value || usersPending.value || orgsPending.value

        const error =
          colorsErrors.value || usersErrors.value || orgsErrors.value

        state.error = error !== null

        preservedState.value.colors = colors
        if (userRepos.value && orgRepos.value) {
          preservedState.value.repositories = [
            ...userRepos.value,
            ...orgRepos.value,
          ]
            .map(formatRepo)
            .map((repo: GithubRepo): GithubRepo => {
              if (repo.language) {
                return {
                  ...repo,
                  languageColor:
                    colors.value[repo.language]?.color || '#34D399',
                }
              }
              return repo
            })
            .sort(orderByStarsDesc)
        }
      } catch (error) {
        console.error('There was an error fetching github repos', error)
        // logError(error);
      }
    }
  }

  const listRelevantRepos = computed(() =>
    preservedState.value.repositories
      .filter(
        (repo: GithubRepo) => !repo.archived && !repo.fork && repo.stars > 1,
      )
      .slice(0, 3),
  )

  return {
    listRelevantRepos,
    fetchRepos,
    ...toRefs(state),
  }
}
