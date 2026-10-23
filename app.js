const express = require("express");
const app = express();

const path = require("path");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Root here ");
});

// INDEX - Route
app.get("/listing", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("./listing/index.ejs", { allListing });
});

// app.get("/sample", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My Sweet Home",
//     description: "This is a description",
//     price: 1200,
//     location: "Delhi, India",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successfull testing");
// });

app.listen(8080, () => {
  console.log("Server on port 8080");
});
