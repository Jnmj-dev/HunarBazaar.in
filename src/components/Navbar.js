import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          HunarBazaar
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/marketplace" className="text-white">Marketplace</Link>
          <Link to="/worker-profile" className="text-white">Workers</Link>
          <Link to="/post-job" className="text-white bg-white/20 px-4 py-1 rounded">Post a Job</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
