module.exports = {
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({index: '/spec-runner.html', verbose: true})
    }
  }
};