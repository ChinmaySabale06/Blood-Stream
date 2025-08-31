"use client"

import React from "react"
import { Link } from "react-router-dom"

export default function BloodDonationBenefits() {
  const benefits = [
    {
      icon: "❤️",
      title: "Save lives",
      description: "One donation can help up to 3 people in need.",
    },
    {
      icon: "🩺",
      title: "Boosts your health",
      description: "Reduces harmful iron stores, lowers risk of heart disease, and stimulates blood cell production.",
    },
    {
      icon: "🔬",
      title: "Free health checkup",
      description: "Each donation includes free screening for various diseases.",
    },
    {
      icon: "✨",
      title: "Feel good factor",
      description: "Giving blood fosters community and gives you a sense of accomplishment.",
    },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/5 rounded-full animate-ping"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-red-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-blue-400/60 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-br from-red-900/20 to-rose-900/20 border border-red-500/20 rounded-3xl shadow-2xl p-12 hover:bg-red-900/30 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Why Donate Blood?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6">Discover the incredible impact of your generosity</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/5 border border-red-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-300 mb-2 group-hover:text-red-200 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
              <Link
                to="/appointments"
                className="block px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-transparent transition-all duration-300 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Become a Donor Today</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mt-4 text-sm">Join thousands of heroes making a difference every day</p>
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
    </section>
  )
}
