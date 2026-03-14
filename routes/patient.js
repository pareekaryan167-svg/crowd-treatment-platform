const express = require("express");
const router = express.Router();

const PatientIssue = require("../models/PatientIssues");

router.post("/submitIssue", async (req,res)=>{

const { disease, issue } = req.body;

const newIssue = new PatientIssue({
disease,
issue
});

await newIssue.save();

res.json({message:"Issue submitted"});

});

router.get("/issues", async (req,res)=>{

const issues = await PatientIssue.find();

res.json(issues);

});

module.exports = router;