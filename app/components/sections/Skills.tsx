'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Database, 
  Zap, 
  TestTube, 
  GitBranch,
  Palette,
  Bot,
  Globe,
  Server
} from 'lucide-react'
import Card from '../ui/Card'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: Code,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'React Native', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Material UI', level: 85 },
        { name: 'Redux', level: 85 }
      ]
    },
    {
      title: 'Backend & Data',
      icon: Database,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'JWT Authentication', level: 85 }
      ]
    },
    {
      title: 'Performance & Testing',
      icon: TestTube,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      skills: [
        { name: 'Performance Optimization', level: 90 },
        { name: 'Jest', level: 85 },
        { name: 'React Testing Library', level: 80 },
        { name: 'Selenium', level: 75 },
        { name: 'WCAG Accessibility', level: 85 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'AI & Modern Tools',
      icon: Bot,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      skills: [
        { name: 'Gemini API', level: 80 },
        { name: 'GitHub Copilot', level: 90 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'AI Integration', level: 80 },
        { name: 'Figma', level: 85 }
      ]
    },
    {
      title: 'Workflow & DevOps',
      icon: GitBranch,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'Jenkins', level: 75 },
        { name: 'JIRA', level: 85 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'GitLens', level: 85 }
      ]
    }
  ]

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500'
    if (level >= 80) return 'bg-blue-500'
    if (level >= 70) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical skillset spanning frontend, backend, 
            AI integration, and modern development practices
          </p>
        </motion.div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center group">
                <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={32} className={category.color} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.skills.length} skills
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon size={24} className={category.color} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Professional proficiency
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.1)
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            skill.level >= 90 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : skill.level >= 80
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {getSkillLevelText(skill.level)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          className={`h-full rounded-full ${getSkillLevelColor(skill.level)} shadow-sm`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Technical Proficiency Summary
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    95%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Frontend Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    85%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Backend Integration
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    90%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Performance Optimization
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    80%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    AI Integration
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                  🚀 2+ Years Experience
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                  🏆 Production-Ready Applications
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                  ⚡ Performance Focused
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                  🤖 AI-Powered Solutions
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills