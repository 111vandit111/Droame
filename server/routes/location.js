import express from "express";
const router = express.Router();
import {Locations ,locationSchema} from "../models/location.js";

//get location by city
router.get("/city/:city",async(req,res)=>{
    const locations = await Locations.find({ city: req.params.city });
    if(!locations || locations.length==0 )res.status(404).send("No such location");
    res.status(200).send(locations);
})

//get all locations
router.get("/",async(req,res)=>{
    const location = await Locations.find().sort("area");
    res.status(200).send(location);
})

//get location by id
router.get("/:id",async(req,res)=>{
    try {
    const location = await Locations.findById(req.params.id);
    if (!location || location.length==0)
    return res.status(404).send("The location with the given ID was not found.");
    res.status(200).send(location);
    } catch (error) {
        res.send(error.message);
    }
    
})



export default router;