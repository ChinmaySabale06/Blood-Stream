import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const VerifyOrganization = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    registrationNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    organizationType: 'Hospital',
    website: '',
    documents: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'documents') {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit handler (customize for your backend/integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Organization submission logic here!');
    // TODO: Add actual form submission logic
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-700 flex items-center justify-center py-12 px-4">
        <div className="bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-xl border-t-8 border-red-600">
          <h2 className="text-3xl font-bold mb-2 text-gray-100 font-serif">
            Verify as <span className="text-red-600">Organization</span>
          </h2>
          <p className="mb-6 text-gray-100 font-medium">
            Enter your hospital or medical organization's details below. Our team will review and verify your information.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold text-gray-100">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                required
                className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                value={formData.organizationName}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">Registration Number</label>
                <input
                  type="text"
                  name="registrationNumber"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">Type</label>
                <select
                  name="organizationType"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.organizationType}
                  onChange={handleChange}
                >
                  <option className='bg-gray-900 text-gray-100'>Hospital</option>
                  <option className='bg-gray-900 text-gray-100'>Blood Bank</option>
                  <option className='bg-gray-900 text-gray-100'>Clinic</option>
                  <option className='bg-gray-900 text-gray-100'>Health NGO</option>
                  <option className='bg-gray-900 text-gray-100'>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-semibold text-gray-100">Address</label>
              <input
                type="text"
                name="address"
                required
                className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">State</label>
                <input
                  type="text"
                  name="state"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.contactEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold text-gray-100">Contact Phone</label>
                <input
                  type="tel"
                  name="contactPhone"
                  required
                  className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                  value={formData.contactPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold text-gray-100">Website (optional)</label>
              <input
                type="url"
                name="website"
                className="w-full border border-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none text-gray-100"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-100">Upload Registration/Accreditation Documents</label>
              <input
                type="file"
                name="documents"
                accept=".pdf,.jpg,.png"
                multiple
                className="block mt-1 text-gray-300"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-white font-bold py-3 px-4 rounded-lg mt-2 text-lg shadow-md"
            >
              Submit for Verification
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOrganization;
