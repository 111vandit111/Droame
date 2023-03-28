// models/customer.js
import Joi from "joi";
import { Schema, model } from 'mongoose';

//Declaring schema structure
const customerSchema = new Schema({
  
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  }
});


const Customers = model('Customers', customerSchema);

// function for validating input fields at time of creation of Customers
function validateCustomer(Customers) {
    const Schema = Joi.object({
        name:Joi.string().min(5).max(200).required(),
        Email:Joi.string().required(),
        phone:Joi.number().required(),
        address:Joi.string(),
    })

    return Schema.validate(Customers);
}


export {Customers ,customerSchema , validateCustomer};
