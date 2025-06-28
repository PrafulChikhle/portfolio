"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Senior Frontend
            </span>
            <br />
            <span className="text-white">Engineer</span>
            <br />
            <span className="text-gray-400 text-3xl lg:text-4xl">& Technical Lead</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Crafting exceptional digital experiences with cutting-edge technologies. Passionate about Angular, modern
            web development, and leading high-performing teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex space-x-6"
          >
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/praful-chikhle-29010486/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:prafulchikhle20@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Icon size={24} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl" />
            <div className="relative z-10 text-center space-y-6">
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white/30">
                <Image
                  src="/images/praful-profile.jpeg"
                  alt="Praful Chikhle"
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Praful Chikhle</h3>
                <p className="text-blue-300 font-medium">Senior Technical Lead</p>
                <p className="text-gray-300 text-sm mt-2">9+ Years Experience</p>
              </div>

              <div className="flex justify-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">10+</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
