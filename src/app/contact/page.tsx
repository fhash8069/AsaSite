import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-burgundy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="w-48 h-20 relative">
                <Image
                  src="/assets/images/logov2.webp"
                  alt="Arab Student Association Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="hidden md:flex space-x-10">
              <Link href="/" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>HOME</Link>
              <Link href="/about" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>ABOUT</Link>
              <Link href="/programs" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>PROGRAMS</Link>
              <Link href="/events" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>EVENTS</Link>
              <Link href="/contact" className="font-semibold text-amber-600" style={{color: '#7f1d1d'}}>CONTACT</Link>
            </div>

            <div className="flex items-center">
              <Link href="/contact" className="bg-burgundy-700 text-white px-6 py-2 rounded-md hover:bg-burgundy-800 transition-colors border-2 border-burgundy-700">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${getImagePath('/assets/images/floral desighns.jpg')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-burgundy-700/60 to-amber-900/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-amber-300">GET IN</span>
            <span className="text-white"> TOUCH</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold">
            Connect With Us & Join Our Community
          </p>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>CONNECT WITH US</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Whether you want to join our community, ask questions, or share feedback, we'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Email Contact Form */}
            <div className="bg-gradient-to-br from-burgundy-50 to-amber-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-burgundy-700 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{color: '#5e0000'}}>Send Us a Message</h3>
                  <p className="text-gray-700">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-2 border-burgundy-200 rounded-lg focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-burgundy-200 rounded-lg focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-2 border-burgundy-200 rounded-lg focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 transition-colors"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership Information</option>
                    <option value="events">Event Information</option>
                    <option value="programs">Program Details</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-burgundy-200 rounded-lg focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-4 rounded-lg font-semibold transition-colors border-2 border-burgundy-700 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Instagram/Social Contact Form */}
            <div className="bg-gradient-to-br from-amber-50 to-burgundy-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/assets/images/instalogo.webp"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{color: '#5e0000'}}>Join Our Network</h3>
                  <p className="text-gray-700">Connect with us on social media</p>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="studentId" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    UIC Student ID (Optional)
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="Enter your UIC student ID"
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    Instagram Handle
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">@</span>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      className="w-full pl-8 pr-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                      placeholder="your_instagram_handle"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-semibold mb-2" style={{color: '#7f1d1d'}}>
                    What interests you most? (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" name="interests" value="cultural-events" className="mr-3 h-4 w-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500" />
                      <span className="text-gray-700">Cultural Events & Festivals</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="interests" value="education" className="mr-3 h-4 w-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500" />
                      <span className="text-gray-700">Educational Programs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="interests" value="leadership" className="mr-3 h-4 w-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500" />
                      <span className="text-gray-700">Leadership Opportunities</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="interests" value="volunteer" className="mr-3 h-4 w-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500" />
                      <span className="text-gray-700">Volunteer Work</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="interests" value="networking" className="mr-3 h-4 w-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500" />
                      <span className="text-gray-700">Networking & Social Events</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors border-2 border-amber-600 shadow-lg"
                >
                  Join Our Community
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#f9fafb'}}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('${getImagePath('/assets/images/floral desighns.jpg')}')`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#7f1d1d'}}>OTHER WAYS TO REACH US</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Email</h3>
              <p className="font-semibold mb-2" style={{color: '#7f1d1d'}}>General Inquiries</p>
              <p style={{color: '#7f1d1d'}}>info@arabstudents.org</p>
              <p className="font-semibold mb-2 mt-4" style={{color: '#7f1d1d'}}>Support</p>
              <p style={{color: '#7f1d1d'}}>support@arabstudents.org</p>
            </div>
            
            <div className="text-center p-8 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg">
              <Link 
                href="https://www.instagram.com/asa.at.uic?utm_source=ig_web_button_share_sheet&igsh=eHVtejN4aWFtYnF5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/assets/images/instalogo.webp"
                    alt="Instagram Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Instagram</h3>
                <p className="font-semibold" style={{color: '#7f1d1d'}}>@asa.at.uic</p>
                <p style={{color: '#7f1d1d'}} className="text-sm">Follow us for updates!</p>
              </Link>
            </div>
            
            <div className="text-center p-8 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/images/logouic.png"
                  alt="UIC Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Location</h3>
              <p className="font-semibold" style={{color: '#7f1d1d'}}>University of Illinois Chicago</p>
              <p style={{color: '#7f1d1d'}}>1200 W Harrison St</p>
              <p style={{color: '#7f1d1d'}}>Chicago, IL 60607</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 rounded-lg border-2 border-burgundy-100 hover:border-burgundy-300 transition-colors">
                <h3 className="text-lg font-bold mb-3" style={{color: '#7f1d1d'}}>
                  Who can join the Arab Student Association?
                </h3>
                <p className="text-gray-700">
                  ASA is open to all UIC students, regardless of background. While we focus on Arab culture and community, 
                  we welcome anyone interested in learning about and supporting our mission.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border-2 border-burgundy-100 hover:border-burgundy-300 transition-colors">
                <h3 className="text-lg font-bold mb-3" style={{color: '#7f1d1d'}}>
                  Are there membership fees?
                </h3>
                <p className="text-gray-700">
                  No, membership in ASA is completely free! We believe in making our community accessible to all students.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border-2 border-burgundy-100 hover:border-burgundy-300 transition-colors">
                <h3 className="text-lg font-bold mb-3" style={{color: '#7f1d1d'}}>
                  How often do you hold events?
                </h3>
                <p className="text-gray-700">
                  We host events throughout the academic year, including monthly cultural events, weekly meetings, 
                  and special programs during important cultural celebrations.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg border-2 border-burgundy-100 hover:border-burgundy-300 transition-colors">
                <h3 className="text-lg font-bold mb-3" style={{color: '#7f1d1d'}}>
                  How can I get involved in leadership?
                </h3>
                <p className="text-gray-700">
                  We offer various leadership opportunities throughout the year. Active members can apply for board positions, 
                  committee leadership roles, and volunteer coordinator positions.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border-2 border-burgundy-100 hover:border-burgundy-300 transition-colors">
                <h3 className="text-lg font-bold mb-3" style={{color: '#7f1d1d'}}>
                  Do you offer academic support?
                </h3>
                <p className="text-gray-700">
                  Yes! We provide tutoring services, study groups, mentorship programs, and academic resources 
                  to help our members succeed in their studies.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border-2 border-burgundy-100 hover:border-burgundy-300 transition-colors">
                <h3 className="text-lg font-bold mb-3" style={{color: '#7f1d1d'}}>
                  How do I stay updated on events?
                </h3>
                <p className="text-gray-700">
                  Follow us on Instagram @asa.at.uic and fill out our contact form to join our mailing list. 
                  We send regular updates about upcoming events and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden" style={{backgroundColor: '#f3f4f6'}}>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('${getImagePath('/assets/images/floral desighns.jpg')}')`,
            backgroundSize: '300px 300px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/472730964_992003129423015_6355583218082061287_n (1).jpg"
                    alt="Arab Student Association Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{color: '#7f1d1d'}}>Arab Student Association</h3>
                  <p className="font-semibold" style={{color: '#991b1b'}}>Building Community Through Education</p>
                </div>
              </div>
              <p className="mb-6 max-w-md font-medium" style={{color: '#7f1d1d'}}>
                Building bridges between cultures while preserving our rich Arab heritage 
                and empowering student communities for a brighter future.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#7f1d1d'}}>Quick Links</h4>
              <ul className="space-y-2 font-semibold">
                <li><Link href="/" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Home</Link></li>
                <li><Link href="/about" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>About Us</Link></li>
                <li><Link href="/programs" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Programs</Link></li>
                <li><Link href="/events" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#7f1d1d'}}>Contact</h4>
              <ul className="space-y-2 font-semibold">
                <li><Link href="/contact" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Get in Touch</Link></li>
                <li><Link href="/contact" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Join Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-burgundy-700 mt-12 pt-8 text-center font-semibold">
            <p style={{color: '#7f1d1d'}}>&copy; 2024 Arab Student Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 