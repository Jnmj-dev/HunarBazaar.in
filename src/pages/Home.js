import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [currentIndexSliding, setCurrentIndexSliding] = useState(0);
  const [currentIndexStationary, setCurrentIndexStationary] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Array of all services
  const allServices = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Mechanic",
    "Mason",
    "Painter",
    "Driver",
    "Cook",
    "Nurse",
    "Cleaner",
    "Waiter",
    "Security Guard",
    "Delivery Driver",
    "Housekeeper",
    "Janitor",
    "Gardener",
    "Barber",
    "Hairdresser",
    "Laundry Worker",
    "Construction Worker",
    "Dishwasher",
    "Factory Worker",
    "Tailor",
    "Porter",
    "Butcher",
    "Baker",
    "Bus Driver",
    "Garbage Collector",
    "Street Sweeper",
    "Parking Attendant",
    "Paramedic",
    "Hotel Housekeeper",
    "Caregiver",
    "Farm Worker",
    "Fisherman",
    "Car Washer",
    "Call Center Agent",
    "Mover",
    "Handyman",
    "Pest Control Worker",
  ];

  // Array of all locations
  const allLocations = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Vadodara",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Meerut",
    "Rajkot",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Allahabad",
    "Gwalior",
    "Ranchi",
    "Jabalpur",
    "Coimbatore",
    "Vijayawada",
    "Madurai",
    "Guwahati",
    "Chandigarh",
    "Hubballi-Dharwad",
    "Thiruvananthapuram",
    "Jodhpur",
  ];

  // Filter services based on search query
  const filteredServices = allServices.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter locations based on search query
  const filteredLocations = allLocations.filter((location) =>
    location.toLowerCase().includes(locationQuery.toLowerCase())
  );

  // Handle service search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  // Handle location search input change
  const handleLocationChange = (e) => {
    setLocationQuery(e.target.value);
    setIsLocationDropdownOpen(true);
  };

  // Handle selecting a service from the dropdown
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSearchQuery(service);
    setIsDropdownOpen(false);
  };

  // Handle selecting a location from the dropdown
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationQuery(location);
    setIsLocationDropdownOpen(false);
  };

  // Handle clearing the selected service
  const clearSelectedService = () => {
    setSelectedService("");
    setSearchQuery("");
  };

  // Handle clearing the selected location
  const clearSelectedLocation = () => {
    setSelectedLocation("");
    setLocationQuery("");
  };

  // Handle clicking outside the dropdown to close it
  const handleClickOutside = (e) => {
    if (!e.target.closest(".home-search-bar")) {
      setIsDropdownOpen(false);
    }
    if (!e.target.closest(".location-search-bar")) {
      setIsLocationDropdownOpen(false);
    }
  };

  // Attach click outside listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Array of featured services for the sliding section
  const slidingServices = [
    {
      title: "Home Cleaning",
      description: "Professional home cleaning services to keep your house spotless.",
      image: "https://cdn1.vectorstock.com/i/1000x1000/20/40/cleaning-service-concept-cheerful-cartoon-vector-25532040.jpg",
    },
    {
      title: "Gardening",
      description: "Expert gardening services to maintain your beautiful garden.",
      image: "https://c8.alamy.com/compfr/fw3dnr/illustration-cartoon-jardinier-fw3dnr.jpg",
    },
    {
      title: "Painting",
      description: "High-quality painting services for your home or office.",
      image: "https://static.vecteezy.com/system/resources/previews/015/412/180/non_2x/painter-man-painting-house-wall-with-roller-brush-worker-guy-using-paint-roller-and-paint-cans-decorator-job-interior-renovation-service-flat-character-illustration-vector.jpg",
    },
    {
      title: "Masonry Work",
      description: "Skilled masonry services for wall repairs, tiling, and construction needs.",
      image: "https://www.shutterstock.com/image-illustration/cute-mason-building-wall-community-600w-2049564860.jpg",
    },
    {
      title: "Auto Repair",
      description: "Professional mechanic services for car and bike repairs, maintenance, and check-ups.",
      image: "https://www.shutterstock.com/image-vector/auto-mechanic-opened-hood-repairs-600nw-2094192772.jpg",
    },
  ];

  // Array of stationary services for the static section
  const stationaryServices = [
    {
      title: "Plumbing",
      description: "Reliable plumbing services to fix leaks, install fixtures, and maintain your water systems.",
      image: "https://thumbs.dreamstime.com/z/happy-plumber-16841982.jpg",
    },
    {
      title: "Electrician",
      description: "Expert electrical services for wiring, repairs, and installations to keep your home safe and powered.",
      image: "https://thumbs.dreamstime.com/z/engineer-man-working-breaker-fuse-box-electrician-electrical-service-panel-cabinet-electric-meter-switch-board-wiring-192362152.jpg?w=360",
    },
    {
      title: "Carpentry",
      description: "Skilled carpentry services for custom furniture, repairs, and home renovations.",
      image: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-carpenter-clipart-work-in-hand-carpenter-cartoon-vector-png-image_6809448.png",
    },
    {
      title: "Nursing Care",
      description: "Compassionate nursing services for home care, medical assistance, and patient support.",
      image: "https://img.pikbest.com/png-images/qiantu/cartoon-nurse-taking-care-of-patients_2520732.png!sw800",
    },
    {
      title: "Culinary Services",
      description: "Professional chef services for delicious home-cooked meals, events, and special occasions.",
      image: "https://img.freepik.com/free-vector/restaurant-kitchen-chef-character-cartoon-vector-illustration-chief-cook-worker-people-set-professional-hospitality-service-culinary-staff-apron-with-soup-laddle-cloche-plate-design_107791-24291.jpg",
    },
  ];

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
          {/* Service Search Bar */}
          <div className="home-search-bar">
            <input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsDropdownOpen(true)}
            />
            {selectedService && (
              <button className="clear-button" onClick={clearSelectedService}>
                ✕
              </button>
            )}
            <div className="search-icon">🔍</div>
            {/* Dropdown Menu for Services */}
            {isDropdownOpen && (
              <div className="services-dropdown">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location Search Bar */}
          <div className="home-search-bar location-search-bar">
            <input
              type="text"
              placeholder="Choose your location"
              value={locationQuery}
              onChange={handleLocationChange}
              onFocus={() => setIsLocationDropdownOpen(true)}
            />
            {selectedLocation && (
              <button className="clear-button" onClick={clearSelectedLocation}>
                ✕
              </button>
            )}
            <div className="search-icon">📍</div>
            {/* Dropdown Menu for Locations */}
            {isLocationDropdownOpen && (
              <div className="services-dropdown">
                {filteredLocations.map((location, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
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
                transform: `translateX(${-currentIndexSliding * (100 / 3)}%)`,
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
                transform: `translateX(${-currentIndexStationary * (100 / 3)}%)`,
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