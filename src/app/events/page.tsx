import React from 'react'
import Image from 'next/image'

export default function Events() {
  const events = [
    {
      date: "MAR 15",
      title: "Annual Cultural Festival",
      location: "Student Center • 6:00 PM",
      description: "Join us for an evening of traditional music, dance, food, and cultural exhibitions celebrating our rich Arab heritage. Experience authentic performances, taste delicious traditional cuisine, and connect with our vibrant community.",
      buttonText: "Register Now",
      featured: true
    },
    {
      date: "MAR 22",
      title: "Student Leadership Workshop",
      location: "Online & In-Person • 2:00 PM",
      description: "Empowering the next generation of Arab student leaders through skill-building workshops and mentorship programs. Learn essential leadership skills and network with like-minded students.",
      buttonText: "Join Workshop",
      featured: false
    },
    {
      date: "APR 05",
      title: "Arabic Calligraphy Workshop",
      location: "Art Building Room 205 • 4:00 PM",
      description: "Discover the beauty of Arabic calligraphy in this hands-on workshop. Learn traditional techniques from master calligraphers and create your own beautiful artwork to take home.",
      buttonText: "Sign Up",
      featured: false
    }
  ]

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
              <a href="/" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>HOME</a>
              <a href="/about" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>ABOUT</a>
              <a href="/programs" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>PROGRAMS</a>
              <a href="/events" className="font-semibold text-amber-600" style={{color: '#7f1d1d'}}>EVENTS</a>
              <a href="/contact" className="font-semibold hover:text-amber-600" style={{color: '#7f1d1d'}}>CONTACT</a>
            </div>

            <div className="flex items-center">
              <a href="/contact" className="bg-burgundy-700 text-white px-6 py-2 rounded-md hover:bg-burgundy-800 transition-colors border-2 border-burgundy-700">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/assets/images/floral desighns.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-burgundy-700/60 to-amber-900/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-amber-300">UPCOMING</span>
            <span className="text-white"> EVENTS</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold">
            Connect, Learn, and Celebrate Together
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#f9fafb'}}>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#7f1d1d'}}>JOIN OUR COMMUNITY EVENTS</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#991b1b'}}>
              Experience the rich culture, traditions, and community spirit through our diverse events and activities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`backdrop-blur-lg rounded-xl p-8 shadow-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  event.featured 
                    ? 'bg-gradient-to-r from-amber-50/90 to-burgundy-50/90 border-amber-300' 
                    : 'bg-white/90 border-white/20'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg font-bold text-lg text-center min-w-[100px] ${
                      event.featured 
                        ? 'bg-amber-500 text-burgundy-900' 
                        : 'bg-burgundy-700 text-white'
                    }`}>
                      {event.date}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#7f1d1d'}}>
                        {event.title}
                      </h3>
                      <p className="font-semibold text-lg" style={{color: '#991b1b'}}>
                        {event.location}
                      </p>
                    </div>
                    
                    <p className="mb-6 font-medium text-lg leading-relaxed" style={{color: '#7f1d1d'}}>
                      {event.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`px-8 py-3 rounded-lg font-semibold transition-colors border-2 ${
                        event.featured
                          ? 'bg-amber-500 hover:bg-amber-600 text-burgundy-900 border-burgundy-700'
                          : 'bg-burgundy-700 hover:bg-burgundy-800 text-white border-burgundy-700'
                      }`}>
                        {event.buttonText}
                      </button>
                      <button className="px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-burgundy-700 text-burgundy-700 hover:bg-burgundy-700 hover:text-white">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Event CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#7f1d1d'}}>
                Stay Updated on All Events
              </h3>
              <p className="mb-6 font-medium" style={{color: '#991b1b'}}>
                Never miss an event! Follow us on social media or join our mailing list to get notifications about upcoming activities and special events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.instagram.com/asa.at.uic?utm_source=ig_web_button_share_sheet&igsh=eHVtejN4aWFtYnF5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Image
                    src="/assets/images/instalogo.webp"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  Follow on Instagram
                </a>
                <a href="/contact" className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#5e0000'}}>EVENT HIGHLIGHTS</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a look at some of our recent successful events and the impact they've had on our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-burgundy-50 to-amber-50 rounded-xl p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/village2.jpg"
                  alt="Cultural Festival"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Cultural Festival 2023</h3>
              <p className="text-gray-700 mb-4">
                Over 300 attendees celebrated Arab culture with traditional music, dance, and cuisine.
              </p>
              <div className="flex items-center text-sm font-semibold" style={{color: '#7f1d1d'}}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                300+ Attendees
              </div>
            </div>

            <div className="bg-gradient-to-br from-burgundy-50 to-amber-50 rounded-xl p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/asaasset5.jpg"
                  alt="Leadership Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Leadership Workshop</h3>
              <p className="text-gray-700 mb-4">
                Student leaders developed essential skills through interactive workshops and mentorship sessions.
              </p>
              <div className="flex items-center text-sm font-semibold" style={{color: '#7f1d1d'}}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                50+ Student Leaders
              </div>
            </div>

            <div className="bg-gradient-to-br from-burgundy-50 to-amber-50 rounded-xl p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/market.jpg"
                  alt="Community Service"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#5e0000'}}>Community Service Day</h3>
              <p className="text-gray-700 mb-4">
                Students came together to give back to the local community through various service projects.
              </p>
              <div className="flex items-center text-sm font-semibold" style={{color: '#7f1d1d'}}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                100+ Volunteers
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
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#7f1d1d'}}>Quick Links</h4>
              <ul className="space-y-2 font-semibold">
                <li><a href="/" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Home</a></li>
                <li><a href="/about" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>About Us</a></li>
                <li><a href="/programs" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Programs</a></li>
                <li><a href="/events" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#7f1d1d'}}>Contact</h4>
              <ul className="space-y-2 font-semibold">
                <li><a href="/contact" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Get in Touch</a></li>
                <li><a href="/contact" className="hover:text-amber-300" style={{color: '#7f1d1d'}}>Join Us</a></li>
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