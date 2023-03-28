//model for droneShot Schema
import { Schema, model } from 'mongoose';


// structure for droneShot Schema
const droneShotSchema = new Schema({
  typeOfShot: {
    type: String,
    required: true
  }
});

const DroneShots = model('DroneShots', droneShotSchema);

export {DroneShots ,droneShotSchema};
