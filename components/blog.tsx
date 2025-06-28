"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title:
      "Design Patterns to Avoid in Angular: Modern Alternatives for Better Code",
    excerpt:
      "Angular’s modern architecture and built-in features make many of these patterns unnecessary or even counterproductive. This article explores which patterns to avoid and what to use instead.",
    image: "/placeholder.svg?height=200&width=350",
    date: "2025-05-12",
    readTime: "3 min read",
    category: "Design Patterns",
    slug: "scalable-angular-applications",
    link: "https://medium.com/@prafulchikhle2050/design-patterns-to-avoid-in-angular-modern-alternatives-for-better-code-0b67a5f56e77",
  },
  {
    id: 2,
    title:
      "Design Patterns: Java vs Angular/TypeScript : A Practical Comparison",
    excerpt:
      "Design patterns are essential solutions to common software design problems, but their implementation varies significantly between Java and Angular/TypeScript due to different programming paradigms and environments.",
    image: "/placeholder.svg?height=200&width=350",
    date: "2025-05-1",
    readTime: "5 min read",
    category: "Design Patterns",
    slug: "scalable-angular-applications",
    link: "https://medium.com/@prafulchikhle2050/design-patterns-java-vs-angular-typescript-a-practical-comparison-907e3c66ad45",
  },
  {
    id: 3,
    title: "Web Workers Aren’t Magic",
    excerpt:
      "Web Workers Aren’t Magic: Understanding Browser’s Concurrent Request Limits in Angular Applications",
    image: "/placeholder.svg?height=200&width=350",
    date: "2025-05-1",
    readTime: "2 min read",
    category: "Web workers",
    slug: "web-workers",
    link: "https://medium.com/@prafulchikhle2050/web-workers-arent-magic-understanding-browser-s-concurrent-request-limits-in-angular-applications-463cbf8d8386",
  },
  {
    id: 4,
    title:
      "Why Complex Calculations Belong on the Backend: A Comprehensive Guide",
    excerpt:
      "In modern web applications, deciding where to perform calculations in frontend or backend is a crucial architectural decision. While it might seem convenient to handle calculations on the UI, there are compelling reasons to move complex computations to the backend.",
    image: "/placeholder.svg?height=200&width=350",
    date: "2025-05-10",
    readTime: "2 min read",
    category: "Complex Calculations",
    slug: "complex-calculations-backend",
    link: "https://medium.com/@prafulchikhle2050/why-complex-calculations-belong-on-the-backend-a-comprehensive-guide-d255e65cc70a",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about software development, technical
            leadership, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a key={post.id} href={post.link}>
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={350}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-500/80 text-white rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group/btn">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </a>
          ))}
        </div>

        {/* <motion.div }
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            View All Posts
          </button>
        { </motion.div> */}
      </div>
    </section>
  );
}
