import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet marker fix
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Helper component to programmatically move the map
const RecenterMap = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 13);
    }
  }, [coords, map]);
  return null;
};

const NearbyBloodBanks = () => {
  const [bloodbanks, setBloodbanks] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [mapLocation, setMapLocation] = useState(null); // For manual location search
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blood banks based on coordinates
  const fetchBloodBanks = async (latitude, longitude) => {
    try {
      const res = await axios.get("http://localhost:5000/api/bloodbanks/nearby", {
        params: { lat: latitude, lng: longitude },
      });
      setBloodbanks(res.data);
    } catch (err) {
      console.error("Error fetching bloodbanks:", err);
      setError("Unable to fetch blood banks.");
    }
  };

  // Initial load: get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setMapLocation([latitude, longitude]);
          await fetchBloodBanks(latitude, longitude);
          setLoading(false);
        },
        (geoError) => {
          setLoading(false);
          if (geoError.code === geoError.PERMISSION_DENIED) {
            setError("Location access denied.");
          } else {
            setError("Location not available.");
          }
        }
      );
    } else {
      setLoading(false);
      setError("Geolocation not supported.");
    }
  }, []);

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          searchInput
        )}&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const coords = [parseFloat(lat), parseFloat(lon)];
        setMapLocation(coords);
        await fetchBloodBanks(lat, lon);
      } else {
        alert("Location not found. Please try another place.");
      }
    } catch (err) {
      console.error("Search error:", err);
      alert("Failed to search location.");
    }
  };

  const handleUseCurrent = () => {
    if (userLocation) {
      setMapLocation(userLocation);
      fetchBloodBanks(userLocation[0], userLocation[1]);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg">Loading nearby blood banks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-400 p-4">
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">Nearby Blood Banks</h2>

      {mapLocation && (
        <div className="w-full max-w-5xl h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-700 mb-6">
          <MapContainer
            center={mapLocation}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            />

            <RecenterMap coords={mapLocation} />

            {/* Marker for current map center */}
            <Marker position={mapLocation}>
              <Popup>Search Location</Popup>
            </Marker>

            {/* Blood bank markers */}
            {bloodbanks.map((bank, index) => (
              <Marker key={index} position={[bank.latitude, bank.longitude]}>
                <Popup>
                  <strong>{bank.name}</strong><br />
                  {bank.vicinity}<br />
                  {bank.contact && bank.contact !== "N/A" && (
                    <>
                      <b>Contact:</b> {bank.contact}<br />
                    </>
                  )}
                  {bank.category && bank.category !== "N/A" && (
                    <>
                      <b>Category:</b> {bank.category}<br />
                    </>
                  )}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* Search and Use Current Location */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-xl"
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter city, area or pin code..."
          className="flex-grow px-4 py-2 rounded-md text-black focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleUseCurrent}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition"
        >
          Use Current
        </button>
      </form>
    </div>
  );
};

export default NearbyBloodBanks;
