'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { scrollToSection, downloadResume } from '@/lib/utils'
import Button from '../ui/Button'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/raziahmad854', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/razi-a-26a318209', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:raziahmad854301@gmail.com', label: 'Email' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-200/30 dark:bg-accent-800/30 rounded-full blur-xl"
          animate={{ 
            y: [-15, 15, -15],
            x: [-5, 5, -5] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">RA</span>
              </div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Razi Ahmad</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Frontend Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building scalable, high-performance web and mobile applications using{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">React.js</span>,{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">React Native</span>, and{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">TypeScript</span>
            </p>
          </motion.div>

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {['React.js', 'React Native', 'TypeScript', 'GraphQL', 'AI Integration', 'MERN Stack'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-[200px]"
            >
              <Mail size={20} />
              Get In Touch
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              onClick={downloadResume}
              className="min-w-[200px]"
            >
              <Download size={20} />
              Download Resume
            </Button> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
            >
              <ArrowDown size={20} className="text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero