"use client"

import React from "react"
import { useEffect, useState } from "react"
import api from "../lib/api"
import DashboardLayout from "./DashboardComponents/dashboard-layout"

export default function BloodStockDashboard() {
  const [stockData, setStockData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newUnit, setNewUnit] = useState({ bloodType: "", expiryDate: "" })

  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  const lowStockThreshold = 5

  const fetchBloodStock = async () => {
    try {
      setLoading(true)
      const res = await api.get("/api/bloodstock")
      setStockData(res.data)
    } catch (err) {
      setError("Failed to fetch blood stock data.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBloodStock()
    const interval = setInterval(fetchBloodStock, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleAddUnit = async (e) => {
    e.preventDefault()
    if (!newUnit.bloodType || !newUnit.expiryDate) {
      alert("Please fill in both fields.")
      return
    }
    try {
      await api.post("/api/bloodstock/add", newUnit)
      setNewUnit({ bloodType: "", expiryDate: "" })
      fetchBloodStock()
    } catch (err) {
      alert("Failed to add blood unit.")
      console.error(err)
    }
  }

  const hospitalUser = true // Frontend-only; keep true/replace with real role logic

  return (
    <DashboardLayout title="Blood Stock Management" subtitle="Monitor and manage blood inventory" active="bloodstock">
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400" />
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-400/35 bg-rose-500/12 p-4">
          <p className="text-red-200">{error}</p>
        </div>
      )}

      {/* Low Stock Alerts */}
      {bloodTypes.filter((type) => {
        const stock = stockData.find((item) => item._id === type)
        return !stock || stock.count < lowStockThreshold
      }).length > 0 && (
        <div className="mb-8 rounded-2xl border border-amber-400/35 bg-amber-500/12 p-6">
          <h2 className="font-bold text-yellow-300 mb-4 text-xl flex items-center">
            <span className="text-2xl mr-2">⚠️</span>
            Low Stock Alerts!
          </h2>
          <div className="grid gap-3">
            {bloodTypes
              .filter((type) => {
                const stock = stockData.find((item) => item._id === type)
                return !stock || stock.count < lowStockThreshold
              })
              .map((type) => (
                <div key={type} className="flex items-center justify-between rounded-xl bg-amber-500/10 p-3">
                  <span className="text-yellow-200">
                    The stock for <strong className="text-yellow-100">{type}</strong> is critically low.
                  </span>
                  <span className="text-yellow-300 font-bold">
                    {stockData.find((item) => item._id === type)?.count || 0} units
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Stock Data Table */}
      <div className="health-card mb-8 overflow-hidden">
        <div className="p-6 border-b border-white/20">
          <h3 className="text-2xl font-bold text-cyan-200">Current Blood Stock</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-6 text-left text-lg font-semibold text-cyan-200">Blood Type</th>
                <th className="p-6 text-left text-lg font-semibold text-cyan-200">Available Units</th>
                <th className="p-6 text-left text-lg font-semibold text-cyan-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {bloodTypes.map((type) => {
                const stock = stockData.find((item) => item._id === type)
                const count = stock?.count || 0
                const isLow = count < lowStockThreshold
                return (
                  <tr key={type} className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300">
                    <td className="p-6">
                      <span className="inline-block rounded-full border border-rose-400/35 bg-rose-500/15 px-4 py-2 font-bold text-rose-200">
                        {type}
                      </span>
                    </td>
                    <td className="p-6 text-2xl font-bold text-white">{count}</td>
                    <td className="p-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          isLow
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-green-500/20 text-green-300 border border-green-500/30"
                        }`}
                      >
                        {isLow ? "Low Stock" : "Good Stock"}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Blood Unit Form (Hospitals only) */}
      {hospitalUser && (
        <div className="health-card p-8">
          <h2 className="mb-6 flex items-center text-2xl font-bold text-emerald-200">
            <span className="text-3xl mr-3">➕</span>
            Add New Blood Unit
          </h2>
          <form onSubmit={handleAddUnit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Blood Type</label>
                <select
                  value={newUnit.bloodType}
                  onChange={(e) => setNewUnit({ ...newUnit, bloodType: e.target.value })}
                  className="health-select"
                >
                  <option value="" className="bg-slate-900">
                    Select Blood Type
                  </option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type} className="bg-slate-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Expiry Date</label>
                <input
                  type="date"
                  value={newUnit.expiryDate}
                  onChange={(e) => setNewUnit({ ...newUnit, expiryDate: e.target.value })}
                  className="health-input"
                />
              </div>
            </div>
            <button
              type="submit"
              className="health-btn-primary w-full py-4 text-base sm:text-lg"
            >
              Add Blood Unit
            </button>
          </form>
        </div>
      )}
    </DashboardLayout>
  )
}
