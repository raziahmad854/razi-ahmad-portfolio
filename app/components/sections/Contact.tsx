
'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/raziahmad854',
      username: '@raziahmad854',
      color: 'hover:text-gray-900 dark:hover:text-white',
      bg: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/razi-a-26a318209',
      username: 'in/razi-ahmad',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:raziahmad854301@gmail.com',
      username: 'raziahmad854301@gmail.com',
      color: 'hover:text-purple-600',
      bg: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-950 dark:via-purple-950/10 dark:to-gray-950"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6"
            >
              <Sparkles size={18} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Let's Connect</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 px-4">
              Have a project in mind or just want to chat about tech? I'd love to hear from you!
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 px-4">
              <MapPin size={18} />
              <span className="text-sm sm:text-base">Based in Delhi, India • Available Worldwide</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center transition-all ${link.bg}`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-full ${link.color} transition-colors`}>
                    <link.icon size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">
                      {link.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {link.username}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all"></div>
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-base sm:text-lg text-purple-100 mb-8 max-w-2xl mx-auto px-4">
                Whether it's a new project, collaboration opportunity, or just a friendly chat about tech—I'm all ears!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'mailto:raziahmad854301@gmail.com'}
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Send size={20} />
                  <span>Send me an email</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com/in/razi-a-26a318209', '_blank')}
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </Button>
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new opportunities</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact