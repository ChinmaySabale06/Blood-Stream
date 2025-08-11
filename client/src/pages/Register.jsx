import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Register = () => {
  return (
    <>
      <div className='w-full h-screen bg-gradient-to-r from-blue-900 via-blue-800/70 to-blue-900 flex items-center justify-center'>
        <SignUp />
      </div>
    </>
  )
}

export default Register
