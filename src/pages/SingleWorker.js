import { useParams, Link } from "react-router-dom";
import { workers } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SingleWorker() {
  const { id } = useParams();
  const worker = workers.find((w) => w.id === parseInt(id));

  if (!worker) {
    return <div className="text-center p-10 text-red-500">Worker Not Found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-xl mx-auto">
        <img src={worker.image} alt={worker.name} className="w-full h-60 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{worker.name}</h1>
        <p className="text-gray-600">{worker.profession}</p>
        <p>Experience: {worker.experience}</p>
        <p>Location: {worker.location}</p>
        <p>⭐ {worker.rating}</p>
        <Link to="/worker-profile" className="block mt-4 text-blue-500">⬅ Back to Workers</Link>
      </div>
      <Footer />
    </>
  );
}

export default SingleWorker;
