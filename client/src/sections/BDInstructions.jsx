import React from "react"

export default function BloodDonationInstructions() {
  return (
    <section className="section-shell min-h-screen text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-rose-500/12 blur-3xl"></div>
      </div>

      <div className="section-container space-y-8 sm:space-y-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="section-title bg-gradient-to-r from-rose-300 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
            Blood Donation Guide
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-rose-500 to-cyan-500"></div>
        </div>

        {/* Steps for Donating Blood */}
        <div className="health-card p-6 sm:p-8 lg:p-10">
          <div className="flex items-center mb-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h2 className="text-2xl font-bold text-emerald-200 sm:text-3xl">Steps for Donating Blood</h2>
          </div>
          <ol className="ml-6 list-decimal list-inside space-y-3 text-base text-slate-200 sm:text-lg">
            <li>
              Register at the donation center with a valid photo ID.
            </li>
            <li>
              Complete a medical screening and answer questions about your health and travel history.
            </li>
            <li>
              A small blood sample will be taken to check your hemoglobin levels.
            </li>
            <li>
              Relax in a donation chair; your arm will be cleaned and a sterile needle inserted.
            </li>
            <li>
              Donate about 470ml (a pint) of blood; the process usually takes 8-10 minutes.
            </li>
            <li>
              After donation, a bandage will be applied and you'll rest briefly before leaving.
            </li>
          </ol>
        </div>

        {/* Before and After Donation Tips */}
        <div className="health-card p-6 sm:p-8 lg:p-10">
          <div className="flex items-center mb-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h2 className="text-2xl font-bold text-violet-200 sm:text-3xl">Before & After Donation Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="health-panel p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold text-violet-200 sm:text-2xl">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-sm">
                  📋
                </span>
                Before Donation
              </h3>
              <ul className="list-disc list-inside space-y-3 text-slate-200">
                <li>Get a good night's sleep.</li>
                <li>
                  Eat a healthy, iron-rich meal (avoid fatty foods).
                </li>
                <li>
                  Stay hydrated; drink plenty of water (avoid alcohol).
                </li>
                <li>
                  Check if your medications are allowed for donation.
                </li>
                <li>
                  Wear a shirt with sleeves you can roll up.
                </li>
              </ul>
            </div>
            <div className="health-panel p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold text-violet-200 sm:text-2xl">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-sm">
                  ✨
                </span>
                After Donation
              </h3>
              <ul className="list-disc list-inside space-y-3 text-slate-200">
                <li>
                  Rest for 10-15 minutes and have a snack and drink.
                </li>
                <li>
                  Keep your bandage on and dry for several hours.
                </li>
                <li>
                  Drink extra fluids for the next 24 hours.
                </li>
                <li>
                  Avoid strenuous exercise and heavy lifting that day.
                </li>
                <li>
                  If you feel dizzy, sit or lie down until you recover.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="health-card p-6 sm:p-8 lg:p-10">
          <div className="flex items-center mb-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 text-white">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h2 className="text-2xl font-bold text-rose-200 sm:text-3xl">Eligibility Criteria</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-3 text-base text-slate-200 sm:text-lg">
              <li>
                Age: 18–65 years<sup className="text-pink-400">*</sup>
              </li>
              <li>Weight: At least 50kg (110lbs)</li>
              <li>Hemoglobin: Minimum 12.5g/dL</li>
              <li>
                Must be in good health and feeling well
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-3 text-base text-slate-200 sm:text-lg">
              <li>
                No recent infections, fever, or symptoms of illness
              </li>
              <li>
                No major surgery within past 6 months
              </li>
              <li>
                No high-risk activities for HIV/Hepatitis in recent months
              </li>
              <li>
                For recent tattoos/piercings, must wait 6 months
              </li>
            </ul>
          </div>
          <div className="mt-6 rounded-xl border border-rose-300/30 bg-rose-500/10 p-4">
            <p className="text-sm text-rose-100">
              <sup className="text-pink-400">*</sup>Some centers allow 16–17 year-olds with consent; consider local
              guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
