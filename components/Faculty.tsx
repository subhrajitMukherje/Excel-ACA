'use client';

import Image from 'next/image';
import { BookOpen, Award, Users, Star } from 'lucide-react';

export default function Faculty() {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Physics',
      experience: '15 Years',
      qualification: 'PhD IIT Delhi',
      specialization: 'JEE & NEET Physics',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['IIT Alumni', 'Author of 5 Books', '10,000+ Students'],
    },
    {
      name: 'Prof. Meera Sharma',
      subject: 'Chemistry',
      experience: '12 Years',
      qualification: 'M.Sc., B.Ed.',
      specialization: 'Organic Chemistry Expert',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Gold Medalist', 'Research Publications', '8,000+ Students'],
    },
    {
      name: 'Dr. Amit Gupta',
      subject: 'Mathematics',
      experience: '18 Years',
      qualification: 'PhD Mathematics',
      specialization: 'Advanced Calculus & Algebra',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['IIT Faculty', 'Mathematical Olympiad Judge', '12,000+ Students'],
    },
    {
      name: 'Ms. Priya Singh',
      subject: 'Biology',
      experience: '10 Years',
      qualification: 'M.Sc. Botany',
      specialization: 'NEET Biology',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Medical Entrance Expert', 'Curriculum Designer', '6,000+ Students'],
    },
    {
      name: 'Dr. Suresh Patel',
      subject: 'Public Administration',
      experience: '20 Years',
      qualification: 'PhD, Ex-IAS',
      specialization: 'UPSC CSE',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Former IAS Officer', 'UPSC Interview Panel', '500+ Selections'],
    },
    {
      name: 'Prof. Kavita Joshi',
      subject: 'English',
      experience: '14 Years',
      qualification: 'MA English Literature',
      specialization: 'General Studies & Essay',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Literature Expert', 'Essay Writing Specialist', '7,000+ Students'],
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the best minds in education. Our faculty comprises IIT/IIM alumni, PhD holders, and industry experts with decades of teaching experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <div className="h-48 relative">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {teacher.experience}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{teacher.subject}</p>
                <p className="text-gray-600 text-sm mb-3">{teacher.qualification}</p>
                <p className="text-gray-700 font-medium mb-4">{teacher.specialization}</p>
                
                <div className="space-y-2">
                  {teacher.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Our Faculty is Different</h3>
            <p className="text-blue-100">Experience, expertise, and excellence in every lesson</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Teachers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-2">20+</div>
              <div className="text-blue-100">PhD Holders</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-2">100,000+</div>
              <div className="text-blue-100">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                <Star className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}