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

        {/* Featured Services */}
        <div className="featured-services">
          <h2 className="featured-services-title">Featured Services</h2>
          <div className="featured-services-list">
            <div className="featured-service">
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/20/40/cleaning-service-concept-cheerful-cartoon-vector-25532040.jpg"
                alt="Home Cleaning"
                className="featured-service-icon"
              />
              <h3>Home Cleaning</h3>
              <p>Professional home cleaning services to keep your house spotless.</p>
            </div>
            <div className="featured-service">
              <img
                src="https://c8.alamy.com/compfr/fw3dnr/illustration-cartoon-jardinier-fw3dnr.jpg"
                alt="Gardening"
                className="featured-service-icon"
              />
              <h3>Gardening</h3>
              <p>Expert gardening services to maintain your beautiful garden.</p>
            </div>
            <div className="featured-service">
              <img
                src="https://static.vecteezy.com/system/resources/previews/015/412/180/non_2x/painter-man-painting-house-wall-with-roller-brush-worker-guy-using-paint-roller-and-paint-cans-decorator-job-interior-renovation-service-flat-character-illustration-vector.jpg"
                alt="Painting"
                className="featured-service-icon"
              />
              <h3>Painting</h3>
              <p>High-quality painting services for your home or office.</p>
            </div>
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
            <p className="category-description">
              Reliable plumbing services to fix leaks, install fixtures, and maintain your water systems.
            </p>
          </div>
          <div className="category-card">
            <img
              src="https://thumbs.dreamstime.com/z/engineer-man-working-breaker-fuse-box-electrician-electrical-service-panel-cabinet-electric-meter-switch-board-wiring-192362152.jpg?w=360"
              alt="Electrician"
              className="category-icon"
            />
            <p className="category-title">Electrician</p>
            <p className="category-description">
              Expert electrical services for wiring, repairs, and installations to keep your home safe and powered.
            </p>
          </div>
          <div className="category-card">
            <img
              src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-carpenter-clipart-work-in-hand-carpenter-cartoon-vector-png-image_6809448.png"
              alt="Carpentry"
              className="category-icon"
            />
            <p className="category-title">Carpentry</p>
            <p className="category-description">
              Skilled carpentry services for custom furniture, repairs, and home renovations.
            </p>
          </div>
        </div> 

 {/* Call to Action */}
 <div className="call-to-action">
          <h2 className="call-to-action-title">Ready to Get Started?</h2>
          <Link to="/post-job" className="call-to-action-button">
            Post a Job Now
          </Link>

        </div>


        {/* Thin Line */}
        <div className="thin-line"></div>

        {/* Why Use HunarBazaar? */}
        <div className="why-use-hunarbazaar">
          <h2 className="why-use-title">Why Choose HunarBazaar?</h2>
          <p className="why-use-description">
            HunarBazaar is your go-to platform for connecting with skilled local workers like carpenters, electricians, plumbers, and more. With features like worker profiles, instant booking, location-based search, and secure payments, we make it easy to find and hire trusted professionals. Whether you need home repairs, renovations, or specialized services, HunarBazaar ensures quality, convenience, and transparency every step of the way.
          </p>
        </div>

        {/* Thin Line */}
        <div className="thin-line"></div>

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

      </div>
      <Footer />
    </>
  );
}

export default Home;