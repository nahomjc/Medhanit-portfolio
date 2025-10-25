/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);

  const professionalTexts = [
    "Initializing Creative Engine",
    "Loading Digital Assets",
    "Optimizing User Experience",
    "Preparing Portfolio Showcase",
    "Configuring Visual Components",
    "Loading Professional Content",
    "Optimizing Performance Metrics",
    "Finalizing Professional Presentation",
    "Welcome to Medhanit's World",
  ];

  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      moveX: number;
      moveY: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        moveX: (Math.random() - 0.5) * 200,
        moveY: (Math.random() - 0.5) * 200,
        color: Math.random() > 0.5 ? "#ef4444" : "#f87171",
      }))
    );
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 15000; // 15 seconds total for professional loading experience

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);

      setProgress(progressPercent);

      // Update loading stages
      if (progressPercent >= 20 && loadingStage === 0) setLoadingStage(1);
      if (progressPercent >= 40 && loadingStage === 1) setLoadingStage(2);
      if (progressPercent >= 60 && loadingStage === 2) setLoadingStage(3);
      if (progressPercent >= 80 && loadingStage === 3) setLoadingStage(4);
      if (progressPercent >= 100 && loadingStage === 4) setLoadingStage(5);

      if (progressPercent >= 100) {
        clearInterval(progressInterval);
        setIsComplete(true);
        setTimeout(onComplete, 3000); // 3 seconds for completion animation
      }
    }, 100); // Slower update interval for smoother progress

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % professionalTexts.length);
    }, 2500); // Slower text cycling for better readability

    setTimeout(() => setShowParticles(true), 2000); // Particles appear later

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete, loadingStage]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.5 }}
      >
        {/* Professional Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>

          {/* Floating Professional Elements */}
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 border-2 border-red-400/30 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-500/10 rounded-2xl"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-48 h-48 border border-red-400/20 rounded-full"
            animate={{
              rotate: 180,
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-tr from-red-400/15 to-red-500/5 rounded-3xl"
            animate={{
              rotate: -180,
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* Professional Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-400/10 to-red-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
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
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Professional Floating Particles */}
        <AnimatePresence>
          {showParticles && (
            <div className="absolute inset-0">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                    x: [0, particle.moveX],
                    y: [0, particle.moveY],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Professional Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl mx-auto px-8">
            {/* Professional Logo Animation */}
            <motion.div
              className="mb-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="relative w-40 h-40 mx-auto">
                {/* Outer Professional Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-red-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Professional Circle */}
                <motion.div
                  className="absolute inset-6 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-full shadow-2xl border-2 border-red-300/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {/* Inner Professional Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-white font-bold text-5xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      M
                    </motion.span>
                  </div>
                </motion.div>

                {/* Professional Orbiting Elements */}
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-3 h-3 bg-gradient-to-r from-red-300 to-red-400 rounded-full shadow-lg"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-6px",
                      marginTop: "-6px",
                    }}
                    animate={{
                      rotate: 360,
                      x: [0, Math.cos((index * 90 * Math.PI) / 180) * 70],
                      y: [0, Math.sin((index * 90 * Math.PI) / 180) * 70],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Professional Brand Text */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <motion.h1
                className="text-7xl md:text-9xl font-bold mb-8"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "linear-gradient(45deg, #ffffff, #ef4444, #f87171, #ffffff, #ef4444)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Medhanit
              </motion.h1>

              <motion.div
                className="text-3xl md:text-4xl text-gray-300 font-light mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              >
                <motion.span
                  className="inline-block mr-4"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Course Manager
                </motion.span>
                <span className="mx-4 text-red-400 text-2xl">•</span>
                <motion.span
                  className="inline-block ml-4"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  Visual Creator
                </motion.span>
              </motion.div>

              <motion.div
                className="text-lg md:text-xl text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Transforming Digital Education Through Innovation
              </motion.div>
            </motion.div>

            {/* Professional Loading Text */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold"
                key={currentText}
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: -90 }}
                transition={{ duration: 1.2 }}
              >
                <motion.span
                  className="text-red-300"
                  animate={{
                    textShadow: [
                      "0 0 15px rgba(239, 68, 68, 0.6)",
                      "0 0 25px rgba(239, 68, 68, 0.9)",
                      "0 0 15px rgba(239, 68, 68, 0.6)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {professionalTexts[currentText]}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Professional Loading Progress */}
            <motion.div
              className="mb-16 flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 4 }}
            >
              <div className="relative w-48 h-48">
                {/* Outer Professional Ring */}
                <div className="absolute inset-0 w-48 h-48 border-4 border-gray-800/30 rounded-full"></div>

                {/* Main Progress Ring */}
                <motion.div
                  className="absolute inset-0 w-48 h-48 border-4 border-transparent border-t-red-400 border-r-red-400 rounded-full"
                  style={{
                    rotate: `${(progress / 100) * 360}deg`,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Secondary Progress Ring */}
                <motion.div
                  className="absolute inset-3 w-42 h-42 border-3 border-transparent border-b-red-300 border-l-red-500 rounded-full"
                  style={{
                    rotate: `${(progress / 100) * -360}deg`,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Inner Professional Ring */}
                <motion.div
                  className="absolute inset-6 w-36 h-36 border-2 border-transparent border-t-red-200 border-b-red-400 rounded-full"
                  style={{
                    rotate: `${(progress / 100) * 180}deg`,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Center Professional Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-red-400/20 to-red-500/20 rounded-full flex items-center justify-center border-2 border-red-400/40 backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.span
                      className="text-red-300 font-bold text-2xl"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {Math.round(progress)}%
                    </motion.span>
                  </motion.div>
                </div>

                {/* Professional Orbiting Elements */}
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full shadow-lg"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-4px",
                      marginTop: "-4px",
                    }}
                    animate={{
                      x: [0, Math.cos((index * 60 * Math.PI) / 180) * 80, 0],
                      y: [0, Math.sin((index * 60 * Math.PI) / 180) * 80, 0],
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Professional Loading Dots */}
            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 5 }}
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Professional Completion Animation */}
            <AnimatePresence>
              {isComplete && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                >
                  <motion.div
                    className="text-center max-w-2xl mx-auto px-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 1.5,
                      type: "spring",
                      stiffness: 80,
                    }}
                  >
                    {/* Professional Success Icon */}
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-green-400/30"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        className="text-white text-5xl"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          type: "spring",
                        }}
                      >
                        ✓
                      </motion.span>
                    </motion.div>

                    {/* Professional Welcome Message */}
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      Welcome to My Professional Portfolio
                    </motion.h2>

                    <motion.p
                      className="text-xl text-gray-300 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      Experience the future of digital education and visual
                      storytelling
                    </motion.p>

                    {/* Professional Status Indicators */}
                    <motion.div
                      className="flex justify-center space-x-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-sm font-semibold">
                          System Ready
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-300 text-sm font-semibold">
                          Portfolio Loaded
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-red-300 text-sm font-semibold">
                          Creative Engine Active
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
