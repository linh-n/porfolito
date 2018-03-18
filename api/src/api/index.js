import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

import typeDefs from "./schema";

// const resolvers = {
//   Query: {
//     hello() {
//       return "world";
//     },
//   },
// };

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
const app = express();
app.use("/graph", bodyParser.json(), graphqlExpress({ schema }));
app.use("/gui", graphiqlExpress({ endpointURL: "/graph" }));

export default app;
