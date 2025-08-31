"use client"

import React from "react"
import { Link } from "react-router-dom"

const BloodBankNearMe = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/5 rounded-full animate-ping"></div>
        <div className="absolute top-20 left-1/3 w-4 h-4 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-red-400/60 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 hover:bg-white/15 transition-all duration-500">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-red-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Find Blood Banks Near You
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-gray-300 text-lg mb-10 text-center max-w-2xl mx-auto">
            Locate nearby blood banks to donate or receive blood quickly and safely. Keeping this information handy can
            save lives in emergencies—discover trusted blood banks in your area below.
          </p>

          {/* Quick Search UI (frontend-only) */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="City or ZIP code"
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
            />
            <select className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300">
              <option className="bg-gray-900">Radius: 5 km</option>
              <option className="bg-gray-900">Radius: 10 km</option>
              <option className="bg-gray-900">Radius: 25 km</option>
              <option className="bg-gray-900">Radius: 50 km</option>
            </select>
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 font-semibold">
              Search
            </button>
          </div>

          <div className="flex justify-center">
            <Link
              to="/nearbybloodbanks"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              Blood Banks Near Me
            </Link>
          </div>

          {/* Tips */}
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                Call ahead to confirm availability.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Carry a valid photo ID for donations.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                Check opening hours before visiting.
              </li>
            </ul>
          </div>
        </div>
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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default BloodBankNearMe
