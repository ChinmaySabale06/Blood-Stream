import React from 'react'

// BloodCompatibilityChart.jsx
const compatibility = [
  { type: 'O-', donateTo: 'All blood types', receiveFrom: 'O-' },
  { type: 'O+', donateTo: 'O+, A+, B+, AB+', receiveFrom: 'O-, O+' },
  { type: 'A-', donateTo: 'A+, A-, AB+, AB-', receiveFrom: 'O-, A-' },
  { type: 'A+', donateTo: 'A+, AB+', receiveFrom: 'O-, O+, A-, A+' },
  { type: 'B-', donateTo: 'B+, B-, AB+, AB-', receiveFrom: 'O-, B-' },
  { type: 'B+', donateTo: 'B+, AB+', receiveFrom: 'O-, O+, B-, B+' },
  { type: 'AB-', donateTo: 'AB+, AB-', receiveFrom: 'O-, A-, B-, AB-' },
  { type: 'AB+', donateTo: 'AB+', receiveFrom: 'All blood types' },
];

export default function BloodCompatibilityChart() {
  return (
    <section className="bg-black py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto bg-blue-950/40 rounded-xl shadow-lg hover:shadow-xl shadow-blue-500 transition duration-300 p-10">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Blood Donation Compatibility</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-3 border-b border-blue-700 text-lg">Blood Type</th>
                <th className="px-4 py-3 border-b border-blue-700 text-lg">Can Donate To</th>
                <th className="px-4 py-3 border-b border-blue-700 text-lg">Can Receive From</th>
              </tr>
            </thead>
            <tbody>
              {compatibility.map((item, idx) => (
                <tr key={item.type} className={idx % 2 === 0 ? 'bg-blue-900/50' : 'bg-blue-950/50'}>
                  <td className="px-4 py-3 border-b border-blue-700 font-semibold text-red-600 text-center">{item.type}</td>
                  <td className="px-4 py-3 border-b border-blue-700 text-center">{item.donateTo}</td>
                  <td className="px-4 py-3 border-b border-blue-700 text-center">{item.receiveFrom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-gray-400 italic text-sm">
          Tip: Universal donors (O-) can donate to anyone. Universal recipients (AB+) can receive from anyone.
        </p>
      </div>
    </section>
  );
}
