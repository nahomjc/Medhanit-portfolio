"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Digital Marketing Course Series",
      category: "Course Management",
      description:
        "Comprehensive 12-module course covering digital marketing fundamentals, with interactive content and real-world case studies.",
      image: "/api/placeholder/400/300",
      technologies: ["LMS", "Video Production", "Interactive Content"],
      stats: { students: "2,500+", completion: "94%", rating: "4.9" },
    },
    {
      id: 2,
      title: "Brand Identity for Tech Startup",
      category: "Visual Design",
      description:
        "Complete brand identity design including logo, color palette, typography, and marketing materials for a growing tech company.",
      image: "/api/placeholder/400/300",
      technologies: ["Adobe Creative Suite", "Brand Strategy", "UI/UX"],
      stats: { clients: "15+", satisfaction: "100%", projects: "50+" },
    },
    {
      id: 3,
      title: "Interactive Learning Platform",
      category: "Content Creation",
      description:
        "Developed engaging visual content and interactive modules for an online learning platform serving 10,000+ students.",
      image: "/api/placeholder/400/300",
      technologies: [
        "Motion Graphics",
        "Interactive Design",
        "Video Production",
      ],
      stats: { users: "10,000+", engagement: "85%", modules: "200+" },
    },
    {
      id: 4,
      title: "Corporate Training Program",
      category: "Course Management",
      description:
        "Designed and implemented comprehensive training program for corporate clients, resulting in 40% improvement in employee performance.",
      image: "/api/placeholder/400/300",
      technologies: ["Curriculum Design", "Assessment Tools", "Analytics"],
      stats: { companies: "25+", improvement: "40%", satisfaction: "98%" },
    },
    {
      id: 5,
      title: "Social Media Campaign Visuals",
      category: "Visual Design",
      description:
        "Created compelling visual content for social media campaigns that increased brand engagement by 300% across multiple platforms.",
      image: "/api/placeholder/400/300",
      technologies: [
        "Social Media Design",
        "Brand Guidelines",
        "Content Strategy",
      ],
      stats: { reach: "500K+", engagement: "300%", platforms: "5+" },
    },
    {
      id: 6,
      title: "E-learning Mobile App Design",
      category: "Content Creation",
      description:
        "Designed user interface and created educational content for mobile learning application with focus on accessibility and user experience.",
      image: "/api/placeholder/400/300",
      technologies: ["Mobile Design", "Accessibility", "User Research"],
      stats: { downloads: "50K+", rating: "4.8", accessibility: "100%" },
    },
  ];

  const categories = [
    "All",
    "Course Management",
    "Visual Design",
    "Content Creation",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Showcasing my expertise in course management, visual design, and
            content creation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                activeFilter === category
                  ? "bg-red-400 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-400/20 hover:text-red-400"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Scattered Cards Layout */}
        <div className="relative min-h-[800px]">
          {filteredProjects.map((project, index) => {
            // Define scattered positions for each card
            const scatteredPositions = [
              { x: -150, y: -100, rotation: -20, scale: 0.7 },
              { x: 200, y: -80, rotation: 25, scale: 0.8 },
              { x: -100, y: 150, rotation: -15, scale: 0.9 },
              { x: 250, y: 100, rotation: 20, scale: 0.75 },
              { x: -200, y: 50, rotation: -25, scale: 0.85 },
              { x: 100, y: 200, rotation: 15, scale: 0.8 },
            ];

            // Define organized positions (grid layout)
            const organizedPositions = [
              { x: 0, y: 0, rotation: 0, scale: 1 },
              { x: 400, y: 0, rotation: 0, scale: 1 },
              { x: 800, y: 0, rotation: 0, scale: 1 },
              { x: 0, y: 400, rotation: 0, scale: 1 },
              { x: 400, y: 400, rotation: 0, scale: 1 },
              { x: 800, y: 400, rotation: 0, scale: 1 },
            ];

            const scatteredPos = scatteredPositions[index] || {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.8,
            };
            const organizedPos = organizedPositions[index] || {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
            };

            return (
              <motion.div
                key={project.id}
                className="absolute w-80 h-96"
                initial={{
                  x: scatteredPos.x,
                  y: scatteredPos.y,
                  rotate: scatteredPos.rotation,
                  scale: scatteredPos.scale,
                  opacity: 0.6,
                }}
                animate={
                  isInView
                    ? {
                        x: organizedPos.x,
                        y: organizedPos.y,
                        rotate: organizedPos.rotation,
                        scale: organizedPos.scale,
                        opacity: 1,
                      }
                    : {
                        x: scatteredPos.x,
                        y: scatteredPos.y,
                        rotate: scatteredPos.rotation,
                        scale: scatteredPos.scale,
                        opacity: 0.6,
                      }
                }
                transition={{
                  duration: 1.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-full bg-gray-900/30 border border-red-400/20 rounded-2xl overflow-hidden hover-lift group">
                  {/* Project Image */}
                  <div className="relative h-48 bg-linear-to-br from-red-400/20 to-red-400/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-400/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📁</span>
                      </div>
                      <p className="text-red-300 text-sm">Project Preview</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-red-400/20 text-red-400 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-red-400/10 text-red-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center mb-4">
                      {Object.entries(project.stats)
                        .slice(0, 2)
                        .map(([key, value], statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-red-400 font-bold text-lg">
                              {value}
                            </div>
                            <div className="text-gray-400 text-xs capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className="w-full px-4 py-2 bg-red-400/20 hover:bg-red-400/30 text-red-400 rounded-lg transition-all duration-300 border border-red-400/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button className="px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover-lift transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
