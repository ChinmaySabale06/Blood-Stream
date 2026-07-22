import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
      <div className='section-shell flex min-h-screen items-center justify-center'>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-12 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute bottom-8 right-8 h-72 w-72 rounded-full bg-indigo-500/18 blur-3xl"></div>
        </div>
        <div className="health-card animate-page-enter p-3">
        <SignIn />
        </div>
      </div>
  )
}

export default Login
