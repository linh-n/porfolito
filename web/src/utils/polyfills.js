if (!global.Intl) {
  require.ensure(
    [
      "intl",
      "intl/locale-data/jsonp/en.js",
      "intl/locale-data/jsonp/fr.js",
      "intl/locale-data/jsonp/es.js",
    ],
    require => {
      require("intl");
      require("intl/locale-data/jsonp/en.js");
      require("intl/locale-data/jsonp/fr.js");
      require("intl/locale-data/jsonp/es.js");
    },
  );
}
