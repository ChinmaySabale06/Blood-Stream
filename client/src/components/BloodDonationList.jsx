"use client"

import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const BloodDonationList = () => {
  const [camps, setCamps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch all camps from backend
    const fetchCamps = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/camps")
        setCamps(res.data)
      } catch (error) {
        console.error("Error fetching camps:", error)
        setCamps([])
      } finally {
        setLoading(false)
      }
    }
    fetchCamps()
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/5 rounded-full animate-ping"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-red-400/60 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Upcoming Blood Donation Camps
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Join our life-saving missions and make a difference in your community
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-400"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-blue-400 opacity-20"></div>
            </div>
          </div>
        ) : camps.length === 0 ? (
          <div className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12">
            <div className="text-6xl mb-4">🩸</div>
            <p className="text-2xl text-gray-300 mb-4">No upcoming camps found</p>
            <p className="text-gray-400">Check back soon for new donation opportunities!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {camps.map((camp, index) => (
              <div
                key={camp._id || camp.id}
                className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Camp Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300">
                      {camp.campName}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                      {new Date(camp.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">🩸</span>
                  </div>
                </div>

                {/* Organizer Info */}
                <div className="mb-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 border border-blue-500/30">
                      <span className="text-sm">👤</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-300 block">Organized by</span>
                      <span className="text-white font-semibold">{camp.organizerName}</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4 flex items-start text-gray-300">
                  <div className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0">📍</div>
                  <span className="text-sm leading-relaxed">{camp.location}</span>
                </div>

                {/* Contact */}
                <div className="mb-4 flex items-center text-gray-300">
                  <div className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0">📞</div>
                  <span className="text-sm text-blue-200 font-medium">{camp.contactNumber}</span>
                </div>

                {/* Description */}
                <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                  <p className="text-gray-300 text-sm leading-relaxed italic">"{camp.description}"</p>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg group-hover:shadow-red-500/25">
                  Register for Camp
                </button>
              </div>
            ))}
          </div>
        )}
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

export default BloodDonationList
