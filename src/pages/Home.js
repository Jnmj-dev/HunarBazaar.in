import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Hero Section */}
        <div className="home-hero">
          <h1 className="home-hero-title">Find Skilled Workers Easily!</h1>
        </div>

        {/* Search Bars */}
        <div className="search-bars-container">
          <div className="home-search-bar">
            <input type="text" placeholder="Search for services..." />
            <div className="search-icon">🔍</div>
          </div>
          <div className="home-search-bar location-search-bar">
            <input type="text" placeholder="Choose your location" />
            <div className="search-icon">📍</div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="category-cards">
          <div className="category-card">
            <img
              src="https://thumbs.dreamstime.com/z/happy-plumber-16841982.jpg"
              alt="Plumbing"
              className="category-icon"
            />
            <p className="category-title">Plumbing</p>
          </div>
          <div className="category-card">
            <img
              src="https://thumbs.dreamstime.com/z/engineer-man-working-breaker-fuse-box-electrician-electrical-service-panel-cabinet-electric-meter-switch-board-wiring-192362152.jpg?w=360"
              alt="Electrician"
              className="category-icon"
            />
            <p className="category-title">Electrician</p>
          </div>
          <div className="category-card">
            <img
              src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-carpenter-clipart-work-in-hand-carpenter-cartoon-vector-png-image_6809448.png"
              alt="Carpentry"
              className="category-icon"
            />
            <p className="category-title">Carpentry</p>
          </div>
        </div>

        {/* Featured Services */}
        <div className="featured-services">
          <h2 className="featured-services-title">Featured Services</h2>
          <div className="featured-services-list">
            <div className="featured-service">
              <h3>Home Cleaning</h3>
              <p>Professional home cleaning services to keep your house spotless.</p>
            </div>
            <div className="featured-service">
              <h3>Gardening</h3>
              <p>Expert gardening services to maintain your beautiful garden.</p>
            </div>
            <div className="featured-service">
              <h3>Painting</h3>
              <p>High-quality painting services for your home or office.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <div className="testimonial">
            <p>"HunarBazaar helped me find the best electrician for my home. Highly recommend!"</p>
            <p className="testimonial-author">- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"The platform is easy to use and I found a great plumber in no time."</p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="call-to-action">
          <h2 className="call-to-action-title">Ready to Get Started?</h2>
          <Link to="/post-job" className="call-to-action-button">
            Post a Job Now
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;