"use client"

import React from "react"
import donation1 from "../assets/donation1.jpg"
import donation2 from "../assets/donation2.jpg"
import donation3 from "../assets/donation3.jpg"
import donation4 from "../assets/donation4.jpg"

const Gallery = () => {
  const galleryImages = [
    {
      image: donation1,
      title: "Blood Drive 2022",
      description: "Organized in partnership with Red Cross.",
    },
    {
      image: donation2,
      title: "Awareness Event",
      description: "Educating people on the importance of blood donation.",
    },
    {
      image: donation3,
      title: "Camp at City Hospital",
      description: "Collected 120+ units of blood.",
    },
    {
      image: donation4,
      title: "Volunteer Group",
      description: "Our amazing volunteer team at work.",
    },
  ]

  return (
    <div
      id="gallery"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-10 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-500/10 rounded-full animate-ping"></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Our Impact Gallery
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Witness the power of community coming together to save lives through blood donation
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
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
    </div>
  )
}

export default Gallery
