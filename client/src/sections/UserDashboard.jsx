"use client"

import React from "react"
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react"
import api from "../lib/api"
import DashboardLayout from "../components/DashboardComponents/dashboard-layout"

const UserDashboard = () => {
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      const syncUser = async () => {
        try {
          await api.post("/api/save-user", {
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
    { title: "Available Blood Units", value: "0", icon: "🩸", iconBg: "bg-rose-500/18 border-rose-400/35", valueColor: "text-rose-200" },
    { title: "Active Donors", value: "0", icon: "👥", iconBg: "bg-cyan-500/18 border-cyan-400/35", valueColor: "text-cyan-200" },
    { title: "Pending Requests", value: "0", icon: "⏳", iconBg: "bg-amber-500/18 border-amber-400/35", valueColor: "text-amber-200" },
  ]

  return (
    <DashboardLayout
      title="User Dashboard"
      subtitle={`Manage your blood donation activities${user?.fullName ? `, ${user.fullName}` : ""}`}
      active="dashboard"
    >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Dashboard Overview
            </h2>

            {/* Stats Cards */}
            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {dashboardStats.map((stat, index) => (
                <div
                  key={index}
                  className="health-card p-7"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border text-2xl ${stat.iconBg}`}>{stat.icon}</div>
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-300"></div>
                  </div>
                  <h3 className="mb-2 text-sm font-medium text-slate-400">{stat.title}</h3>
                  <p className={`text-4xl font-bold ${stat.valueColor}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="health-card p-6 sm:p-8">
              <h3 className="mb-6 text-2xl font-bold text-cyan-200">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Add Blood Stock", icon: "➕" },
                  { name: "View Requests", icon: "👀" },
                  { name: "Schedule Drive", icon: "📅" },
                  { name: "Generate Report", icon: "📊" },
                ].map((action, index) => (
                  <button key={index} className="health-panel p-4 text-left hover:bg-white/10">
                    <div className="mb-2 text-2xl">
                      {action.icon}
                    </div>
                    <div className="text-sm font-medium text-slate-200">{action.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
    </DashboardLayout>
  )
}

export default UserDashboard
