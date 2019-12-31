// environment variables

module.exports = function(config) {

config.set({
  "singleRun": true,
  "autoWatch": false,
  "basePath": "/Users/throdo/Programmation/Workspaces/Perso/Kaharactr/kaharactr-library/build/js/packages/kaharactr-library-test/node_modules",
  "files": [
    "/Users/throdo/Programmation/Workspaces/Perso/Kaharactr/kaharactr-library/build/js/packages/kaharactr-library-test/adapter-browser.js"
  ],
  "frameworks": [
    "mocha"
  ],
  "client": {
    "args": []
  },
  "browsers": [
    "ChromeHeadless"
  ],
  "customLaunchers": {},
  "failOnFailingTestSuite": false,
  "reporters": [
    "karma-kotlin-reporter"
  ],
  "preprocessors": {
    "/Users/throdo/Programmation/Workspaces/Perso/Kaharactr/kaharactr-library/build/js/packages/kaharactr-library-test/adapter-browser.js": [
      "webpack",
      "sourcemap"
    ]
  }
});
config.plugins = config.plugins || [];
config.plugins.push('karma-*'); // default
config.plugins.push('kotlin-test-js-runner/karma-kotlin-reporter.js');

// webpack config
function createWebpackConfig() {
var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = false;

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        let p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace(new RegExp("/Users/throdo/Programmation/Workspaces/Perso/Kaharactr/kaharactr-library/build/js", 'g'), '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
        moduleFilenameTemplate: "[absolute-resource-path]"
    }))
})(config);
   return config;
}

config.set({webpack: createWebpackConfig()});


}
