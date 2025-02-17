import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to HunarBazaar</h1>
        <p className="mt-4 text-lg">Find skilled local workers for your needs!</p>
      </div>
    </>
  );
}

export default Home;
