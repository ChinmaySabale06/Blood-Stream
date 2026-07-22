"use client"

import React from "react"
import { useState } from "react"
import { useUser } from "@clerk/clerk-react"
import api from "../lib/api"
import DashboardLayout from "./DashboardComponents/dashboard-layout"

export default function RequestBlood() {
  const { user } = useUser()
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
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post("/api/bloodrequests", {
        ...form,
        units: parseInt(form.units),
        requestedBy: user?.id,
      })
      alert("Blood request submitted successfully! Our team will reach out shortly.")
      setForm({
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
    } catch (err) {
      console.error(err)
      alert("Failed to submit blood request. Please try again.")
    }
  }

  return (
    <DashboardLayout
      title="Request Blood"
      subtitle="Submit your request and we will connect you with available donors or banks"
      active="request"
    >
      <div className="health-card p-6 sm:p-8 lg:p-10">
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Patient Name</label>
              <input
                name="patientName"
                value={form.patientName}
                onChange={onChange}
                placeholder="Patient full name"
                required
                className="health-input"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Blood Type</label>
              <select
                name="bloodType"
                value={form.bloodType}
                onChange={onChange}
                required
                className="health-select"
              >
                <option className="bg-slate-900" value="">
                  Select
                </option>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((t) => (
                  <option key={t} className="bg-slate-900" value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Units Needed</label>
              <input
                name="units"
                type="number"
                min="1"
                value={form.units}
                onChange={onChange}
                placeholder="e.g. 2"
                required
                className="health-input"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Urgency</label>
              <select
                name="urgency"
                value={form.urgency}
                onChange={onChange}
                className="health-select"
              >
                {["Normal", "High", "Critical"].map((u) => (
                  <option key={u} className="bg-slate-900" value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Needed By</label>
              <input
                name="neededBy"
                type="datetime-local"
                value={form.neededBy}
                onChange={onChange}
                required
                className="health-input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Hospital Name</label>
              <input
                name="hospitalName"
                value={form.hospitalName}
                onChange={onChange}
                placeholder="Hospital/Clinic"
                required
                className="health-input"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">City</label>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                placeholder="City"
                required
                className="health-input"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">Contact Number</label>
            <input
              name="contactNumber"
              value={form.contactNumber}
              onChange={onChange}
              type="tel"
              maxLength={15}
              placeholder="Phone number"
              required
              className="health-input"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">Reason (optional)</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={onChange}
              rows={3}
              placeholder="Additional details"
              className="health-textarea !resize-none"
            />
          </div>

          <button
            type="submit"
            className="health-btn-primary w-full py-4 text-base sm:text-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </DashboardLayout>
  )
}
