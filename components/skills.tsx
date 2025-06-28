"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Angular(All versions)", level: 85, color: "from-blue-500 to-blue-600" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "HTML/CSS", level: 80, color: "from-orange-500 to-orange-600" },
      { name: "JavaScript", level: 80, color: "from-orange-500 to-orange-600" },
      { name: "d3.js", level: 70, color: "from-orange-500 to-orange-600" },
      { name: "Pixi.js", level: 70, color: "from-orange-500 to-orange-600" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70, color: "from-green-500 to-green-600" },
      { name: "Go Lang", level: 40, color: "from-yellow-500 to-yellow-600" },
      { name: "Java", level: 60, color: "from-red-500 to-red-600" },
      { name: "PostgreSQL", level: 85, color: "from-blue-500 to-blue-600" },
      { name: "MongoDB", level: 60, color: "from-green-500 to-green-600" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85, color: "from-blue-500 to-blue-600" },
      { name: "AWS", level: 80, color: "from-orange-500 to-orange-600" },
      { name: "Git", level: 95, color: "from-red-500 to-red-600" },
      { name: "CI/CD", level: 85, color: "from-purple-500 to-purple-600" },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and
            frameworks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.title}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.6,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Radar Chart Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Frontend Development", level: 95, icon: "🎨" },
              { name: "Team Leadership", level: 90, icon: "👥" },
              { name: "System Architecture", level: 85, icon: "🏗️" },
              { name: "Problem Solving", level: 95, icon: "🧩" },
            ].map((competency, index) => (
              <motion.div
                key={competency.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10"
              >
                <div className="text-4xl mb-4">{competency.icon}</div>
                <h4 className="text-white font-semibold mb-2">{competency.name}</h4>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {competency.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
