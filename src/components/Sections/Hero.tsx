'use client'
import { useEffect, useState } from 'react'
import BlurText from '../BlurText/BlurText'
import Aurora from '../Aurora/Aurora'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#3B82F6", "#8B5CF6", "#06B6D4"]} // Blue to Purple to Cyan gradient
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Dharanivel L
            </span>
          </h1>
          <BlurText
            text="Full Stack Web Developer & Designer"
            className="text-xl md:text-2xl text-gray-100 mb-8 justify-center drop-shadow-md"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <BlurText
            text="I create beautiful, responsive web applications with modern technologies. Passionate about clean code and exceptional user experiences."
            className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto justify-center drop-shadow-md"
            delay={150}
            animateBy="words"
            direction="bottom"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600/90 hover:bg-blue-700/90 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-blue-500/30 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 text-white hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
