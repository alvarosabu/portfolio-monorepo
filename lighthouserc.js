module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
    },
    collect: {
      staticDistDir: './apps/portfolio/.output/public',
      url: ['http://localhost/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
