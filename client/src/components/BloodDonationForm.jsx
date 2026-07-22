"use client"

import React from "react"
import { useState } from "react"
import api from "../lib/api"
import { useNavigate } from "react-router-dom"

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    campName: "",
    organizerName: "",
    contactNumber: "",
    date: "",
    location: "",
    description: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post("/api/camps", formData)
      alert("Camp successfully submitted!")
      navigate("/bloodcamp")
    } catch (error) {
      console.error("Error submitting camp:", error)
      alert("Failed to submit camp.")
    }
  }

  return (
    <section className="section-shell flex min-h-screen items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-rose-500/14 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/14 blur-3xl"></div>
      </div>

      <div className="health-card relative w-full max-w-2xl p-7 sm:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-300 to-red-400 bg-clip-text text-transparent sm:text-4xl mb-4">
            Organize Blood Donation Camp
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-rose-500 to-red-500"></div>
          <p className="mt-4 text-slate-300">Create a life-saving event in your community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3" htmlFor="campName">
                Camp Name
              </label>
              <input
                type="text"
                name="campName"
                id="campName"
                value={formData.campName}
                onChange={handleChange}
                required
                className="health-input"
                placeholder="Community Blood Drive"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3" htmlFor="organizerName">
                Organizer Name
              </label>
              <input
                type="text"
                name="organizerName"
                id="organizerName"
                value={formData.organizerName}
                onChange={handleChange}
                required
                className="health-input"
                placeholder="Who is organizing?"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                maxLength={15}
                className="health-input"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="health-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="health-input"
              placeholder="Event address"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="health-textarea !resize-none"
              placeholder="Describe your blood donation camp..."
            />
          </div>

          <button
            type="submit"
            className="health-btn-danger w-full py-4 text-base sm:text-lg"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>🩸</span>
              <span>Organize Camp</span>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default BloodDonationForm
