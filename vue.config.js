const jsxbin = require("jsxbin");

jsxbin("src/jsx/*.jsx", "public/static/jsx")
  .then((outputfiles) => {
    console.log("Finished!");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  transpileDependencies: ["mmcq.js", "@vue/composition-api", "@material/material-color-utilities", "vconsole"],
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
    port: 9016,
    hotOnly: true, // 热更新
  },

  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@/": "src/",
        "@material/material-color-utilities": "@material/material-color-utilities/dist/index.js",
      },
    },
  },
};
