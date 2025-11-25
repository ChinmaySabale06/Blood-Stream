"use client"

import React from "react"
import { Link } from "react-router-dom"
import { UserButton, useClerk, useUser } from "@clerk/clerk-react"

export default function Navbar() {
  const { isSignedIn } = useUser()
  const { signOut } = useClerk()

  return (
    <nav className="fixed top-0 left-1/2 w-full -translate-x-1/2 max-w-screen-xl h-24 px-4 z-50 pt-4">
      <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-between px-8 transition-all duration-300 hover:bg-white/10">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              BloodStream
            </span>
            <span className="text-[10px] uppercase tracking-widest text-blue-300/80 font-medium">
              Lifeline Network
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-white/5 border border-white/5">
          {[
            { name: "Home", path: "/" },
            { name: "Gallery", path: "#gallery" },
            { name: "Contact", path: "#contact" },
            { name: "Enquiry", path: "#enquiry" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Auth / CTAs */}
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <Link
                to="/userdashboard"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-blue-400/30 text-blue-200 hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300 text-sm font-medium"
              >
                Dashboard
              </Link>
              <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="bg-slate-900 rounded-full p-0.5">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
              {/* <button
                onClick={() => signOut()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 transition-all duration-300 text-sm font-medium shadow-lg shadow-red-500/20"
              >
                Logout
              </button> */}
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="group relative px-6 py-2.5 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 transition-transform duration-300 group-hover:scale-105"></div>
                <span className="relative z-10 text-white text-sm font-medium">Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
