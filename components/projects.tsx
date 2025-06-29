"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Self Service Portal",
    description:
      "Developed a robust and user-friendly Self-Service Portal enabling seamless Active Directory (AD) password management.",
    image: "./placeholder.svg?height=300&width=500",
    tags: ["AngularJS", "JavaScript", "Grunt", "HTML5", "CSS3", "Java"],
    demo: "#",
    details:
      "Developed a robust and user-friendly Self-Service Portal enabling seamless Active Directory (AD) password management. The application empowered end users with the ability to reset or change their AD passwords independently, reducing IT support overhead and improving user productivity.",
  },
  {
    id: 2,
    title: "Graph NG Visualization Tool",
    description:
      "Advanced graph visualization library built on Angular with Echarts integration for complex data relationships and network analysis.",
    image: "./images/graph-network.jpg",
    tags: ["Angular 19", "Echarts", "Graph Theory", "WebGL"],
    github: "#",
    demo: "#",
    details:
      "A powerful visualization tool that renders complex graph structures with smooth animations, interactive nodes, and customizable layouts for network analysis and data exploration.",
  },
  {
    id: 3,
    title: "Charts Library",
    description:
      "Designed and developed a powerful Reusable Charts Library using D3.js, focused on delivering modular, customizable, and performance-optimized data visualizations.",
    image: "/images/angular-dashboard.jpg?height=300&width=500",
    tags: ["Angular 13+", "d3.js", "Typescript", "Data Visualization"],
    github: "#",
    demo: "#",
    details:
      "Designed and developed a powerful Reusable Charts Library using D3.js, focused on delivering modular, customizable, and performance-optimized data visualizations.",
  },
  {
    id: 4,
    title: "Core Components and Boilerplate",
    description:
      "Built a comprehensive UI Components Library featuring a wide range of reusable, customizable, and consistent widgets to streamline frontend development and promote design uniformity across applications.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular 13+", "Typescript", "UI Components", "Design System"],
    github: "#",
    demo: "#",
    details:
      "Built a comprehensive UI Components Library featuring a wide range of reusable, customizable, and consistent widgets to streamline frontend development and promote design uniformity across applications.",
  },
  {
    id: 5,
    title: "Content Management & Experience Portal for Sales Team",
    description:
      "Designed and delivered a centralized Content Management Portal tailored for the sales team, serving as both an operational hub and a digital experience center to effectively showcase ignio's capabilities to clients.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["MongoDB", "Angular", "Node.js", "Express.js", "REST API"],
    github: "#",
    demo: "#",
    details:
      "Designed and delivered a centralized Content Management Portal tailored for the sales team, serving as both an operational hub and a digital experience center to effectively showcase ignio's capabilities to clients.",
  },
  {
    id: 6,
    title: "ignio Batch Analytics – Real-Time Job Monitoring",
    description:
      "Architected and developed a Batch Analytics Dashboard within ignio, enabling real-time visibility into enterprise job processes and batch operations.",
    image: "/placeholder.svg?height=300&width=500",
    tags: [
      "Angular 2+",
      "Websocket",
      "MQTT",
      "Java",
      "Spring Boot",
      "Microservices",
    ],
    github: "#",
    demo: "#",
    details:
      "Architected and developed a Batch Analytics Dashboard within ignio, enabling real-time visibility into enterprise job processes and batch operations.",
  },
  {
    id: 7,
    title:
      "ignio Navigator – Unified Interface with Microfrontend Architecture",
    description:
      "Contributed to the design and development of ignio Navigator, a centralized web application that brings together multiple ignio capabilities through a scalable microfrontend architecture.",
    image: "/placeholder.svg?height=300&width=500",
    tags: [
      "Angular 2+",
      "JasperSoft",
      "TypeScript",
      "Microfrontend",
      "Web Components",
    ],
    github: "#",
    demo: "#",
    details:
      "Contributed to the design and development of ignio Navigator, a centralized web application that brings together multiple ignio capabilities through a scalable microfrontend architecture..",
  },
  {
    id: 8,
    title: "2D Floorplan Editor & Viewer Library",
    description:
      "Built an interactive 2D Editor using PIXI.js for room, wall, and floor plan manipulation with high-performance graphics and responsive canvas interactions.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular 11+", "Typescript", "OpenLayers", "PixiJS", "WebGL"],
    github: "#",
    demo: "#",
    details:
      "Built an interactive 2D Editor using PIXI.js for room, wall, and floor plan manipulation with high-performance graphics and responsive canvas interactions. Integrated OpenLayers for geospatial visualization, enabling map overlays, transformations, and synchronized coordinate views for a seamless design experience.",
  },
  {
    id: 9,
    title: "Data Setup Application",
    description:
      "Intelligent analytics dashboard with machine learning insights, predictive modeling, and automated report generation.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular 16+", "Typescript", "Golang", "ECharts"],
    github: "#",
    demo: "#",
    details:
      "An advanced analytics platform that leverages machine learning algorithms to provide predictive insights, anomaly detection, and automated business intelligence reporting.",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications,
            data visualization tools, and enterprise solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.details}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
