"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-full h-96 bg-linear-to-br from-red-400/20 to-red-400/10 rounded-2xl flex items-center justify-center border border-red-400/30">
                <div className="text-center">
                  <div className="w-32 h-32 bg-red-400/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-red-400">MB</span>
                  </div>
                  <p className="text-red-300">Professional Headshot</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-400/20 border border-red-400/30 rounded-xl flex items-center justify-center animate-pulse">
                <span className="text-red-400 font-bold text-sm">5+ Years</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-red-400/20 border border-red-400/30 rounded-lg flex items-center justify-center animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-red-300 font-bold text-xs">Expert</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-spacing-improved">
              <p>
                I&apos;m{" "}
                <span className="text-red-400 font-semibold">
                  Medhanit Birhane
                </span>
                , a passionate Course Manager and Senior Visual Content Creator
                with extensive experience in digital media and educational
                content development.
              </p>

              <p>
                Currently serving as a{" "}
                <span className="text-red-400 font-semibold">
                  Course Manager
                </span>{" "}
                and{" "}
                <span className="text-red-400 font-semibold">
                  Senior Visual Content Creator
                </span>{" "}
                at Muyalogy Digital Services, I specialize in creating
                compelling visual narratives that engage and educate audiences.
              </p>

              <p>
                My expertise spans across{" "}
                <span className="text-red-400 font-semibold">
                  graphics design
                </span>
                ,{" "}
                <span className="text-red-400 font-semibold">
                  content strategy
                </span>
                , and{" "}
                <span className="text-red-400 font-semibold">
                  course development
                </span>
                , helping organizations deliver impactful learning experiences
                through innovative visual storytelling.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6 hover-lift card-spacing">
                <h3 className="text-red-400 font-bold text-lg mb-3">
                  Course Management
                </h3>
                <p className="text-gray-400 text-sm text-improved">
                  Strategic planning and execution of educational content
                </p>
              </div>
              <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6 hover-lift card-spacing">
                <h3 className="text-red-400 font-bold text-lg mb-3">
                  Visual Design
                </h3>
                <p className="text-gray-400 text-sm text-improved">
                  Creating stunning graphics and visual content
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 button-spacing">
              <button className="px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover-lift transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
