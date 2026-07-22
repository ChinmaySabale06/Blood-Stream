"use client"

import React from "react"
import { Link } from "react-router-dom"
import { UserButton, useUser } from "@clerk/clerk-react"

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <nav className="fixed top-0 left-1/2 z-50 w-full max-w-screen-xl -translate-x-1/2 px-4 pt-4">
      <div className="health-card flex h-20 items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-lg font-bold text-white shadow-lg shadow-rose-900/30 group-hover:scale-105">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-lg font-bold tracking-tight text-transparent">
              BloodStream
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-200/85">
              Lifeline Network
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 md:flex">
          {[
            { name: "Home", path: "/" },
            { name: "Gallery", path: "#gallery" },
            { name: "Contact", path: "#contact" },
            { name: "Enquiry", path: "#enquiry" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth / CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isSignedIn ? (
            <>
              <Link
                to="/userdashboard"
                className="hidden rounded-xl border border-cyan-300/35 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10 sm:inline-flex"
              >
                Dashboard
              </Link>
              <div className="profile-frame rounded-full">
                <div className="rounded-full border border-cyan-300/40 bg-slate-900/70 p-0.5">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10 sm:inline-flex"
              >
                Register
              </Link>
              <Link to="/login" className="health-btn-primary !px-4 !py-2">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
