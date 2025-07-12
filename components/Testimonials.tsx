'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ananya Mehta',
      exam: 'JEE Advanced',
      rank: 'AIR 25',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
      review: 'The faculty at ExcelAcademy is exceptional. Their teaching methodology and doubt-clearing sessions helped me understand complex concepts easily. The mock tests were incredibly helpful for time management.',
      rating: 5,
    },
    {
      name: 'Rohit Sharma',
      exam: 'NEET UG',
      rank: 'AIR 50',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      review: 'I was struggling with Biology until I joined ExcelAcademy. The teachers here made every topic interesting and easy to remember. The study material is comprehensive and well-structured.',
      rating: 5,
    },
    {
      name: 'Priya Kumari',
      exam: 'UPSC CSE',
      rank: 'AIR 120',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300',
      review: 'The UPSC preparation at ExcelAcademy is top-notch. The faculty, especially Dr. Suresh Patel, provided excellent guidance for both prelims and mains. The interview preparation was outstanding.',
      rating: 5,
    },
    {
      name: 'Vikash Singh',
      exam: 'GATE CSE',
      rank: 'AIR 15',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      review: 'The online classes were well-organized and the faculty was always available for doubts. The previous year question analysis helped me understand the exam pattern thoroughly.',
      rating: 5,
    },
    {
      name: 'Sneha Patel',
      exam: 'SSC CGL',
      rank: 'AIR 8',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      review: 'ExcelAcademy\'s SSC preparation program is excellent. The quantitative aptitude classes were particularly helpful. The regular mock tests and performance analysis helped me improve consistently.',
      rating: 5,
    },
    {
      name: 'Arun Kumar',
      exam: 'IBPS PO',
      rank: 'Selected',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300',
      review: 'The banking preparation course exceeded my expectations. The English and reasoning classes were exceptional. The interview guidance helped me gain confidence for the final selection.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their journey with ExcelAcademy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{testimonial.exam}</p>
                  <p className="text-gray-600 text-sm">{testimonial.rank}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-gray-300 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl text-center">
          <div className="mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">Based on 10,000+ student reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Recommend to Friends</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">96%</div>
              <div className="text-gray-600">Satisfied with Results</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">Would Choose Again</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}