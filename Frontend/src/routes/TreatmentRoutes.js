const express = require("express");
const router = express.Router();
const Treatment = require("../Frontend/src/models/Treatment");

router.post("/submit", async(req,res)=>{

const data = new Treatment(req.body);

await data.save();

res.json({message:"Treatment data saved"});

});

router.get("/reports", async(req,res)=>{

const data = await Treatment.find().select("-__v");

res.json(data);

});

module.exports = router;