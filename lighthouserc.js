module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.98 }],
      },
    },
    collect: {
      staticDistDir: './apps/portfolio/.output/public',
      url: ['http://localhost/', 'http://localhost/blog', 'http://localhost/portfolio', 'http://localhost/uses'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
