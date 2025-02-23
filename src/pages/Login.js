import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("customer"); // State to track user type
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [workerDetails, setWorkerDetails] = useState({
    name: "",
    occupation: "",
    experience: "",
    location: "",
  });
  const [showOccupationDropdown, setShowOccupationDropdown] = useState(false); // State for occupation dropdown
  const [showLocationDropdown, setShowLocationDropdown] = useState(false); // State for location dropdown
  const [searchOccupation, setSearchOccupation] = useState(""); // State for occupation search
  const [searchLocation, setSearchLocation] = useState(""); // State for location search

  // Occupation options (sorted alphabetically)
  const occupationOptions = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Mechanic",
    "Mason",
    "Painter",
    "Driver",
    "Cook",
    "Nurse",
    "Cleaner",
  ].sort((a, b) => a.localeCompare(b));

  // Experience options (0 to 25 years)
  const experienceOptions = Array.from({ length: 26 }, (_, i) => i);

  // Location options (popular cities in India, sorted alphabetically)
  const locationOptions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
  ].sort((a, b) => a.localeCompare(b));

  // Filtered occupation options based on search
  const filteredOccupations = occupationOptions.filter((occupation) =>
    occupation.toLowerCase().includes(searchOccupation.toLowerCase())
  );

  // Filtered location options based on search
  const filteredLocations = locationOptions.filter((location) =>
    location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login logic (replace with actual authentication logic)
    if (loginDetails.email && loginDetails.password) {
      if (userType === "customer") {
        navigate("/workerprofile"); // Redirect to WorkerProfile page for Customer
      } else if (userType === "worker") {
        // Validate worker details
        if (
          !workerDetails.name ||
          !workerDetails.occupation ||
          !workerDetails.experience ||
          !workerDetails.location
        ) {
          alert("Please fill in all worker details.");
          return;
        }
        navigate("/marketplace"); // Redirect to Marketplace page for Worker
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleWorkerDetailsChange = (e) => {
    const { name, value } = e.target;
    setWorkerDetails({ ...workerDetails, [name]: value });
  };

  const handleOccupationSelect = (occupation) => {
    setWorkerDetails({ ...workerDetails, occupation });
    setShowOccupationDropdown(false); // Close dropdown after selection
  };

  const handleLocationSelect = (location) => {
    setWorkerDetails({ ...workerDetails, location });
    setShowLocationDropdown(false); // Close dropdown after selection
  };

  return (
    <div style={styles.container}>
      {/* Top Bar - Hunarbazaar */}
      <div style={styles.topBar}>
        <h1 style={styles.topBarText}>Hunarbazaar</h1>
      </div>

      {/* Login Box with Proper Spacing */}
      <div style={styles.loginBox}>
        <h2 style={styles.loginTitle}>Login</h2>

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

        <form onSubmit={handleLogin} style={styles.form}>
          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginDetails.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          {/* Worker Details (Visible only if Worker is selected) */}
          {userType === "worker" && (
            <>
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={workerDetails.name}
                onChange={handleWorkerDetailsChange}
                style={styles.input}
                required
              />

              {/* Occupation Field */}
              <div style={styles.selectContainer}>
                <div
                  style={styles.customDropdown}
                  onClick={() => setShowOccupationDropdown(!showOccupationDropdown)}
                >
                  {workerDetails.occupation || "Select Occupation"}
                </div>
                {showOccupationDropdown && (
                  <div style={styles.dropdownMenu}>
                    <input
                      type="text"
                      placeholder="Search Occupation"
                      value={searchOccupation}
                      onChange={(e) => setSearchOccupation(e.target.value)}
                      style={styles.searchInput}
                    />
                    <div style={styles.dropdownOptions}>
                      {filteredOccupations.map((occupation) => (
                        <div
                          key={occupation}
                          style={styles.dropdownOption}
                          onClick={() => handleOccupationSelect(occupation)}
                        >
                          {occupation}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Experience Field */}
              <div style={styles.selectContainer}>
                <select
                  name="experience"
                  value={workerDetails.experience}
                  onChange={handleWorkerDetailsChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Experience (Years)</option>
                  {experienceOptions.map((experience) => (
                    <option key={experience} value={experience}>
                      {experience} years
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Field */}
              <div style={styles.selectContainer}>
                <div
                  style={styles.customDropdown}
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  {workerDetails.location || "Select Location"}
                </div>
                {showLocationDropdown && (
                  <div style={styles.dropdownMenu}>
                    <input
                      type="text"
                      placeholder="Search Location"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      style={styles.searchInput}
                    />
                    <div style={styles.dropdownOptions}>
                      {filteredLocations.map((location) => (
                        <div
                          key={location}
                          style={styles.dropdownOption}
                          onClick={() => handleLocationSelect(location)}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Login Button */}
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p style={styles.signupLink}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.signupLinkText}>
            Sign up
          </Link>
        </p>
      </div>

      {/* Quote Section */}
      <div style={styles.quoteSection}>
        <p style={styles.quoteText}>“Your skills, your future, our platform.”</p>
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
  loginBox: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "24rem",
    marginTop: "8rem",
  },
  loginTitle: {
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
  selectContainer: {
    marginBottom: "1rem",
    position: "relative",
  },
  customDropdown: {
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    cursor: "pointer",
    backgroundColor: "white",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  searchInput: {
    width: "100%",
    padding: "0.75rem",
    border: "none",
    borderBottom: "1px solid #e2e8f0",
    outline: "none",
    fontSize: "1rem",
  },
  dropdownOptions: {
    maxHeight: "200px",
    overflowY: "auto",
  },
  dropdownOption: {
    padding: "0.75rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  dropdownOptionHover: {
    backgroundColor: "#f7fafc",
  },
  select: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "white",
  },
  loginButton: {
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
  signupLink: {
    textAlign: "center",
    marginTop: "1rem",
    color: "#4a5568",
  },
  signupLinkText: {
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
};

export default Login;