const express = require("express");
const router = express.Router();

const PatientIssue = require("../models/PatientIssues");
const DoctorSuggestion = require("../models/DoctorSuggestion");

router.get("/live", async (req,res)=>{

const issues = await PatientIssue.find().sort({createdAt:-1});
const suggestions = await DoctorSuggestion.find().sort({createdAt:-1});

res.json({
issues,
suggestions
});

});

module.exports = router;