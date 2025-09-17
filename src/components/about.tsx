// components/about.tsx
"use client"

import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Globe, Award, Users, Zap, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Expertise in React, Node.js, Django, and modern web frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "React Native and Flutter applications for iOS and Android",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "MySQL, MongoDB, PostgreSQL with optimized performance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Responsive design, API integration, and scalable architecture",
      color: "from-orange-500 to-red-500"
    }
  ]

  const stats = [
    { icon: <Target className="w-6 h-6" />, label: "Projects Completed", value: "15+" },
    { icon: <Award className="w-6 h-6" />, label: "Technologies Mastered", value: "20+" },
    { icon: <Users className="w-6 h-6" />, label: "Team Leadership", value: "Multiple" },
    { icon: <Zap className="w-6 h-6" />, label: "Years Experience", value: "2+" }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      
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
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Passionate about creating innovative solutions and delivering exceptional user experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Computer Engineering Graduate & 
              <span className="gradient-text"> Software Developer</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg"
              >
                I&apos;m a results-driven Software Engineer with a solid foundation 
                in software development, web technologies. Currently working as a Full Stack 
                Developer at Altamayuz Firm, where I build and optimize web applications with modern frameworks.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg"
              >
                My expertise spans across frontend frameworks like React and Next.js, backend development 
                with Node.js and Django, mobile app development using React Native and Flutter, and database 
                design with MySQL and MongoDB.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg"
              >
                I&apos;m passionate about creating user-centric applications with responsive design and robust 
                architecture. My experience includes e-commerce platforms, educational tools, healthcare 
                applications, and real-time communication systems.
              </motion.p>
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { lang: "Arabic", level: "Native", color: "from-emerald-500 to-green-500" },
                  { lang: "English", level: "Fluent", color: "from-blue-500 to-cyan-500" },
                  { lang: "German", level: "Beginner", color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <motion.div
                    key={item.lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-r ${item.color} p-0.5 rounded-xl`}
                  >
                    <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.lang}</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">({item.level})</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative flex items-start space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className={`flex-shrink-0 p-3 bg-gradient-to-r ${highlight.color} text-white rounded-xl shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800/50 dark:to-purple-900/20 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex p-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-xl mb-3 group-hover:shadow-lg transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About