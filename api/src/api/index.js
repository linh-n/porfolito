import express from "express";
import bodyParser from "body-parser";

import addAlbum from "./albums/add";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/albums/add", addAlbum);

export default app;
