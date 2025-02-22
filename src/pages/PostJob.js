import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => setPostedJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      title,
      description,
      budget: `₹${budget}`,
      location,
      postedBy: "You",
    };

    fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostedJobs([...postedJobs, data]);
        setTitle("");
        setDescription("");
        setBudget("");
        setLocation("");
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
      <div className="p-10">
        {/* Display posted jobs first */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold">Your Posted Jobs</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {postedJobs.map((job) => (
              <div key={job.id} className="border p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-gray-600">{job.description}</p>
                <p className="text-green-600 font-semibold">Budget: {job.budget}</p>
                <p>📍 {job.location}</p>
                <p>Posted by: {job.postedBy}</p>
                <p>📅 {job.date}</p>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Post a Job form at the end */}
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-center">Post a Job</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6 space-y-4 border p-6 shadow-lg rounded-lg">
            <input
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Budget (in ₹)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full">
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