"use client"

import React from "react"
import { Link } from "react-router-dom"
import { UserButton, useClerk, useUser } from "@clerk/clerk-react"

export default function Navbar() {
  const { isSignedIn } = useUser()
  const { signOut } = useClerk()

  return (
    <nav className="fixed top-0 left-1/2 w-full -translate-x-1/2 max-w-screen-xl h-20 px-4 z-50">
      <div className="h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-between px-6">
        {/* Brand */}
        <Link to="/" className="font-mono text-2xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-400 via-red-400 to-indigo-400 bg-clip-text text-transparent">
            Blood
          </span>
          <span className="text-red-400">.Stream</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-gray-200 hover:text-blue-300 transition">
            Home
          </Link>
          <a href="#gallery" className="text-sm text-gray-200 hover:text-blue-300 transition">
            Gallery
          </a>
          <a href="#contact" className="text-sm text-gray-200 hover:text-blue-300 transition">
            Contact Us
          </a>
          <a href="#enquiry" className="text-sm text-gray-200 hover:text-blue-300 transition">
            Enquiry
          </a>
        </div>

        {/* Auth / CTAs */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <>
              <Link
                to="/userdashboard"
                className="hidden sm:inline-block px-4 py-2 rounded-xl border border-blue-400/40 text-blue-200 hover:bg-white/10 transition"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl border border-red-400/50 text-red-200 hover:bg-white/10 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
