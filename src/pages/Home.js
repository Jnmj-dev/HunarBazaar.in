import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to HunarBazaar</h1>
      <p className="mt-4 text-lg">Find skilled local workers for your needs!</p>
      <div className="mt-6">
        <Link to="/marketplace" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Browse Jobs
        </Link>
      </div>
    </div>
  );
}

export default Home;
