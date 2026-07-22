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
      <div className="health-card mb-8 p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            placeholder="Search by name, city, or contact"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="health-input"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="health-select"
          >
            <option className="bg-slate-900" value="">
              All Blood Types
            </option>
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((t) => (
              <option key={t} className="bg-slate-900" value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setQuery("")
              setFilter("")
            }}
            className="health-btn-primary w-full"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Donors Table */}
      <div className="health-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-5 text-left text-cyan-200">Name</th>
                <th className="p-5 text-left text-cyan-200">Blood Type</th>
                <th className="p-5 text-left text-cyan-200">City</th>
                <th className="p-5 text-left text-cyan-200">Last Donation</th>
                <th className="p-5 text-left text-cyan-200">Contact</th>
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
                    <span className="inline-block rounded-full border border-rose-400/35 bg-rose-500/15 px-3 py-1 font-semibold text-rose-200">
                      {d.bloodType}
                    </span>
                  </td>
                  <td className="p-5">{d.city}</td>
                  <td className="p-5">{new Date(d.lastDonation).toLocaleDateString()}</td>
                  <td className="p-5 text-cyan-200">{d.contact}</td>
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
