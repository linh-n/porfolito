"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongodb = require("mongodb");

var _config = require("./config/config.dev");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  res.json({ msg: "Hello World!" });
});

app.get("/mongo", function (req, res) {
  _mongodb.MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err) console.error(err);

    var db = client.db("portfolito");

    db.collection("Persons", function (err, collection) {
      collection.insert({ id: 1, firstName: "Steve", lastName: "Jobs" });
      collection.insert({ id: 2, firstName: "Bill", lastName: "Gates" });
      collection.insert({ id: 3, firstName: "James", lastName: "Bond" });

      db.collection("Persons").count(function (err, count) {
        if (err) console.error(err);

        console.log("Total Rows: " + count);
      });
    });
  });
});

app.listen(3030, function () {
  console.log("Listening to port 3030...");
  console.log(process.env.NODE_ENV);
});
//# sourceMappingURL=index.js.map