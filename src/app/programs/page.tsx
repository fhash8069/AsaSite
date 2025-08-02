import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-burgundy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="w-48 h-20 relative">
                <Image
                  src={getImagePath("/assets/images/logov2.webp")}
                  alt="Arab Student Association Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="hidden md:flex space-x-10">
              <Link href="/" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>HOME</Link>
              <Link href="/about" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>ABOUT</Link>
              <Link href="/programs" className="font-semibold text-amber-600" style={{color: '#7f1d1d'}}>PROGRAMS</Link>
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
            <span className="text-amber-300">OUR</span>
            <span className="text-white"> PROGRAMS</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold">
            Comprehensive Support for Student Success
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>EMPOWERING STUDENT SUCCESS</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive programs are designed to serve, educate, and empower our student community through various initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* Education Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src={getImagePath("/assets/images/asaasset5.jpg")}
                  alt="Education programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-700/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-burgundy-900 px-3 py-1 rounded-full text-sm font-bold">
                    ACTIVE
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#5e0000'}}>Education & Learning</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive educational programs including Arabic language classes, cultural studies, 
                  academic support, and tutoring services. We provide resources to help students excel 
                  academically while staying connected to their heritage.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Arabic Language Classes
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Academic Tutoring Support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cultural Studies Programs
                  </div>
                </div>
                <button className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Student Services */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src={getImagePath("/assets/images/market.jpg")}
                  alt="Community services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-700/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-burgundy-900 px-3 py-1 rounded-full text-sm font-bold">
                    ACTIVE
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#5e0000'}}>Student Services</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive social support services, mentorship programs, and assistance for students 
                  in need within our community. We provide guidance and resources to help students navigate 
                  university life successfully.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Peer Mentorship Programs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Social Support Services
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Student Assistance Programs
                  </div>
                </div>
                <button className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Cultural Programs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src={getImagePath("/assets/images/village.webp")}
                  alt="Cultural programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-700/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-burgundy-900 px-3 py-1 rounded-full text-sm font-bold">
                    ACTIVE
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#5e0000'}}>Cultural Heritage</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Preserving and celebrating Arab culture through festivals, art exhibitions, traditional 
                  craft workshops, and cultural events. We connect students with their roots while sharing 
                  our rich heritage with the broader community.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cultural Festivals & Events
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Traditional Craft Workshops
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Art Exhibitions & Showcases
                  </div>
                </div>
                <button className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Coming Soon Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-dashed border-amber-300">
              <div className="relative h-64 bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-amber-700">More Programs</h4>
                    <p className="text-amber-600 font-medium">Coming Soon</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
                    COMING SOON
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#5e0000'}}>Exciting New Programs</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We're constantly working to expand our offerings and provide even more value to our student 
                  community. Stay tuned for announcements about new programs, workshops, and initiatives 
                  designed to support your success.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Professional Development
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Career Guidance Programs
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Alumni Network Initiatives
                  </div>
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#f9fafb'}}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('${getImagePath('/assets/images/floral desighns.jpg')}')`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{color: '#7f1d1d'}}>
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-semibold" style={{color: '#991b1b'}}>
            Join our programs and become part of a supportive community dedicated to your success and cultural preservation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-burgundy-700">
              Join Our Programs
            </Link>
            <Link href="/events" className="border-2 border-burgundy-700 hover:bg-burgundy-700 hover:text-white text-burgundy-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Upcoming Events
            </Link>
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
                    src={getImagePath("/472730964_992003129423015_6355583218082061287_n (1).jpg")}
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