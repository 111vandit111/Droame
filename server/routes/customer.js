import express from "express";
const router = express.Router();
import {Customers ,customerSchema , validateCustomer} from "../models/customer.js";

// Find all Customers
router.get("/",async(req,res)=>{
    const customer = await Customers.find().sort("name");
    res.status(200).send(customer);
})

// Find a booking by ID
router.get("/:id",async(req,res)=>{
    
    const customer = await Customers.findById(req.params.id);
    if (!customer)
    return res.status(404).send("The customer with the given ID was not found.");
    res.status(200).send(customer);
})

// Create a new customer
router.post("/", async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.message);

    let customer = new Customers({
      name: req.body.name,
      Email: req.body.Email,
      phone: req.body.phone,
      address: req.body.address,
    });
    
    const Newcustomer = await customer.save();
    res.status(200).send(Newcustomer);
  });
 
// Update customer 
router.put("/:id", async (req, res) => {

    const customer = await Customers.findByIdAndUpdate(
      req.params.id,
      {
      name: req.body.name,
      Email: req.body.Email,
      phone: req.body.phone,
      address: req.body.address,
      },
      {
        new: true,
      }
    );

    if (!customer)
    return res.status(404).send("The customer with the given ID was not found.");
    res.send(customer);
});

// delete the customer by its ID
router.delete("/:id", async (req, res) => {
    const customer = await Customers.findByIdAndRemove(req.params.id);
  
    if (!customer)
      return res.status(404).send("The customer with the given ID was not found.");
    res.send(customer);
  });


export default router;