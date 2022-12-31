module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
    },
    collect: {
      staticDistDir: './apps/portfolio/dist',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
