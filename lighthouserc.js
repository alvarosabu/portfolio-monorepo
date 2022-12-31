module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
    },
    collect: {
      staticDistDir: './apps/portfolio/.output/public',
      url: ['http://localhost/index.html'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
