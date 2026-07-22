import React, { useEffect, useState } from "react";
import api from "../lib/api";
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
      const res = await api.get("/api/bloodbanks/nearby", {
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
      <div className="section-shell flex min-h-screen items-center justify-center">
        <div className="health-card p-8 text-lg">Loading nearby blood banks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-shell flex min-h-screen items-center justify-center p-4">
        <div className="rounded-2xl border border-rose-400/35 bg-rose-500/10 p-6 text-lg text-rose-200">{error}</div>
      </div>
    );
  }

  return (
    <div className="section-shell flex min-h-screen flex-col items-center text-white">
      <h2 className="section-title mb-8 text-center">Nearby Blood Banks</h2>

      {mapLocation && (
        <div className="health-card mb-6 h-[500px] w-full max-w-5xl overflow-hidden rounded-2xl">
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
        className="health-card w-full max-w-3xl gap-3 p-3 sm:flex"
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter city, area or pin code..."
          className="health-input flex-grow"
        />
        <button
          type="submit"
          className="health-btn-primary"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleUseCurrent}
          className="health-btn-ghost"
        >
          Use Current
        </button>
      </form>
    </div>
  );
};

export default NearbyBloodBanks;
