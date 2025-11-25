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
      <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white font-sans overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-ping"></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-float blur-[1px]"></div>
          <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-red-400/40 rounded-full animate-float-delayed blur-[1px]"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400/40 rounded-full animate-float blur-[1px]"></div>
          <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-pink-400/40 rounded-full animate-float-delayed blur-[1px]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden group hover:bg-white/[0.07] transition-all duration-500">
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Save Lives Today</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">Welcome to </span>
                <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">BloodStream</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-200/80">Your Lifeline Network</h2>

              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Connect with donors, find blood banks, and make a difference in your community. Every drop counts in the mission to save lives.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {isSignedIn ? (
                  <>
                    <Link
                      to="/verifyorganization"
                      className="group relative w-full sm:w-auto min-w-[200px]"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                      <div className="relative px-8 py-4 bg-slate-900 rounded-2xl leading-none flex items-center justify-center">
                        <span className="font-semibold text-white group-hover:text-red-200 transition duration-200">Verify Organization</span>
                      </div>
                    </Link>

                    <Link
                      to="/bloodcamp"
                      className="group relative w-full sm:w-auto min-w-[200px]"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                      <div className="relative px-8 py-4 bg-slate-900 rounded-2xl leading-none flex items-center justify-center">
                        <span className="font-semibold text-white group-hover:text-blue-200 transition duration-200">Blood Camps</span>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="group relative w-full sm:w-auto min-w-[200px]"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
                      <button className="relative w-full px-8 py-4 bg-red-600 rounded-2xl leading-none flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="font-bold text-white text-lg">Get Started</span>
                      </button>
                    </Link>

                    <Link to="/login" className="group relative w-full sm:w-auto min-w-[200px]">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-200"></div>
                      <button className="relative w-full px-8 py-4 bg-slate-900 rounded-2xl leading-none flex items-center justify-center border border-white/10 hover:bg-slate-800 transition duration-200">
                        <span className="font-semibold text-blue-200 group-hover:text-white transition duration-200 text-lg">Join Now</span>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default Home
