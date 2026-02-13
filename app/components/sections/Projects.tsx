
'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Rocket, Zap } from 'lucide-react'
import Button from '../ui/Button'

const Projects = () => {
  const projects = [
    {
      title: 'AI Goal Accountability Platform',
      description: 'Revolutionary AI-powered platform that transforms vague goals into actionable milestones using Gemini API. Features dynamic escrow system and behavioral psychology integration.',
      emoji: '🎯',
      tags: ['React.js', 'Gemini AI', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500',
      stats: { impact: 'AI-Powered', metric: 'Innovative' },
      github: 'https://github.com/raziahmad854',
      demo: 'https://ai-escrow-six.vercel.app/',
      showLinks: true,
    },
    {
      title: 'Healthcare Cost Estimator',
      description: 'Cross-platform healthcare app serving thousands of users. Optimized GraphQL queries boosted performance by 30%, making healthcare costs transparent and accessible.',
      emoji: '🏥',
      tags: ['React Native', 'TypeScript', 'GraphQL', 'Redux'],
      gradient: 'from-blue-500 to-cyan-500',
      stats: { impact: '30% Faster', metric: '1000s Users' },
      showLinks: false,
    },
    {
      title: 'MicroUI Platform',
      description: 'Enterprise microservice architecture with reusable UI components. Integrated across 3+ apps, cutting duplicate development by 40% and accelerating delivery.',
      emoji: '⚡',
      tags: ['TypeScript', 'GraphQL', 'Microservices', 'Docker'],
      gradient: 'from-orange-500 to-red-500',
      stats: { impact: '40% Less Code', metric: 'Enterprise Scale' },
      showLinks: false,
    }
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6"
          >
            <Sparkles size={18} className="text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Featured Work</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent">
              Building the Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative projects that solve real problems with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                
                {/* Content */}
                <div className="p-8 relative">
                  {/* Emoji Icon */}
                  <div className="text-6xl mb-6">{project.emoji}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{project.stats.impact}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">Impact</div>
                    </div>
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{project.stats.metric}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">Scale</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  {project.showLinks && (
                    <div className="flex gap-3">
                      <button
                        onClick={() => window.open(project.demo, '_blank')}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>View Live</span>
                      </button>
                      <button
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Github size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more? Check out my GitHub for all projects
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://github.com/raziahmad854', '_blank')}
            className="group"
          >
            <Github size={20} />
            <span>Explore All Projects</span>
            <Rocket size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects