/* eslint-disable import/no-extraneous-dependencies */
const defaultSettings = require('@open-wc/testing-karma/default-settings.js');
const merge = require('webpack-merge');

module.exports = config => {
  const defaultConfig = defaultSettings(config);
  defaultConfig.coverageIstanbulReporter.reports = ['html', 'lcovonly', 'text'];
  config.set(
    merge(defaultConfig, {
      files: [
        // allows running single tests with the --grep flag
        config.grep ? config.grep : 'test/**/*.test.js',
      ],

      // your custom config
    }),
  );
  return config;
};
