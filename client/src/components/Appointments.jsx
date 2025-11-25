"use client"

import React from "react"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/clerk-react"
import axios from "axios"
import DashboardLayout from "./DashboardComponents/dashboard-layout"

export default function Appointments() {
  const { user } = useUser()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ donor: "", date: "", time: "", location: "" })

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      const res = await axios.get("/api/appointments")
      if (Array.isArray(res.data)) {
        setAppointments(res.data)
      } else {
        console.error("Unexpected API response format:", res.data)
        setAppointments([])
      }
    } catch (err) {
      console.error("Failed to fetch appointments:", err)
      setAppointments([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const dateTime = new Date(`${form.date}T${form.time}`)
      await axios.post("/api/appointments", {
        donor: form.donor,
        date: dateTime.toISOString(),
        location: form.location,
        scheduledBy: user?.id,
      })
      setForm({ donor: "", date: "", time: "", location: "" })
      fetchAppointments()
      alert("Appointment scheduled successfully!")
    } catch (err) {
      console.error("Failed to schedule appointment:", err)
      alert("Failed to schedule appointment. Please try again.")
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`/api/appointments/${id}/status`, { status })
      fetchAppointments()
    } catch (err) {
      console.error("Failed to update status:", err)
      alert("Failed to update appointment status.")
    }
  }

  const deleteAppointment = async (id) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return
    try {
      await axios.delete(`/api/appointments/${id}`)
      fetchAppointments()
    } catch (err) {
      console.error("Failed to delete appointment:", err)
      alert("Failed to delete appointment.")
    }
  }

  return (
    <DashboardLayout title="Appointments" active="appointments">
      {/* Upcoming Appointments */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden mb-8">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-blue-300">Upcoming Appointments</h2>
        </div>
        <div className="divide-y divide-white/10">
          {loading ? (
            <div className="p-6 text-center text-gray-300">Loading appointments...</div>
          ) : appointments.length === 0 ? (
            <div className="p-6 text-center text-gray-300">No appointments scheduled yet.</div>
          ) : (
            appointments.map((a) => (
              <div
                key={a._id}
                className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-white/5 transition-colors"
              >
                <div>
                  <div className="text-lg font-semibold">{a.donor}</div>
                  <div className="text-gray-300 text-sm">{a.location}</div>
                </div>
                <div className="text-gray-200">
                  {new Date(a.date).toLocaleDateString()} • {new Date(a.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${a.status === "Confirmed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : a.status === "Cancelled"
                          ? "bg-red-500/20 text-red-300 border border-red-500/30"
                          : a.status === "Completed"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                  >
                    {a.status}
                  </span>
                  <div className="flex gap-1">
                    {a.status === "Pending" && (
                      <button
                        onClick={() => updateStatus(a._id, "Confirmed")}
                        className="px-3 py-1 text-xs rounded-lg bg-green-600/30 border border-green-500/40 hover:bg-green-600/50 transition-colors"
                      >
                        Confirm
                      </button>
                    )}
                    {a.status === "Confirmed" && (
                      <button
                        onClick={() => updateStatus(a._id, "Completed")}
                        className="px-3 py-1 text-xs rounded-lg bg-blue-600/30 border border-blue-500/40 hover:bg-blue-600/50 transition-colors"
                      >
                        Complete
                      </button>
                    )}
                    {a.status !== "Cancelled" && (
                      <button
                        onClick={() => updateStatus(a._id, "Cancelled")}
                        className="px-3 py-1 text-xs rounded-lg bg-red-600/30 border border-red-500/40 hover:bg-red-600/50 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={() => deleteAppointment(a._id)}
                      className="px-3 py-1 text-xs rounded-lg bg-gray-600/30 border border-gray-500/40 hover:bg-gray-600/50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
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
