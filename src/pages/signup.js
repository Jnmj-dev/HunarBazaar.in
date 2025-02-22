import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer"; // Ensure Footer is correctly imported

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("customer"); // State to track user type
  const [workerDetails, setWorkerDetails] = useState({
    name: "",
    occupation: "",
    experience: "",
    location: "",
    photo: null,
  });

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login"); // Redirect to Login Page
  };

  const handleWorkerDetailsChange = (e) => {
    const { name, value } = e.target;
    setWorkerDetails({ ...workerDetails, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    setWorkerDetails({ ...workerDetails, photo: e.target.files[0] });
  };

  return (
    <div style={styles.container}>
      {/* Top Bar - Hunarbazaar */}
      <div style={styles.topBar}>
        <h1 style={styles.topBarText}>Hunarbazaar</h1>
      </div>

      {/* Signup Box with Proper Spacing */}
      <div style={styles.signupBox}>
        <h2 style={styles.signupTitle}>Create an Account</h2>

        {/* User Type Selection (Worker or Customer) */}
        <div style={styles.userTypeContainer}>
          <button
            onClick={() => setUserType("customer")}
            style={{
              ...styles.userTypeButton,
              ...(userType === "customer" ? styles.activeButton : {}),
            }}
          >
            Customer
          </button>
          <button
            onClick={() => setUserType("worker")}
            style={{
              ...styles.userTypeButton,
              ...(userType === "worker" ? styles.activeButton : {}),
            }}
          >
            Worker
          </button>
        </div>

        <form onSubmit={handleSignup} style={styles.form}>
          {/* Common Fields for Both Customer and Worker */}
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Username or Email"
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            required
          />

          {/* Additional Fields for Worker */}
          {userType === "worker" && (
            <>
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={workerDetails.occupation}
                onChange={handleWorkerDetailsChange}
                style={styles.input}
                required
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience (e.g., 5 years)"
                value={workerDetails.experience}
                onChange={handleWorkerDetailsChange}
                style={styles.input}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={workerDetails.location}
                onChange={handleWorkerDetailsChange}
                style={styles.input}
                required
              />
              {/* Custom File Input */}
              <label style={styles.fileInputLabel}>
                <input
                  type="file"
                  name="photo"
                  onChange={handlePhotoUpload}
                  style={styles.fileInput}
                  accept="image/*"
                  required
                />
                <span style={styles.fileInputText}>
                  {workerDetails.photo ? workerDetails.photo.name : "Upload Your Photo"}
                </span>
              </label>
            </>
          )}

          {/* Signup Button */}
          <button type="submit" style={styles.signupButton}>
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p style={styles.loginLink}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLinkText}>
            Log in
          </Link>
        </p>
      </div>

      {/* Quote Section */}
      <div style={styles.quoteSection}>
        <p style={styles.quoteText}>“Your skills, your future, our platform.”</p>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f7fafc",
  },
  topBar: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "1rem 0",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
  },
  topBarText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3182ce",
  },
  signupBox: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "24rem",
    marginTop: "8rem",
  },
  signupTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#2d3748",
  },
  userTypeContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "1.5rem",
  },
  userTypeButton: {
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontWeight: "600",
    backgroundColor: "#e2e8f0",
    color: "#4a5568",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    outline: "none", // Remove focus outline
    userSelect: "none", // Prevent text selection
  },
  activeButton: {
    backgroundColor: "#3182ce",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    marginBottom: "1rem",
    outline: "none",
    fontSize: "1rem",
  },
  fileInputLabel: {
    display: "block",
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    marginBottom: "1rem",
    outline: "none", // Remove focus outline
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#f7fafc",
    textAlign: "center",
    userSelect: "none", // Prevent text selection
  },
  fileInput: {
    display: "none", // Hide the default file input
  },
  fileInputText: {
    color: "#4a5568",
  },
  signupButton: {
    backgroundColor: "#3182ce",
    color: "white",
    padding: "0.75rem",
    borderRadius: "0.375rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  loginLink: {
    textAlign: "center",
    marginTop: "1rem",
    color: "#4a5568",
  },
  loginLinkText: {
    color: "#3182ce",
    fontWeight: "600",
    textDecoration: "none",
  },
  quoteSection: {
    marginTop: "2rem",
    textAlign: "center",
    color: "#718096",
    fontStyle: "italic",
  },
  quoteText: {
    margin: 0,
  },
  footer: {
    width: "100%",
    marginTop: "3rem",
  },
};

export default Signup;