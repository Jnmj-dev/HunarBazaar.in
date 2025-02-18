import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          HunarBazaar
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/marketplace" className="navbar-link">Marketplace</Link>
          <Link to="/worker-profile" className="navbar-link">Workers</Link>
          <Link to="/post-job" className="navbar-button">Post a Job</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;