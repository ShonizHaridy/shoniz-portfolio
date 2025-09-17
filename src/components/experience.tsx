// src/components/experience.tsx
"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Altamayuz Firm",
      location: "Remote",
      startDate: "January 2025",
      endDate: "Present",
      current: true,
      description: [
        "Built and optimized web applications with modern frontend and backend frameworks",
        "Implemented responsive designs and backend logic for stable performance",
        "Optimized application performance and user experience"
      ]
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      location: "Remote",
      startDate: "2024",
      endDate: "Present",
      current: true,
      description: [
        "Delivered custom web and mobile applications for various clients",
        "Used React, Next.js, Node.js, Django, React Native, and Flutter",
        "Managed full project lifecycle from requirements to deployment"
      ]
    },
    {
      title: "Training Program Participant",
      company: "Novix Code",
      location: "Cairo, Egypt",
      startDate: "October 2024",
      endDate: "January 2025",
      current: false,
      description: [
        "Intensive training in software development best practices",
        "Gained hands-on experience in modern frameworks",
        "Participated in collaborative development environments"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10 ${
                index % 2 === 0 ? 'md:right-[-8px] md:left-auto' : 'md:left-[-8px]'
              }`}></div>

              <div className="ml-12 md:ml-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                  <Calendar size={16} />
                  <span>{exp.startDate} - {exp.endDate}</span>
                  {exp.current && (
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience