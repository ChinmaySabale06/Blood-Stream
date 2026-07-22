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
    <section className="section-shell min-h-screen">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-rose-500/12 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="health-card p-8 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="section-title bg-gradient-to-r from-rose-300 to-red-400 bg-clip-text text-transparent">
              Why Donate Blood?
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-rose-500 to-red-500"></div>
            <p className="section-subtitle mt-5">Discover the incredible impact of your generosity</p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="health-panel group p-6 hover:border-rose-300/25 hover:bg-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-rose-400/35 bg-rose-500/15 text-2xl">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-rose-200">
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed text-slate-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="/appointments" className="health-btn-danger">
              Become a Donor Today
            </Link>
            <p className="mt-4 text-sm text-slate-400">Join thousands of heroes making a difference every day</p>
          </div>
        </div>
      </div>
    </section>
  )
}
