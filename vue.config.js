module.exports = {
  lintOnSave: false,

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/akridata.variables.scss";`,
      },
    },
  },
  transpileDependencies: ["quasar"],
  devServer: {
    disableHostCheck: true,
  },
  publicPath: "./",
  productionSourceMap: false,
};
