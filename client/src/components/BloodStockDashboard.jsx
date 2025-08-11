import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const BloodStockDashboard = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUnit, setNewUnit] = useState({ bloodType: '', expiryDate: '' });

  const { user } = useUser();
  const hospitalUser = user?.unsafeMetadata?.role === 'hospital';
  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const lowStockThreshold = 5;

  // Fetch stock data
  const fetchBloodStock = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/bloodstock');
      setStockData(res.data);
    } catch (err) {
      setError('Failed to fetch blood stock data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBloodStock();
    const interval = setInterval(fetchBloodStock, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleAddUnit = async (e) => {
    e.preventDefault();
    if (!newUnit.bloodType || !newUnit.expiryDate) {
      alert('Please fill in both fields.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/bloodstock/add', newUnit);
      setNewUnit({ bloodType: '', expiryDate: '' });
      fetchBloodStock();
    } catch (err) {
      alert('Failed to add blood unit.');
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar (same as UserDashboard) */}
      <aside className="w-64 text-white flex flex-col p-4 shadow-lg">
        <Link to="/" className="text-3xl font-mono font-bold mb-6"> Blood<span className="text-red-600">.Stream</span></Link>
        <nav className="flex flex-col gap-4 text-sm">
          <Link to="/userdashboard" className="hover:bg-sky-900/40 p-2 rounded">Dashboard</Link>
          <Link to="#" className="bg-sky-900/40 p-2 rounded">Blood Stock</Link>
          <Link to="#" className="hover:bg-sky-900/40 p-2 rounded">Donors</Link>
          <Link to="#" className="hover:bg-sky-900/40 p-2 rounded">Requests</Link>
        </nav>
        <div className="mt-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </aside>

      <main className="flex-1 overflow-auto flex flex-col bg-sky-950/50">
        {/* Top Navbar */}
        <header className="mt-4 mx-2 rounded-full border border-blue-700 bg-gray-900/80 text-white h-16 shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">User Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">Welcome, {user?.fullName || "User"}</span>
            <UserButton afterSignOutUrl="/"/>
          </div>
        </header>
        {/* Main Content */}
        <h1 className="text-3xl p-6 font-bold mb-6">Blood Stock Management</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Low Stock Alerts */}
        {bloodTypes.filter(
          type => {
            const stock = stockData.find(item => item._id === type);
            return !stock || stock.count < lowStockThreshold;
          }
        ).length > 0 && (
          <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500">
            <h2 className="font-bold text-yellow-700 mb-2">Low Stock Alerts!</h2>
            {bloodTypes.filter(type => {
              const stock = stockData.find(item => item._id === type);
              return !stock || stock.count < lowStockThreshold;
            }).map(type => (
              <p key={type} className="text-yellow-800">
                ⚠️ The stock for <strong>{type}</strong> is critically low. Current count:{" "}
                {stockData.find(item => item._id === type)?.count || 0}
              </p>
            ))}
          </div>
        )}

        {/* Stock Data Table */}
        <table className="min-w-full bg-white shadow-md rounded mb-6">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Blood Type</th>
              <th className="p-3">Available Units</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map(({ _id, count }) => (
              <tr key={_id} className="border-b">
                <td className="p-3">{_id}</td>
                <td className="p-3">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Blood Unit Form (Hospitals only) */}
        {hospitalUser && (
          <form onSubmit={handleAddUnit} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Add New Blood Unit</h2>
            <div className="flex gap-4">
              <select
                value={newUnit.bloodType}
                onChange={(e) => setNewUnit({ ...newUnit, bloodType: e.target.value })}
                className="border p-2 rounded w-1/2"
              >
                <option value="">Select Blood Type</option>
                {bloodTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                type="date"
                value={newUnit.expiryDate}
                onChange={(e) => setNewUnit({ ...newUnit, expiryDate: e.target.value })}
                className="border p-2 rounded w-1/2"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Add Unit
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default BloodStockDashboard;
