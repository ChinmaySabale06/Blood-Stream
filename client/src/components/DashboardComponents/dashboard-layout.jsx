"use client"

import React from "react"
import { useState } from "react"
import { UserButton, useUser } from "@clerk/clerk-react"
import DashboardSidebar from "./dashboard-sidebar"

export default function DashboardLayout({ title, subtitle, active, children }) {
  const { user } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-cyan-500/13 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-rose-500/13 blur-3xl" />
      </div>

      {/* Sidebar */}
      <DashboardSidebar active={active} mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main */}
      <div className="relative z-10 flex flex-1 flex-col overflow-auto">
        {/* Top header */}
        <header className="health-card m-4 flex min-h-20 items-center justify-between px-4 py-4 text-white sm:m-6 sm:px-8">
          <div className="flex items-start gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              className="mt-1 rounded-lg border border-white/20 bg-white/5 px-2.5 py-1.5 text-slate-100 hover:bg-white/10 lg:hidden"
            >
              ☰
            </button>
            <div>
            <h1 className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-2xl font-bold text-transparent">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-sm text-slate-300">{subtitle}</p>
            ) : (
              <p className="text-sm text-slate-300">Manage and track your blood donation operations</p>
            )}
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="hidden text-sm text-slate-300 sm:inline">
              Welcome, <span className="font-semibold text-cyan-200">{user?.fullName || "User"}</span>
            </span>
            <div className="profile-frame rounded-full">
              <div className="rounded-full border border-cyan-300/40 bg-slate-900/70 p-0.5">
              <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 text-white">{children}</main>
      </div>
    </div>
  )
}
