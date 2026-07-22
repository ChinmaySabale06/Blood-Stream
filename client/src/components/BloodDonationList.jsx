"use client"

import React from "react"
import { useEffect, useState } from "react"
import api from "../lib/api"

const BloodDonationList = () => {
  const [camps, setCamps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch all camps from backend
    const fetchCamps = async () => {
      try {
        const res = await api.get("/api/camps")
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
    <section className="section-shell min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/14 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-rose-500/14 blur-3xl"></div>
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
            Upcoming Blood Donation Camps
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="section-subtitle mt-6">
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
          <div className="health-card text-center p-12">
            <div className="text-6xl mb-4">🩸</div>
            <p className="text-2xl text-gray-300 mb-4">No upcoming camps found</p>
            <p className="text-gray-400">Check back soon for new donation opportunities!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {camps.map((camp, index) => (
              <div
                key={camp._id || camp.id}
                className="health-card group p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Camp Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-cyan-200">
                      {camp.campName}
                    </h3>
                    <div className="mb-3 flex items-center text-sm text-slate-400">
                      <span className="mr-2 h-2 w-2 rounded-full bg-rose-400"></span>
                      {new Date(camp.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-400/35 bg-rose-500/15">
                    <span className="text-xl">🩸</span>
                  </div>
                </div>

                {/* Organizer Info */}
                <div className="health-panel mb-4 p-4">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-500/15">
                      <span className="text-sm">👤</span>
                    </div>
                    <div>
                      <span className="block text-xs text-cyan-200">Organized by</span>
                      <span className="font-semibold text-white">{camp.organizerName}</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4 flex items-start text-slate-300">
                  <div className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-rose-400">📍</div>
                  <span className="text-sm leading-relaxed">{camp.location}</span>
                </div>

                {/* Contact */}
                <div className="mb-4 flex items-center text-slate-300">
                  <div className="mr-3 h-5 w-5 flex-shrink-0 text-cyan-400">📞</div>
                  <span className="text-sm font-medium text-cyan-200">{camp.contactNumber}</span>
                </div>

                {/* Description */}
                <div className="health-panel mb-6 p-4">
                  <p className="text-sm italic leading-relaxed text-slate-300">"{camp.description}"</p>
                </div>

                {/* Action Button */}
                <button className="health-btn-danger w-full">
                  Register for Camp
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BloodDonationList
