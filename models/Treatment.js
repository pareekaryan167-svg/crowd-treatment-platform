const mongoose = require("mongoose");

const TreatmentSchema = new mongoose.Schema({

disease: String,
treatment: String,
duration: Number,
sideEffects: String,
success: Boolean

});

module.exports = mongoose.model("Treatment", TreatmentSchema);