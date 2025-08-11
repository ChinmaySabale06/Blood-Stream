import React from 'react'

export default function BloodDonationInstructions() {
  return (
    <section className="bg-black py-12 px-5 text-white min-h-screen">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Heading */}
        <h1 className="text-4xl font-mono font-extrabold text-red-500 mb-6">Blood Donation Instructions</h1>

        {/* Steps for Donating Blood */}
        <div className="bg-green-950/50 rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg shadow-green-600 transition duration-300">
          <h2 className="text-2xl font-bold text-green-500 mb-3">1. Steps for Donating Blood</h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Register at the donation center with a valid photo ID.</li>
            <li>Complete a medical screening and answer questions about your health and travel history.</li>
            <li>A small blood sample will be taken to check your hemoglobin levels.</li>
            <li>Relax in a donation chair; your arm will be cleaned and a sterile needle inserted.</li>
            <li>Donate about 470ml (a pint) of blood; the process usually takes 8-10 minutes.</li>
            <li>After donation, a bandage will be applied and you’ll rest briefly before leaving.</li>
          </ol>
        </div>

        {/* Before and After Donation Tips */}
        <div className="bg-purple-950/30 rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg shadow-purple-600 transition duration-300">
          <h2 className="text-2xl font-bold text-violet-500 mb-3">2. Before & After Donation Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-purple-500">Before Donation</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Get a good night’s sleep.</li>
                <li>Eat a healthy, iron-rich meal (avoid fatty foods).</li>
                <li>Stay hydrated; drink plenty of water (avoid alcohol).</li>
                <li>Check if your medications are allowed for donation.</li>
                <li>Wear a shirt with sleeves you can roll up.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-purple-500">After Donation</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Rest for 10-15 minutes and have a snack and drink.</li>
                <li>Keep your bandage on and dry for several hours.</li>
                <li>Drink extra fluids for the next 24 hours.</li>
                <li>Avoid strenuous exercise and heavy lifting that day.</li>
                <li>If you feel dizzy, sit or lie down until you recover.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-pink-950/40 rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg shadow-pink-600 transition duration-300">
          <h2 className="text-2xl font-bold text-pink-600 mb-3">3. Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Age: 18–65 years<sup>*</sup></li>
            <li>Weight: At least 50kg (110lbs)</li>
            <li>Hemoglobin: Minimum 12.5g/dL</li>
            <li>Must be in good health and feeling well</li>
            <li>No recent infections, fever, or symptoms of illness</li>
            <li>No major surgery within past 6 months</li>
            <li>No high-risk activities for HIV/Hepatitis in recent months</li>
            <li>For recent tattoos/piercings, must wait 6 months</li>
          </ul>
          <p className="text-xs text-gray-400 mt-2">
            <sup>*</sup>Some centers allow 16–17 year-olds with consent; consider local guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
