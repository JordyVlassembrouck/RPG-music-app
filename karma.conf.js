module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: ['dev/app/**/*_spec.js'],
    exclude: [],
    reporters: ['progress'],
    preprocessors: {
      'dev/app/**/*_spec.js': ['browserify'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
