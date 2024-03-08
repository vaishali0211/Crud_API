const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let cooks = [];


app.get("/api/cooks", (req, res) => {
  res.json(cooks);
});

app.post("/api/cooks", (req, res) => {
  const newCook = req.body;
  newCook.id = Math.floor(Math.random() * 900000) + 100000;
  newCook.createdAt = new Date();
  newCook.updatedAt = new Date();
  cooks.push(newCook);
  res.json(newCook);
});

app.put("/api/cooks/:id", (req, res) => {
  const cookId = req.params.id;
  const updatedCook = req.body;
  const foundIndex = cooks.findIndex((obj) => obj.id === Number(cookId));

  if (foundIndex !== -1) {
    updatedCook.updatedAt = new Date();
    cooks[foundIndex] = updatedCook;
  } else {
    console.log(`Object with id ${cookId} not found`);
  }

  res.json(cooks);
});

app.get("/api/cooks/:id", (req, res) => {
  const cookId = req.params.id;
  let filterCook = cooks.find((obj) => obj.id === Number(cookId));
  console.log(filterCook);
  res.json(filterCook);
});

app.delete("/api/cooks/:id", (req, res) => {
  const cookId = req.params.id;
  console.log(cooks,cookId)
  cooks = cooks.filter((cook) => cook.id !== Number(cookId));
  res.json(cooks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
