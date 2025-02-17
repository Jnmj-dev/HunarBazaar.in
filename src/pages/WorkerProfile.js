import { Link } from "react-router-dom";
import { workers } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WorkerProfile() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center">Worker Profiles</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {workers.map((worker) => (
            <Link to={`/worker/${worker.id}`} key={worker.id} className="border p-4 rounded-lg shadow-lg block">
              <img src={worker.image} alt={worker.name} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-xl font-bold mt-2">{worker.name}</h2>
              <p className="text-gray-600">{worker.profession}</p>
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
