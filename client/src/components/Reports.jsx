"use client"

import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import DashboardLayout from "./DashboardComponents/dashboard-layout"

export default function Reports() {
  const [stats, setStats] = useState({
    totalRequests: 0,
    totalAppointments: 0,
    totalStockUnits: 0,
    pendingRequests: 0,
  })
  const [recentActivity, setRecentActivity] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchReportsData = async () => {
    try {
      setLoading(true)
      const [requestsRes, appointmentsRes, stockRes] = await Promise.all([
        axios.get("/api/bloodrequests"),
        axios.get("/api/appointments"), 
        axios.get("/api/bloodstock"),
      ])

      const requests = requestsRes.data
      const appointments = appointmentsRes.data
      const stock = stockRes.data

      setStats({
        totalRequests: requests.length,
        totalAppointments: appointments.length,
        totalStockUnits: stock.reduce((sum, item) => sum + item.count, 0),
        pendingRequests: requests.filter(r => r.status === "Pending").length,
      })

      // Create recent activity from requests and appointments
      const activity = [
        ...requests.slice(0, 3).map(r => ({
          date: r.createdAt,
          event: "Blood Request",
          detail: `${r.bloodType} • ${r.units} units • ${r.urgency}`,
          status: r.status,
        })),
        ...appointments.slice(0, 2).map(a => ({
          date: a.createdAt,
          event: "Appointment",
          detail: `${a.donor} • ${a.location}`,
          status: a.status,
        })),
      ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)

      setRecentActivity(activity)
    } catch (err) {
      console.error("Failed to fetch reports data:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReportsData()
  }, [])

  const statCards = [
    { label: "Total Blood Requests", value: stats.totalRequests.toString(), accent: "from-blue-500 to-indigo-500" },
    { label: "Total Stock Units", value: stats.totalStockUnits.toString(), accent: "from-red-500 to-pink-500" },
    { label: "Total Appointments", value: stats.totalAppointments.toString(), accent: "from-green-500 to-emerald-500" },
    { label: "Pending Requests", value: stats.pendingRequests.toString(), accent: "from-yellow-500 to-amber-500" },
  ]

  return (
    <DashboardLayout title="Reports & Insights" active="reports">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statCards.map((s) => (
          <div key={s.label} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.accent} mb-4`} />
            <div className="text-sm text-gray-300">{s.label}</div>
            <div className="text-3xl font-bold mt-1">
              {loading ? "..." : s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Charts (placeholders) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-300">Monthly Donations</h2>
            <span className="text-xs text-gray-400">Last 12 months</span>
          </div>
          <div className="h-64 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" />
        </div>
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-red-300">Requests vs Supply</h2>
            <span className="text-xs text-gray-400">Last 8 weeks</span>
          </div>
          <div className="h-64 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" />
        </div>
      </div>

      {/* Table */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-indigo-300">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-5 text-left text-blue-300">Date</th>
                <th className="p-5 text-left text-blue-300">Event</th>
                <th className="p-5 text-left text-blue-300">Detail</th>
                <th className="p-5 text-left text-blue-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">
                    Loading recent activity...
                  </td>
                </tr>
              ) : recentActivity.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">
                    No recent activity found.
                  </td>
                </tr>
              ) : (
                recentActivity.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/10 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"} hover:bg-white/10 transition-colors`}
                  >
                    <td className="p-5">{new Date(r.date).toLocaleDateString()}</td>
                    <td className="p-5">{r.event}</td>
                    <td className="p-5 text-gray-200">{r.detail}</td>
                    <td className="p-5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          r.status === "Completed" || r.status === "Confirmed"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : r.status === "Cancelled"
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
