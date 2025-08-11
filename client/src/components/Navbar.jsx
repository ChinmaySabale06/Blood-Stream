import { UserButton, useUser, useClerk } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();

  return (
    <nav className='fixed top-0 left-1/2 w-full transform -translate-x-1/2 max-w-screen-xl h-24 bg-gray-900/80 border border-blue-600 text-white mt-4 rounded-full z-50 shadow-sm hover:shadow-md hover:border-red-600 shadow-red-600 transition duration-300'>
      <div className='max-w-7xl mx-auto h-full px-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <a href="#" className='font-mono text-3xl font-bold'>Blood<span className='text-red-600'>.Stream</span></a>
        </div>

        <div className='md:flex items-center gap-6 font-serif'>
          <a href="#" className='active hover:text-red-500 transition'>Home</a>
          <a href="#gallery" className='hover:text-red-500 transition'>Gallery</a>
          <a href="#contact" className='hover:text-red-500 transition'>Contact Us</a>
          <a href="#" className='hover:text-red-500 transition'>Enquiry</a>
        </div>

        <div className='flex items-center gap-4 font-serif'>
          {isSignedIn ? (
            <>
              <Link to="/userdashboard" className='hover:text-red-500 transition'>Dashboard</Link>
              <UserButton afterSignOutUrl="/" />
              <button
                onClick={() => signOut()}
                className='px-4 py-2 border border-red-600 rounded-full hover:bg-red-600 transition'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className='px-4 py-2 border border-red-600 rounded-full hover:bg-red-600 transition'>Register</Link>
              <Link to="/login" className='px-4 py-2 border border-red-600 rounded-full hover:bg-red-600 transition'>Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar
