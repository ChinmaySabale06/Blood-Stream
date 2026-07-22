import React from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"

const Home = () => {
  const { isSignedIn } = useUser()

  return (
    <>
      <Navbar />
      <div className="section-shell flex min-h-screen items-center pt-24 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[12%] right-[8%] h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[12%] h-72 w-72 rounded-full bg-rose-500/12 blur-3xl"></div>
          <div className="absolute top-2/3 left-1/2 h-44 w-44 rounded-full bg-blue-500/16 blur-3xl"></div>
          <div className="animate-float-soft absolute left-[20%] top-1/4 h-3 w-3 rounded-full bg-cyan-300/50 blur-[1px]"></div>
          <div className="animate-float-soft absolute right-[16%] top-2/3 h-2 w-2 rounded-full bg-rose-300/50 blur-[1px] [animation-delay:400ms]"></div>
        </div>

        <div className="section-container animate-page-enter text-center">
          <div className="health-card relative overflow-hidden p-8 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-full border border-cyan-200/20 bg-cyan-500/10 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Save Lives Today</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">Welcome to </span>
                <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">BloodStream</span>
              </h1>
              <h2 className="mt-4 text-xl font-medium text-cyan-100/85 sm:text-2xl">Your Lifeline Network</h2>
              <p className="mx-auto mb-10 mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Connect with donors, find blood banks, and make a difference in your community. Every drop counts in the mission to save lives.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {isSignedIn ? (
                  <>
                    <Link to="/verifyorganization" className="health-btn-danger min-w-[220px]">
                      Verify Organization
                    </Link>
                    <Link to="/bloodcamp" className="health-btn-primary min-w-[220px]">
                      Blood Camps
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/register" className="health-btn-danger min-w-[220px]">
                      Get Started
                    </Link>
                    <Link to="/login" className="health-btn-ghost min-w-[220px]">
                      Join Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
