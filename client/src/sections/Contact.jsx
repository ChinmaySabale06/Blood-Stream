import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-black'>
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='mt-10 px-4 w-150 bg-cyan-950/30 py-8 rounded-xl shadow-md hover:shadow-lg shadow-cyan-600 transition duration-300'>  
          <h2 className='text-3xl font-bold mb-8 bg-cyan-400 bg-clip-text text-transparent text-center'> Get in Touch</h2>
            
          <form className='space-y-6'>
            <div className='relative'>
              <input type="text" id='name' name='name' required className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Name'/>
            </div>

            <div className='relative'>
              <input type="email" id='email' name='email' required className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='example@gmail.com'/>
            </div>

            <div className='relative'>
              <textarea id='message' name='message' required rows={5} className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Write your message here'/>
            </div>

            <button type='submit' className='ml-50 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition overflow-hidden cursor-pointer hover:bg-blue-700'> Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
