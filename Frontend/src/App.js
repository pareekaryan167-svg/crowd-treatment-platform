import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import SubmitReport from "./pages/submitReports";
import Dashboard from "./pages/ReportsDashboard";
import SignIn from "./pages/signin";

function App() {
  return (
    <Router>

      <Navbar />

      <div className="container mt-4">

        <Routes>


          <Route path="/" element={<Home />} />

          <Route path="/submit" element={<SubmitReport />} />

          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/signin" element={<SignIn />}/>
          

        </Routes>

      </div>
      <Footer />
      

    </Router>
    
  );
}

export default App;