import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function About() {
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
              <Link href="/about" className="font-semibold text-amber-600" style={{color: '#7f1d1d'}}>ABOUT</Link>
              <Link href="/programs" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>PROGRAMS</Link>
              <Link href="/events" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>EVENTS</Link>
              <Link href="/contact" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>CONTACT</Link>
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
            <span className="text-amber-300">ABOUT</span>
            <span className="text-white"> US</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold">
            Our Mission, Vision, and Values
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>OUR MISSION</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/village2.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{color: '#5e0000'}}>
                Empowering Arab Students
              </h3>
              <p className="leading-relaxed text-lg about-text-burgundy">
                The Arab Student Association is dedicated to creating a supportive and inclusive environment 
                where Arab students can thrive academically, culturally, and socially. We serve as a bridge 
                between our rich heritage and modern academic excellence.
              </p>
              <p className="leading-relaxed text-lg about-text-burgundy">
                Our mission is to foster unity, preserve cultural identity, and provide comprehensive support 
                to Arab students throughout their educational journey at the University of Illinois Chicago.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 md:order-2">
              <h3 className="text-3xl font-bold" style={{color: '#5e0000'}}>
                Our Vision for the Future
              </h3>
              <p className="leading-relaxed text-lg about-text-burgundy">
                We envision a future where Arab students are empowered leaders who contribute positively 
                to their communities while maintaining strong connections to their cultural roots.
              </p>
              <p className="leading-relaxed text-lg about-text-burgundy">
                Through education, mentorship, and community service, we aim to develop confident, 
                culturally-aware individuals who will become ambassadors of positive change in society.
              </p>
            </div>
            
            <div className="md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/village.webp"
                  alt="Future vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>OUR VALUES</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-burgundy-50 rounded-xl">
              <div className="w-20 h-20 bg-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#5e0000'}}>Education</h3>
              <p className="text-gray-700">
                We believe education is the foundation for personal growth and community advancement.
              </p>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-xl">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#5e0000'}}>Cultural Heritage</h3>
              <p className="text-gray-700">
                Preserving and celebrating our rich Arab culture while embracing diversity and inclusion.
              </p>
            </div>

            <div className="text-center p-8 bg-burgundy-50 rounded-xl">
              <div className="w-20 h-20 bg-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#5e0000'}}>Community</h3>
              <p className="text-gray-700">
                Building strong, supportive networks that extend beyond university into lifelong connections.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg border-2" style={{backgroundColor: '#fef2f2', borderColor: '#7f1d1d'}}>
              <h4 className="text-4xl font-bold mb-2" style={{color: '#7f1d1d'}}>15+</h4>
              <p className="font-semibold" style={{color: '#7f1d1d'}}>Years of Service</p>
            </div>
            <div className="text-center p-6 rounded-lg border-2" style={{backgroundColor: '#fef2f2', borderColor: '#7f1d1d'}}>
              <h4 className="text-4xl font-bold mb-2" style={{color: '#7f1d1d'}}>200+</h4>
              <p className="font-semibold" style={{color: '#7f1d1d'}}>Student Members</p>
            </div>
            <div className="text-center p-6 rounded-lg border-2" style={{backgroundColor: '#fef2f2', borderColor: '#7f1d1d'}}>
              <h4 className="text-4xl font-bold mb-2" style={{color: '#7f1d1d'}}>50+</h4>
              <p className="font-semibold" style={{color: '#7f1d1d'}}>Annual Events</p>
            </div>
            <div className="text-center p-6 rounded-lg border-2" style={{backgroundColor: '#fef2f2', borderColor: '#7f1d1d'}}>
              <h4 className="text-4xl font-bold mb-2" style={{color: '#7f1d1d'}}>100%</h4>
              <p className="font-semibold" style={{color: '#7f1d1d'}}>Student Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Banner Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/asset6.jpg"
            alt="Cultural heritage"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-burgundy-900/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div 
              className="text-4xl md:text-6xl font-bold mb-4 cultural-heading"
              style={{color: '#5e0000'}}
            >
              TRADITION MEETS INNOVATION
            </div>
            <p className="text-xl md:text-2xl text-amber-200 font-semibold">
              Honoring Our Past, Building Our Future
            </p>
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