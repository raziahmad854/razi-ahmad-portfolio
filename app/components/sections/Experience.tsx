'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react'
import Card from '../ui/Card'

const Experience = () => {
  const experience = {
    company: 'Optum',
    position: 'Associate Software Engineer 2',
    duration: 'September 2023 – June 2025',
    location: 'Delhi, India',
    type: 'Full-time',
    achievements: [
      {
        title: 'CEX Web Portal',
        description: 'Built a scalable React.js web portal with real-time API integrations (GraphQL/REST), reducing data latency by 40% and improving responsiveness across devices.',
        impact: '40% reduction in data latency'
      },
      {
        title: 'CEX Mobile App',
        description: 'Delivered a React Native mobile app with modular architecture and state management (Redux/Context API), improving engagement for thousands of users.',
        impact: 'Thousands of users served'
      },
      {
        title: 'UI/UX Collaboration',
        description: 'Partnered with UI/UX designers to implement accessible, multilingual-friendly interfaces (WCAG-compliant), ensuring inclusivity and seamless user experience.',
        impact: 'WCAG compliance achieved'
      },
      {
        title: 'Performance Optimization',
        description: 'Enhanced performance through code-splitting, lazy loading, and caching strategies, optimizing load times under high-traffic conditions.',
        impact: 'Optimized high-traffic performance'
      },
      {
        title: 'CI/CD & Testing',
        description: 'Contributed to CI/CD pipelines and Agile workflows, ensuring on-time releases with clean, testable code using Jest.',
        impact: 'On-time delivery record'
      }
    ],
    technologies: [
      'React.js', 'React Native', 'TypeScript', 'GraphQL', 'REST APIs',
      'Redux', 'Context API', 'Jest', 'CI/CD', 'Agile/Scrum'
    ]
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey building scalable applications and delivering 
            high-impact solutions in fast-paced environments
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                    <Building2 size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.company}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {experience.position}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Key Achievements
                </h4>
                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors duration-200">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mt-0.5">
                          <ChevronRight size={14} className="text-primary-600 dark:text-primary-400 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h5>
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                              {achievement.impact}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-100 dark:border-primary-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Timeline Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center space-x-4 text-center">
            <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-r from-primary-600 to-purple-600"></div>
            <div className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full text-sm font-medium">
              Current
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-purple-600 to-gray-300 dark:to-gray-700"></div>
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience