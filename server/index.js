import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import db from "./startup/db.js";
import routes from "./startup/routes.js";

// TO avoid problems Faced when validating fetch request
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//for all routes
routes(app);

//for startup
db();

const port = process.env.PORT || 3005;
app.listen(port,() =>console.log(`Listening on ${port}`));