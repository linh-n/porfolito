const path = require("path");

module.exports = function (sitePath) {
  return {
    loader: "postcss-loader",
    options: {
      plugins: [
        require("postcss-import"),
        require("postcss-cssnext")({
          features: {
            customProperties: {
              variables: require(path.resolve(sitePath, "configs/styles.js")),
            },
          },
        }),
        require('lost')
      ],
    },
  };
};
