import React, { useEffect, useState } from "react";
import axios from "axios";

const NearbyBloodBanks = () => {
  const [bloodbanks, setBloodbanks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Step 1: Ask user for location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await axios.get("http://localhost:5000/api/bloodbanks/nearby", {
              params: {
                lat: latitude,
                lng: longitude,
              },
            });

            setBloodbanks(res.data);
          } catch (error) {
            console.error("Error fetching nearby bloodbanks:", error);
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported.");
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading nearby blood banks...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Nearby Blood Banks</h2>
      {bloodbanks.length > 0 ? (
        <ul className="space-y-2">
          {bloodbanks.map((bank, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <strong>{bank.name}</strong>
              <p>{bank.vicinity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No nearby blood banks found.</p>
      )}
    </div>
  );
};

export default NearbyBloodBanks;
