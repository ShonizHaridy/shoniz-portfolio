// components/projects.tsx
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, Smartphone, Globe, ShoppingCart, Star, Eye } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  features: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
  priority: number
  featured?: boolean
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())

  const projects: Project[] = [
    {
      id: '1',
      title: 'Code Craft - Educational Programming Platform',
      description: 'Led the development of an online platform for interactive programming education with real-time code execution and algorithm visualizations. Graduation project with team leadership experience.',
      technologies: ['React', 'Flutter', 'Node.js', 'Django', 'MySQL', 'Docker'],
      features: [
        'Interactive learning tracks',
        'Real-time code execution',
        'Algorithm visualizations', 
        'Performance analytics',
        'Secure user authentication',
        'Scalable architecture with load balancing'
      ],
      githubUrl: 'https://github.com/ShonizHaridy/code-craft',
      category: 'fullstack',
      priority: 10,
      featured: true
    },
    {
      id: '2',
      title: 'TuraTrip - Multi-language Tourism Website',
      description: 'Comprehensive tourism platform for Egyptian travel destinations with complete booking system and multi-language support (Arabic/English).',
      technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'i18next'],
      features: [
        'Multi-language tourism booking platform',
        'Real-time currency conversion',
        'Admin dashboard with tour management',
        'Complete content management system',
        'Responsive design'
      ],
      // githubUrl: 'https://github.com/ShonizHaridy/turatrip',
      liveUrl: 'https://turatrip.com',
      category: 'fullstack',
      priority: 9,
      featured: true
    },
    {
      id: '3',
      title: 'SIRM Perfume Store - E-commerce Platform',
      description: 'Full-featured e-commerce platform with multi-language support (Arabic/English), complete admin management system, and user-friendly shopping experience.',
      technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Styled Components'],
      features: [
        'Multi-language support with RTL layout',
        'Admin panel with dashboard analytics',
        'Shopping cart with persistent storage',
        'Product catalog with search and filtering',
        'Order management system',
        'Responsive mobile-first design'
      ],
      githubUrl: 'https://github.com/ShonizHaridy/sirm-store',
      category: 'ecommerce',
      priority: 8,
      featured: true
    },
    {
      id: '4',
      title: 'DoseMate - Medication Management System',
      description: 'Comprehensive mobile medication management application with intelligent reminders, drug interaction detection, and family member tracking.',
      technologies: ['Flutter', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT', 'Nodemailer'],
      features: [
        'Secure OTP-based email verification',
        'Medication photo capture and barcode scanning',
        'Intelligent drug interaction detection',
        'Personalized medication reminders',
        'Family member tracking',
        'Real-time adherence tracking'
      ],
      githubUrl: 'https://github.com/ShonizHaridy/dosemate',
      category: 'mobile',
      priority: 8
    },
    {
      id: '5',
      title: 'Quiz Scheduling System',
      description: 'Automated quiz scheduling platform with intelligent conflict resolution algorithms and democratic voting systems for educational institutions.',
      technologies: ['Flutter', 'Django', 'MySQL', 'JWT'],
      features: [
        'Automated conflict detection for student schedules',
        'Democratic voting system for optimal quiz timing',
        'Real-time notifications for schedule changes',
        'PDF schedule parsing and processing',
        'Multi-role support system for faculty and students',
        'Comprehensive schedule management dashboard'
      ],
      githubUrl: 'https://github.com/ShonizHaridy/quiz-scheduling',
      category: 'mobile',
      priority: 7
    },
    {
      id: '6',
      title: 'Secure End-to-End Encrypted Chat Application',
      description: 'Real-time chat application with end-to-end encryption using OpenPGP.js to ensure private communication between users.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'OpenPGP.js'],
      features: [
        'End-to-end encrypted messaging',
        'Real-time message delivery',
        'Secure user authentication',
        'Contact management',
        'Message persistence',
        'Real-time communication with Socket.IO'
      ],
      githubUrl: 'https://github.com/ShonizHaridy/secure-chat',
      category: 'web',
      priority: 7
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects', icon: <Code className="w-4 h-4" />, count: projects.length },
    { value: 'fullstack', label: 'Full Stack', icon: <Globe className="w-4 h-4" />, count: projects.filter(p => p.category === 'fullstack').length },
    { value: 'web', label: 'Web Apps', icon: <Globe className="w-4 h-4" />, count: projects.filter(p => p.category === 'web').length },
    { value: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" />, count: projects.filter(p => p.category === 'mobile').length },
    { value: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" />, count: projects.filter(p => p.category === 'ecommerce').length },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects.sort((a, b) => b.priority - a.priority)
    : projects.filter(project => project.category === selectedCategory).sort((a, b) => b.priority - a.priority)



  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A showcase of my expertise in full-stack development, mobile applications, and modern web technologies. 
            Each project represents a unique challenge solved with innovative solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              {selectedCategory === category.value && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl"
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                {category.icon}
                <span className="font-medium">{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.value 
                    ? 'bg-white/20' 
                    : 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                }`}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                  >
                    <Star size={12} fill="currentColor" />
                    <span>Featured</span>
                  </motion.div>
                )}
                
                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:border-primary-300 dark:group-hover:border-primary-600">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors pr-2 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2 flex-shrink-0">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-lg transition-all duration-300"
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-600 dark:text-primary-400 rounded-lg transition-all duration-300"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Code size={14} className="mr-1" />
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-lg text-xs font-medium border border-primary-200 dark:border-primary-700"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Star size={14} className="mr-1" />
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-3 mt-auto">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex-1 group/btn"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex-1 group/btn shadow-lg hover:shadow-xl"
                        >
                          <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Code size={32} className="text-gray-400" />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects