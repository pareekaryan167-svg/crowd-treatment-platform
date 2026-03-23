import { useState } from "react";

function SignIn() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [role, setRole] = useState("patient");

function handleSubmit(e) {

e.preventDefault();

alert(`Account created for ${name} as ${role}`);

}

return (

<div style={{background:"#f4f9ff",minHeight:"80vh",padding:"40px"}}>

<div className="row justify-content-center">

<div className="col-md-5">

<div className="card shadow-lg p-4">

<h2 style={{color:"#1a73e8"}}>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
className="form-control mb-3"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<select
className="form-control mb-3"
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="patient">Patient</option>
<option value="doctor">Doctor</option>

</select>

<button
className="btn w-100"
style={{
background:"linear-gradient(90deg,#4facfe,#00f2fe)",
color:"white",
border:"none"
}}
>

Create Account

</button>

</form>

</div>

</div>

</div>

</div>

);

}

export default SignIn;