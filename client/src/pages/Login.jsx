import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className='w-full h-screen bg-gradient-to-r from-violet-800 via-purple-800/70 to-violet-800 flex items-center justify-center'>
        <SignIn />
      </div>
    </>
  )
}

export default Login
