'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/raziahmad854',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/razi-a-26a318209',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: 'mailto:raziahmad854301@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Razi Ahmad</h3>
            <p className="text-gray-600 dark:text-gray-400">Frontend Engineer</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a 
                href="tel:+919661730161"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                +91 9661730161
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200 ${link.color}`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-gray-500 dark:text-gray-500"
          >
            <p>© {currentYear} Razi Ahmad. All rights reserved.</p>
            <p className="mt-1">
              Built with ❤️ using{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Next.js
              </span>{' '}
              &{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                TailwindCSS
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer