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
      className="section-shell min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/14 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-rose-500/12 blur-3xl"></div>
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
            Our Impact Gallery
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="section-subtitle mt-5">
            Witness the power of community coming together to save lives through blood donation
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="health-card group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
