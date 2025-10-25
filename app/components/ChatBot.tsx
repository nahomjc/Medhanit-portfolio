"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you learn more about Medhanit's work. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedQuestions = [
    "Tell me about Medhanit's experience",
    "What courses has she managed?",
    "Show me her design portfolio",
    "How can I contact him?",
    "What technologies does she use?",
  ];

  const botResponses: { [key: string]: string } = {
    experience:
      "Medhanit has over 5 years of experience as a Course Manager and Senior Visual Content Creator at Muyalogy Digital Services. He specializes in course development, visual design, and content strategy.",
    courses:
      "Medhanit has developed 50+ online courses with 95% completion rates. He creates visual content for 200+ educational modules and has increased course engagement by 40% through innovative visual strategies.",
    portfolio:
      "Medhanit's portfolio includes digital marketing course series, brand identity designs, e-learning platform designs, social media campaign graphics, corporate training programs, and website redesign projects. You can view his showcase section for more details.",
    contact:
      "You can contact Medhanit through the contact section on this website. He's available for course management, visual design, and content creation projects. Feel free to reach out!",
    technologies:
      "Medhanit uses Adobe Creative Suite, Figma, Articulate, SCORM-compliant tools, learning management systems, React, and various design and development technologies for his projects.",
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("experience") || message.includes("background")) {
      return botResponses.experience;
    } else if (message.includes("course") || message.includes("training")) {
      return botResponses.courses;
    } else if (
      message.includes("portfolio") ||
      message.includes("work") ||
      message.includes("design")
    ) {
      return botResponses.portfolio;
    } else if (message.includes("contact") || message.includes("reach")) {
      return botResponses.contact;
    } else if (
      message.includes("technology") ||
      message.includes("tools") ||
      message.includes("skills")
    ) {
      return botResponses.technologies;
    } else {
      return "Thank you for your question! I'm here to help you learn more about Medhanit's work. Feel free to ask about his experience, courses, portfolio, or contact information.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      // eslint-disable-next-line react-hooks/purity
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputText),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handlePhoneCall = () => {
    // You can replace this with the actual phone number
    window.open("tel:+1234567890", "_self");
  };

  return (
    <>
      {/* Phone Call Button */}
      <motion.button
        className="fixed bottom-24 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover-lift z-50"
        onClick={handlePhoneCall}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        title="Call Medhanit"
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </motion.button>

      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-red-400 hover:bg-red-500 text-white rounded-full shadow-lg hover-lift z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-32 right-6 w-96 h-[500px] bg-gray-900 border border-red-400/20 rounded-2xl shadow-2xl z-40 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          >
            {/* Chat Header */}
            <div className="p-4 bg-red-400/10 border-b border-red-400/20 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MB</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Medhanit&apos;s Assistant
                    </h3>
                    <p className="text-red-400 text-xs">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? "bg-red-400 text-white"
                        : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-gray-800 text-gray-100 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Quick questions:</p>
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="block w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-red-400/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Medhanit's work..."
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="px-4 py-2 bg-red-400 hover:bg-red-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
