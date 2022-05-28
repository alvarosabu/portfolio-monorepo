import pkg from '../package.json'

export default function useVersion() {
  const environment =
    process.env.NODE_ENV === 'production' ? 'published' : 'draft'

  return { environment, version: pkg.version }
}
