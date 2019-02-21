/* eslint-disable import/no-extraneous-dependencies */
const defaultSettings = require('@open-wc/testing-karma/default-settings.js');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge.strategy(
      {
        'coverageIstanbulReporter.reports': 'replace',
      }
    )(defaultSettings(config), {
      files: [
        // allows running single tests with the --grep flag
        config.grep ? config.grep : 'test/**/*.test.js',
      ],

      // your custom config
      coverageIstanbulReporter: {
        reports: ['html', 'lcovonly', 'text']
      }
    })
  );
  return config;
};
