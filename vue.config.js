module.exports = {
  devServer: {
    port: 12315,
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
};
