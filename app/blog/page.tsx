"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "../components/Navigation";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of E-Learning: Trends and Innovations",
    excerpt:
      "Exploring how technology is revolutionizing online education and what it means for learners worldwide.",
    content:
      "E-learning has transformed from a niche market to a mainstream educational powerhouse...",
    category: "Education",
    date: "Oct 25, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    author: "Medhanit Birhane",
  },
  {
    id: 2,
    title: "Design Systems That Scale: A Guide for Modern Teams",
    excerpt:
      "Learn how to build and maintain design systems that grow with your organization.",
    content:
      "Design systems have become essential for maintaining consistency across products...",
    category: "Design",
    date: "Oct 22, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    author: "Medhanit Birhane",
  },
  {
    id: 3,
    title: "Content Creation in the Digital Age",
    excerpt:
      "Strategies for creating compelling content that engages and converts your audience.",
    content:
      "Content creation has evolved dramatically with the rise of social media and digital platforms...",
    category: "Content Strategy",
    date: "Oct 18, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    author: "Medhanit Birhane",
  },
  {
    id: 4,
    title: "Course Development Best Practices",
    excerpt:
      "Essential tips for creating educational courses that students actually want to complete.",
    content:
      "Building successful online courses requires more than just good content...",
    category: "Education",
    date: "Oct 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    author: "Medhanit Birhane",
  },
  {
    id: 5,
    title: "Visual Design Principles for Modern Web",
    excerpt:
      "Understanding the core principles that make web design effective and beautiful.",
    content:
      "Good web design is about more than aesthetics—it's about creating experiences...",
    category: "Design",
    date: "Oct 10, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    author: "Medhanit Birhane",
  },
  {
    id: 6,
    title: "Building Your Personal Brand Online",
    excerpt:
      "How to establish and grow your professional presence in the digital world.",
    content:
      "Personal branding is no longer optional—it's a career necessity...",
    category: "Career",
    date: "Oct 5, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    author: "Medhanit Birhane",
  },
];

const categories = ["All", "Education", "Design", "Content Strategy", "Career"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : blogPosts.filter(
          (post) =>
            post.category === activeCategory &&
            (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                My <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Insights on education, design, content creation, and digital
                innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900/50 border border-red-400/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                  />
                  <svg
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-red-400 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-gray-900/30 border border-red-400/20 rounded-2xl overflow-hidden hover:border-red-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-400 text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            M
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {post.author}
                        </span>
                      </div>

                      <button className="text-red-400 hover:text-red-300 font-semibold flex items-center space-x-2 group/read">
                        <span>Read More</span>
                        <svg
                          className="w-4 h-4 group-hover/read:translate-x-1 transition-transform"
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
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found.</p>
              </div>
            )}

            {filteredPosts.length > 0 && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button className="px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Load More Articles
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-20 bg-gray-900/30 border-t border-red-400/20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center bg-gray-900/50 border border-red-400/30 rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Get the latest articles on education, design, and digital
                innovation delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-black border border-red-400/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                />
                <button className="px-8 py-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
