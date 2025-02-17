import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import WorkerProfile from "./pages/WorkerProfile";
import PostJob from "./pages/PostJob";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/worker-profile" element={<WorkerProfile />} />
      <Route path="/post-job" element={<PostJob />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
