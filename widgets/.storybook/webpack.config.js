const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.unshift({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  // config.resolve.alias['react-test-renderer'] = path.join(__dirname, '../../../', 'node_modules/react-test-renderer')
  // config.resolve.alias['react'] = path.join(__dirname, 'node_modules/react')
  // config.resolve.alias['react-dom'] = path.join(__dirname, '../../../', 'node_modules/react-dom')

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
