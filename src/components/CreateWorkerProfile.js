import { useState } from "react";

function CreateWorkerProfile({ onAddWorker }) {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !profession || !experience || !location || !image) {
      alert("Please fill out all fields.");
      return;
    }

    const newWorker = {
      id: Date.now(), // Unique ID for the worker
      name,
      profession,
      experience,
      location,
      rating: "0", // Default rating
      image,
      reviews: [], // Empty reviews array
    };

    onAddWorker(newWorker);

    // Clear the form
    setName("");
    setProfession("");
    setExperience("");
    setLocation("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Your Profile</h2>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Enter your name"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Profession:</label>
        <input
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Enter your profession"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Experience:</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Enter your experience"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Enter your location"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Enter image URL"
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Create Profile
      </button>
    </form>
  );
}

export default CreateWorkerProfile; 