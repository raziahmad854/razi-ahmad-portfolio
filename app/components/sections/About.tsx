'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Database, Zap } from 'lucide-react'
import Card from '../ui/Card'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Expert',
      description: '2+ years building scalable web applications with React.js, TypeScript, and modern frameworks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native expertise for cross-platform mobile apps with native performance'
    },
    {
      icon: Database,
      title: 'Full-Stack Skills',
      description: 'MERN stack proficiency with GraphQL, REST APIs, and database management'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Experience with AI-powered applications using Gemini API and prompt engineering'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Frontend Engineer with a proven track record of delivering 
            high-performance applications and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Frontend Engineer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">
                With over 2 years of experience in frontend development, I specialize in creating 
                scalable, user-centric web and mobile applications. Currently working as an 
                <strong className="text-primary-600 dark:text-primary-400"> Associate Software Engineer 2 at Optum</strong>, 
                where I've built high-impact solutions serving thousands of users.
              </p>
              
              <p className="leading-relaxed">
                My expertise spans across the React ecosystem, with deep knowledge in performance 
                optimization, accessibility standards (WCAG), and modern development practices. 
                I'm passionate about leveraging emerging technologies like AI to create innovative 
                solutions that solve real-world problems.
              </p>

              <p className="leading-relaxed">
                Recently, I developed an <strong className="text-primary-600 dark:text-primary-400">
                AI-powered goal accountability platform</strong> using the Gemini API and MERN stack, 
                showcasing my ability to integrate cutting-edge AI technologies with traditional 
                web development practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">40%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">1000s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Users Served</div>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 p-8 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h4 className="text-xl font-semibold gradient-text">Code Enthusiast</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Always learning, always building
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About