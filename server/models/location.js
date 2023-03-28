//model for Location Schema
import { Schema, model } from 'mongoose';

// structure for Location Schema
const locationSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  area:{
    type: String,
    required: true
  }
});

const Locations = model('Locations', locationSchema);

export {Locations ,locationSchema};

