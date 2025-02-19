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
  }
];

function WorkerProfile() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", padding: "30px 5px" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>Worker Profiles</h1>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", // Slightly smaller width
            gap: "10px", // Reduced space between boxes
            marginTop: "15px" 
          }}
        >
          {workers.map((worker) => (
            <Link 
              to={`/worker/${worker.id}`} 
              key={worker.id} 
              style={{ 
                border: "2px solid #ccc", 
                padding: "15px", // Reduced padding to shrink box size
                borderRadius: "10px", 
                backgroundColor: "white", 
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)", 
                textAlign: "center", 
                textDecoration: "none", 
                color: "black", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                height: "440px", // Reduced height by ~10px
                maxWidth: "94%", // Slightly smaller width
                margin: "auto"
              }}
            >
              <img 
                src={worker.image} 
                alt={worker.name} 
                style={{ 
                  width: "100%", 
                  height: "240px", // Reduced image height slightly
                  objectFit: "cover", 
                  borderRadius: "10px" 
                }} 
              />
              <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", marginTop: "8px" }}>{worker.name}</h2>
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
