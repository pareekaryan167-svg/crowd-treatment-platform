import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
const API_URL = "https://treatment-backend-it5o.onrender.com/api";
import AIRecommendations from "../components/AIRecommendation";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
ArcElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
ArcElement,
Title,
Tooltip,
Legend
);

function ReportsDashboard() {

const [reports,setReports] = useState([]);

useEffect(()=>{

fetch(`${API_URL}/api/reports`)
.then(res=>res.json())
.then(data=>setReports(data));

},[]);

const diseases = {};
let success = 0;
let failure = 0;

reports.forEach(r=>{
diseases[r.disease] = (diseases[r.disease] || 0) + 1;

if(r.success) success++;
else failure++;
});

const barData = {
labels:Object.keys(diseases),
datasets:[
{
label:"Disease Reports",
data:Object.values(diseases),
backgroundColor:"#4facfe"
}
]
};

const pieData = {
labels:["Success","Failure"],
datasets:[
{
data:[success,failure],
backgroundColor:["#28a745","#dc3545"]
}
]
};

return(

<div className="container mt-4">

<h2 className="mb-4 text-primary">
Healthcare Intelligence Dashboard
</h2>

{/* STAT CARDS */}

<div className="row mb-4">

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h4>{reports.length}</h4>
<p>Total Reports</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h4>{Object.keys(diseases).length}</h4>
<p>Diseases Tracked</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h4>{success}</h4>
<p>Successful Treatments</p>
</div>
</div>

<div className="col-md-3">
<div className="card shadow text-center p-3">
<h4>{failure}</h4>
<p>Failed Treatments</p>
</div>
</div>

</div>


{/* CHARTS */}

<div className="row mb-4">

<div className="col-lg-6">

<div className="card shadow-sm p-4 h-100">

<h5 className="mb-3 text-primary">
Disease Distribution
</h5>

<div style={{height:"300px"}}>
<Bar redraw={true} data={barData}/>
</div>

</div>

</div>


<div className="col-lg-6">

<div className="card shadow-sm p-4 h-100">

<h5 className="mb-3 text-success">
Success vs Failure
</h5>

<div style={{height:"300px"}}>
<Pie redraw={true} data={pieData}/>
</div>

</div>

</div>

</div>

{/* AI PANEL */}

<div className="row mb-4">

<div className="col-md-12">

<AIRecommendations/>

</div>

</div>


{/* PATIENT + DOCTOR PANELS */}

<div className="row mb-4">

<div className="col-md-6">

<div className="card shadow p-4">

<h5>Patient Panel</h5>

<input
className="form-control mb-2"
placeholder="Disease"
/>

<textarea
className="form-control mb-2"
placeholder="Describe issue"
/>

<button className="btn btn-primary">
Submit Issue
</button>

</div>

</div>


<div className="col-md-6">

<div className="card shadow p-4">

<h5>Doctor Panel</h5>

<input
className="form-control mb-2"
placeholder="Disease"
/>

<textarea
className="form-control mb-2"
placeholder="Recommendation"
/>

<button className="btn btn-success">
Submit Recommendation
</button>

</div>

</div>

</div>


{/* LIVE FEED */}

<div className="card shadow p-4">

<h5>Live Consultation Feed</h5>

<p className="text-muted">
Patient issues and doctor responses appear here.
</p>

</div>



</div>

)

}

export default ReportsDashboard;
