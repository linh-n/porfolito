import { MongoClient } from "mongodb";

const environment = process.env.NODE_ENV || "dev";
const config = require(`../config/config.${environment}`).default; // eslint-disable-line import/no-dynamic-require
const { mongo: mongoConfig } = config;

export default collection => async action => {
  let results;
  try {
    const client = await MongoClient.connect(mongoConfig.uri);
    const db = client.db(mongoConfig.db);
    results = await action(collection(db));
  } catch (err) {
    console.log(err);
  }
  return results;
};
