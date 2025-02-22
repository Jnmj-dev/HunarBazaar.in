import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-hunar">Hunar</span>
          <span className="brand-bazaar">Bazaar</span>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/marketplace" className="navbar-link">Marketplace</Link>
          <Link to="/worker-profile" className="navbar-link">Workers</Link>
          <Link to="/post-job" className="navbar-link">Post a Job</Link>
        </div>
        <div className="navbar-auth">
          {/* Single Login/Signup Button */}
          <Link to="/signup" className="navbar-button login-signup">
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;