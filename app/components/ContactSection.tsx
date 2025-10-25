"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Thank you for your message! I will get back to you soon.");
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "medhanit.birhane@example.com",
      link: "mailto:medhanit.birhane@example.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "#",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/medhanit-birhane",
      link: "https://linkedin.com/in/medhanit-birhane",
    },
  ];

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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your next project? I&apos;d love to hear from you
            and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-900/50 border border-red-400/20 rounded-xl hover:bg-red-400/10 transition-all duration-300 hover-lift group"
                >
                  <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </span>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: "💼", color: "bg-blue-600" },
                  { name: "Twitter", icon: "🐦", color: "bg-blue-400" },
                  { name: "Instagram", icon: "📸", color: "bg-pink-600" },
                  { name: "Behance", icon: "🎨", color: "bg-blue-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover-lift`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 font-semibold mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-red-400/20 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 font-semibold mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-red-400/20 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-red-400/20 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-red-400/20 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-red-400 hover:bg-red-500 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover-lift transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-red-400/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Medhanit Birhane. All rights reserved.
            | Designed with ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
