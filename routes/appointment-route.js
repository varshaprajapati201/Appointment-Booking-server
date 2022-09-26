const express = require("express");
const addAppointment = require("../controller/appointment-controller.js");


const AppointmentRouter = express.Router();

AppointmentRouter.post("/add",addAppointment);


module.exports = AppointmentRouter;