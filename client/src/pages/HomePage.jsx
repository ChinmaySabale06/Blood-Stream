import React from 'react'
import Home from '../sections/Home'
import Gallery from '../sections/Gallery'
import UserDashboard from '../sections/UserDashboard'
import Contact from '../sections/Contact'
import BloodDonationBenefits from '../sections/BloodDonationBenefits'
import BloodCompatibilityChart from '../sections/BloodCompatibilityChart'
import BloodDonationInstructions from '../sections/BDInstructions'

const HomePage = () => {
  return (
    <>
      <Home />
      <BloodDonationBenefits />
      <BloodCompatibilityChart />
      <BloodDonationInstructions />
      <Gallery />
      <Contact />
    </>
  )
}

export default HomePage
