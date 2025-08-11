import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    campName: '',
    organizerName: '',
    contactNumber: '',
    date: '',
    location: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/camps', formData);
      alert('Camp successfully submitted!');
      navigate('/bloodcamp');
      // You might want to reset the form here
    } catch (error) {
      console.error('Error submitting camp:', error);
      alert('Failed to submit camp.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-10">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-extrabold text-red-400 mb-8 text-center tracking-wide">Organize Blood Donation Camp</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="campName">Camp Name</label>
            <input
              type="text"
              name="campName"
              id="campName"
              value={formData.campName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none transition"
              placeholder="Community Blood Drive"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="organizerName">Organizer Name</label>
            <input
              type="text"
              name="organizerName"
              id="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none transition"
              placeholder="Who is organizing?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              maxLength={15}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none transition"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-red-400 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none transition"
              placeholder="Event address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none transition resize-none"
              placeholder="Short event description"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold text-lg tracking-wide shadow-lg transition duration-150"
          >
            Organize Camp
          </button>
        </form>
      </div>
    </section>
  );
};

export default BloodDonationForm;
