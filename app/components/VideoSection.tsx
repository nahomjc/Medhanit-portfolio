"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const featuredVideo = {
    id: 1,
    title: "Digital Marketing Course Series",
    category: "Educational Content",
    description:
      "Comprehensive video series covering digital marketing fundamentals with interactive elements and real-world case studies. This masterclass demonstrates my expertise in course creation and visual content development.",
    duration: "12:45",
    views: "25.3K",
    likes: "1.2K",
    videoUrl:
      "https://www.youtube.com/embed/ArBS88h1r2Q?autoplay=1&mute=1&loop=1&playlist=ArBS88h1r2Q",
    technologies: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    stats: { episodes: "24", students: "2,500+", completion: "94%" },
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Professional Section Header */}
        <motion.div
          className="text-center section-header"
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
              LIVE CONTENT CREATION
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <span className="block text-white">Video</span>
            <span className="block gradient-text bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent">
              Masterclass
            </span>
          </motion.h2>

          {/* Professional Subtitle */}
          <motion.div
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
              Professional video content creation and educational course
              development
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Transforming complex concepts into engaging visual experiences
              that educate, inspire, and drive results
            </p>
          </motion.div>

          {/* Professional Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-1">
                50+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Videos Created
              </div>
            </div>
            <div className="w-px h-12 bg-gray-700 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-1">
                2.5M+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Total Views
              </div>
            </div>
            <div className="w-px h-12 bg-gray-700 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-1">
                95%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Engagement Rate
              </div>
            </div>
          </motion.div>

          {/* Professional Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-400/20 to-red-400/20 border border-red-400/30 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <svg
              className="w-5 h-5 text-red-400 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-red-300 font-semibold text-sm tracking-wide">
              CERTIFIED CONTENT CREATOR
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Featured Video - Full Width Outside Container */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {/* Video Container - Full Width */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {/* Auto-playing Video - Full Width */}
          <iframe
            src={featuredVideo.videoUrl}
            title={featuredVideo.title}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Video Info Overlay - Hidden on Mobile */}
          <div className="hidden sm:block absolute bottom-8 left-8 right-8">
            <div className="flex flex-row justify-between items-end">
              <div className="flex-1">
                <span className="px-4 py-2 bg-red-400/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm mb-4 inline-block">
                  {featuredVideo.category}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl">
                  {featuredVideo.description}
                </p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-black/70 text-white text-sm rounded backdrop-blur-sm">
                  {featuredVideo.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Video Stats - Hidden on Mobile */}
          <div className="hidden sm:flex absolute top-8 left-8 space-x-6">
            <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg
                className="w-5 h-5 text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              <span className="text-white font-medium">
                {featuredVideo.views}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg
                className="w-5 h-5 text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-white font-medium">
                {featuredVideo.likes}
              </span>
            </div>
          </div>

          {/* Technologies - Hidden on Mobile */}
          <div className="hidden sm:block absolute top-8 right-8">
            <div className="flex flex-wrap gap-2 justify-end">
              {featuredVideo.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-red-400/20 border border-red-400/30 text-red-300 rounded-full text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Stats Below - Mobile Responsive */}
      <div className="container relative z-10">
        <motion.div
          className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {Object.entries(featuredVideo.stats).map(
            ([key, value], statIndex) => (
              <div
                key={statIndex}
                className="text-center p-4 sm:p-6 bg-gray-900/50 border border-red-400/20 rounded-xl"
              >
                <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1 sm:mb-2">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 capitalize">
                  {key}
                </div>
              </div>
            )
          )}
        </motion.div>

        {/* Call to Action - Mobile Responsive */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover-lift transform hover:scale-105 text-sm sm:text-base">
            Watch Full Video
          </button>
        </motion.div>
      </div>
    </section>
  );
}
