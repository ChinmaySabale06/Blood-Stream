import React from 'react'
import Navbar from '../components/Navbar';
import home from '../assets/home.jpg';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';

const Home = () => {
  const {isSignedIn} = useUser();

  useGSAP(() => {
    gsap.fromTo('.t1', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y:0,
      delay: 1,
      stagger: 0.1
    })

    gsap.fromTo('#p1', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className=' w-full h-screen flex items-center justify-center bg-cover bg-center text-white font-serif bg-black'>
        <div className='w-1/2 h-screen py-8 flex items-center justify-center flex-col'>
          <h1 className='t1 text-5xl font-bold'>Welcome to Blood<span className='text-red-600'>Stream</span></h1>
          <h2 className='t1 mt-2 text-4xl font-bold'>Your Lifeline Network</h2>
          <p id='p1' className='text-xl mt-2 font-semibold'>Donate Blood. Save Lives. Make a Difference.</p>

          <div className='mt-6 flex items-center gap-6'>
            {isSignedIn ? (
              <>
                <Link to="/verifyorganization" className='px-4 py-2 text-lg bg-red-600 text-white rounded-full hover:bg-red-700 transition'> Verify as an Organization</Link>
                <Link to="/bloodcamp" className='px-4 py-2 text-lg bg-red-600 text-white rounded-full hover:bg-red-700 transition'> Blood Camps</Link>
              </>
            ) : (
              <>
                <Link to="/register" className='px-4 py-2 text-lg bg-red-600 text-white rounded-full hover:bg-red-700 transition'> Get Started</Link>
                <a href="#" className='px-4 py-2 text-lg border border-red-600 rounded-full bg-gray-900/60 hover:bg-red-600 hover:text-white transition'> Join Now</a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
