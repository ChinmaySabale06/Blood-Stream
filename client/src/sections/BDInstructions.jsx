import React from "react"

export default function BloodDonationInstructions() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-500/5 rounded-full animate-bounce"></div>

        {/* Moving elements */}
        <div className="absolute top-20 left-1/3 w-4 h-4 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-red-400/60 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-5xl mx-auto space-y-12">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Blood Donation Guide
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Steps for Donating Blood */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-3xl shadow-2xl p-10 hover:bg-green-900/30 transition-all duration-500 group">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h2 className="text-3xl font-bold text-green-400">Steps for Donating Blood</h2>
          </div>
          <ol className="list-decimal list-inside space-y-4 ml-6 text-lg">
            <li className="hover:text-green-300 transition-colors duration-300">
              Register at the donation center with a valid photo ID.
            </li>
            <li className="hover:text-green-300 transition-colors duration-300">
              Complete a medical screening and answer questions about your health and travel history.
            </li>
            <li className="hover:text-green-300 transition-colors duration-300">
              A small blood sample will be taken to check your hemoglobin levels.
            </li>
            <li className="hover:text-green-300 transition-colors duration-300">
              Relax in a donation chair; your arm will be cleaned and a sterile needle inserted.
            </li>
            <li className="hover:text-green-300 transition-colors duration-300">
              Donate about 470ml (a pint) of blood; the process usually takes 8-10 minutes.
            </li>
            <li className="hover:text-green-300 transition-colors duration-300">
              After donation, a bandage will be applied and you'll rest briefly before leaving.
            </li>
          </ol>
        </div>

        {/* Before and After Donation Tips */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20 rounded-3xl shadow-2xl p-10 hover:bg-purple-900/30 transition-all duration-500 group">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h2 className="text-3xl font-bold text-purple-400">Before & After Donation Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-purple-500/10">
              <h3 className="font-bold text-2xl mb-4 text-purple-300 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-sm">
                  📋
                </span>
                Before Donation
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li className="hover:text-purple-300 transition-colors duration-300">Get a good night's sleep.</li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Eat a healthy, iron-rich meal (avoid fatty foods).
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Stay hydrated; drink plenty of water (avoid alcohol).
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Check if your medications are allowed for donation.
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Wear a shirt with sleeves you can roll up.
                </li>
              </ul>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-purple-500/10">
              <h3 className="font-bold text-2xl mb-4 text-purple-300 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-sm">
                  ✨
                </span>
                After Donation
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Rest for 10-15 minutes and have a snack and drink.
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Keep your bandage on and dry for several hours.
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Drink extra fluids for the next 24 hours.
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Avoid strenuous exercise and heavy lifting that day.
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  If you feel dizzy, sit or lie down until you recover.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20 rounded-3xl shadow-2xl p-10 hover:bg-pink-900/30 transition-all duration-500 group">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h2 className="text-3xl font-bold text-pink-400">Eligibility Criteria</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
              <li className="hover:text-pink-300 transition-colors duration-300">
                Age: 18–65 years<sup className="text-pink-400">*</sup>
              </li>
              <li className="hover:text-pink-300 transition-colors duration-300">Weight: At least 50kg (110lbs)</li>
              <li className="hover:text-pink-300 transition-colors duration-300">Hemoglobin: Minimum 12.5g/dL</li>
              <li className="hover:text-pink-300 transition-colors duration-300">
                Must be in good health and feeling well
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
              <li className="hover:text-pink-300 transition-colors duration-300">
                No recent infections, fever, or symptoms of illness
              </li>
              <li className="hover:text-pink-300 transition-colors duration-300">
                No major surgery within past 6 months
              </li>
              <li className="hover:text-pink-300 transition-colors duration-300">
                No high-risk activities for HIV/Hepatitis in recent months
              </li>
              <li className="hover:text-pink-300 transition-colors duration-300">
                For recent tattoos/piercings, must wait 6 months
              </li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-pink-500/10 rounded-xl border border-pink-500/20">
            <p className="text-sm text-pink-200">
              <sup className="text-pink-400">*</sup>Some centers allow 16–17 year-olds with consent; consider local
              guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
