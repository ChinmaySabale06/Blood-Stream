"use client"

import React from "react"
import { useState } from "react"
import DashboardLayout from "./DashboardComponents/dashboard-layout"

const initialAppointments = [
  { id: 1, donor: "Alice Johnson", date: "2025-09-12", time: "10:30", location: "City Hospital", status: "Confirmed" },
  { id: 2, donor: "Mark Chen", date: "2025-09-15", time: "14:00", location: "Downtown Clinic", status: "Pending" },
  { id: 3, donor: "Priya Singh", date: "2025-09-20", time: "09:15", location: "Red Cross Center", status: "Confirmed" },
]

export default function Appointments() {
  const [appointments] = useState(initialAppointments)
  const [form, setForm] = useState({ donor: "", date: "", time: "", location: "" })

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    alert("Appointment scheduled (demo). Connect backend to save it.")
    setForm({ donor: "", date: "", time: "", location: "" })
  }

  return (
    <DashboardLayout title="Appointments" active="appointments">
      {/* Upcoming Appointments */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden mb-8">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-blue-300">Upcoming Appointments</h2>
        </div>
        <div className="divide-y divide-white/10">
          {appointments.map((a) => (
            <div
              key={a.id}
              className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-white/5 transition-colors"
            >
              <div>
                <div className="text-lg font-semibold">{a.donor}</div>
                <div className="text-gray-300 text-sm">{a.location}</div>
              </div>
              <div className="text-gray-200">
                {new Date(a.date).toLocaleDateString()} • {a.time}
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    a.status === "Confirmed"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                  }`}
                >
                  {a.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Form */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-6">Schedule New Appointment</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-4 gap-6">
          <input
            name="donor"
            value={form.donor}
            onChange={onChange}
            placeholder="Donor name"
            required
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition-all duration-300"
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={onChange}
            required
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition-all duration-300"
          />
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={onChange}
            required
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition-all duration-300"
          />
          <input
            name="location"
            value={form.location}
            onChange={onChange}
            placeholder="Location"
            required
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition-all duration-300"
          />
          <div className="md:col-span-4">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 rounded-2xl text-white font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Schedule Appointment
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
