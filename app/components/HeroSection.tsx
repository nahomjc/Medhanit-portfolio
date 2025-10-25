"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="relative z-10 container px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Professional Photo */}
          <motion.div
            className="order-1 lg:order-2 w-full max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/medi/pic1.png"
                  alt="Medhanit Birhane - Professional Portrait"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-red-400/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="order-2 lg:order-1 flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.p
              className="text-red-400 font-medium mb-4 text-sm uppercase tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I&apos;m
            </motion.p>

            {/* Main Title */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text block">Medhanit</span>
              <span className="text-white block">Birhane</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mb-4">
                Course Manager & Visual Content Creator
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl lg:max-w-none">
                Creating engaging educational content and stunning visual
                designs that connect with audiences worldwide.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  const element = document.querySelector("#showcase");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-400/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-gray-700 hover:border-red-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

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
      <div className="hidden lg:block pointer-events-none">
        {/* Camera Icon - Top Right */}
        <motion.div
          className="absolute top-24 right-32 w-16 h-16"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/40"
          >
            <rect
              x="2"
              y="6"
              width="20"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="12"
              cy="13"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 6L10 4h4l2 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Video Play Icon - Top Left */}
        <motion.div
          className="absolute top-36 left-20 w-12 h-12"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/35"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Code Icon - Bottom Right */}
        <motion.div
          className="absolute bottom-36 right-32 w-14 h-14"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/40"
          >
            <polyline
              points="16 18 22 12 16 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="8 6 2 12 8 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Design Tool Icon - Bottom Left */}
        <motion.div
          className="absolute bottom-24 left-20 w-12 h-12"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/35"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M21 15l-5-7-4 5-3-3-4 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Portfolio/Briefcase Icon - Middle Right */}
        <motion.div
          className="absolute top-1/2 right-16 w-10 h-10 transform -translate-y-1/2"
          animate={{
            y: [-12, 12, -12],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/40"
          >
            <rect
              x="2"
              y="7"
              width="20"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7 11h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Light Bulb Icon - Middle Left */}
        <motion.div
          className="absolute top-1/3 left-12 w-10 h-10"
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/35"
          >
            <path
              d="M12 3C10.34 3 9 4.34 9 6c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 9v6M9 21h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Globe/World Icon - Top Center */}
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-red-400/30"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
