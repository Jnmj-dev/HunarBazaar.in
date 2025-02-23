import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm"; // Import ReviewForm component
import "./Home.css";

function Home() {
  const [currentIndexSliding, setCurrentIndexSliding] = useState(0);
  const [currentIndexStationary, setCurrentIndexStationary] = useState(0);

  // Array of featured services for the sliding section
  const [slidingServices, setSlidingServices] = useState([
    {
      title: "Home Cleaning",
      description: "Professional home cleaning services to keep your house spotless.",
      image: "https://cdn1.vectorstock.com/i/1000x1000/20/40/cleaning-service-concept-cheerful-cartoon-vector-25532040.jpg",
      reviews: [],
    },
    {
      title: "Gardening",
      description: "Expert gardening services to maintain your beautiful garden.",
      image: "https://c8.alamy.com/compfr/fw3dnr/illustration-cartoon-jardinier-fw3dnr.jpg",
      reviews: [],
    },
    {
      title: "Painting",
      description: "High-quality painting services for your home or office.",
      image: "https://static.vecteezy.com/system/resources/previews/015/412/180/non_2x/painter-man-painting-house-wall-with-roller-brush-worker-guy-using-paint-roller-and-paint-cans-decorator-job-interior-renovation-service-flat-character-illustration-vector.jpg",
      reviews: [],
    },
    {
      title: "Masonry Work",
      description: "Skilled masonry services for wall repairs, tiling, and construction needs.",
      image: "https://www.shutterstock.com/image-illustration/cute-mason-building-wall-community-600w-2049564860.jpg",
      reviews: [],
    },
    {
      title: "Auto Repair",
      description: "Professional mechanic services for car and bike repairs, maintenance, and check-ups.",
      image: "https://www.shutterstock.com/image-vector/auto-mechanic-opened-hood-repairs-600nw-2094192772.jpg",
      reviews: [],
    },
  ]);

  // Array of stationary services for the static section
  const [stationaryServices, setStationaryServices] = useState([
    {
      title: "Plumbing",
      description: "Reliable plumbing services to fix leaks, install fixtures, and maintain your water systems.",
      image: "https://thumbs.dreamstime.com/z/happy-plumber-16841982.jpg",
      reviews: [],
    },
    {
      title: "Electrician",
      description: "Expert electrical services for wiring, repairs, and installations to keep your home safe and powered.",
      image: "https://thumbs.dreamstime.com/z/engineer-man-working-breaker-fuse-box-electrician-electrical-service-panel-cabinet-electric-meter-switch-board-wiring-192362152.jpg?w=360",
      reviews: [],
    },
    {
      title: "Carpentry",
      description: "Skilled carpentry services for custom furniture, repairs, and home renovations.",
      image: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-carpenter-clipart-work-in-hand-carpenter-cartoon-vector-png-image_6809448.png",
      reviews: [],
    },
    {
      title: "Nursing Care",
      description: "Compassionate nursing services for home care, medical assistance, and patient support.",
      image: "https://img.pikbest.com/png-images/qiantu/cartoon-nurse-taking-care-of-patients_2520732.png!sw800",
      reviews: [],
    },
    {
      title: "Culinary Services",
      description: "Professional chef services for delicious home-cooked meals, events, and special occasions.",
      image: "https://img.freepik.com/free-vector/restaurant-kitchen-chef-character-cartoon-vector-illustration-chief-cook-worker-people-set-professional-hospitality-service-culinary-staff-apron-with-soup-laddle-cloche-plate-design_107791-24291.jpg",
      reviews: [],
    },
  ]);

  // Function to handle sliding to the left (for sliding section)
  const slideLeftSliding = () => {
    if (currentIndexSliding > 0) {
      setCurrentIndexSliding((prevIndex) => prevIndex - 1);
    }
  };

  // Function to handle sliding to the right (for sliding section)
  const slideRightSliding = () => {
    if (currentIndexSliding < slidingServices.length - 3) {
      setCurrentIndexSliding((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle sliding to the left (for stationary section)
  const slideLeftStationary = () => {
    if (currentIndexStationary > 0) {
      setCurrentIndexStationary((prevIndex) => prevIndex - 1);
    }
  };

  // Function to handle sliding to the right (for stationary section)
  const slideRightStationary = () => {
    if (currentIndexStationary < stationaryServices.length - 3) {
      setCurrentIndexStationary((prevIndex) => prevIndex + 1);
    }
  };

  // Function to add a review to a service
  const addReview = (serviceTitle, newReview, isSliding) => {
    if (isSliding) {
      const updatedServices = slidingServices.map((service) =>
        service.title === serviceTitle
          ? { ...service, reviews: [...service.reviews, newReview] }
          : service
      );
      setSlidingServices(updatedServices);
    } else {
      const updatedServices = stationaryServices.map((service) =>
        service.title === serviceTitle
          ? { ...service, reviews: [...service.reviews, newReview] }
          : service
      );
      setStationaryServices(updatedServices);
    }
  };

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

        {/* Featured Services (Sliding Section) */}
        <div className="featured-services">
          <h2 className="featured-services-title">Featured Services</h2>
          <div className="featured-services-wrapper">
            {/* Left Slide Button */}
            <button
              className={`slide-button left ${currentIndexSliding === 0 ? "disabled" : ""}`}
              onClick={slideLeftSliding}
              disabled={currentIndexSliding === 0}
            >
              &#10094;
            </button>

            {/* Featured Services List */}
            <div
              className="featured-services-list"
              style={{
                transform: `translateX(${-currentIndexSliding * (100 / 3)}%)`, // Adjust for 3 boxes at a time
              }}
            >
              {slidingServices.map((service, index) => (
                <div className="featured-service" key={index}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="featured-service-icon"
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* Display Reviews */}
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">Reviews</h4>
                    {service.reviews.length > 0 ? (
                      service.reviews.map((review, idx) => (
                        <div key={idx} className="mt-2">
                          <div className="flex items-center">
                            <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                            <span className="text-gray-500 ml-2">{review.rating}/5</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">No reviews yet.</p>
                    )}
                  </div>

                  {/* Add Review Form */}
                  <ReviewForm
                    serviceName={service.title}
                    onAddReview={(serviceName, newReview) =>
                      addReview(serviceName, newReview, true)
                    }
                  />
                </div>
              ))}
            </div>

            {/* Right Slide Button */}
            <button
              className={`slide-button right ${currentIndexSliding >= slidingServices.length - 3 ? "disabled" : ""}`}
              onClick={slideRightSliding}
              disabled={currentIndexSliding >= slidingServices.length - 3}
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* More Services (Stationary Section) */}
        <div className="featured-services">
          <h2 className="featured-services-title">More Services</h2>
          <div className="featured-services-wrapper">
            {/* Left Slide Button */}
            <button
              className={`slide-button left ${currentIndexStationary === 0 ? "disabled" : ""}`}
              onClick={slideLeftStationary}
              disabled={currentIndexStationary === 0}
            >
              &#10094;
            </button>

            {/* Featured Services List */}
            <div
              className="featured-services-list"
              style={{
                transform: `translateX(${-currentIndexStationary * (100 / 3)}%)`, // Adjust for 3 boxes at a time
              }}
            >
              {stationaryServices.map((service, index) => (
                <div className="featured-service" key={index}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="featured-service-icon"
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* Display Reviews */}
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">Reviews</h4>
                    {service.reviews.length > 0 ? (
                      service.reviews.map((review, idx) => (
                        <div key={idx} className="mt-2">
                          <div className="flex items-center">
                            <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                            <span className="text-gray-500 ml-2">{review.rating}/5</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">No reviews yet.</p>
                    )}
                  </div>

                  {/* Add Review Form */}
                  <ReviewForm
                    serviceName={service.title}
                    onAddReview={(serviceName, newReview) =>
                      addReview(serviceName, newReview, false)
                    }
                  />
                </div>
              ))}
            </div>

            {/* Right Slide Button */}
            <button
              className={`slide-button right ${currentIndexStationary >= stationaryServices.length - 3 ? "disabled" : ""}`}
              onClick={slideRightStationary}
              disabled={currentIndexStationary >= stationaryServices.length - 3}
            >
              &#10095;
            </button>
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