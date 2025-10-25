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
    },
    {
      company: "Muyalogy Digital Services",
      position: "Senior Graphics Designer",
      duration: "2020 - 2022",
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
    },
  ];

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
        {/* Professional Section Header */}
        <motion.div
          className="text-center section-header mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Active Label */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-red-400/10 border border-red-400/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-red-400 font-semibold text-sm tracking-wide">
              CURRENTLY WORKING
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Professional</span>
            <span className="block gradient-text bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Transforming digital education through strategic course management
            and innovative visual design
          </p>
        </motion.div>

        {/* Modern Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              {/* Experience Card */}
              <div className="relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-red-400/20 rounded-3xl p-10 hover-lift overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-110 transition-transform duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-400 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-red-400/20 border border-red-400/30 text-red-300 rounded-full text-sm font-semibold">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p className="text-red-400 font-semibold text-xl mb-4">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-4xl">
                    {exp.description}
                  </p>

                  {/* Achievements Grid */}
                  <div className="mb-10">
                    <h4 className="text-red-400 font-bold text-xl mb-6 flex items-center">
                      <span className="w-8 h-8 bg-red-400/20 rounded-lg flex items-center justify-center mr-3">
                        🎯
                      </span>
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-red-400/10 hover:border-red-400/30 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + achIndex * 0.1,
                          }}
                        >
                          <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div>
                    <h4 className="text-red-400 font-bold text-xl mb-6 flex items-center">
                      <span className="w-8 h-8 bg-red-400/20 rounded-lg flex items-center justify-center mr-3">
                        ⚡
                      </span>
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-6 py-3 bg-gradient-to-r from-red-400/10 to-red-400/10 border border-red-400/30 text-red-300 rounded-full font-semibold hover:from-red-400/20 hover:to-red-400/20 transition-all duration-300 hover:scale-105"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 1.2 + skillIndex * 0.1,
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
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-800 text-white font-semibold rounded-full transition-all duration-300 hover-lift transform hover:scale-105 shadow-xl hover:shadow-red-400/25">
            View Full Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
