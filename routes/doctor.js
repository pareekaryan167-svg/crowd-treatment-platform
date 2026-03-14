const express = require("express");
const router = express.Router();

const DoctorSuggestion = require("../models/DoctorSuggestion");

router.post("/recommend", async (req,res)=>{

const { disease, suggestion, doctorName } = req.body;

const recommendation = new DoctorSuggestion({
disease,
suggestion,
doctorName
});

await recommendation.save();

res.json({message:"Recommendation added"});

});

router.get("/recommendations", async (req,res)=>{

const data = await DoctorSuggestion.find();

res.json(data);

});

module.exports = router;