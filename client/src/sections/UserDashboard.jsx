"use client"

import React from "react"
import { Link } from "react-router-dom"
import { UserButton, useUser } from "@clerk/clerk-react"
import { useEffect } from "react"
import axios from "axios"

const UserDashboard = () => {
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      const syncUser = async () => {
        try {
          await axios.post("http://localhost:5000/api/save-user", {
            clerkId: user.id,
            email: user.primaryEmailAddress.emailAddress,
            role: user.publicMetadata.role || "hospital",
          })
        } catch (err) {
          console.error("User sync failed:", err)
        }
      }
      syncUser()
    }
  }, [user])

  const dashboardStats = [
    { title: "Available Blood Units", value: "0", color: "red", icon: "🩸" },
    { title: "Active Donors", value: "0", color: "blue", icon: "👥" },
    { title: "Pending Requests", value: "0", color: "yellow", icon: "⏳" },
  ]

  const navItems = [
    { name: "Dashboard", href: "#", active: true, icon: "📊" },
    { name: "Blood Stocks", href: "/bloodstock", active: false, icon: "🩸" },
    { name: "Donor Records", href: "#", active: false, icon: "📋" },
    { name: "Request Blood", href: "#", active: false, icon: "🆘" },
    { name: "Appointments", href: "#", active: false, icon: "📅" },
    { name: "Reports", href: "#", active: false, icon: "📈" },
  ]

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-500/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-500/5 rounded-full animate-ping"></div>
      </div>

      {/* Sidebar */}
      <aside className="relative z-10 w-80 backdrop-blur-xl bg-white/10 border-r border-white/20 text-white flex flex-col p-6">
        <Link to="/" className="text-4xl font-mono font-bold mb-8 hover:scale-105 transition-transform duration-300">
          Blood<span className="text-red-400">.Stream</span>
        </Link>

        <nav className="flex flex-col gap-2 text-sm flex-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                item.active
                  ? "bg-blue-500/30 border border-blue-400/50 text-blue-200"
                  : "hover:bg-white/10 border border-transparent hover:border-white/20"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Top Navbar */}
        <header className="m-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl text-white h-20 shadow-2xl flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              User Dashboard
            </h1>
            <p className="text-sm text-gray-300">Manage your blood donation activities</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-300">
              Welcome, <span className="text-blue-300 font-semibold">{user?.fullName || "User"}</span>
            </span>
            <div className="scale-110">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Dashboard Overview
            </h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {dashboardStats.map((stat, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className={`w-3 h-3 rounded-full bg-${stat.color}-400 animate-pulse`}></div>
                  </div>
                  <h3 className="text-sm text-gray-400 mb-2 font-medium">{stat.title}</h3>
                  <p
                    className={`text-4xl font-bold text-${stat.color}-400 group-hover:text-${stat.color}-300 transition-colors duration-300`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Add Blood Stock", icon: "➕", color: "green" },
                  { name: "View Requests", icon: "👀", color: "blue" },
                  { name: "Schedule Drive", icon: "📅", color: "purple" },
                  { name: "Generate Report", icon: "📊", color: "orange" },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`group p-4 bg-${action.color}-500/20 border border-${action.color}-500/30 rounded-xl hover:bg-${action.color}-500/30 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {action.icon}
                    </div>
                    <div className={`text-sm font-medium text-${action.color}-300`}>{action.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserDashboard
