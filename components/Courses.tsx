'use client';

import { BookOpen, Users, Clock, Award } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      category: 'Engineering',
      exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'COMEDK'],
      icon: '🔬',
      duration: '2 Years',
      students: '2500+',
      successRate: '98%',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      category: 'Medical',
      exams: ['NEET UG', 'NEET PG', 'AIIMS', 'JIPMER', 'NEET SS'],
      icon: '⚕️',
      duration: '2 Years',
      students: '1800+',
      successRate: '96%',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
    },
    {
      category: 'University Entrance',
      exams: ['CUET UG', 'CUET PG', 'IPU CET', 'BHU UET', 'DUET'],
      icon: '🎓',
      duration: '1 Year',
      students: '1200+',
      successRate: '94%',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
    },
    {
      category: 'Civil Services',
      exams: ['UPSC CSE', 'State PSC', 'IAS', 'IPS', 'IFS'],
      icon: '🏛️',
      duration: '2 Years',
      students: '800+',
      successRate: '92%',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
    },
    {
      category: 'Graduate Aptitude',
      exams: ['GATE', 'NET/JRF', 'SET', 'CSIR NET', 'ICAR NET'],
      icon: '🔬',
      duration: '1 Year',
      students: '1500+',
      successRate: '95%',
      color: 'bg-yellow-50 border-yellow-200',
      iconColor: 'text-yellow-600',
    },
    {
      category: 'Banking & SSC',
      exams: ['SSC CGL', 'SSC CHSL', 'IBPS PO', 'SBI PO', 'RBI Grade B'],
      icon: '🏦',
      duration: '6 Months',
      students: '2000+',
      successRate: '93%',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Course Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Class 12 to Master's level, we offer expert coaching for all major competitive exams with proven methodologies and personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`${course.color} border-2 rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{course.icon}</div>
                <div className={`${course.iconColor} bg-white p-2 rounded-full`}>
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{course.category}</h3>
              
              <div className="space-y-2 mb-4">
                {course.exams.map((exam, examIndex) => (
                  <span
                    key={examIndex}
                    className="inline-block bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 mr-1 sm:mr-2 mb-2"
                  >
                    {exam}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <Clock className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">{course.duration}</div>
                  <div className="text-xs text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <Users className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">{course.students}</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <Award className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">{course.successRate}</div>
                  <div className="text-xs text-gray-600">Success</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#demo-form"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Enroll Now
            <BookOpen className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}