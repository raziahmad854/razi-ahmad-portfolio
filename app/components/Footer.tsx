'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/raziahmad854',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/razi-a-26a318209',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:raziahmad854301@gmail.com',
      label: 'Email',
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Razi Ahmad
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Frontend Engineer • React Specialist • AI Enthusiast</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> using Next.js & TailwindCSS
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} Razi Ahmad. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer