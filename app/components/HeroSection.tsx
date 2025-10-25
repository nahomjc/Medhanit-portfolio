"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="gradient-text block mb-1 sm:mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Medhanit
            </motion.span>
            <motion.span
              className="text-white block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Birhane
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-red-400 font-semibold mb-3 sm:mb-4 md:mb-6 px-2">
              Course Manager & Visual Content Creator
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
              Senior Visual Content Creator and Graphics Designer at Muyalogy
              Digital Services
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base px-2">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-400/20 border border-red-400/30 text-red-300 rounded-full">
                📚 Course Development
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-400/20 border border-red-400/30 text-red-300 rounded-full">
                🎨 Visual Design
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-400/20 border border-red-400/30 text-red-300 rounded-full">
                📹 Content Creation
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-400/20 border border-red-400/30 text-red-300 rounded-full">
                💼 Digital Strategy
              </span>
            </div>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Courses Created" },
              { number: "2.5K+", label: "Students Taught" },
              { number: "95%", label: "Completion Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-2 sm:p-3 md:p-4 bg-gray-900/30 border border-red-400/20 rounded-xl hover-lift"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(220, 38, 38, 0.1)",
                }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={() => {
                const element = document.querySelector("#showcase");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-red-400 hover:bg-red-400 text-white font-semibold rounded-full transition-all duration-300 hover-lift text-sm sm:text-base w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f87171",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white font-semibold rounded-full transition-all duration-300 hover-lift text-sm sm:text-base w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f87171",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-red-400 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Portfolio Elements - Hide on mobile */}
      <div className="hidden md:block">
        {/* Course Management Icons */}
        <motion.div
          className="absolute top-20 left-16 w-12 h-12 bg-red-400/20 border border-red-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-red-400 text-xl">📚</span>
        </motion.div>

        {/* Visual Design Icons */}
        <motion.div
          className="absolute top-32 right-24 w-10 h-10 bg-red-400/20 border border-red-400/30 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="text-red-400 text-lg">🎨</span>
        </motion.div>

        {/* Content Creation Icons */}
        <motion.div
          className="absolute bottom-40 left-24 w-14 h-14 bg-red-400/15 border border-red-400/25 rounded-xl flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <span className="text-red-400 text-2xl">📹</span>
        </motion.div>

        {/* Digital Strategy Icons */}
        <motion.div
          className="absolute bottom-20 right-16 w-8 h-8 bg-red-400/20 border border-red-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -12, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <span className="text-red-400 text-lg">💼</span>
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          className="absolute top-1/4 right-8 w-16 h-16 bg-red-400/20 border border-red-400/40 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <span className="text-red-400 font-bold text-sm">5+</span>
        </motion.div>

        {/* Students Taught Badge */}
        <motion.div
          className="absolute bottom-1/3 left-8 w-14 h-14 bg-red-400/20 border border-red-400/40 rounded-xl flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -16, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <span className="text-red-400 font-bold text-xs">2.5K</span>
        </motion.div>

        {/* Completion Rate Badge */}
        <motion.div
          className="absolute top-1/2 left-4 w-12 h-12 bg-red-400/25 border border-red-400/35 rounded-lg flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -14, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <span className="text-red-400 font-bold text-xs">95%</span>
        </motion.div>

        {/* Courses Created Badge */}
        <motion.div
          className="absolute bottom-1/4 right-4 w-10 h-10 bg-red-400/25 border border-red-400/35 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <span className="text-red-400 font-bold text-xs">50+</span>
        </motion.div>
      </div>
    </section>
  );
}
