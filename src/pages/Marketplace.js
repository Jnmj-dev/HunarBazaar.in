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
    if (!bidAmount[jobId] || isNaN(bidAmount[jobId]) || bidAmount[jobId] <= 0) {
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

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center">Available Jobs</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-green-600 font-semibold">Budget: {job.budget}</p>
              <p>📍 {job.location}</p>
              <p>Posted by: {job.postedBy}</p>
              <p>📅 {job.date}</p>

              {/* Bidding Section */}
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Marketplace;
