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
  },
  {
    id: 2,
    name: "Anita Sharma",
    profession: "Carpenter",
    experience: "7 years",
    location: "Mumbai",
    rating: "4.8",
    image: "https://www.shutterstock.com/shutterstock/videos/1103946177/thumb/1.jpg?ip=x480",
  },
  {
    id: 3,
    name: "Amit Verma",
    profession: "Plumber",
    experience: "6 years",
    location: "Bangalore",
    rating: "4.6",
    image: "https://www.shutterstock.com/image-photo/young-plumber-looking-camera-while-260nw-2558371247.jpg",
  },
  // New workers
  {
    id: 4,
    name: "Vikram Yadav",
    profession: "Mason",
    experience: "6 years",
    location: "Jaipur",
    rating: "4.5",
    image: "https://renoquotes.com/_next/image?url=https%3A%2F%2Fsoumissionrenovation.ca%2Fsn_uploads%2Fblog%2Fimages%2FSoumissionRenovation_RenoQuotes_masonry_maconnerie_brick_brique_2.jpg&w=1200&q=75", // Mason image
  },
  {
    id: 5,
    name: "Sunita Nair",
    profession: "Chef",
    experience: "8 years",
    location: "Chennai",
    rating: "4.7",
    image: "https://t3.ftcdn.net/jpg/05/01/41/62/360_F_501416296_bP1aRAl7ktvMZRHAuOtmOWdTcZraS0sP.jpg", // Chef image
  },
  {
    id: 6,
    name: "Arjun Patel",
    profession: "Mechanic",
    experience: "5 years",
    location: "Pune",
    rating: "4.6",
    image: "https://www.shutterstock.com/image-photo/indian-happy-auto-mechanic-blue-260nw-2395865563.jpg", // Mechanic image
  }
];

function WorkerProfile() {
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
          {workers.map((worker) => (
            <Link 
              to={`/worker/${worker.id}`} 
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
                height: "450px" // Box height
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
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WorkerProfile;