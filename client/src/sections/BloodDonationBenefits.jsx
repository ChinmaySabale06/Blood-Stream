import React from 'react'
import { Link } from 'react-router-dom';

export default function BloodDonationBenefits() {
  return (
    <section className="bg-black py-12 px-6 text-white">
      <div className="max-w-4xl mx-auto bg-red-950/30 rounded-xl shadow-md hover:shadow-lg shadow-red-600 transition duration-300 p-10 space-y-8">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Why Donate Blood?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 mt-1">✓</span>
            <span>
              <strong>Save lives:</strong> One donation can help up to 3 people in need.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 mt-1">✓</span>
            <span>
              <strong>Boosts your health:</strong> Reduces harmful iron stores, lowers risk of heart disease, and stimulates blood cell production.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 mt-1">✓</span>
            <span>
              <strong>Free health checkup:</strong> Each donation includes free screening for various diseases.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 mt-1">✓</span>
            <span>
              <strong>Feel good factor:</strong> Giving blood fosters community and gives you a sense of accomplishment.
            </span>
          </li>
        </ul>
        <div className="pt-4">
          <Link to='/nearbybloodbanks' className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold shadow-md hover:bg-red-700 transition" href="#">
            Become a Donor Today
          </Link>
        </div>
      </div>
    </section>
  );
}
