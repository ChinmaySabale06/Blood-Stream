import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='section-shell min-h-screen'>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-rose-500/13 blur-3xl"></div>
      </div>

      <section className="section-container flex min-h-[calc(100vh-160px)] items-center justify-center">
          <div className="health-card w-full max-w-4xl overflow-hidden p-8 sm:p-10 md:p-12">
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-70"></div>

            <div className="text-center mb-12">
              <h2 className="section-title bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="mt-3 text-base text-cyan-100/70 sm:text-lg">We'd love to hear from you. Send us a message!</p>
            </div>

            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="health-input"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="health-input"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="health-textarea !resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="health-btn-primary px-8 py-4 text-base">
                  Send Message
                </button>
              </div>
            </form>
          </div>
      </section>
    </div>
  )
}

export default Contact
