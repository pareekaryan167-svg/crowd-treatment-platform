import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Brain, Users } from "lucide-react";

function Home(){

return(

<div style={{background:"linear-gradient(135deg,#e3f2fd,#ffffff)",minHeight:"90vh",padding:"50px"}}>

<div className="container">

{/* HERO SECTION */}

<motion.div

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}

className="text-center mb-5"

>

<h1 style={{fontSize:"48px",fontWeight:"bold",color:"#1a73e8"}}>

Crowdsourced Treatment Intelligence

</h1>

<p style={{fontSize:"20px",color:"#555"}}>

Discover which treatments work best using real-world patient experiences and AI insights.

</p>

<div className="mt-4">

<Link to="/submit">

<button
className="btn btn-lg me-3"
style={{
background:"linear-gradient(90deg,#4facfe,#00f2fe)",
color:"white",
border:"none",
borderRadius:"30px",
padding:"12px 25px"
}}
>

Submit Treatment Report

</button>

</Link>

<Link to="/dashboard">

<button
className="btn btn-lg btn-outline-primary"
style={{borderRadius:"30px"}}
>

View Analytics Dashboard

</button>

</Link>

</div>

</motion.div>

{/* FEATURES */}

<div className="row mt-5">

<div className="col-md-4">

<motion.div whileHover={{scale:1.05}} className="card shadow-lg p-4 text-center">

<Activity size={40} color="#1a73e8"/>

<h4 className="mt-3">Real Patient Data</h4>

<p>

Patients share real treatment experiences to improve healthcare decisions.

</p>

</motion.div>

</div>

<div className="col-md-4">

<motion.div whileHover={{scale:1.05}} className="card shadow-lg p-4 text-center">

<Brain size={40} color="#1a73e8"/>

<h4 className="mt-3">AI Insights</h4>

<p>

Our platform analyzes treatment data to recommend the most effective solutions.

</p>

</motion.div>

</div>

<div className="col-md-4">

<motion.div whileHover={{scale:1.05}} className="card shadow-lg p-4 text-center">

<Users size={40} color="#1a73e8"/>

<h4 className="mt-3">Doctor Collaboration</h4>

<p>

Doctors contribute recommendations and validate treatment success.

</p>

</motion.div>

</div>

</div>

</div>

</div>

)

}

export default Home