const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const Cook = require("./routes/Cook");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/cook")
  .then(() => console.log("MongoDB connected "));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB database");
});

app.use("/api/cooks", Cook);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
