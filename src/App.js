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
  const [services, setServices] = useState([
    {
      name: 'Gardening',
      description: 'Expert gardening services to maintain your beautiful garden.',
      reviews: [],
    },
    {
      name: 'Painting',
      description: 'High-quality painting services for your home or office.',
      reviews: [],
    },
    {
      name: 'Masonry Work',
      description: 'Skilled masonry services for wall repairs, tiling, and construction needs.',
      reviews: [],
    },
    {
      name: 'Electrical',
      description: 'Expert electrical services for wiring, repairs, and installations.',
      reviews: [],
    },
    {
      name: 'Carpentry',
      description: 'Skilled carpentry services for custom furniture, repairs, and home renovations.',
      reviews: [],
    },
    {
      name: 'Nursing Care',
      description: 'Compassionate nursing services for home care, medical assistance, and patient support.',
      reviews: [],
    },
  ]);

  // Load jobs from localStorage
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  // Save jobs to localStorage
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Add a new job
  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  // Add a new review to a service
  const addReview = (serviceName, newReview) => {
    const updatedServices = services.map((service) =>
      service.name === serviceName
        ? { ...service, reviews: [...service.reviews, newReview] }
        : service
    );
    setServices(updatedServices);
  };

  return (
    <Router>
      <Navbar /> {/* Include Navbar at the top */}
      <Routes>
        <Route
          path="/"
          element={<Home services={services} addReview={addReview} />} // Pass services and addReview to Home
        />
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