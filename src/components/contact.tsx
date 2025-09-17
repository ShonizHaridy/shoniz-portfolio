// // components/contact.tsx
// "use client"

// import { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User, FileText } from 'lucide-react'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     setSubmitted(true)
//     setIsSubmitting(false)
//     setFormData({ name: '', email: '', subject: '', message: '' })
    
//     setTimeout(() => setSubmitted(false), 3000)
//   }

//   const contactMethods = [
//     {
//       icon: <Phone className="w-5 h-5" />,
//       title: "Phone",
//       value: "(+20) 112 944 8472",
//       href: "tel:+201129448472",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <Mail className="w-5 h-5" />,
//       title: "Email",
//       value: "shonizharidy@gmail.com",
//       href: "mailto:shonizharidy@gmail.com",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       title: "Location",
//       value: "Cairo, Egypt",
//       href: "#",
//       color: "from-purple-500 to-pink-500"
//     }
//   ]

//   const socialLinks = [
//     {
//       icon: <Github className="w-5 h-5" />,
//       name: "GitHub",
//       href: "https://github.com/ShonizHaridy",
//       color: "hover:bg-gray-700",
//       description: "View my code repositories"
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/in/shoniz-mahmoud",
//       color: "hover:bg-blue-600",
//       description: "Connect professionally"
//     }
//   ]

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="gradient-text">Get In Touch</span>
//           </motion.h2>
//           <motion.div
//             className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8 rounded-full"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />
//           <motion.p
//             className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//           >
//             I'm always interested in new opportunities and collaborations. 
//             Let's discuss how we can work together to bring your ideas to life!
//           </motion.p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//                 Contact Information
//               </h3>
              
//               <div className="space-y-4">
//                 {contactMethods.map((method, index) => (
//                   <motion.a
//                     key={index}
//                     href={method.href}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.1 + index * 0.1 }}
//                     whileHover={{ scale: 1.02, x: 10 }}
//                     className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
//                       method.href === '#' 
//                         ? 'cursor-default' 
//                         : 'cursor-pointer hover:shadow-lg'
//                     } bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
//                   >
//                     <div className={`p-3 bg-gradient-to-r ${method.color} text-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
//                       {method.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
//                         {method.title}
//                       </h4>
//                       <p className="text-gray-600 dark:text-gray-400">
//                         {method.value}
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                 Connect With Me
//               </h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 + index * 0.1 }}
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-white ${social.color}`}
//                   >
//                     <div className="flex flex-col items-center space-y-2">
//                       {social.icon}
//                       <span className="text-sm font-medium">{social.name}</span>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Send me a message
//               </h3>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
//                       <User size={16} className="mr-2" />
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70"
//                       placeholder="Your Name"
//                     />
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
//                       <Mail size={16} className="mr-2" />
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70"
//                       placeholder="your.email@example.com"
//                     />
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
//                     <FileText size={16} className="mr-2" />
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70"
//                     placeholder="What's this about?"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
//                     <MessageCircle size={16} className="mr-2" />
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white resize-none backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70"
//                     placeholder="Tell me about your project or opportunity..."
//                   />
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.7 }}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                       className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                     />
//                   ) : (
//                     <>
//                       <Send size={20} />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </motion.button>

//                 <AnimatePresence>
//                   {submitted && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.9 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: -10, scale: 0.9 }}
//                       className="text-center p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-xl border border-green-200 dark:border-green-700"
//                     >
//                       Thank you! Your message has been sent successfully.
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact


// components/contact.tsx
"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "(+20) 112 944 8472",
      href: "tel:+201129448472",
      color: "from-green-500 to-emerald-500",
      description: "Call me directly"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      value: "(+20) 112 944 8472",
      href: "https://wa.me/201129448472",
      color: "from-green-600 to-green-500",
      description: "Message me on WhatsApp"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "shonizharidy@gmail.com",
      href: "mailto:shonizharidy@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Send me an email"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Cairo, Egypt",
      href: "#",
      color: "from-purple-500 to-pink-500",
      description: "Based in Cairo"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/ShonizHaridy",
      color: "hover:bg-gray-700",
      description: "View my repositories"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shoniz-mahmoud",
      color: "hover:bg-blue-600",
      description: "Connect professionally"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            <span className="gradient-text">Get In Touch</span>
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
            Ready to collaborate? I&apos;m always interested in discussing new opportunities,
            innovative projects, and exciting challenges. Let&apos;s connect and bring your ideas to life!
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? "_blank" : undefined}
              rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative overflow-hidden p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 ${
                method.href === '#' ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-r ${method.color} text-white rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {method.icon}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">
                  {method.value}
                </p>
                
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  {method.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Connect With Me
          </h3>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-white ${social.color}`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    {social.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold block">{social.name}</span>
                    <span className="text-sm opacity-75">{social.description}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800/50 dark:to-purple-900/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I&apos;d love to hear from you. Let&apos;s turn your vision into reality.
            </p>
            <motion.a
              href="https://wa.me/201129448472"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              <span>Start a Conversation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact