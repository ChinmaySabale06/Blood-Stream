"use client"

import React from "react"
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

export default function DashboardSidebar({ active }) {
  const location = useLocation()
  const isActive = (item) =>
    active ? item.key === active : location.pathname === item.href || location.pathname.startsWith(item.href + "/")

  return (
    <aside className="relative z-10 w-80 backdrop-blur-xl bg-white/10 border-r border-white/20 text-white flex flex-col p-6">
      <Link to="/" className="text-4xl font-mono font-bold mb-8 hover:scale-105 transition-transform duration-300">
        Blood<span className="text-red-400">.Stream</span>
      </Link>

      <nav className="flex flex-col gap-2 text-sm flex-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.key}
            to={item.href}
            className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
              isActive(item)
                ? "bg-blue-500/30 border border-blue-400/50 text-blue-200"
                : "hover:bg-white/10 border border-transparent hover:border-white/20"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </aside>
  )
}
