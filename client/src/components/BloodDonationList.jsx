import React, { useEffect, useState } from "react";
import axios from "axios";

const BloodDonationList = () => {
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all camps from backend
    const fetchCamps = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/camps");
        setCamps(res.data);
      } catch (error) {
        console.error("Error fetching camps:", error);
        setCamps([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCamps();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 py-12 px-4 flex flex-col">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-8 text-center tracking-wider">
          Upcoming Blood Donation Camps
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-400"></div>
          </div>
        ) : camps.length === 0 ? (
          <p className="text-center text-gray-400">No upcoming camps found.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {camps.map((camp) => (
              <div
                key={camp._id || camp.id}
                className="bg-gray-800 bg-opacity-90 border border-blue-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-blue-300">{camp.campName}</h3>
                  <span className="text-xs text-gray-400 bg-blue-900 px-2 py-1 rounded">
                    {new Date(camp.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="inline-block text-sm text-blue-200">Organized by:</span>
                  <span className="ml-2 text-white font-semibold">{camp.organizerName}</span>
                </div>
                <div className="mb-2 flex flex-wrap items-center text-gray-300">
                  <svg className="h-5 w-5 mr-1 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 12.414a4 4 0 00-5.656 0l-1.414 1.414a8 8 0 1011.314 2.829z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {camp.location}
                </div>
                <div className="mb-2 text-sm text-gray-400">Contact: <span className="text-blue-200">{camp.contactNumber}</span></div>
                <div className="text-gray-300 mt-2 italic">{camp.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BloodDonationList;
