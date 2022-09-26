const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String,
    appointmentDate: Date
});


const Appointment = mongoose.model("Appointment",appointmentSchema);

module.exports = Appointment;