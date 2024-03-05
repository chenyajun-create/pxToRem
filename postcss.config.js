module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 10,
      propList: ['*'],
      selectorBlackList: ['html', '.am-'], //排除html .am开头的类的样式进行转化
      exclude: /node_modules/,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}
