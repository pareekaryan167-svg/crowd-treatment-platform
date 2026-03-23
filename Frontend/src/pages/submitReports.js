import { useState } from "react";
import { submitReport } from "../Services/api";
import { motion } from "framer-motion";

function SubmitReport(){

const [form,setForm] = useState({

disease:"",
treatment:"",
duration:"",
sideEffects:"",
success:true

})

const handleSubmit = async(e)=>{

e.preventDefault()

await submitReport(form)

alert("Report submitted successfully!")

}

return(

<div style={{background:"#f4f9ff",minHeight:"90vh",padding:"50px"}}>

<div className="container">

<motion.div

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}

className="row justify-content-center"

>

<div className="col-md-6">

<div className="card shadow-lg p-5" style={{borderRadius:"20px"}}>

<h2 style={{color:"#1a73e8"}}>

Submit Treatment Experience

</h2>

<p className="text-muted">

Help others by sharing your treatment results.

</p>

<form onSubmit={handleSubmit}>

<input

className="form-control mb-3"

placeholder="Disease"

onChange={(e)=>setForm({...form,disease:e.target.value})}

/>

<input

className="form-control mb-3"

placeholder="Treatment Used"

onChange={(e)=>setForm({...form,treatment:e.target.value})}

/>

<input

className="form-control mb-3"

placeholder="Duration (days)"

onChange={(e)=>setForm({...form,duration:e.target.value})}

/>

<input

className="form-control mb-3"

placeholder="Side Effects"

onChange={(e)=>setForm({...form,sideEffects:e.target.value})}

/>

<select

className="form-control mb-3"

onChange={(e)=>setForm({...form,success:e.target.value==="true"})}

>

<option value="true">Treatment Successful</option>
<option value="false">Treatment Failed</option>

</select>

<motion.button

whileHover={{scale:1.05}}
className="btn w-100"

style={{
background:"linear-gradient(90deg,#4facfe,#00f2fe)",
color:"white",
borderRadius:"25px",
border:"none"
}}

>

Submit Report

</motion.button>

</form>

</div>

</div>

</motion.div>

</div>

</div>

)

}

export default SubmitReport