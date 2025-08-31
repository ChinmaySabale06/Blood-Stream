"use client"

import React from "react"
import { useState } from "react"
import DashboardLayout from "./Dashboardcomponents/dashboard-layout"

export default function RequestBlood() {
  const [form, setForm] = useState({
    patientName: "",
    bloodType: "",
    units: "",
    urgency: "Normal",
    hospitalName: "",
    city: "",
    contactNumber: "",
    neededBy: "",
    reason: "",
  })

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    alert("Blood request submitted. Our team will reach out shortly.")
  }

  return (
    <DashboardLayout
      title="Request Blood"
      subtitle="Submit your request and we will connect you with available donors or banks"
      active="request"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10">
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Patient Name</label>
              <input
                name="patientName"
                value={form.patientName}
                onChange={onChange}
                placeholder="Patient full name"
                required
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Blood Type</label>
              <select
                name="bloodType"
                value={form.bloodType}
                onChange={onChange}
                required
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              >
                <option className="bg-gray-900" value="">
                  Select
                </option>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((t) => (
                  <option key={t} className="bg-gray-900" value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Units Needed</label>
              <input
                name="units"
                type="number"
                min="1"
                value={form.units}
                onChange={onChange}
                placeholder="e.g. 2"
                required
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Urgency</label>
              <select
                name="urgency"
                value={form.urgency}
                onChange={onChange}
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              >
                {["Normal", "High", "Critical"].map((u) => (
                  <option key={u} className="bg-gray-900" value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Needed By</label>
              <input
                name="neededBy"
                type="datetime-local"
                value={form.neededBy}
                onChange={onChange}
                required
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Hospital Name</label>
              <input
                name="hospitalName"
                value={form.hospitalName}
                onChange={onChange}
                placeholder="Hospital/Clinic"
                required
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">City</label>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                placeholder="City"
                required
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Contact Number</label>
            <input
              name="contactNumber"
              value={form.contactNumber}
              onChange={onChange}
              type="tel"
              maxLength={15}
              placeholder="Phone number"
              required
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Reason (optional)</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={onChange}
              rows={3}
              placeholder="Additional details"
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-2xl text-white font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Submit Request
          </button>
        </form>
      </div>
    </DashboardLayout>
  )
}
