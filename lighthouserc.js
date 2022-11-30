module.exports = {
  ci: {
    collect: {
      staticDistDir: './apps/portfolio/.output/public',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
