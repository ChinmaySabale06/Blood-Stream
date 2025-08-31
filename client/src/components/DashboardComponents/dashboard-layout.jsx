"use client"

import React from "react"
import { UserButton, useUser } from "@clerk/clerk-react"
import DashboardSidebar from "./dashboard-sidebar"

export default function DashboardLayout({ title, subtitle, active, children }) {
  const { user } = useUser()

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-500/10 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-500/10 rounded-full animate-ping" />
      </div>

      {/* Sidebar */}
      <DashboardSidebar active={active} />

      {/* Main */}
      <div className="flex-1 overflow-auto flex flex-col relative z-10">
        {/* Top header */}
        <header className="m-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl text-white h-20 shadow-2xl flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-sm text-gray-300">{subtitle}</p>
            ) : (
              <p className="text-sm text-gray-300">Manage and track your blood donation operations</p>
            )}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-300">
              Welcome, <span className="text-blue-300 font-semibold">{user?.fullName || "User"}</span>
            </span>
            <div className="scale-110">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 text-white">{children}</main>
      </div>

      {/* Floating helpers */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
