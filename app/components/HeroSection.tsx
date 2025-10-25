"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Pre-computed floating orb configurations
  const floatingOrbs = [
    {
      width: 80,
      height: 80,
      opacity1: 0.08,
      opacity2: 0.12,
      left: 10,
      top: 20,
      yRange: 30,
      xRange: 20,
      duration: 12,
      delay: 0,
    },
    {
      width: 120,
      height: 120,
      opacity1: 0.1,
      opacity2: 0.15,
      left: 80,
      top: 60,
      yRange: -40,
      xRange: 30,
      duration: 18,
      delay: 0.5,
    },
    {
      width: 70,
      height: 70,
      opacity1: 0.07,
      opacity2: 0.11,
      left: 40,
      top: 70,
      yRange: 25,
      xRange: -35,
      duration: 15,
      delay: 1,
    },
    {
      width: 100,
      height: 100,
      opacity1: 0.09,
      opacity2: 0.13,
      left: 70,
      top: 30,
      yRange: -30,
      xRange: 40,
      duration: 20,
      delay: 0.8,
    },
    {
      width: 90,
      height: 90,
      opacity1: 0.08,
      opacity2: 0.12,
      left: 20,
      top: 80,
      yRange: 35,
      xRange: -25,
      duration: 16,
      delay: 1.2,
    },
    {
      width: 110,
      height: 110,
      opacity1: 0.11,
      opacity2: 0.14,
      left: 50,
      top: 10,
      yRange: -45,
      xRange: 50,
      duration: 22,
      delay: 1.5,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
      {/* Animated Gradient Grid Background - Magic UI Style */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(248, 113, 113, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(248, 113, 113, 0.03) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(to right, transparent, rgba(248, 113, 113, 0.05), transparent)
              `,
              backgroundSize: "200% 200%",
            }}
          />
        </div>
      </div>

      {/* Animated Blobs - Magic UI Style */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(248, 113, 113, 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(248, 113, 113, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating Orbs with Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              background: `linear-gradient(135deg, rgba(248, 113, 113, ${orb.opacity1}) 0%, rgba(239, 68, 68, ${orb.opacity2}) 100%)`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
            animate={{
              y: [0, orb.yRange, 0],
              x: [0, orb.xRange, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Professional Photo with Pulse Effect */}
          <motion.div
            className="order-1 lg:order-2 w-full max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Floating Pulse Rings */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-red-400/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl border border-red-400/20"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />

              {/* Photo with Shimmer Effect */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"
                  style={{ transition: "transform 0.7s ease-in-out" }}
                ></div>
                <Image
                  src="/medi/pic1.png"
                  alt="Medhanit Birhane - Professional Portrait"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover relative z-10"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-20"></div>
              </div>

              {/* Decorative Accent with Animation */}
              <motion.div
                className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-red-400/40 to-red-600/40 rounded-2xl blur-xl -z-10"
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
            </div>
          </motion.div>

          {/* Right Column - Text Content with Shimmer Effect */}
          <motion.div
            className="order-2 lg:order-1 flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Greeting with Typing Effect */}
            <motion.p
              className="text-red-400 font-medium mb-4 text-sm uppercase tracking-wide inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I&apos;m
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.p>

            {/* Main Title with Gradient Text Animation */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-500 to-red-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                  Medhanit
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-red-400/50 via-red-500/50 to-red-400/50 blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Birhane
              </motion.span>
            </motion.h1>

            {/* Subtitle with Word Reveal Animation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mb-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Course Manager
                </motion.span>
                {" & "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="relative"
                >
                  <span className="relative z-10">Visual Content Creator</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  />
                </motion.span>
              </h2>
              <motion.p
                className="text-lg text-gray-400 max-w-2xl lg:max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Creating engaging educational content and stunning visual
                designs that connect with audiences worldwide.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Hover Effects */}
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
                className="px-8 py-4 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-400/20 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-gray-700 hover:border-red-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-red-400/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
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
