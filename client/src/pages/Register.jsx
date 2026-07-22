import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Register = () => {
  return (
      <div className='section-shell flex min-h-screen items-center justify-center'>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-8 top-12 h-64 w-64 rounded-full bg-rose-500/18 blur-3xl"></div>
          <div className="absolute bottom-6 left-8 h-72 w-72 rounded-full bg-cyan-500/18 blur-3xl"></div>
        </div>
        <div className="health-card animate-page-enter p-3">
        <SignUp />
        </div>
      </div>
  )
}

export default Register
