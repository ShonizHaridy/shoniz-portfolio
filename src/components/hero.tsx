// components/hero.tsx - Server component with CSS animations
import { Github, Linkedin, Mail, MapPin, Phone, ArrowDown, Sparkles, Code, Zap } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-purple-900/20"></div>

      {/* Floating particles with CSS animations */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center opacity-0 animate-fadeIn">
          {/* Profile Image with CSS animations */}
          <div className="mb-8 relative inline-block opacity-0 animate-slideUp">
            <div className="relative">
              <div className="w-40 h-40 mx-auto rounded-full shadow-2xl relative overflow-hidden ring-4 ring-primary-500/50 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 hover:scale-105 transition-all duration-300 animate-pulse-ring">
                <Image
                  src="/Profile_Image.png"
                  alt="Shoniz Mahmoud - Software Engineer"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-shimmer"></div>
              </div>

              {/* Orbiting icons with CSS animation */}
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                <Code className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-primary-500" />
                <Zap className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-5 h-5 text-purple-500" />
                <Sparkles className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 text-primary-400" />
              </div>
            </div>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Shoniz Mahmoud</span>
          </h1>

          {/* Animated subtitle */}
          <div className="mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              <span className="opacity-0 animate-fade-in-delayed">Software Engineer</span>
              <span className="text-primary-600 dark:text-primary-400 mx-2 animate-pulse">&</span>
              <span className="opacity-0 animate-fade-in-delayed-2">Developer</span>
            </h2>
          </div>

          {/* Enhanced description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            Computer Engineering graduate specializing in{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">full-stack development</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">mobile applications</span>, and{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">modern web technologies</span>.
            Expert in React, Next.js, Node.js, Django, React Native, and scalable system architecture.
          </p>

          {/* Contact info with hover animations */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-400 opacity-0 animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <MapPin size={16} className="text-primary-500" />
              <span>Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <Phone size={16} className="text-primary-500" />
              <span>(+20) 112 944 8472</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <Mail size={16} className="text-primary-500" />
              <span>shonizharidy@gmail.com</span>
            </div>
          </div>

          {/* Social links with staggered animations */}
          <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-slideUp" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/ShonizHaridy"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shoniz-mahmoud"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 border border-gray-200/50 dark:border-gray-700/50 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shonizharidy@gmail.com"
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-red-500 border border-gray-200/50 dark:border-gray-700/50 hover:scale-110 hover:-translate-y-1"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA button with scroll functionality */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slideUp" style={{ animationDelay: '1.2s' }}>
            <a
              href="#about"
              className="group relative bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Learn More About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>

            <div className="text-primary-500 dark:text-primary-400 animate-bounce">
              <ArrowDown size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero