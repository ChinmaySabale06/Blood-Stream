"use client"

import React from "react"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserButton } from "@clerk/clerk-react"

const NAV_ITEMS = [
  { key: "dashboard", name: "Dashboard", href: "/userdashboard", icon: "📊" },
  { key: "bloodstock", name: "Blood Stock", href: "/bloodstock", icon: "🩸" },
  { key: "donors", name: "Donor Records", href: "/donorrecords", icon: "👥" },
  { key: "request", name: "Request Blood", href: "/requestblood", icon: "📋" },
  { key: "appointments", name: "Appointments", href: "/appointments", icon: "📅" },
  { key: "reports", name: "Reports", href: "/reports", icon: "📈" },
]

export default function DashboardSidebar({ active, mobileOpen = false, onClose }) {
  const location = useLocation()
  const isActive = (item) =>
    active ? item.key === active : location.pathname === item.href || location.pathname.startsWith(item.href + "/")

  useEffect(() => {
    if (mobileOpen) {
      onClose?.()
    }
  }, [location.pathname])

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-20 bg-slate-950/65 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r border-white/10 bg-slate-950/88 p-5 text-white backdrop-blur-2xl transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:flex"
        }`}
      >
      <div className="mb-8 flex items-center justify-between">
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
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="rounded-lg border border-white/20 bg-white/5 px-2 py-1 text-slate-200 hover:bg-white/10 lg:hidden"
        >
          ✕
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-2 text-sm">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.key}
            to={item.href}
            onClick={onClose}
            className={`flex items-center space-x-3 rounded-xl px-4 py-3.5 transition-colors ${
              isActive(item)
                ? "border border-cyan-400/35 bg-cyan-500/20 text-cyan-100"
                : "border border-transparent text-slate-300 hover:border-white/15 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="profile-frame mt-auto">
        <div className="rounded-xl border border-cyan-300/25 bg-slate-900/70 p-2">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </aside>
    </>
  )
}
