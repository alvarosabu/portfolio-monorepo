import { getHighlighter } from 'shikey'

export async function useSyntaxHighlighter() {
  const highlighter = await getHighlighter({
    theme: 'css-variables',
    langs: ['javascript', 'typescript', 'html', 'json', 'bash', 'css', 'xml', 'yaml', 'markdown'],
  })
  return {
    highlighter,
  }
}
