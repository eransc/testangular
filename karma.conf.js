module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'public/lib/js/angular/angular.min.js',
      'public/js/app.js',

      'test/lib/**',
      'test/unit/**/*.spec.js'
    ],

    // use dots reporter for travis (travis terminal does not support escaping sequences)
    // and spec reporter for dev
    // possible values: 'dots', 'progress'
    // CLI --reporters spec
    reporters: process.env.TRAVIS ? ['dots'] : ['spec'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    // CLI --colors --no-colors
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // CLI --log-level debug
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // CLI --browsers Chrome,Firefox,Safari
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 20000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    plugins: [
      // Launchers
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',

      // Framework
      'karma-mocha',

      // Reporter
      'karma-spec-reporter'

    ]


  })
}


