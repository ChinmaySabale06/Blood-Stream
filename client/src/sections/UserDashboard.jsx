import React from "react";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const syncUser = async () => {
        try {
          await axios.post("http://localhost:5000/api/save-user", {
            clerkId: user.id,
            email: user.primaryEmailAddress.emailAddress,
            role: user.publicMetadata.role || "hospital",
          });
        } catch (err) {
          console.error("User sync failed:", err);
        }
      };
      syncUser();
    }
  }, [user]);

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 text-white flex flex-col p-4">
        <Link to="/" className="text-3xl font-mono font-bold mb-6"> Blood<span className="text-red-600">.Stream</span></Link>
        <nav className="flex flex-col gap-4 text-sm">
          <a href="#" className="hover:bg-sky-900/40 p-2 rounded">Dashboard</a>
          <Link to="/bloodstock" className="hover:bg-sky-900/40 p-2 rounded">Blood Stocks</Link>
          <a href="#" className="hover:bg-sky-900/40 p-2 rounded">Donor Records</a>
          <a href="#" className="hover:bg-sky-900/40 p-2 rounded">Request Blood</a>
          <a href="#" className="hover:bg-sky-900/40 p-2 rounded">Appointments</a>
          <a href="#" className="hover:bg-sky-900/40 p-2 rounded">Reports</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-sky-950/50">
        {/* Top Navbar */}
        <header className="mt-4 mx-2 rounded-full border border-blue-700 bg-gray-900/80 text-white h-16 shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">User Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">Welcome, {user?.fullName || "User"}</span>
            <UserButton afterSignOutUrl="/"/>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto text-white">
          <h2 className="text-lg font-semibold mb-4">Dashboard Overview</h2>

          {/* Example cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-4 shadow bg-gray-950">
              <h3 className="text-sm text-gray-500">Available Blood Units</h3>
              <p className="text-2xl font-bold text-red-600">0</p>
            </div>
            <div className="rounded-xl p-4 shadow bg-gray-950">
              <h3 className="text-sm text-gray-500">Active Donors</h3>
              <p className="text-2xl font-bold text-blue-600">0</p>
            </div>
            <div className="rounded-xl p-4 shadow bg-gray-950">
              <h3 className="text-sm text-gray-500">Pending Requests</h3>
              <p className="text-2xl font-bold text-yellow-500">0</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
