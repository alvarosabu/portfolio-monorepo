import MarkdownIt from 'markdown-it'
import { useNuxtApp } from '#imports'

export const useMakdownIt = (): MarkdownIt => {
  const nuxtApp = useNuxtApp()
  const md: MarkdownIt = nuxtApp.$md

  return md
}
