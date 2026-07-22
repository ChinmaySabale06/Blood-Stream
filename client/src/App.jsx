import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './sections/UserDashboard';
import VerifyOrganization from './pages/VerifyOrganization';
import NearbyBloodBanks from './components/NearbyBloodBanks';
import BloodDonationForm from './components/BloodDonationForm';
import BloodCamp from './pages/BloodCamp';
import BloodDonationList from './components/BloodDonationList';
import { SignedIn } from '@clerk/clerk-react';
import UserHandler from './UserHandler';
import AuthTokenSync from './AuthTokenSync';
import BloodStockDashboard from './components/BloodStockDashboard';
import Appointments from './components/Appointments';
import DonorRecord from './components/DonorRecords';
import Reports from './components/Reports';
import RequestBlood from './components/RequestBlood';

const App = () => {

  return (
    <>
    <AuthTokenSync />
    <SignedIn>
      <UserHandler />
    </SignedIn>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <Route path='/userdashboard' element={<SignedIn> <UserDashboard /> </SignedIn>} />
        <Route path='/verifyorganization' element={<SignedIn> <VerifyOrganization /> </SignedIn>} />
        <Route path='/nearbybloodbanks' element={<SignedIn> <NearbyBloodBanks /> </SignedIn>} />
        <Route path='/bloodcamp' element={<SignedIn> <BloodCamp /> </SignedIn>} />
        <Route path='/blooddonationform' element={<SignedIn> <BloodDonationForm /> </SignedIn>} />
        <Route path='/blooddonationlist' element={<SignedIn> <BloodDonationList /> </SignedIn>} />
        <Route path='/bloodstock' element={<SignedIn> <BloodStockDashboard /> </SignedIn>} />
        <Route path='/appointments' element={<SignedIn> <Appointments /> </SignedIn>} />
        <Route path='/donorrecords' element={<SignedIn> <DonorRecord /> </SignedIn>} />
        <Route path='/reports' element={<SignedIn> <Reports /> </SignedIn>} />
        <Route path='/requestblood' element={<SignedIn> <RequestBlood /> </SignedIn>} />
      </Routes>
    </>
  );
};

export default App;