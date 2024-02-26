module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 10,
      propList: ['*'],
      selectorBlackList: ['html'],
      exclude: /node_modules/,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}
