import { motion } from "framer-motion";
import { User, Stethoscope, Brain } from "lucide-react";

function LiveFeed({ issues, suggestions }) {

return (

<div className="card shadow p-4 mt-4">

<h4 style={{color:"#1a73e8"}}>Live Consultation Feed</h4>

{issues.map((issue,index)=>{

const suggestion = suggestions.find(
s=>s.disease === issue.disease
);

return(

<div key={index} className="mb-3">

{/* Patient Message */}

<motion.div
initial={{opacity:0,x:-20}}
animate={{opacity:1,x:0}}
className="p-3 mb-2"
style={{
background:"#e3f2fd",
borderRadius:"15px",
maxWidth:"70%"
}}
>

<User size={18}/> <b>Patient</b>

<p style={{margin:0}}>
<b>Disease:</b> {issue.disease}
</p>

<p style={{margin:0}}>
{issue.issue}
</p>

</motion.div>

{/* Doctor Message */}

{suggestion && (

<motion.div
initial={{opacity:0,x:20}}
animate={{opacity:1,x:0}}
className="p-3"
style={{
background:"#e8f5e9",
borderRadius:"15px",
maxWidth:"70%",
marginLeft:"auto"
}}
>

<Stethoscope size={18}/> <b>Doctor</b>

<p style={{margin:0}}>
{suggestion.suggestion}
</p>

{/* AI Badge */}

<span
style={{
background:"#4facfe",
color:"white",
padding:"4px 8px",
borderRadius:"10px",
fontSize:"12px"
}}
>

<Brain size={14}/> AI Verified

</span>

</motion.div>

)}

</div>

)

})}

</div>

)

}

export default LiveFeed;