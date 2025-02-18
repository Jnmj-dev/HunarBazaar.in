import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div
          className="home-hero"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?work,construction')" }}
        >
          <div className="home-hero-overlay">
            <h1 className="home-hero-title">Find Skilled Workers Easily!</h1>
            <p className="home-hero-subtitle">Post a job and get local professionals to help you.</p>
            <div>
              <Link to="/post-job" className="home-hero-button">
                Post a Job Now
              </Link>
            </div>
          </div>
        </div>

        <div className="home-search-bar">
          <input type="text" placeholder="Search for services..." />
          <div className="search-icon">🔍</div>
        </div>

        <div className="category-cards">
          <div className="category-card">
            <img src="https://source.unsplash.com/50x50/?plumbing" alt="Plumbing" className="category-icon" />
            <p>Plumbing</p>
          </div>
          <div className="category-card">
            <img src="https://source.unsplash.com/50x50/?electrician" alt="Electrician" className="category-icon" />
            <p>Electrician</p>
          </div>
          <div className="category-card">
            <img src="https://source.unsplash.com/50x50/?carpentry" alt="Carpentry" className="category-icon" />
            <p>Carpentry</p>
          </div>
        </div>

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