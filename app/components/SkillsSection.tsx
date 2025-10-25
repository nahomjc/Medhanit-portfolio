"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Course Management",
      description:
        "Strategic educational content development and learning platform optimization",
      skills: [
        { name: "Curriculum Development", level: 95, years: "5+ years" },
        { name: "Learning Management Systems", level: 90, years: "4+ years" },
        { name: "Educational Content Strategy", level: 92, years: "5+ years" },
        { name: "Student Engagement", level: 88, years: "4+ years" },
        { name: "Assessment Design", level: 85, years: "3+ years" },
      ],
      icon: "📚",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-400/20",
      stats: { projects: "50+", students: "2,500+", completion: "95%" },
    },
    {
      title: "Visual Design",
      description:
        "Creating compelling visual experiences and brand identities",
      skills: [
        { name: "Adobe Creative Suite", level: 95, years: "6+ years" },
        { name: "UI/UX Design", level: 88, years: "4+ years" },
        { name: "Brand Identity", level: 92, years: "5+ years" },
        { name: "Digital Illustration", level: 85, years: "4+ years" },
        { name: "Motion Graphics", level: 80, years: "3+ years" },
      ],
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-400/20",
      stats: { designs: "300+", clients: "50+", satisfaction: "98%" },
    },
    {
      title: "Content Creation",
      description:
        "Producing engaging multimedia content across various platforms",
      skills: [
        { name: "Video Production", level: 90, years: "4+ years" },
        { name: "Photography", level: 85, years: "3+ years" },
        { name: "Copywriting", level: 88, years: "4+ years" },
        { name: "Social Media Content", level: 92, years: "5+ years" },
        { name: "Interactive Media", level: 82, years: "3+ years" },
      ],
      icon: "🎬",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-400/20",
      stats: { videos: "200+", reach: "100K+", engagement: "85%" },
    },
    {
      title: "Technical Skills",
      description: "Modern web technologies and digital tools mastery",
      skills: [
        { name: "HTML/CSS", level: 85, years: "4+ years" },
        { name: "JavaScript", level: 75, years: "3+ years" },
        { name: "Figma", level: 95, years: "5+ years" },
        { name: "Canva Pro", level: 90, years: "4+ years" },
        { name: "Project Management", level: 88, years: "4+ years" },
      ],
      icon: "💻",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
      borderColor: "border-orange-400/20",
      stats: { tools: "15+", efficiency: "90%", automation: "70%" },
    },
  ];

  const certifications = [
    {
      title: "Excellence in Course Design",
      issuer: "Digital Learning Institute",
      year: "2023",
      icon: "🏆",
      color: "from-yellow-500 to-yellow-600",
      description: "Advanced certification in educational content development",
    },
    {
      title: "Creative Design Award",
      issuer: "Visual Content Association",
      year: "2022",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
      description: "Recognition for innovative visual design solutions",
    },
    {
      title: "Performance Excellence",
      issuer: "Muyalogy Digital Services",
      year: "2023",
      icon: "📈",
      color: "from-green-500 to-green-600",
      description: "Outstanding performance in content creation and management",
    },
    {
      title: "Leadership Excellence",
      issuer: "Professional Development Institute",
      year: "2022",
      icon: "👑",
      color: "from-red-500 to-red-600",
      description: "Advanced leadership and team management certification",
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/10 to-red-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-red-400/8 to-red-600/3 rounded-full blur-3xl"
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
              Professional Expertise
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">Skills &</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto font-light">
            Comprehensive skill set spanning course management, visual design,
            and content creation with proven track record
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-red-400/20 rounded-3xl p-8 md:p-10 hover:border-red-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-400/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
            >
              {/* Card Background Effects */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-3xl transform translate-x-36 -translate-y-36 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-500/3 to-transparent rounded-full blur-2xl transform -translate-x-32 translate-y-32 group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-xl mr-6`}
                    >
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm max-w-xs">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(category.stats).map(
                    ([key, value], statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="bg-gradient-to-br from-red-400/10 to-red-500/5 border border-red-400/20 rounded-xl p-3 text-center backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + statIndex * 0.1,
                        }}
                      >
                        <div className="text-lg font-bold text-red-400 mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Skills List */}
                <div className="space-y-6">
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
                        delay: 0.8 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-300 font-semibold text-lg">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {skill.years}
                          </span>
                        </div>
                        <span className="text-red-400 font-bold text-lg">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 2,
                            delay: 1 + skillIndex * 0.1,
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Additional Expertise */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Expertise
            </h3>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Comprehensive skill set covering leadership, strategy, and
              professional development across multiple domains
            </p>
          </div>

          {/* Professional Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership & Management */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-red-400/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-400/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Card Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-500 rounded-xl flex items-center justify-center shadow-xl mr-4">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                      Leadership & Management
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Strategic leadership capabilities
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Team Leadership",
                    "Strategic Planning",
                    "Change Management",
                    "Stakeholder Communication",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/20 rounded-lg border border-red-400/10 hover:border-red-400/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Business & Operations */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-red-400/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-400/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Card Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-xl mr-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      Business & Operations
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Operational excellence & analytics
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Budget Management",
                    "Performance Analytics",
                    "Process Optimization",
                    "Risk Management",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/20 rounded-lg border border-blue-400/10 hover:border-blue-400/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Client & Quality */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-red-400/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-400/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Card Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-xl mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                      Client & Quality
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Client relations & quality assurance
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Client Relations",
                    "Quality Assurance",
                    "Cross-functional Collaboration",
                    "Innovation Management",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/20 rounded-lg border border-green-400/10 hover:border-green-400/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          >
            {[
              { label: "Years Experience", value: "5+", icon: "⏰" },
              { label: "Projects Completed", value: "100+", icon: "🚀" },
              { label: "Team Members Led", value: "15+", icon: "👥" },
              { label: "Client Satisfaction", value: "98%", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-red-400/20 rounded-xl p-6 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Certifications */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certifications & Awards
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Professional recognition and achievements in digital education and
              content creation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-red-400/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-400/10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Card Background Effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>

                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <h4 className="text-red-400 font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-red-300 text-sm font-semibold mb-3">
                    {cert.year}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
