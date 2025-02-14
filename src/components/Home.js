import React from 'react';

const Home = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    <div className="text-2xl font-bold text-blue-600">HunarBazaar</div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Services</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
    <div>
      <a href="/login" className="text-gray-700 hover:text-blue-600 px-4 py-2">Login</a>
      <a href="/signup" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Signup</a>
    </div>
  </div>
</header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Skilled Workers Near You</h1>
          <p className="text-gray-600 mb-8">Book carpenters, electricians, plumbers, and more with just a click!</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter your location"
              className="w-1/3 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700">Search</button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {['Electricians', 'Carpenters', 'Plumbers', 'Caterers'].map((service, index) => (
            <div key={index.js} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              <p className="text-gray-600 mt-2">Hire skilled {service.toLowerCase()} for your needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
            {['Search', 'Book', 'Pay', 'Review'].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold text-gray-800">{step}</h3>
                <p className="text-gray-600 mt-2">Easily {step.toLowerCase()} skilled workers.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 HunarBazaar. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;