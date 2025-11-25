"use client"

import React from "react"
import { useMemo, useState } from "react"
import DashboardLayout from "./DashboardComponents/dashboard-layout"

const sampleDonors = [
  {
    id: 1,
    name: "Alice Johnson",
    bloodType: "A+",
    city: "New York",
    lastDonation: "2025-06-12",
    contact: "+1 555-0111",
  },
  {
    id: 2,
    name: "Mark Chen",
    bloodType: "O-",
    city: "San Francisco",
    lastDonation: "2025-04-25",
    contact: "+1 555-0123",
  },
  { id: 3, name: "Priya Singh", bloodType: "AB+", city: "Seattle", lastDonation: "2025-08-05", contact: "+1 555-0135" },
  { id: 4, name: "Ibrahim Khan", bloodType: "B-", city: "Austin", lastDonation: "2024-12-19", contact: "+1 555-0199" },
  { id: 5, name: "Maria Garcia", bloodType: "O+", city: "Miami", lastDonation: "2025-02-10", contact: "+1 555-0177" },
]

export default function DonorRecord() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("")

  const filtered = useMemo(() => {
    return sampleDonors.filter((d) => {
      const matchesQuery =
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.city.toLowerCase().includes(query.toLowerCase()) ||
        d.contact.toLowerCase().includes(query.toLowerCase())
      const matchesType = filter ? d.bloodType === filter : true
      return matchesQuery && matchesType
    })
  }, [query, filter])

  return (
    <DashboardLayout
      title="Donor Records"
      subtitle="Search and filter donors by blood type, name, city, or contact"
      active="donors"
    >
      {/* Filters */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            placeholder="Search by name, city, or contact"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
          >
            <option className="bg-gray-900" value="">
              All Blood Types
            </option>
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((t) => (
              <option key={t} className="bg-gray-900" value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setQuery("")
              setFilter("")
            }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 font-semibold"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Donors Table */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-5 text-left text-blue-300">Name</th>
                <th className="p-5 text-left text-blue-300">Blood Type</th>
                <th className="p-5 text-left text-blue-300">City</th>
                <th className="p-5 text-left text-blue-300">Last Donation</th>
                <th className="p-5 text-left text-blue-300">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr
                  key={d.id}
                  className={`border-b border-white/10 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"} hover:bg-white/10 transition-colors`}
                >
                  <td className="p-5">{d.name}</td>
                  <td className="p-5">
                    <span className="inline-block px-3 py-1 bg-red-500/20 rounded-full border border-red-500/30 text-red-300 font-semibold">
                      {d.bloodType}
                    </span>
                  </td>
                  <td className="p-5">{d.city}</td>
                  <td className="p-5">{new Date(d.lastDonation).toLocaleDateString()}</td>
                  <td className="p-5 text-blue-200">{d.contact}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">
                    No donors match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
