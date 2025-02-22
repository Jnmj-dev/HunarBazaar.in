import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PostJob.css"; // Import the CSS file

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [mobile, setMobile] = useState(""); // New state variable for mobile number
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => setPostedJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("budget", `₹${budget}`);
    formData.append("location", location);
    formData.append("mobile", mobile); // Append mobile number to form data
    if (image) {
      formData.append("image", image);
    }

    fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setPostedJobs([...postedJobs, data]);
        setTitle("");
        setDescription("");
        setBudget("");
        setLocation("");
        setMobile(""); // Reset mobile number
        setImage(null);
      })
      .catch((error) => console.error("Error posting job:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setPostedJobs(postedJobs.filter(job => job.id !== id));
        })
        .catch((error) => console.error("Error deleting job:", error));
    }
  };

  return (
    <>
      <Navbar />
      <div className="post-job-container">
        {/* Display posted jobs first */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold">Your Posted Jobs</h2>
          <div className="grid">
            {postedJobs.map((job) => (
              <div key={job.id} className="job-tile">
                <h2>{job.title}</h2>
                <p className="text-gray-600">{job.description}</p>
                <p className="text-green-600 font-semibold">Budget: {job.budget}</p>
                <p>📍 {job.location}</p>
                <p>Posted by: {job.postedBy}</p>
                <p>📅 {job.date}</p>
                {job.image && <img src={`http://localhost:5000${job.image}`} alt={job.title} />}
                <button
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Post a Job form at the end */}
        <div className="mt-10">
          <h1 className="post-job-title">Post a Job</h1>
          <form onSubmit={handleSubmit} className="post-job-form">
            <input
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Budget (in ₹)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">
              Post Job
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostJob;