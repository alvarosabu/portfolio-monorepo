import { defineNuxtPlugin } from '#app'
import MarkdownIt from 'markdown-it'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('md', MarkdownIt({ html: true, linkify: true, typographer: true }))
})
