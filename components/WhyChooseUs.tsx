'use client';

import { CheckCircle, Users, BookOpen, Clock, Award, Target, HeadphonesIcon, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Faculty',
      description: 'Learn from IIT/IIM alumni and industry experts with 10+ years of teaching experience.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Comprehensive Study Material',
      description: 'Updated curriculum with latest exam patterns, previous year papers, and practice tests.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Personalized Attention',
      description: 'Small batch sizes ensure individual attention and doubt resolution for every student.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Flexible Learning',
      description: 'Online and offline modes with recorded lectures and 24/7 doubt support.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Proven Track Record',
      description: '95% success rate with 2,500+ top ranks in the last 5 years across all exams.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Advanced Technology',
      description: 'AI-powered performance analysis, adaptive learning, and smart study plans.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock academic support, mentoring, and career guidance.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Regular Assessments',
      description: 'Weekly tests, mock exams, and detailed performance analysis for continuous improvement.',
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  const uniqueFeatures = [
    'India\'s #1 Success Rate in Competitive Exams',
    'Exclusive Study Material by Subject Experts',
    'Interactive Live Classes with Doubt Resolution',
    'Personality Development & Interview Preparation',
    'Alumni Network of 50,000+ Successful Candidates',
    'Scholarship Programs for Deserving Students',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ExcelAcademy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach, we transform dreams into reality. Here's what makes us the preferred choice for serious aspirants.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Unique Selling Points */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">What Makes Us Unique</h3>
            <p className="text-blue-100">Experience the ExcelAcademy difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ExcelAcademy vs Others
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">ExcelAcademy</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-500">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-700">Expert Faculty (IIT/IIM Alumni)</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">Limited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">24/7 Doubt Support</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Success Rate</td>
                  <td className="py-4 px-6 text-center font-bold text-blue-600">95%</td>
                  <td className="py-4 px-6 text-center text-gray-400">60-70%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Personalized Attention</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}