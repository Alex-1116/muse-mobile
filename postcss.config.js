module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 32,
      exclude: /node_modules|muse-ui/i // 忽略node_modules目录下的文件
    }
  }
}
