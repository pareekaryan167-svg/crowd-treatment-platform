const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const treatmentRoutes = require("./routes/treatmentRoutes");

const app = express();
const authRoutes = require("./routes/auth");
const patientRoutes = require("./routes/patient");
const doctorRoutes = require("./routes/doctor");
const aiRoutes = require("./routes/ai");
const feedRoutes = require("./routes/feed");

app.use("/api/feed",feedRoutes);

app.use("/api/ai",aiRoutes);

app.use("/api/patient",patientRoutes);
app.use("/api/doctor",doctorRoutes);

app.use("/api/auth",authRoutes);

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.lbjfzwe.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
res.send("Crowdsourced Treatment Intelligence Platform API");
});

app.use("/api", treatmentRoutes);

app.listen(3000, ()=>{
console.log("Server running on port 3000");
});
app.get("/api/feed/live", async (req, res) => {
  try {
    const PatientIssue = require("./models/PatientIssue");
    const DoctorSuggestion = require("./models/DoctorSuggestion");

    const issues = await PatientIssue.find().sort({ createdAt: -1 });
    const suggestions = await DoctorSuggestion.find().sort({ createdAt: -1 });

    res.json({
      issues,
      suggestions
    });

  } catch (error) {
    console.error(error);
    res.json({
      issues: [],
      suggestions: []
    });
  }
});