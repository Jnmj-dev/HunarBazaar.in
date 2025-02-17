import { useState } from "react";
import { jobs } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Marketplace() {
  const [bids, setBids] = useState({});

  const handleBidSubmit = (jobId, amount) => {
    setBids((prevBids) => ({
      ...prevBids,
      [jobId]: [...(prevBids[jobId] || []), amount],
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
                  placeholder="Your Bid Amount (₹)"
                  className="w-full p-2 border rounded mt-2"
                  onChange={(e) => handleBidSubmit(job.id, e.target.value)}
                />
              </div>

              {/* Display Bids */}
              {bids[job.id] && (
                <div className="mt-4">
                  <h3 className="font-semibold">Bids Received:</h3>
                  <ul className="text-blue-500">
                    {bids[job.id].map((bid, index) => (
                      <li key={index}>₹{bid}</li>
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
