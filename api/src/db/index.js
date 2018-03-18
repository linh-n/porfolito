import { MongoClient } from "mongodb";

const environment = process.env.NODE_ENV || "dev";
const config = require(`../config/config.${environment}`).default; // eslint-disable-line
const { mongo: mongoConfig } = config;

export default async operation => {
  let results;
  try {
    const client = await MongoClient.connect(mongoConfig.uri);
    const db = client.db(mongoConfig.db);
    results = await operation(db);
  } catch (err) {
    console.log(err);
    throw err;
  }
  return results;
};
