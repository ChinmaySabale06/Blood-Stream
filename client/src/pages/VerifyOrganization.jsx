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
      <div className="section-shell flex min-h-screen items-center justify-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-cyan-500/16 blur-3xl"></div>
          <div className="absolute bottom-[8%] right-[10%] h-72 w-72 rounded-full bg-rose-500/16 blur-3xl"></div>
        </div>

        <div className="health-card w-full max-w-4xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Verify as <span className="text-rose-300">Organization</span>
          </h2>
          <p className="mb-8 mt-2 text-slate-300">
            Enter your hospital or medical organization's details below. Our team will review and verify your information.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                required
                className="health-input"
                value={formData.organizationName}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">Registration Number</label>
                <input
                  type="text"
                  name="registrationNumber"
                  required
                  className="health-input"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">Type</label>
                <select
                  name="organizationType"
                  required
                  className="health-select"
                  value={formData.organizationType}
                  onChange={handleChange}
                >
                  <option className='bg-slate-900 text-slate-100'>Hospital</option>
                  <option className='bg-slate-900 text-slate-100'>Blood Bank</option>
                  <option className='bg-slate-900 text-slate-100'>Clinic</option>
                  <option className='bg-slate-900 text-slate-100'>Health NGO</option>
                  <option className='bg-slate-900 text-slate-100'>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Address</label>
              <input
                type="text"
                name="address"
                required
                className="health-input"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="health-input"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">State</label>
                <input
                  type="text"
                  name="state"
                  required
                  className="health-input"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  required
                  className="health-input"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  className="health-input"
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  required
                  className="health-input"
                  value={formData.contactEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-slate-200">Contact Phone</label>
                <input
                  type="tel"
                  name="contactPhone"
                  required
                  className="health-input"
                  value={formData.contactPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Website (optional)</label>
              <input
                type="url"
                name="website"
                className="health-input"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Upload Registration/Accreditation Documents</label>
              <input
                type="file"
                name="documents"
                accept=".pdf,.jpg,.png"
                multiple
                className="mt-1 block w-full rounded-xl border border-slate-300/30 bg-slate-950/40 px-3 py-2 text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-3 file:py-2 file:text-white"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="health-btn-danger mt-2 w-full py-3.5 text-base"
            >
              Submit for Verification
            </button>
          </form>
        </div>
      </div>
  );
};

export default VerifyOrganization;
