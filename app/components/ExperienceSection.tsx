"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Muyalogy Digital Services",
      position: "Course Manager & Senior Visual Content Creator",
      duration: "2022 - Present",
      status: "current",
      description:
        "Leading course development initiatives and creating compelling visual content for digital learning platforms. Managing cross-functional teams and ensuring high-quality educational content delivery.",
      achievements: [
        "Developed 50+ online courses with 95% completion rates",
        "Created visual content for 200+ educational modules",
        "Led a team of 8 content creators and designers",
        "Increased course engagement by 40% through innovative visual strategies",
      ],
      skills: [
        "Course Management",
        "Visual Design",
        "Team Leadership",
        "Content Strategy",
      ],
      metrics: {
        courses: "50+",
        completion: "95%",
        team: "8",
        engagement: "+40%",
      },
    },
    {
      company: "Muyalogy Digital Services",
      position: "Senior Graphics Designer",
      duration: "2020 - 2022",
      status: "previous",
      description:
        "Specialized in creating high-quality graphics and visual content for various digital platforms. Collaborated with marketing and development teams to deliver compelling visual solutions.",
      achievements: [
        "Designed 300+ graphics for digital campaigns",
        "Created brand identity for 15+ client projects",
        "Improved visual content performance by 60%",
        "Mentored junior designers and established design standards",
      ],
      skills: [
        "Graphic Design",
        "Brand Identity",
        "Digital Marketing",
        "Creative Direction",
      ],
      metrics: {
        graphics: "300+",
        projects: "15+",
        performance: "+60%",
        mentoring: "5+",
      },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-400/10 to-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-red-400/8 to-red-600/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Professional Section Header */}
        <motion.div
          className="text-center section-header mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-400/10 to-red-500/10 border border-red-400/30 rounded-full mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full mr-4 animate-pulse shadow-lg shadow-red-400/50"></div>
            <span className="text-red-300 font-semibold text-sm tracking-wider uppercase">
              Professional Experience
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">Professional</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto font-light">
            Transforming digital education through strategic course management
            and innovative visual design
          </p>
        </motion.div>

        {/* Professional Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400/20 via-red-400/40 to-red-400/20 transform -translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Timeline Node - Mobile: left side, Desktop: center */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-red-400 to-red-500 rounded-full border-2 md:border-4 border-black transform md:-translate-x-2 z-10 shadow-lg shadow-red-400/30">
                  {exp.status === "current" && (
                    <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-1/2 md:pr-8 lg:pr-16"
                      : "md:ml-1/2 md:pl-8 lg:pl-16"
                  }`}
                >
                  <div className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-red-400/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 hover:border-red-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-400/10 overflow-hidden">
                    {/* Card Background Effects - Responsive sizing */}
                    <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-3xl transform translate-x-24 md:translate-x-36 -translate-y-24 md:-translate-y-36 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-tr from-red-500/3 to-transparent rounded-full blur-2xl transform -translate-x-20 md:-translate-x-32 translate-y-20 md:translate-y-32 group-hover:scale-110 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 md:mb-8">
                        <div className="flex-1 mb-6 lg:mb-0">
                          {/* Status and Duration */}
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
                            <div
                              className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold ${
                                exp.status === "current"
                                  ? "bg-gradient-to-r from-red-400/20 to-red-500/20 text-red-300 border border-red-400/30"
                                  : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
                              }`}
                            >
                              {exp.duration}
                            </div>
                            {exp.status === "current" && (
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                                <span className="text-red-400 text-xs md:text-sm font-medium">
                                  Current Role
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Position and Company */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                            {exp.position}
                          </h3>
                          <p className="text-red-400 font-semibold text-lg md:text-xl mb-4 md:mb-6">
                            {exp.company}
                          </p>
                        </div>

                        {/* Metrics Cards - Responsive grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4 lg:ml-8">
                          {Object.entries(exp.metrics).map(
                            ([key, value], metricIndex) => (
                              <motion.div
                                key={metricIndex}
                                className="bg-gradient-to-br from-red-400/10 to-red-500/5 border border-red-400/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.8 }
                                }
                                transition={{
                                  duration: 0.5,
                                  delay: 1 + metricIndex * 0.1,
                                }}
                              >
                                <div className="text-lg md:text-2xl font-bold text-red-400 mb-1">
                                  {value}
                                </div>
                                <div className="text-xs text-gray-400 capitalize">
                                  {key}
                                </div>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-4xl">
                        {exp.description}
                      </p>

                      {/* Achievements Section */}
                      <div className="mb-8 md:mb-10">
                        <h4 className="text-red-400 font-bold text-lg md:text-xl mb-4 md:mb-6 flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                            <span className="text-red-400 text-sm md:text-base">
                              🎯
                            </span>
                          </div>
                          Key Achievements
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              className="flex items-start space-x-3 md:space-x-4 p-4 md:p-5 bg-gradient-to-r from-gray-800/30 to-gray-700/20 rounded-lg md:rounded-xl border border-red-400/10 hover:border-red-400/30 transition-all duration-300 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: 1.2 + achIndex * 0.1,
                              }}
                            >
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-red-400/30">
                                <span className="text-white text-xs font-bold">
                                  ✓
                                </span>
                              </div>
                              <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Section */}
                      <div>
                        <h4 className="text-red-400 font-bold text-lg md:text-xl mb-4 md:mb-6 flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                            <span className="text-red-400 text-sm md:text-base">
                              ⚡
                            </span>
                          </div>
                          Core Competencies
                        </h4>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-red-400/10 to-red-500/10 border border-red-400/30 text-red-300 rounded-full font-semibold hover:from-red-400/20 hover:to-red-500/20 hover:border-red-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm md:text-base"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isInView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: 1.6 + skillIndex * 0.1,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-red-400/25 backdrop-blur-sm text-sm md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Resume
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 border-2 border-red-400/30 hover:border-red-400/60 text-red-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
