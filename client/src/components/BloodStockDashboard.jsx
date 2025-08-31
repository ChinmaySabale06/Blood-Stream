"use client"

import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import DashboardLayout from "./Dashboardcomponents/dashboard-layout"

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
      const res = await axios.get("http://localhost:5000/api/bloodstock")
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
      await axios.post("http://localhost:5000/api/bloodstock/add", newUnit)
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
        <div className="backdrop-blur-xl bg-red-500/20 border border-red-500/30 rounded-2xl p-4 mb-6">
          <p className="text-red-200">{error}</p>
        </div>
      )}

      {/* Low Stock Alerts */}
      {bloodTypes.filter((type) => {
        const stock = stockData.find((item) => item._id === type)
        return !stock || stock.count < lowStockThreshold
      }).length > 0 && (
        <div className="mb-8 backdrop-blur-xl bg-yellow-500/20 border border-yellow-500/30 rounded-2xl p-6">
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
                <div key={type} className="flex items-center justify-between bg-yellow-500/10 rounded-xl p-3">
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
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl mb-8">
        <div className="p-6 border-b border-white/20">
          <h3 className="text-2xl font-bold text-blue-300">Current Blood Stock</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-6 text-left text-lg font-semibold text-blue-300">Blood Type</th>
                <th className="p-6 text-left text-lg font-semibold text-blue-300">Available Units</th>
                <th className="p-6 text-left text-lg font-semibold text-blue-300">Status</th>
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
                      <span className="inline-block px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 font-bold text-red-300">
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
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-green-300 flex items-center">
            <span className="text-3xl mr-3">➕</span>
            Add New Blood Unit
          </h2>
          <form onSubmit={handleAddUnit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Blood Type</label>
                <select
                  value={newUnit.bloodType}
                  onChange={(e) => setNewUnit({ ...newUnit, bloodType: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">
                    Select Blood Type
                  </option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                <input
                  type="date"
                  value={newUnit.expiryDate}
                  onChange={(e) => setNewUnit({ ...newUnit, expiryDate: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Add Blood Unit
            </button>
          </form>
        </div>
      )}
    </DashboardLayout>
  )
}
