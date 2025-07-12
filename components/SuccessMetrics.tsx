'use client';

import { Trophy, Target, Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function SuccessMetrics() {
  const toppers = [
    {
      name: 'Arjun Sharma',
      exam: 'JEE Advanced',
      rank: 'AIR 1',
      year: '2024',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The structured approach and mock tests helped me achieve my dream.',
    },
    {
      name: 'Priya Patel',
      exam: 'NEET UG',
      rank: 'AIR 3',
      year: '2024',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Excellent faculty and comprehensive study material made all the difference.',
    },
    {
      name: 'Rahul Singh',
      exam: 'UPSC CSE',
      rank: 'AIR 5',
      year: '2023',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'The guidance and mentorship program was exceptional.',
    },
  ];

  const stats = [
    {
      icon: <Trophy className="h-8 w-8" />,
      number: '2,500+',
      label: 'Top Ranks Achieved',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: <Target className="h-8 w-8" />,
      number: '95%',
      label: 'Success Rate',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: '50,000+',
      label: 'Students Trained',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '15',
      label: 'Years of Excellence',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students consistently achieve top ranks in India's most competitive exams. Here's proof of our excellence.
          </p>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.bgColor} ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Rankers */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Top Rankers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={topper.image}
                    alt={topper.name}
                    fill
                    className="object-cover rounded-full"
                  />
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {topper.rank}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{topper.name}</h4>
                <p className="text-blue-600 font-semibold mb-2">{topper.exam} {topper.year}</p>
                <p className="text-gray-600 text-sm italic">"{topper.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Success Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">JEE AIR Top 100</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-600">NEET AIR Top 100</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">UPSC Selections</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">300+</div>
            <div className="text-gray-600">Banking/SSC Selections</div>
          </div>
        </div>
      </div>
    </section>
  );
}