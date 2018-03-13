import base from "./config.base";

export default {
  ...base,
  mongo: {
    ...base.mongo,
    uri: "mongodb://localhost:27017",
    db: "portfolito_dev",
  },
};
