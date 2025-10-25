"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Course Management",
      skills: [
        { name: "Curriculum Development", level: 95 },
        { name: "Learning Management Systems", level: 90 },
        { name: "Educational Content Strategy", level: 92 },
        { name: "Student Engagement", level: 88 },
        { name: "Assessment Design", level: 85 },
      ],
      icon: "📚",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Visual Design",
      skills: [
        { name: "Adobe Creative Suite", level: 95 },
        { name: "UI/UX Design", level: 88 },
        { name: "Brand Identity", level: 92 },
        { name: "Digital Illustration", level: 85 },
        { name: "Motion Graphics", level: 80 },
      ],
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
    },
    {
      title: "Content Creation",
      skills: [
        { name: "Video Production", level: 90 },
        { name: "Photography", level: 85 },
        { name: "Copywriting", level: 88 },
        { name: "Social Media Content", level: 92 },
        { name: "Interactive Media", level: 82 },
      ],
      icon: "🎬",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Figma", level: 95 },
        { name: "Canva Pro", level: 90 },
        { name: "Project Management", level: 88 },
      ],
      icon: "💻",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl"></div>
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
              EXPERTISE AREAS
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Skills &</span>
            <span className="block gradient-text bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Comprehensive skill set spanning course management, visual design,
            and content creation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-red-400/20 rounded-3xl p-8 hover-lift overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)",
              }}
            >
              {/* Background Pattern */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.bgColor} rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500`}
              ></div>

              {/* Category Header */}
              <div className="relative z-10 flex items-center mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-xl mr-6`}
                >
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-400 rounded-full"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="relative z-10 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="text-red-400 font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 2,
                          delay: 0.8 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        {/* Progress bar shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover/skill:translate-x-0 transition-transform duration-1000"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Team Leadership",
              "Strategic Planning",
              "Quality Assurance",
              "Client Relations",
              "Budget Management",
              "Performance Analytics",
              "Cross-functional Collaboration",
              "Innovation Management",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-red-400/20 text-gray-300 rounded-full hover:from-red-400/20 hover:to-red-400/20 hover:text-white transition-all duration-300 hover:scale-105 font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-red-400/20 rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-red-400 font-bold text-xl mb-3">
                Excellence in Course Design
              </h4>
              <p className="text-gray-400">Digital Learning Institute 2023</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-red-400/20 rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <h4 className="text-red-400 font-bold text-xl mb-3">
                Creative Design Award
              </h4>
              <p className="text-gray-400">Visual Content Association 2022</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-red-400/20 rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl">📈</span>
              </div>
              <h4 className="text-red-400 font-bold text-xl mb-3">
                Performance Excellence
              </h4>
              <p className="text-gray-400">Muyalogy Digital Services 2023</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
