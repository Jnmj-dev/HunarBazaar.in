import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/marketplace" element={<h1>Marketplace</h1>} />
        <Route path="/worker-profile" element={<h1>Workers</h1>} />
        <Route path="/post-job" element={<h1>Post a Job</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
