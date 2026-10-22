const express = require("express");

const app = express();

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// HOME - Route
app.get("/", (req, res) => {
  res.send("Hi, iam root!");
});

app.listen(8080, () => {
  console.log("server on port 8080");
});
