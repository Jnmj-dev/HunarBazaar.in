import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const workers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    profession: "Electrician",
    experience: "5 years",
    location: "New Delhi",
    rating: "4.7",
    image: "https://st2.depositphotos.com/1005682/12186/i/950/depositphotos_121864734-stock-photo-indian-male-electrician.jpg",
    reviews: [],
  },
  {
    id: 2,
    name: "Anita Sharma",
    profession: "Carpenter",
    experience: "7 years",
    location: "Mumbai",
    rating: "4.8",
    image: "https://www.shutterstock.com/shutterstock/videos/1103946177/thumb/1.jpg?ip=x480",
    reviews: [],
  },
  {
    id: 3,
    name: "Amit Verma",
    profession: "Plumber",
    experience: "6 years",
    location: "Bangalore",
    rating: "4.6",
    image: "https://www.shutterstock.com/image-photo/young-plumber-looking-camera-while-260nw-2558371247.jpg",
    reviews: [],
  },
  {
    id: 4,
    name: "Vikram Yadav",
    profession: "Mason",
    experience: "6 years",
    location: "Jaipur",
    rating: "4.5",
    image: "https://media.istockphoto.com/id/610442626/photo/master-mason.jpg?s=612x612&w=0&k=20&c=8JlF8evy9RJRSup-WM6_G1XJh0Hd3tWAPUoLYERyoqk=",
    reviews: [],
  },
  {
    id: 5,
    name: "Sunita Nair",
    profession: "Chef",
    experience: "8 years",
    location: "Chennai",
    rating: "4.7",
    image: "https://t3.ftcdn.net/jpg/05/01/41/62/360_F_501416296_bP1aRAl7ktvMZRHAuOtmOWdTcZraS0sP.jpg",
    reviews: [],
  },
  {
    id: 6,
    name: "Arjun Patel",
    profession: "Mechanic",
    experience: "5 years",
    location: "Pune",
    rating: "4.6",
    image: "https://www.shutterstock.com/image-photo/indian-happy-auto-mechanic-blue-260nw-2395865563.jpg",
    reviews: [],
  },
];

function WorkerProfile() {
  const [workersData, setWorkersData] = useState(workers);

  // Function to add a review to a worker
  const addReview = (workerId, newReview) => {
    const updatedWorkers = workersData.map((worker) =>
      worker.id === workerId
        ? { ...worker, reviews: [...worker.reviews, newReview] }
        : worker
    );
    setWorkersData(updatedWorkers);
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", padding: "40px 10px" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>Worker Profiles</h1>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
          gap: "30px", // Space between boxes
          marginTop: "20px",
          justifyContent: "center",
          maxWidth: "1200px", // Limit width for better alignment
          margin: "0 auto" // Center the grid
        }}>
          {workersData.map((worker) => (
            <div 
              key={worker.id} 
              style={{ 
                border: "2px solid #ccc", 
                padding: "20px", 
                borderRadius: "10px", 
                backgroundColor: "white", 
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", 
                textAlign: "center", 
                textDecoration: "none", 
                color: "black", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                width: "350px", // Box width
                height: "auto" // Box height
              }}
            >
              <img 
                src={worker.image} 
                alt={worker.name} 
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  borderRadius: "10px" 
                }} 
              />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "10px" }}>{worker.name}</h2>
              <p style={{ color: "gray", fontStyle: "italic" }}>{worker.profession}</p>
              <p>Experience: {worker.experience}</p>
              <p>Location: {worker.location}</p>
              <p>⭐ {worker.rating}</p>

              {/* Display Reviews */}
              <div style={{ marginTop: "20px", width: "100%" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Reviews</h3>
                {worker.reviews.length > 0 ? (
                  worker.reviews.map((review, index) => (
                    <div key={index} style={{ marginTop: "10px", textAlign: "left" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ color: "gold" }}>{"★".repeat(review.rating)}</span>
                        <span style={{ color: "gray", marginLeft: "5px" }}>{review.rating}/5</span>
                      </div>
                      <p style={{ color: "gray" }}>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "gray" }}>No reviews yet.</p>
                )}
              </div>

              {/* Add Review Form */}
              <ReviewForm
                workerId={worker.id}
                onAddReview={addReview}
              />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

// ReviewForm Component
function ReviewForm({ workerId, onAddReview }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim()) {
      alert("Please provide a rating and a comment.");
      return;
    }

    const newReview = {
      rating,
      comment,
    };

    onAddReview(workerId, newReview);
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px", width: "100%" }}>
      <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Leave a Review</h3>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{ width: "100%", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value={0}>Select a rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "100%", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Write your review..."
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
        }}
      >
        Submit Review
      </button>
    </form>
  );
}

export default WorkerProfile;