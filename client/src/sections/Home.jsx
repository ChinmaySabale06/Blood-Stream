// "use client"

import React from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"

const Home = () => {
  const { isSignedIn } = useUser()

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white font-serif overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/5 rounded-full animate-ping"></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-red-400/60 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400/60 rounded-full animate-float"></div>
          <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-pink-400/60 rounded-full animate-float-delayed"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center">
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="t1 text-7xl font-bold mb-4 bg-gray-200 bg-clip-text text-transparent">
              Welcome to Blood<span className="text-red-600">Stream</span>
            </h1>
            <h2 className="t1 text-4xl font-bold mb-6 text-red-600">Your Lifeline Network</h2>
            <p id="p1" className="text-2xl font-semibold text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Donate Blood. Save Lives. Make a Difference.
            </p>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              {isSignedIn ? (
                <>
                  <Link
                    to="/verifyorganization"
                    className="group relative px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 w- bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 px-8 py-4 bg-red-600 rounded-2xl border border-red-500/50 group-hover:bg-transparent transition-all duration-300">
                      Verify as an Organization
                    </div>
                  </Link>
                  <Link
                    to="/bloodcamp"
                    className="group relative px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 px-8 py-4 border border-blue-500/50 rounded-2xl bg-blue-900/30 group-hover:bg-transparent transition-all duration-300">
                      Blood Camps
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="group relative px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 px-8 py-4 bg-red-600 rounded-2xl border border-red-500/50 group-hover:bg-transparent transition-all duration-300">
                      Get Started
                    </div>
                  </Link>
                  <button className="group relative px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 px-8 py-4 border border-blue-500/50 rounded-2xl bg-blue-900/30 group-hover:bg-transparent transition-all duration-300">
                      Join Now
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
