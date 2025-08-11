"use client"

import React from "react"
import { Link } from "react-router-dom"

const BloodCamp = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/5 rounded-full animate-ping"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-red-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-blue-400/60 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Blood Donation Camps
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Organize or participate in life-saving blood donation events
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Organize Camp Card */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🏥</span>
              </div>
              <h2 className="text-3xl font-bold text-red-300 mb-4 group-hover:text-red-200 transition-colors duration-300">
                Organize Blood Donation Camp
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Create and manage blood donation events in your community. Help save lives by organizing donation
                drives.
              </p>
              <Link
                to="/blooddonationform"
                className="inline-block w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>📋</span>
                  <span>Create Camp</span>
                </span>
              </Link>
            </div>
          </div>

          {/* View Camps Card */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📅</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-300 mb-4 group-hover:text-blue-200 transition-colors duration-300">
                Upcoming Blood Donation Camps
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Browse and register for upcoming blood donation camps in your area. Find the perfect opportunity to
                donate.
              </p>
              <Link
                to="/blooddonationlist"
                className="inline-block w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>👀</span>
                  <span>View Camps</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">Why Blood Donation Camps Matter</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h4 className="font-semibold text-red-300 mb-2">Save Lives</h4>
                <p className="text-gray-400 text-sm">Every donation can save up to 3 lives</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold text-blue-300 mb-2">Build Community</h4>
                <p className="text-gray-400 text-sm">Bring people together for a noble cause</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="font-semibold text-green-300 mb-2">Support Healthcare</h4>
                <p className="text-gray-400 text-sm">Ensure hospitals have adequate blood supply</p>
              </div>
            </div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default BloodCamp
