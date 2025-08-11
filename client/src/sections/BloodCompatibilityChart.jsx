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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-red-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full animate-ping"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 hover:bg-white/10 transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-4">
              Blood Compatibility Matrix
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b border-blue-500/30">
                  <th className="px-6 py-4 text-xl font-semibold text-blue-300">Blood Type</th>
                  <th className="px-6 py-4 text-xl font-semibold text-blue-300">Can Donate To</th>
                  <th className="px-6 py-4 text-xl font-semibold text-blue-300">Can Receive From</th>
                </tr>
              </thead>
              <tbody>
                {compatibility.map((item, idx) => (
                  <tr
                    key={item.type}
                    className={`border-b border-blue-700/20 hover:bg-white/5 transition-all duration-300 ${
                      idx % 2 === 0 ? "bg-blue-900/20" : "bg-indigo-900/20"
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-2xl text-red-400 text-center">
                      <span className="inline-block px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-200">{item.donateTo}</td>
                    <td className="px-6 py-4 text-center text-gray-200">{item.receiveFrom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl border border-blue-500/20">
            <p className="text-blue-200 italic text-center text-lg">
              💡 <strong>Pro Tip:</strong> Universal donors (O-) can save anyone's life. Universal recipients (AB+) can
              receive from anyone.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
