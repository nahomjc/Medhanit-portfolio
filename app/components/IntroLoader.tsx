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

  const creativeTexts = [
    "Creating Digital Magic",
    "Crafting Visual Stories",
    "Building Learning Experiences",
    "Designing the Future",
    "Almost There...",
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
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        moveX: Math.random() * 100 - 50,
        moveY: Math.random() * 100 - 50,
      }))
    );
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 15000; // 10 seconds total

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);

      setProgress(progressPercent);

      if (progressPercent >= 100) {
        clearInterval(progressInterval);
        setIsComplete(true);
        setTimeout(onComplete, 7000);
      }
    }, 100);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % creativeTexts.length);
    }, 5000);

    setTimeout(() => setShowParticles(true), 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border-2 border-red-400/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 bg-red-400/10 rounded-lg"
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-40 h-40 border border-red-400/20 rounded-full"
            animate={{
              rotate: 180,
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-28 h-28 bg-red-400/10 rounded-lg"
            animate={{
              rotate: -180,
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating Particles */}
        <AnimatePresence>
          {showParticles && (
            <div className="absolute inset-0">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-red-400 rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, particle.moveX],
                    y: [0, particle.moveY],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            {/* Creative Logo Animation */}
            <motion.div
              className="mb-16"
              initial={{ scale: 0, rotate: -360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="relative w-32 h-32 mx-auto">
                {/* Outer Glow */}
                <motion.div
                  className="absolute inset-0 bg-red-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Circle */}
                <motion.div
                  className="absolute inset-4 bg-gradient-to-br from-red-400 via-red-400 to-red-400 rounded-full shadow-2xl"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {/* Inner Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-white font-bold text-4xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      M
                    </motion.span>
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4 bg-red-300 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-8px",
                      marginTop: "-8px",
                    }}
                    animate={{
                      rotate: 360,
                      x: [0, Math.cos((index * 120 * Math.PI) / 180) * 60],
                      y: [0, Math.sin((index * 120 * Math.PI) / 180) * 60],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Creative Brand Text */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "linear-gradient(45deg, #ffffff, #f87171, #ffffff, #f87171)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Medhanit
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl text-gray-300 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Creative Visionary
                </motion.span>
                <span className="mx-4 text-red-400">•</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  Digital Storyteller
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Creative Loading Text */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold"
                key={currentText}
                initial={{ opacity: 0, y: 20, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -90 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="text-red-300"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(248, 113, 113, 0.5)",
                      "0 0 20px rgba(248, 113, 113, 0.8)",
                      "0 0 10px rgba(248, 113, 113, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {creativeTexts[currentText]}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Circular Loading Ring */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="relative w-32 h-32">
                {/* Background Circle */}
                <div className="absolute inset-0 w-32 h-32 border-4 border-gray-800/50 rounded-full"></div>

                {/* Progress Ring */}
                <motion.div
                  className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-red-400 border-r-red-400 rounded-full"
                  style={{
                    rotate: `${(progress / 100) * 360}deg`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Inner Glow Ring */}
                <motion.div
                  className="absolute inset-2 w-28 h-28 border-2 border-transparent border-b-red-300 border-l-red-400 rounded-full"
                  style={{
                    rotate: `${(progress / 100) * -360}deg`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-red-400/20 rounded-full flex items-center justify-center border border-red-400/30"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.span
                      className="text-red-300 font-bold text-lg"
                      animate={{ opacity: [0.5, 1, 0.5] }}
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

                {/* Rotating Dots */}
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-red-400 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-4px",
                      marginTop: "-4px",
                    }}
                    animate={{
                      x: [0, Math.cos((index * 90 * Math.PI) / 180) * 60, 0],
                      y: [0, Math.sin((index * 90 * Math.PI) / 180) * 60, 0],
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Creative Loading Animation */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="w-4 h-4 bg-red-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Completion Animation */}
            <AnimatePresence>
              {isComplete && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                  >
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        className="text-white text-4xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        ✨
                      </motion.span>
                    </motion.div>

                    <motion.p
                      className="text-green-400 font-bold text-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      Welcome to My Creative World
                    </motion.p>
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
