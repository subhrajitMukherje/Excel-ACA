'use client';

import { BookOpen, Facebook, Twitter, Instagram, Youtube, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const courses = [
    { name: 'JEE Main & Advanced', href: '#' },
    { name: 'NEET UG', href: '#' },
    { name: 'CUET', href: '#' },
    { name: 'UPSC CSE', href: '#' },
    { name: 'GATE', href: '#' },
    { name: 'Banking & SSC', href: '#' },
  ];

  const resources = [
    { name: 'Study Material', href: '#' },
    { name: 'Mock Tests', href: '#' },
    { name: 'Previous Year Papers', href: '#' },
    { name: 'Doubt Resolution', href: '#' },
    { name: 'Career Guidance', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: 'https://facebook.com/excelacademy', label: 'Facebook' },
    { icon: <Twitter className="h-6 w-6" />, href: 'https://twitter.com/excelacademy', label: 'Twitter' },
    { icon: <Instagram className="h-6 w-6" />, href: 'https://instagram.com/excelacademy', label: 'Instagram' },
    { icon: <Youtube className="h-6 w-6" />, href: 'https://youtube.com/excelacademy', label: 'YouTube' },
    { icon: <LinkedIn className="h-6 w-6" />, href: 'https://linkedin.com/company/excelacademy', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white">ExcelAcademy</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md">
              India's premier coaching institute for competitive exams. We've been transforming dreams into reality for over 15 years with our expert faculty and proven methodologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+919876543210" className="text-sm sm:text-base text-gray-400 hover:text-white">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@excelacademy.com" className="text-sm sm:text-base text-gray-400 hover:text-white break-all">
                  info@excelacademy.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-400">
                  123 Connaught Place, New Delhi - 110001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left">Stay updated with our latest news:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full sm:w-auto"
                />
                <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 ExcelAcademy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-4 lg:space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}