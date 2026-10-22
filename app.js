const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Listing = require("./models/listing");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/", (req, res) => {
  res.send("Root here ");
});

app.get("/sample", async (req, res) => {
  let sampleListing = new Listing({
    title: "My Sweet Home",
    description: "This is a description",
    price: 1200,
    location: "Delhi, India",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successfull testing");
});

app.listen(8080, () => {
  console.log("Server on port 8080");
});
