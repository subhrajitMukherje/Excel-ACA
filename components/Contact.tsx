'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const locations = [
    {
      name: 'Delhi Main Campus',
      address: '123 Connaught Place, New Delhi - 110001',
      phone: '+91 11 2345 6789',
      email: 'delhi@excelacademy.com',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
    },
    {
      name: 'Mumbai Branch',
      address: '456 Bandra West, Mumbai - 400050',
      phone: '+91 22 3456 7890',
      email: 'mumbai@excelacademy.com',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
    },
    {
      name: 'Bangalore Center',
      address: '789 Koramangala, Bangalore - 560095',
      phone: '+91 80 4567 8901',
      email: 'bangalore@excelacademy.com',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey? Contact us today and let's discuss how we can help you achieve your academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0 last:pb-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{location.name}</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600">{location.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <a href={`tel:${location.phone}`} className="text-sm sm:text-base text-gray-600 hover:text-blue-600">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <a href={`mailto:${location.email}`} className="text-sm sm:text-base text-gray-600 hover:text-blue-600 break-all">
                          {location.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600">{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold">Call Now</p>
                    <a href="tel:+919876543210" className="text-sm sm:text-base text-blue-200 hover:text-white">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-blue-200" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold">WhatsApp</p>
                    <a href="https://wa.me/919876543210" className="text-sm sm:text-base text-blue-200 hover:text-white">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-200" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold">Email</p>
                    <a href="mailto:info@excelacademy.com" className="text-sm sm:text-base text-blue-200 hover:text-white break-all">
                      info@excelacademy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674868448639!2d77.21787631455046!3d28.631421982304487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683d93c05%3A0x7f2cd3f3e2b7a6e8!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1647324567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Visit Our Main Campus</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Located in the heart of Delhi, our main campus offers state-of-the-art facilities and a conducive learning environment.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
                >
                  Get Directions
                </a>
                <a
                  href="#demo-form"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-center text-sm sm:text-base"
                >
                  Book Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}