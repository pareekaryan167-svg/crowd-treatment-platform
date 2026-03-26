const mongoose = require("mongoose");

const doctorSuggestionSchema = new mongoose.Schema({

disease:String,
suggestion:String,
doctorName:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("DoctorSuggestion",doctorSuggestionSchema);