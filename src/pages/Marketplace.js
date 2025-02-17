import { jobs } from "../data";

function Marketplace() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Available Jobs</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-green-600 font-semibold">Budget: {job.budget}</p>
            <p>📍 {job.location}</p>
            <p>Posted by: {job.postedBy}</p>
            <p>📅 {job.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
