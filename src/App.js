import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import WorkerProfile from "./pages/WorkerProfile";
import PostJob from "./pages/PostJob";
import SingleWorker from "./pages/SingleWorker";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Ensure Signup is imported correctly
import { useState, useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <Router>
      <Navbar /> {/* Include Navbar at the top */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/worker/:id" element={<SingleWorker />} /> {/* SingleWorker Route */}
        <Route path="/marketplace" element={<Marketplace />} /> {/* Marketplace Route */}
        <Route path="/worker-profile" element={<WorkerProfile />} /> {/* WorkerProfile Route */}
        <Route path="/post-job" element={<PostJob addJob={addJob} />} /> {/* PostJob Route */}
        <Route path="/login" element={<Login />} /> {/* Login Route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
      </Routes>
    </Router>
  );
}

export default App;