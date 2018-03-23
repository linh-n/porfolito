const postcssConfig = require("./postcss.js");

module.exports = function (sitePath, shouldCompress) {
  const cssIdentName = shouldCompress ? "[hash:base64:5]" : "[name]-[local]-[hash:base64:5]";
  return {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /^(?!.*?\.module).*\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              root: "/src/",
            },
          },
          postcssConfig(sitePath),
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: cssIdentName,
              importLoaders: 1,
              root: "/src/",
            },
          },
          postcssConfig(sitePath),
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  };
};
