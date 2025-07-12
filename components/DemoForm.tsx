'use client';

import { useState } from 'react';
import { BookOpen, User, Mail, Phone, Calendar, GraduationCap } from 'lucide-react';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    'JEE Main & Advanced',
    'NEET UG',
    'CUET',
    'UPSC CSE',
    'GATE',
    'NET/JRF',
    'SSC CGL',
    'Banking (IBPS/SBI)',
    'State PSC',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        preferredDate: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="demo-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Registering!
              </h2>
              <p className="text-gray-600 mb-6">
                We've received your request for a free demo class. Our team will contact you within 24 hours to schedule your session.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">
                  Check your email for confirmation details and demo class link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Book Your Free Demo Class
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our teaching methodology firsthand. Join a free demo class and see why thousands of students choose ExcelAcademy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interested In *
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Demo Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 sm:py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Booking Demo...' : 'Book Free Demo Class'}
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  What You'll Get in Your Demo Class
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Interactive Session</h4>
                      <p className="text-gray-600 text-sm">Experience our teaching methodology with real-time interaction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Meet Expert Faculty</h4>
                      <p className="text-gray-600 text-sm">Interact with our experienced teachers and ask questions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="h-3 w-3 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Study Material Sample</h4>
                      <p className="text-gray-600 text-sm">Get access to our comprehensive study materials</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Limited Time Offer</h3>
                <p className="text-blue-100 mb-6">
                  Register for a free demo class and get 20% off on your first course enrollment!
                </p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="font-semibold">📞 Call us: +91 98765 43210</p>
                  <p className="text-sm text-blue-100">Available 24/7 for any queries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}