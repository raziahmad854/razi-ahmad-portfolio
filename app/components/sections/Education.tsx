'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'
import Card from '../ui/Card'

const Education = () => {
  const education = {
    degree: 'B.Tech in Electrical Engineering',
    institution: 'Zakir Hussain College of Engineering and Technology',
    location: 'Aligarh, India',
    duration: '2019 – 2023',
    type: 'Bachelor\'s Degree',
    highlights: [
      'Strong foundation in engineering principles and problem-solving',
      'Mathematical and analytical thinking skills',
      'Project-based learning and technical documentation',
      'Team collaboration and leadership experience'
    ]
  }

  const learningPath = [
    {
      title: 'Frontend Development',
      period: '2021 - Present',
      skills: ['React.js', 'TypeScript', 'Modern CSS', 'Responsive Design'],
      description: 'Self-taught modern frontend technologies and best practices'
    },
    {
      title: 'Full-Stack Development',
      period: '2022 - Present',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'GraphQL'],
      description: 'Expanded into backend development for complete application building'
    },
    {
      title: 'AI & Modern Tools',
      period: '2024 - Present',
      skills: ['Gemini API', 'GitHub Copilot', 'AI Integration', 'Prompt Engineering'],
      description: 'Embracing AI technologies to enhance development capabilities'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education & Learning</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic foundation combined with continuous self-learning 
            to stay at the forefront of technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center">
                      <GraduationCap size={32} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>

                {/* Education Highlights */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <Award size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                      Key Learnings
                    </h4>
                    <ul className="space-y-2">
                      {education.highlights.map((highlight, index) => (
                        <motion.li
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <BookOpen size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                      Engineering Foundation
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">Problem Solving</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Analytical approach to complex challenges</div>
                      </div>
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">Mathematical Thinking</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Logical reasoning and algorithm design</div>
                      </div>
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">System Design</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Understanding complex system interactions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education