const express = require("express");
const router = express.Router();

const Treatment = require("../models/Treatment"); // your existing model

router.get("/recommend/:disease", async (req,res)=>{

const disease = req.params.disease;

const reports = await Treatment.find({ disease });

if(reports.length === 0){
return res.json({
message:"No data available for this disease"
});
}

const treatmentStats = {};

reports.forEach(r=>{

if(!treatmentStats[r.treatment]){

treatmentStats[r.treatment] = {
success:0,
total:0
};

}

treatmentStats[r.treatment].total++;

if(r.success){
treatmentStats[r.treatment].success++;
}

});

let bestTreatment = "";
let bestRate = 0;

Object.keys(treatmentStats).forEach(t=>{

const rate =
treatmentStats[t].success / treatmentStats[t].total;

if(rate > bestRate){
bestRate = rate;
bestTreatment = t;
}

});

res.json({

disease,
bestTreatment,
successRate:(bestRate*100).toFixed(1)+"%"

});

});

module.exports = router;