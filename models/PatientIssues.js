const mongoose = require("mongoose");

const patientIssueSchema = new mongoose.Schema({

disease:String,

issue:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("PatientIssue",patientIssueSchema);