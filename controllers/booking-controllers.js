import { booking } from "../models/booking-model.js";

export const getAllBookings = (req, res) => {
  res.status(200).json("These are all bookings");
};

export const getOneBooking = (req, res) => {
  res.status(200).json("This is one booking");
};

export const postBookings = async (req, res, next) => {
try {
  const newBooking = new booking(req.body)
    
    const bookings = await newBooking.save(req.body)
  
    res.status(201).json(bookings);
} catch (error) {
  next(error);
}
};

export const updateBookings = (req, res) => {
  res.status(201).json("Bookings updated");
};

export const deleteBookings = (req, res) => {
  res.status(201).json("Bookings deleted");
};

export const getTwoBookings = (req, res) => {
  res.status(200).json("Two Bookings");
};
