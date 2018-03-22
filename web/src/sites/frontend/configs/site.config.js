const environment = process.env.NODE_ENV || "development";
let config;
switch (environment) {
  case "development":
    config = {
      rootUrl: "http://helpmetrade-dev.itc-cci.net/",
    };
    break;
  case "production":
    config = {
      rootUrl: "http://www.helpmetrade.org/",
    };
    break;
  default:
    config = {
      rootUrl: "http://localhost:8400/",
    };

    break;
}

export default config;
