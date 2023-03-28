import express from "express"
import Customers from "../routes/customer.js"
import DroneShot from "../routes/droneshot.js"
import Location from "../routes/location.js"
import Booking  from "../routes/booking.js"


// setting up all initial routes
const routes = (app) => {
  app.use(express.json());
  app.use("/api/customer", Customers);
  app.use("/api/droneshot", DroneShot);
  app.use("/api/location", Location);
  app.use("/api/booking", Booking);
};

export default routes;