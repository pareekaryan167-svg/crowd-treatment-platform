const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register",async(req,res)=>{

const {name,email,role} = req.body;

const user = new User({
name,
email,
role
});

await user.save();

res.json({
message:"User registered"
});

});

module.exports = router;