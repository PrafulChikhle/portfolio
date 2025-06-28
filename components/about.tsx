"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Zap, Award } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "Assistant System Engineer",
    subTitle: "Tata Consultancy Services Ltd, Pune",
    description:
      "Began career as a Junior Java Developer, focusing on Core Java and Spring Framework.",
    icon: Zap,
  },
  {
    year: "2017",
    title: "System Engineer",
    subTitle: "Digitate, Pune",
    description:
      "Led full-stack development initiatives, specializing in both frontend Angular development and backend Spring Cloud microservices, with a strong focus on application security.",
    icon: Zap,
  },
  {
    year: "2018",
    title: "IT Analyst",
    subTitle: "Digitate, Pune",
    description:
      "Led full-stack development initiatives for enterprise applications, focusing on UI platform development, self-service solutions, and cross-browser compatibility.",
    icon: Zap,
  },
  {
    year: "2021",
    title: "Assistant Consultant",
    subTitle: "Digitate, Pune",
    description:
      "Leading digital transformation initiatives and mentoring developers",
    icon: Zap,
  },
  {
    year: "2022",
    title: "Senior Software Engineer",
    subTitle: "Siemens Technology And Services Private Limited, Pune",
    description:
      "Architecting and developing comprehensive solutions for digital building management and user onboarding, combining advanced visualization technologies with streamlined user experiences.",
    icon: Zap,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer and technical lead with over 10
            years of experience in building scalable web applications and
            leading high-performing development teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in software development began with a curiosity about
                how things work behind the scenes. What started as a hobby
                quickly became a passion, leading me to specialize in modern web
                technologies and team leadership.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I focus on creating exceptional user experiences using
                Angular, developing robust data setup applications, and
                mentoring the next generation of developers. I believe in
                writing clean, maintainable code and fostering collaborative
                team environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  9+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="relative flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <milestone.icon size={20} className="text-white" />
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-bold text-blue-400">
                      {milestone.year}
                    </span>
                    <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {milestone.title}
                  </h4>
                  <h5 className="text-sm font-semibold text-white mb-2">
                    {milestone.subTitle}
                  </h5>
                  <p
                    className="text-gray-300 text-sm"
                    dangerouslySetInnerHTML={{ __html: milestone.description }}
                  ></p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
