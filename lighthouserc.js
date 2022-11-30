module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
    },
    collect: {
      staticDistDir: './apps/portfolio/.output/public',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
