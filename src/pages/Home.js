import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?work,construction')" }}>
          <div className="bg-black/50 p-10 rounded-lg">
            <h1 className="text-5xl font-bold text-white">Find Skilled Workers Easily!</h1>
            <p className="text-lg text-gray-200 mt-4">Post a job and get local professionals to help you.</p>
            <div className="mt-6">
              <Link to="/post-job" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
                Post a Job Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;