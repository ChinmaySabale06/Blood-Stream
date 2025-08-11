"use client"

import React from "react"
import { useState } from "react"
import axios from "axios"
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
      await axios.post("http://localhost:5000/api/camps", formData)
      alert("Camp successfully submitted!")
      navigate("/bloodcamp")
    } catch (error) {
      console.error("Error submitting camp:", error)
      alert("Failed to submit camp.")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/5 rounded-full animate-ping"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-red-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-blue-400/60 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Organize Blood Donation Camp
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">Create a life-saving event in your community</p>
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
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/20"
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
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/20"
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
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/20"
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
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/20"
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
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/20"
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
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/20 resize-none"
              placeholder="Describe your blood donation camp..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-2xl text-white font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/25"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>🩸</span>
              <span>Organize Camp</span>
            </span>
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default BloodDonationForm
