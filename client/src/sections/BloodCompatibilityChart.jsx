"use client"

import React from "react"

// BloodCompatibilityChart.jsx
const compatibility = [
  { type: "O-", donateTo: "All blood types", receiveFrom: "O-" },
  { type: "O+", donateTo: "O+, A+, B+, AB+", receiveFrom: "O-, O+" },
  { type: "A-", donateTo: "A+, A-, AB+, AB-", receiveFrom: "O-, A-" },
  { type: "A+", donateTo: "A+, AB+", receiveFrom: "O-, O+, A-, A+" },
  { type: "B-", donateTo: "B+, B-, AB+, AB-", receiveFrom: "O-, B-" },
  { type: "B+", donateTo: "B+, AB+", receiveFrom: "O-, O+, B-, B+" },
  { type: "AB-", donateTo: "AB+, AB-", receiveFrom: "O-, A-, B-, AB-" },
  { type: "AB+", donateTo: "AB+", receiveFrom: "All blood types" },
]

export default function BloodCompatibilityChart() {
  return (
    <section className="section-shell min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-cyan-500/16 blur-3xl"></div>
        <div className="absolute -left-16 top-1/2 h-64 w-64 rounded-full bg-rose-500/14 blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="health-card p-5 sm:p-8 lg:p-10">
          <div className="text-center mb-12">
            <h2 className="section-title bg-gradient-to-r from-cyan-200 to-slate-100 bg-clip-text text-transparent">
              Blood Compatibility Matrix
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm sm:text-base">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-4 text-left text-sm font-semibold uppercase tracking-wider text-cyan-200 sm:px-6">Blood Type</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold uppercase tracking-wider text-cyan-200 sm:px-6">Can Donate To</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold uppercase tracking-wider text-cyan-200 sm:px-6">Can Receive From</th>
                </tr>
              </thead>
              <tbody>
                {compatibility.map((item, idx) => (
                  <tr
                    key={item.type}
                    className={`border-b border-white/10 transition-colors hover:bg-white/10 ${
                      idx % 2 === 0 ? "bg-white/5" : "bg-transparent"
                    }`}
                  >
                    <td className="px-4 py-4 sm:px-6">
                      <span className="inline-flex rounded-full border border-rose-400/35 bg-rose-500/14 px-3 py-1.5 text-sm font-bold text-rose-200 sm:px-4 sm:text-base">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-200 sm:px-6">{item.donateTo}</td>
                    <td className="px-4 py-4 text-slate-200 sm:px-6">{item.receiveFrom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="health-panel mt-8 p-5">
            <p className="text-center text-sm italic text-cyan-100 sm:text-base">
              💡 <strong>Pro Tip:</strong> Universal donors (O-) can save anyone's life. Universal recipients (AB+) can
              receive from anyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
