import { Router } from "express";
import {
  getAllBookings,
  getOneBooking,
  postBookings,
  updateBookings,
  deleteBookings,
  getTwoBookings,
} from "../controllers/booking-controllers.js";

export const bookingRouter = Router();

bookingRouter.get("/bookings", getAllBookings);

bookingRouter.get("/booking_1", getOneBooking);

bookingRouter.post("/bookings", postBookings);

bookingRouter.patch("/bookings", updateBookings);

bookingRouter.delete("/bookings", deleteBookings);

bookingRouter.get("booking-T", getTwoBookings);
