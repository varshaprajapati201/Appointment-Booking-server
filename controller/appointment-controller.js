const Appointment = require("../model/appointment-schema.js");

const url = "http://localhost:3000"

const addAppointment = async (req,res)=>{
    const appointment = req.body;
       
    const newAppointment = new Appointment(appointment);
try{
await newAppointment.save();
res.status(200).json(newAppointment);
}catch(error){
res.status(409).json({message:error.message});
}
}

module.exports = addAppointment;