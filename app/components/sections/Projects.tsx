'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Smartphone, Globe, Code2 } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Goal Accountability Platform',
      description: 'A full-stack MVP leveraging behavioral psychology to promote user accountability through a dynamic escrow system. Features AI integration using Gemini API to transform high-level goals into structured, trackable milestones.',
      image: '🎯',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'JWT', 'Express.js'],
      features: [
        'AI-driven goal structuring with Gemini API',
        'Behavioral psychology integration',
        'Dynamic escrow system for accountability',
        'Secure JWT-based authentication',
        'Real-time progress tracking'
      ],
      impact: 'Innovative AI integration',
      github: 'https://github.com/raziahmad854',
      demo: '#',
      category: 'Full-Stack',
      icon: Zap
    },
    {
      title: 'HealthCare Cost Estimation Platform',
      description: 'Cross-platform healthcare cost estimator built with React.js, React Native, and TypeScript. Serves thousands of users with optimized performance through GraphQL integration.',
      image: '🏥',
      technologies: ['React.js', 'React Native', 'TypeScript', 'GraphQL', 'Redux'],
      features: [
        'Cross-platform compatibility (Web + Mobile)',
        'Advanced cost calculation algorithms',
        'Optimized GraphQL queries',
        'Redux state management',
        'Responsive design'
      ],
      impact: '30% performance improvement',
      github: 'https://github.com/raziahmad854',
      demo: '#',
      category: 'Healthcare',
      icon: Smartphone
    },
    {
      title: 'MicroUI Microservice Platform',
      description: 'TypeScript-based MicroUI microservice with GraphQL for reusable frontend modules. Successfully integrated across 3+ enterprise applications, reducing duplicate development significantly.',
      image: '⚡',
      technologies: ['TypeScript', 'GraphQL', 'Microservices', 'React.js', 'Docker'],
      features: [
        'Modular microservice architecture',
        'GraphQL API integration',
        'Reusable UI components',
        'Enterprise-grade scalability',
        'Docker containerization'
      ],
      impact: '40% reduction in duplicate development',
      github: 'https://github.com/raziahmad854',
      demo: '#',
      category: 'Enterprise',
      icon: Code2
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400'
      case 'Healthcare': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400'
      case 'Enterprise': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcase of innovative solutions combining modern technologies, 
            AI integration, and performance optimization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 group relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Project Info */}
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                            <project.icon size={24} className="text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <span className="text-4xl">{project.image}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Impact Badge */}
                      <div className="mb-6">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                          <Zap size={14} className="mr-1" />
                          {project.impact}
                        </span>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => window.open(project.demo, '_blank')}
                          className="flex-shrink-0"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex-shrink-0"
                        >
                          <Github size={16} />
                          Source Code
                        </Button>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Project Visualization */}
                      <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
                        <div className="flex items-center justify-center space-x-4 text-primary-600 dark:text-primary-400">
                          <Globe size={24} />
                          <span className="text-sm font-medium">Production Ready</span>
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com/raziahmad854', '_blank')}
          >
            <Github size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects