import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mongo", (req, res) => {
  MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) console.error(err);

    const db = client.db("foto");

    db.collection("Persons", function(err, collection) {
      collection.insert({ id: 1, firstName: "Steve", lastName: "Jobs" });
      collection.insert({ id: 2, firstName: "Bill", lastName: "Gates" });
      collection.insert({ id: 3, firstName: "James", lastName: "Bond" });

      db.collection("Persons").count(function(err, count) {
        if (err) console.error(err);

        console.log("Total Rows: " + count);
      });
    });
  });
});

app.listen(8080, () => {
  console.log("Listening to port 8080...");
});
