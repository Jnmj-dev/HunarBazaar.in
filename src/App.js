import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserTypeSelection from './pages/UserTypeSelection';
import WorkerProfileSetup from './pages/WorkerProfileSetup';
import CustomerDashboard from './pages/CustomerDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-type-selection" element={<UserTypeSelection />} />
        <Route path="/worker-profile-setup" element={<WorkerProfileSetup />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;