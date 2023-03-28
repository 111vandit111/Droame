//MODEL OF bookings Schema
import Joi from "joi";
import { Schema, model ,mongoose } from 'mongoose';

//Declaring schema structure
const BookingSchema = new Schema({
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customers',
      required: true
    },
    location_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Locations',
      required: true
    },
    shot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DroneShots',
      required: true,
    },
    dateOfBooking: {
      type: Date,
      required: true
    },
    deliveryDate: {
      type: Date,
      required: true
    },
    isPaid: {
      type: Boolean,
      default: false
    },
    prePaid: {
      type: Boolean,
      default: false
    }
    
  });
  
 
const Bookings = model('Bookings', BookingSchema);  

// function for validating input fields at time of creation of Bookings
function validateBooking(Bookings) {
    const Schema = Joi.object({
        customer_id:Joi.string().required(),
        location_id:Joi.string().required(),
        shot_id:Joi.string().required(),
        deliveryDate: Joi.required(),
        isPaid: Joi.bool().required(),
        prePaid: Joi.bool().required(),
    })

    return Schema.validate(Bookings);
}


export {Bookings ,BookingSchema , validateBooking};
