import mongoose from "mongoose";

//creating connection with mongoDB and database DROAME

const db= function () {
    mongoose
      .connect("mongodb://localhost/droame")
      .then(() => console.log("Connected to MongoDB..."));
  };

export default db;