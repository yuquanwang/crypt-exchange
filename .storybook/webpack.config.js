module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent:
                  '@svgr/webpack?-svgo,+titleProp,+ref![path]',
              },
            },
          },
        ],
      ],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};