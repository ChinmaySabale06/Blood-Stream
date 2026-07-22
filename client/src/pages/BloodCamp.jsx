"use client"

import React from "react"
import { Link } from "react-router-dom"

const BloodCamp = () => {
  return (
    <div className="section-shell min-h-screen">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-rose-500/14 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/14 blur-3xl"></div>
      </div>

      <div className="section-container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title bg-gradient-to-r from-rose-300 via-white to-cyan-200 bg-clip-text text-transparent">
            Blood Donation Camps
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-rose-500 to-cyan-500"></div>
          <p className="section-subtitle mt-6">
            Organize or participate in life-saving blood donation events
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Organize Camp Card */}
          <div className="health-card p-8 sm:p-10">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-rose-400/35 bg-rose-500/15">
                <span className="text-4xl">🏥</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-rose-200 sm:text-3xl">
                Organize Blood Donation Camp
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                Create and manage blood donation events in your community. Help save lives by organizing donation
                drives.
              </p>
              <Link to="/blooddonationform" className="health-btn-danger w-full">
                Create Camp
              </Link>
            </div>
          </div>

          {/* View Camps Card */}
          <div className="health-card p-8 sm:p-10">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-500/15">
                <span className="text-4xl">📅</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-cyan-200 sm:text-3xl">
                Upcoming Blood Donation Camps
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                Browse and register for upcoming blood donation camps in your area. Find the perfect opportunity to
                donate.
              </p>
              <Link to="/blooddonationlist" className="health-btn-primary w-full">
                View Camps
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="health-card mt-12 p-6 sm:p-8">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-cyan-200">Why Blood Donation Camps Matter</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h4 className="mb-2 font-semibold text-rose-200">Save Lives</h4>
                <p className="text-sm text-slate-400">Every donation can save up to 3 lives</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="mb-2 font-semibold text-cyan-200">Build Community</h4>
                <p className="text-sm text-slate-400">Bring people together for a noble cause</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="mb-2 font-semibold text-emerald-200">Support Healthcare</h4>
                <p className="text-sm text-slate-400">Ensure hospitals have adequate blood supply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BloodCamp
