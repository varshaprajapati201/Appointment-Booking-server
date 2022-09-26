const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const {Connection} = require("./database/db.js");
const AppointmentRouter = require("./routes/appointment-route.js");

const app= express();

dotenv.config();

app.use(express.json());

app.use(bodyParser.json({
    extended: true
  }));
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(cors());
app.use("/",AppointmentRouter);

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
Connection(username, password);


app.listen(process.env.PORT ||3000, function() {
  console.log("Server is up and running on port 3000");
});
