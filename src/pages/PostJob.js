import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Initial jobs data with 10 jobs (6 original + 4 new)
const initialJobs = [
  {
    id: 1,
    title: "Electrician needed for wiring",
    description: "Need an electrician to fix wiring issues in my home.",
    budget: "₹1500",
    location: "New Delhi",
    postedBy: "Rahul Sharma",
    date: "12 Feb 2025",
  },
  {
    id: 2,
    title: "Plumber needed for pipe repair",
    description: "There's a leak in my bathroom pipes. Need a plumber urgently.",
    budget: "₹1200",
    location: "Mumbai",
    postedBy: "Priya Singh",
    date: "13 Feb 2025",
  },
  {
    id: 3,
    title: "Carpenter needed for furniture repair",
    description: "My wooden chair is broken. Need a carpenter to fix it.",
    budget: "₹1000",
    location: "Bangalore",
    postedBy: "Amit Patel",
    date: "14 Feb 2025",
  },
  {
    id: 4,
    title: "Mechanic needed for bike repair",
    description: "My bike’s engine is making strange noises. Need a mechanic to check and fix it.",
    budget: "₹1800",
    location: "Pune",
    postedBy: "Rohan Deshmukh",
    date: "16 Feb 2025",
  },
  {
    id: 5,
    title: "Mason needed for floor tiling",
    description: "Need a mason to install new tiles in my kitchen. Looking for quality work.",
    budget: "₹2500",
    location: "Hyderabad",
    postedBy: "Kavita Reddy",
    date: "15 Feb 2025",
  },
  {
    id: 6,
    title: "Chef needed for small party",
    description: "Hosting a family gathering. Need a chef to cook North Indian dishes for 10 people.",
    budget: "₹3000",
    location: "Jaipur",
    postedBy: "Manish Gupta",
    date: "14 Feb 2025",
  },
  // New jobs
  {
    id: 7,
    title: "Painter needed for house walls",
    description: "Looking for a painter to repaint my living room and bedroom.",
    budget: "₹3500",
    location: "Kolkata",
    postedBy: "Sneha Banerjee",
    date: "19 Feb 2025",
  },
  {
    id: 8,
    title: "Wedding photographer needed",
    description: "Looking for a professional photographer to cover my wedding ceremony.",
    budget: "₹15000",
    location: "Bengaluru",
    postedBy: "Vikram Shetty",
    date: "20 Feb 2025",
  },
  {
    id: 9,
    title: "Tutor needed for math coaching",
    description: "Need a tutor to help my son with class 10 math preparation.",
    budget: "₹2500",
    location: "Lucknow",
    postedBy: "Neha Tiwari",
    date: "21 Feb 2025",
  },
  {
    id: 10,
    title: "Tailor needed for dress stitching",
    description: "Need a tailor to stitch a custom blouse and lehenga for a wedding function.",
    budget: "₹3000",
    location: "Chandigarh",
    postedBy: "Simran Kaur",
    date: "22 Feb 2025",
  },
];

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [postedJobs, setPostedJobs] = useState(initialJobs);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: postedJobs.length + 1,
      title,
      description,
      budget: `₹${budget}`,
      location,
      postedBy: "You",
      date: new Date().toLocaleDateString(),
    };
    setPostedJobs([...postedJobs, newJob]); // Update the state with the new job
    setTitle("");
    setDescription("");
    setBudget("");
    setLocation("");
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