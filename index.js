import express from "express"
import { bookingRouter } from "./routes/all-routes.js";
import mongoose from "mongoose";
import 'dotenv/config'

// create database
await mongoose.connect(process.env.MONGO_URI)

// creating app here
const bookingApp = express()

bookingApp.use(express.json())
bookingApp.use (bookingRouter)

// lets put our route here
bookingApp.get("/booking", function (req, res, next) {
  console.log(req.headers);
  res.json("To get all bookings");
});

// listening port goes here
bookingApp.listen(4000, function () {
    console.log("App is listening on port 4000");
  });