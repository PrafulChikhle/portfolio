"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    company: "Siemens Technology And Services Private Limited",
    logo: "/images/siemens.png?height=60&width=60",
    position: "Senior Software Engineer & Technical Lead",
    duration: "Sep, 2021 - Present",
    location: "Pune, India",
    type: "Full-time",
    description:
      "Architecting and developing comprehensive solutions for digital building management and user onboarding, combining advanced visualization technologies with streamlined user experiences. Responsible for technical architecture decisions, code reviews, and mentoring junior developers.",
    achievements: [
      "<strong>Led the architecture and development of a comprehensive data onboarding platform</strong>, reducing user onboarding time by implementing intuitive workflows, automated validations, and progress tracking mechanisms.",
      "<strong>Engineered an interactive 2D floorplan editor using PIXI.js and Angular</strong>, enabling real-time editing, geospatial synchronization, and transformation capabilities for digital building layouts.",
      "<strong>Built and maintained reusable visualization libraries</strong>, including the custom Graph-ng network visualization framework and a suite of UI components, boosting cross-project efficiency and consistency.",
      "<strong>Created a modular and dynamic data setup interface</strong> with advanced table features like custom filtering, batch operations, and dynamic column configurations to handle complex configurations with ease.",
      "<strong>Engineering excellence by establishing code review processes</strong>, promoting best practices, and providing architectural guidance to streamline development and enhance code quality across teams.",
    ],
    technologies: [
      "Angular(All versions)",
      "TypeScript",
      "OpenLayers",
      "JavaScript",
      "Webpack",
      "Echarts",
      "PIXI.js",
    ],
    website: "#",
  },
  {
    id: 2,
    company: "Digitate (A TCS Company)",
    logo: "/images/digitate.jpg?height=60&width=60",
    position: "Assistant Consultant",
    duration: "Apr, 2021 - Aug, 2021",
    location: "Pune, India",
    type: "Full-time",
    description:
      "Leading enterprise software development initiatives at Digitate Product Experience, focusing on digital transformation and platform modernization.",
    achievements: [
      "<strong>Led the architecture and delivery of enterprise-grade Angular applications</strong>, mentoring a team of 6–7 developers and ensuring timely, high-quality feature releases aligned with business goals.",
      "<strong>Developed and scaled a core UI component library</strong> with reusable widgets, ensuring consistent UX, improved development velocity, and cross-browser compatibility across multiple applications.",
      "<strong>Delivered a secure, AD-integrated self-service portal</strong>, streamlining user access management while meeting enterprise security and compliance standards.",
      "<strong>Implemented robust test automation strategies</strong>, significantly improving unit test coverage and enabling zero-defect deliveries within strict SLAs.",
      "<strong>Drove adoption of Agile best practices and security protocols</strong>, including SAST/DAST, while maintaining 100% compliance with organizational and client-mandated quality processes.",
    ],
    technologies: ["Angular", "D3.js", "RxJS", "WebGL", "Chart.js", "SCSS"],
    website: "https://digitate.com",
  },
  {
    id: 3,
    company: "Digitate (A TCS Company)",
    logo: "/images/digitate.jpg?height=60&width=60",
    position: "IT Analyst",
    duration: "Jul 2018 - Mar 2021",
    location: "Remote",
    type: "Full-time",
    description:
      "Led full-stack development initiatives for enterprise applications, focusing on UI platform development, self-service solutions, and cross-browser compatibility.",
    achievements: [
      "<strong>Architected and delivered a Self-Service Portal</strong> with Active Directory integration, reducing password reset tickets by 70% through secure microservices and configurable event management.",
      "<strong>Led full-stack development of enterprise applications</strong>, combining robust backend services with modern UI frameworks to deliver scalable, secure, and user-friendly solutions.",
      "<strong>Enhanced the Core UI Platform</strong> by building advanced reusable widgets such as multi-step navigators and dynamic carousels, along with comprehensive documentation for team adoption.",
      "<strong>Improved UI/UX consistency across major browsers</strong> by implementing a browser-agnostic component architecture and a unified testing strategy, ensuring seamless experience on Chrome, Firefox, Safari, and Edge.",
      "<strong>Promoted design and development best practices</strong> by creating reusable UI patterns and enabling faster, more maintainable frontend development across multiple teams.",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Express.js",
      "JWT",
    ],
    website: "https://digitate.com",
  },
  {
    id: 4,
    company: "Digitate (A TCS Company)",
    logo: "/images/digitate.jpg?height=60&width=60",
    position: "System Engineer",
    duration: "Jul 2017 - June 2018",
    location: "Pune, India",
    type: "Full-time",
    description:
      "Led full-stack development initiatives, specializing in both frontend Angular development and backend Spring Cloud microservices, with a strong focus on application security.",
    achievements: [
      "<strong>Led the migration from AngularJS to Angular 2</strong>, while architecting a reusable widget library featuring dynamic forms, multi-level wizards, and domain-specific components to accelerate UI development.",
      "<strong>Designed and implemented a microservices architecture</strong> using Spring Cloud, with robust RESTful APIs, service discovery, and centralized configuration management for scalable backend operations.",
      "<strong>Strengthened application security</strong> by fixing code vulnerabilities, enforcing secure coding practices, enhancing input validation, and improving error handling across the application stack.",
    ],
    technologies: ["Angular 2+", "TypeScript", "JavaScript", "Bootstrap"],
    website: "#",
  },
  {
    id: 5,
    company: "Tata Consultancy Services Ltd",
    logo: "/images/tcs.png?height=60&width=60",
    position: "Assistant System Engineer",
    duration: "June 2015 - June 2017",
    location: "Pune, India",
    type: "Full-time",
    description:
      "Played a key role in the ignio Navigator team, focusing on AngularJS (Angular 1) development and complex problem-solving, including the implementation of a sophisticated rule engine. Contributed to a critical legacy system modernization project, focusing on API migration from Savion workflow to Pega platform.",
    achievements: [
      "<strong>Developed and implemented a custom rule engine</strong> to automate complex business workflows, improving operational efficiency and reducing manual interventions.",
      "<strong>Resolved critical production issues</strong>, ensuring system stability, high availability, and increased reliability across core applications.",
      "<strong>Enhanced legacy AngularJS applications</strong> by adding new features, improving performance, and extending functionality to meet evolving business needs.",
      "<strong>Successfully migrated legacy Java APIs</strong> from the Savion workflow to the Pega platform by analyzing existing logic and aligning it with Pega implementations.",
      "<strong>Collaborated with cross-functional teams</strong> to ensure seamless integration, and actively participated in testing and validation of migrated APIs for smooth deployment.",
    ],
    technologies: [
      "AngularJS",
      "Core Java",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    website: "#",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey through various roles and companies,
            showcasing growth in technical expertise and leadership skills.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-950 hidden lg:block" />

                {/* Content */}
                <div className={`flex-1 lg:pl-16`}>
                  <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                          <Image
                            src={experience.logo || "/placeholder.svg"}
                            alt={experience.company}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {experience.position}
                          </h3>
                          <div className="flex items-center space-x-2 text-blue-400 font-medium">
                            <span>{experience.company}</span>
                            <a
                              href={experience.website}
                              className="hover:text-blue-300 transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                        {experience.type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start space-x-2 text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: achievement,
                                }}
                              ></span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
