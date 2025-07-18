import React from 'react'
import Image from 'next/image'

export default function Home() {
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
              <a href="#home" className="font-semibold" style={{color: '#7f1d1d'}}>HOME</a>
              <a href="#about" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>ABOUT</a>
              <a href="#programs" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>PROGRAMS</a>
              <a href="#events" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>EVENTS</a>
              <a href="#contact" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>CONTACT</a>
            </div>

            <div className="flex items-center">
              <button className="bg-burgundy-700 text-white px-6 py-2 rounded-md hover:bg-burgundy-800 transition-colors border-2 border-burgundy-700">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/assets/images/floral desighns.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-burgundy-700/60 to-amber-900/40" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-36 h-36 relative mx-auto mb-6">
              <Image
                src="/472730964_992003129423015_6355583218082061287_n (1).jpg"
                alt="Arab Student Association Logo"
                fill
                className="object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-amber-300">ARAB</span>
            <span className="text-white"> STUDENT</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            ASSOCIATION
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-amber-200">
            BUILDING BRIDGES, STRENGTHENING COMMUNITIES
          </h3>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100">
            Empowering Arab students through education, cultural preservation, 
            and social development initiatives that bridge traditions with modern progress.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-amber-600">
              LEARN MORE
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-burgundy-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              GET INVOLVED
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>ABOUT ARAB STUDENT ASSOCIATION</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <h3 className="text-2xl font-bold" style={{color: '#5e0000'}}>
                Our Mission & Vision
              </h3>
              <p className="leading-relaxed text-lg about-text-burgundy">
                Arab Student Association is a dynamic, cultural, and educational organization 
                that offers unique programs and services to strengthen Arab student communities. 
                We believe in preserving our rich heritage while building bridges to the future.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg border-2" style={{backgroundColor: '#fef2f2', borderColor: '#7f1d1d'}}>
                  <h4 className="text-3xl font-bold mb-2" style={{color: '#7f1d1d'}}>15+</h4>
                  <p className="font-semibold" style={{color: '#7f1d1d'}}>Years of Service</p>
                </div>
                <div className="text-center p-6 rounded-lg border-2" style={{backgroundColor: '#fef2f2', borderColor: '#7f1d1d'}}>
                  <h4 className="text-3xl font-bold mb-2" style={{color: '#7f1d1d'}}>200+</h4>
                  <p className="font-semibold" style={{color: '#7f1d1d'}}>Student Members</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button className="px-6 py-3 rounded-lg font-semibold transition-colors border-2 hover:bg-opacity-10" style={{borderColor: '#7f1d1d', color: '#7f1d1d', backgroundColor: 'transparent'}}>
                  OUR HISTORY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>OUR PROGRAMS</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive programs designed to serve, educate, and empower our student community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/assets/images/asaasset5.jpg"
                  alt="Education programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-700/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#5e0000'}}>Education & Learning</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive educational programs including Arabic language classes, 
                  cultural studies, and academic support for students.
                </p>
                <button className="text-amber-600 font-semibold hover:text-amber-700 border-b-2 border-amber-600 pb-1">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Community Services */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/assets/images/market.jpg"
                  alt="Community services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-700/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#5e0000'}}>Student Services</h3>
                <p className="text-gray-700 mb-4">
                  Social support services, mentorship programs, and assistance 
                  for students in need within our community.
                </p>
                <button className="text-amber-600 font-semibold hover:text-amber-700 border-b-2 border-amber-600 pb-1">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Cultural Programs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/assets/images/village.webp"
                  alt="Cultural programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-700/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#5e0000'}}>Cultural Heritage</h3>
                <p className="text-gray-700 mb-4">
                  Preserving and celebrating Arab culture through festivals, art exhibitions, 
                  and traditional craft workshops.
                </p>
                <button className="text-amber-600 font-semibold hover:text-amber-700 border-b-2 border-amber-600 pb-1">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative overflow-hidden" style={{backgroundColor: '#f9fafb'}}>
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/assets/images/floral desighns.jpg')`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#7f1d1d'}}>UPCOMING EVENTS</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#991b1b'}}>
              Join us for student gatherings, educational workshops, and cultural celebrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-lg rounded-xl p-8 shadow-xl border" style={{backgroundColor: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.2)'}}>
              <div className="flex items-center mb-4">
                <div className="bg-amber-500 text-burgundy-900 px-4 py-2 rounded-lg font-bold text-lg mr-4">
                  MAR 15
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{color: '#7f1d1d'}}>Annual Cultural Festival</h3>
                  <p className="font-semibold" style={{color: '#991b1b'}}>Student Center • 6:00 PM</p>
                </div>
              </div>
              <p className="mb-4 font-medium" style={{color: '#7f1d1d'}}>
                Join us for an evening of traditional music, dance, food, and cultural exhibitions 
                celebrating our rich Arab heritage.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-burgundy-900 px-6 py-2 rounded-lg font-semibold transition-colors border-2 border-burgundy-700">
                Register Now
              </button>
            </div>
            
            <div className="backdrop-blur-lg rounded-xl p-8 shadow-xl border" style={{backgroundColor: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.2)'}}>
              <div className="flex items-center mb-4">
                <div className="bg-amber-500 text-burgundy-900 px-4 py-2 rounded-lg font-bold text-lg mr-4">
                  MAR 22
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{color: '#7f1d1d'}}>Student Leadership Workshop</h3>
                  <p className="font-semibold" style={{color: '#991b1b'}}>Online & In-Person • 2:00 PM</p>
                </div>
              </div>
              <p className="mb-4 font-medium" style={{color: '#7f1d1d'}}>
                Empowering the next generation of Arab student leaders through skill-building workshops 
                and mentorship programs.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-burgundy-900 px-6 py-2 rounded-lg font-semibold transition-colors border-2 border-burgundy-700">
                Join Workshop
              </button>
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
              OUR HERITAGE IS OUR STRENGTH
            </div>
            <p className="text-xl md:text-2xl text-amber-200 font-semibold">
              Preserving Culture, Building Future Leaders
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>GET IN TOUCH</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're here to serve our student community. Reach out to us for support, questions, or to get involved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-burgundy-50 rounded-xl">
              <div className="w-16 h-16 bg-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Email</h3>
              <p style={{color: '#7f1d1d'}}>info@arabstudents.org</p>
              <p style={{color: '#7f1d1d'}}>support@arabstudents.org</p>
            </div>
            
            <div className="text-center p-8 bg-yellow-50 rounded-xl">
              <a 
                href="https://www.instagram.com/asa.at.uic?utm_source=ig_web_button_share_sheet&igsh=eHVtejN4aWFtYnF5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/assets/images/instalogo.webp"
                    alt="Instagram Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Instagram</h3>
                <p style={{color: '#7f1d1d'}}>@asa.at.uic</p>
                <p style={{color: '#7f1d1d'}} className="text-sm">Follow us for updates!</p>
              </a>
            </div>
            
            <div className="text-center p-8 bg-burgundy-50 rounded-xl">
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
              <p style={{color: '#7f1d1d'}}>1200 W Harrison St</p>
              <p style={{color: '#7f1d1d'}}>Chicago, IL 60607</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden" style={{backgroundColor: '#f3f4f6'}}>
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/assets/images/floral desighns.jpg')`,
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
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors border-2 border-burgundy-700">
                  f
                </button>
                <button className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors border-2 border-burgundy-700">
                  t
                </button>
                <button className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors border-2 border-burgundy-700">
                  in
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#7f1d1d'}}>Quick Links</h4>
              <ul className="space-y-2 font-semibold">
                <li><a href="#about" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>About Us</a></li>
                <li><a href="#programs" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Programs</a></li>
                <li><a href="#events" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Events</a></li>
                <li><a href="#contact" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#7f1d1d'}}>Programs</h4>
              <ul className="space-y-2 font-semibold">
                <li><a href="#" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Education</a></li>
                <li><a href="#" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Student Services</a></li>
                <li><a href="#" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Cultural Heritage</a></li>
                <li><a href="#" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Leadership</a></li>
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