import { useState } from "react";
import { jobs } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Marketplace() {
  const [bids, setBids] = useState({});
  const [bidAmount, setBidAmount] = useState({});

  const handleInputChange = (jobId, value) => {
    setBidAmount((prev) => ({
      ...prev,
      [jobId]: value,
    }));
  };

  const handleBidSubmit = (jobId) => {
    if (!bidAmount[jobId] || isNaN(bidAmount[jobId])) {
      alert("Please enter a valid bid amount.");
      return;
    }

    setBids((prevBids) => ({
      ...prevBids,
      [jobId]: [...(prevBids[jobId] || []), `₹${bidAmount[jobId]}`],
    }));

    setBidAmount((prev) => ({
      ...prev,
      [jobId]: "",
    }));
  };

  // Define job images for all jobs
  const jobImages = {
    1: "https://www.shutterstock.com/image-vector/broken-cable-vector-isolated-on-600nw-2393358947.jpg",
    2: "https://content.instructables.com/F9V/W31Y/HJKBYGNO/F9VW31YHJKBYGNO.jpg?auto=webp",
    3: "https://www.plumbtimesc.com/wp-content/uploads/2020/01/Signs-That-You-Have-a-Water-Leak-in-Your-Bathroom.jpg",
    4: "https://media.istockphoto.com/id/1386437769/vector/senior-couple-in-trouble-with-car-engine-trouble.jpg?s=612x612&w=is&k=20&c=gniv8_WOyUaqdqcG_z99lyuyvMZUhAY18zvqt9dcZFY=",
    5: "https://static.vecteezy.com/system/resources/previews/005/605/348/non_2x/house-wall-cracks-the-homeowner-was-dissatisfied-with-a-large-crack-in-the-wall-of-the-house-the-old-house-was-in-poor-condition-need-to-repair-illustration-flat-style-cartoon-design-free-vector.jpg",
    6: "https://static.vecteezy.com/system/resources/previews/002/823/654/non_2x/elderly-nursing-flat-illustration-happy-retiree-and-nurse-isolated-cartoon-characters-on-white-background-young-woman-taking-care-of-aged-man-family-support-volunteer-work-design-element-vector.jpg"
  };

  // Create 3 new job objects with full details
  const additionalJobs = [
    { 
      id: 4, 
      title: "Mechanic needed for car repair", 
      description: "My car won't start, possibly a battery or engine issue. Need a mechanic urgently.",
      budget: "₹2000",
      location: "Chennai",
      postedBy: "Arjun Verma",
      date: "15 Feb 2025"
    },
    { 
      id: 5, 
      title: "Mason needed for wall repair", 
      description: "There's a crack in my living room wall. Need a mason to fix it soon.",
      budget: "₹1200",
      location: "Kolkata",
      postedBy: "Priya Sharma",
      date: "14 Feb 2025"
    },
    { 
      id: 6, 
      title: "Nurse needed for home care", 
      description: "Looking for a nurse to assist my elderly father with daily care.",
      budget: "₹2500 per day",
      location: "Hyderabad",
      postedBy: "Ramesh Iyer",
      date: "13 Feb 2025"
    }
  ];

  // Combine existing jobs with new jobs
  const allJobs = [...jobs, ...additionalJobs];

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center">Available Jobs</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {allJobs.map((job) => (
            <div
              key={job.id}
              className="border-2 border-black p-4 rounded-lg shadow-lg flex justify-between items-center min-h-[400px]"
            >
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-2">{job.description}</p>
                <p className="text-green-600 font-semibold mb-2">Budget: {job.budget}</p>
                <p className="mb-2">📍 {job.location}</p>
                <p className="mb-2">Posted by: {job.postedBy}</p>
                <p className="mb-4">📅 {job.date}</p>

                {/* Bidding Section for all jobs */}
                <div className="mt-4">
                  <h3 className="font-semibold">Place a Bid</h3>
                  <input
                    type="number"
                    value={bidAmount[job.id] || ""}
                    placeholder="Your Bid Amount (₹)"
                    className="w-full p-2 border rounded mt-2"
                    onChange={(e) => handleInputChange(job.id, e.target.value)}
                  />
                  <button
                    onClick={() => handleBidSubmit(job.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                  >
                    Submit Bid
                  </button>
                </div>

                {/* Display Bids */}
                {bids[job.id] && bids[job.id].length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Bids Received:</h3>
                    <ul className="text-blue-500">
                      {bids[job.id].map((bid, index) => (
                        <li key={index}>{bid}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Job Image for all jobs */}
              {jobImages[job.id] && (
                <img
                  src={jobImages[job.id]}
                  alt={`Job ${job.id}`}
                  className="w-50 h-48 object-cover border-2 border-black rounded-lg ml-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Marketplace;