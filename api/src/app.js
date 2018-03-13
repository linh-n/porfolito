import express from "express";
import bodyParser from "body-parser";

import * as albums from "./modules/albums";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/albums/add", albums.add);

export default app;
