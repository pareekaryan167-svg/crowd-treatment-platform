import { useEffect, useState } from "react";
import { Brain, TrendingUp } from "lucide-react";

function AIRecommendations() {

const [recommendations,setRecommendations] = useState([]);

useEffect(()=>{

async function fetchData(){

const res = await fetch("http://localhost:3000/api/reports");

const data = await res.json();

const diseaseStats = {};

data.forEach(report=>{

if(!diseaseStats[report.disease]){

diseaseStats[report.disease] = {
total:0,
success:0
};

}

diseaseStats[report.disease].total++;

if(report.success){
diseaseStats[report.disease].success++;
}

});

const aiResults = Object.keys(diseaseStats).map(disease=>{

const successRate =
(diseaseStats[disease].success /
diseaseStats[disease].total)*100;

return{

disease,
successRate:successRate.toFixed(0)

};

});

setRecommendations(aiResults);

}

fetchData();

},[]);

return(

<div className="card shadow p-4">

<h4 style={{color:"#0d6efd"}}>

<Brain size={20}/> AI Treatment Insights

</h4>

{recommendations.map((item,index)=>(

<div key={index}

style={{

background:"#f5faff",
padding:"12px",
borderRadius:"10px",
marginBottom:"10px"

}}

>

<h6>{item.disease}</h6>

<p style={{margin:0}}>

<TrendingUp size={16}/> Estimated Success Rate: 

<b> {item.successRate}%</b>

</p>

</div>

))}

</div>

)

}

export default AIRecommendations;