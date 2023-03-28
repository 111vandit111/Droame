import express from "express";
import moment from "moment";
const router = express.Router();
import {Bookings ,BookingSchema , validateBooking} from '../models/booking.js';

// Find all bookings
router.get('/', async (req, res) => {
  try {
    const booking = await Bookings.find().populate('customer_id','name').populate('location_id','area city').populate('shot_id' , 'typeOfShot');
    res.status(200).send(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Find a booking by ID
router.get('/:id', getBooking, (req, res) => {
    res.status(200).send(req.booking);
});

// Create a booking
router.post('/', async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) return res.status(400).send(error.message);
    let datenew = moment().format('MM/DD/YYYY HH:MM');
    let date2 = moment(req.body.deliveryDate).format('MM/DD/YYYY');
  const booking = new Bookings({
    customer_id: req.body.customer_id,
    location_id: req.body.location_id,
    shot_id: req.body.shot_id,
    dateOfBooking: datenew,
    deliveryDate: date2,
    isPaid: req.body.isPaid,
    prePaid: req.body.prePaid
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a booking
router.put('/:id', getBooking, async (req, res) => {
  try {
  const booking = await Bookings.findByIdAndUpdate(
    req.params.id,
    {
    location_id: req.body.location_id,
    shot_id: req.body.shot_id,
    deliveryDate: req.body.deliveryDate,
    isPaid: req.body.isPaid,
    },
    {
      new: true,
    }
  );

  if (!booking)
  return res.status(404).send("The booking with the given ID was not found.");
  res.send(booking);
  
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a booking
router.delete('/:id', getBooking, async (req, res) => {
  try {

    const customer = await Bookings.findByIdAndRemove(req.params.id);
    if (!customer)
    return res.status(404).send("The Booking with the given ID was not found.");
    res.send(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a booking by ID
async function getBooking(req, res, next) {
  try {
    const booking = await Bookings.findById(req.params.id).populate('customer_id','name').populate('location_id','area city').populate('shot_id','typeOfShot');
    if (booking == null) {
      return res.status(404).json({ message: 'Cannot find booking' });
    }
    req.booking = booking;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}


export default router;
