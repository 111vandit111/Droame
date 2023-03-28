import express from "express";
const router = express.Router();
import {DroneShots ,droneShotSchema} from "../models/droneshot.js";

//get all Droneshot
router.get("/",async(req,res)=>{
    const droneshot = await DroneShots.find().sort("name");
    res.status(200).send(droneshot);
})

//get Droneshot with a specific id
router.get("/:id",async(req,res)=>{
    try {
        const droneshot = await DroneShots.findById(req.params.id);
        if (!droneshot)
        return res.status(404).send("The droneshot with the given ID was not found.");
        res.status(200).send(droneshot);  
    } catch (error) {
        console.log("No such DroneId");
    }
    
})

export default router;