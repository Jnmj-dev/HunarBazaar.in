import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import WorkerProfile from "./pages/WorkerProfile";
import PostJob from "./pages/PostJob";
import SingleWorker from "./pages/SingleWorker";
import Login from "./pages/Login";
import Signup from "./pages/signup"; // Ensure Signup is imported correctly

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker/:id" element={<SingleWorker />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/worker-profile" element={<WorkerProfile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<Login />} /> {/* Login Route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
