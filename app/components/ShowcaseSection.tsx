"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const showcaseItems = [
    {
      id: 1,
      title: "Digital Marketing Course Series",
      category: "Course Management",
      description:
        "Comprehensive 12-module course covering digital marketing fundamentals, with interactive content and real-world case studies.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      technologies: ["LMS", "Video Production", "Interactive Content"],
      stats: { students: "2,500+", completion: "94%", rating: "4.9" },
      link: "#",
    },
    {
      id: 2,
      title: "Brand Identity for Tech Startup",
      category: "Visual Design",
      description:
        "Complete brand identity design including logo, color palette, typography, and marketing materials for a growing tech company.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      technologies: ["Adobe Creative Suite", "Brand Strategy", "UI/UX"],
      stats: { clients: "15+", satisfaction: "100%", projects: "50+" },
      link: "#",
    },
    {
      id: 3,
      title: "E-Learning Platform Design",
      category: "Course Management",
      description:
        "User experience design for a comprehensive e-learning platform with intuitive navigation and engaging content delivery.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      technologies: ["Figma", "User Research", "Prototyping"],
      stats: { users: "10,000+", engagement: "85%", satisfaction: "4.8" },
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Campaign Graphics",
      category: "Visual Design",
      description:
        "Creative graphics and visual content for social media campaigns that increased engagement by 300%.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Adobe Illustrator", "Photoshop", "Canva"],
      stats: { reach: "500K+", engagement: "300%", shares: "25K+" },
      link: "#",
    },
    {
      id: 5,
      title: "Corporate Training Program",
      category: "Course Management",
      description:
        "Developed comprehensive corporate training program with interactive modules and assessment tools.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["Articulate", "SCORM", "Learning Analytics"],
      stats: { employees: "5,000+", completion: "92%", improvement: "45%" },
      link: "#",
    },
    {
      id: 6,
      title: "Website Redesign Project",
      category: "Visual Design",
      description:
        "Complete website redesign focusing on user experience, accessibility, and modern design principles.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "Figma", "User Testing"],
      stats: { visitors: "100K+", bounce: "-40%", conversion: "+60%" },
      link: "#",
    },
  ];

  const categories = ["All", "Course Management", "Visual Design"];

  const filteredItems =
    activeFilter === "All"
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === activeFilter);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredItems.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center section-header mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Work <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Explore my portfolio of course management and visual design projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeFilter === category
                  ? "bg-red-400 text-white hover-lift"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Professional Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gray-900/30 border border-red-400/20 backdrop-blur-sm">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredItems.map((item) => (
                <div key={item.id} className="w-full shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] sm:min-h-[550px] md:min-h-[600px]">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-black/40"></div>
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-400/90 text-white text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-gray-900/50">
                      <div className="space-y-6 sm:space-y-8">
                        {/* Technologies */}
                        <div>
                          <h4 className="text-red-400 font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-400/10 border border-red-400/30 text-red-300 rounded-full text-xs sm:text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stats */}
                        <div>
                          <h4 className="text-red-400 font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                            Project Results
                          </h4>
                          <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {Object.entries(item.stats).map(
                              ([key, value], statIndex) => (
                                <div
                                  key={statIndex}
                                  className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-red-400/20"
                                >
                                  <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">
                                    {value}
                                  </div>
                                  <div className="text-xs sm:text-sm text-gray-400 capitalize">
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="pt-2 sm:pt-4">
                          <motion.button
                            className="px-6 py-3 sm:px-8 sm:py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover-lift transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Full Project
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-red-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-8 sm:mt-12 md:mt-16 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover-lift transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
