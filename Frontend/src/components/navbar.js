import { Link } from "react-router-dom";

function Navbar(){

return(

<nav
style={{
background:"linear-gradient(90deg,#4facfe,#00f2fe)",
padding:"10px"
}}
>

<div className="container d-flex justify-content-between">

<h4 style={{color:"white"}}>
Treatment Intelligence
</h4>

<div>

<Link className="btn btn-light me-2" to="/">
Home
</Link>

<Link className="btn btn-light me-2" to="/submit">
Submit
</Link>

<Link className="btn btn-light me-2" to="/dashboard">
Dashboard
</Link>

<Link className="btn btn-dark" to="/signin">
Sign In
</Link>

</div>

</div>

</nav>

);

}

export default Navbar;