import React from 'react'
import { Link } from 'react-router-dom'

const BloodCamp = () => {
  return (
    <div>
      <h1>Organize Blood Donation Camp</h1>
      <Link to="/blooddonationform"> Blood Donation Form</Link>
      <h1>Upcoming Blood Donation Camps</h1>
      <Link to="/blooddonationlist"> Blood Donation List</Link>
    </div>
  )
}

export default BloodCamp
