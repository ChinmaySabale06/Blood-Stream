"use client"

import React from "react"
import { Link } from "react-router-dom"

const BloodBankNearMe = () => {
  return (
    <section className="section-shell min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-4 top-16 h-72 w-72 rounded-full bg-cyan-500/18 blur-3xl"></div>
        <div className="absolute -left-10 bottom-10 h-80 w-80 rounded-full bg-rose-500/12 blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="health-card p-6 sm:p-8 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="section-title bg-gradient-to-r from-cyan-200 via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Find Blood Banks Near You
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          <p className="section-subtitle mb-8">
            Locate nearby blood banks to donate or receive blood quickly and safely. Keeping this information handy can
            save lives in emergencies—discover trusted blood banks in your area below.
          </p>

          {/* Quick Search UI (frontend-only) */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="City or ZIP code"
              className="health-input"
            />
            <select className="health-select">
              <option className="bg-slate-900">Radius: 5 km</option>
              <option className="bg-slate-900">Radius: 10 km</option>
              <option className="bg-slate-900">Radius: 25 km</option>
              <option className="bg-slate-900">Radius: 50 km</option>
            </select>
            <button className="health-btn-primary w-full">
              Search
            </button>
          </div>

          <div className="flex justify-center">
            <Link to="/nearbybloodbanks" className="health-btn-danger">
              Blood Banks Near Me
            </Link>
          </div>

          {/* Tips */}
          <div className="health-panel mt-10 p-6">
            <ul className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400"></span>
                Call ahead to confirm availability.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                Carry a valid photo ID for donations.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                Check opening hours before visiting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BloodBankNearMe
