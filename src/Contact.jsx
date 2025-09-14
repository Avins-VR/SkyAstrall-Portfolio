"use client";
import React from "react";
import { motion } from "framer-motion";
import MagicCursor from "./components/ui/MagicCursor";
import SplashCursor from "./components/ui/SplashCursor";

// Variants for the heading and subheading
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for the main grid container
const mainContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the animation of the left and right sections
      delayChildren: 0.5,
    },
  },
};

// Variants for the individual sections (left and right)
const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Variants for each contact item (email, phone, location)
const contactItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

// Variants for the social links
const socialLinkVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Variants for the form inputs
const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Contact = () => {
  const colors = ["#ffffff", "#FFD700", "#00FFFF", "#FF69B4", "#ADFF2F"];

  return (
    <div
      className="relative min-h-screen text-white font-sans overflow-hidden
      bg-[radial-gradient(at_top_left,#3c4b5e_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#384d4d75_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 2 + 3; // 2-5px
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const moveX = Math.random() * 50 - 25;
          const moveY = Math.random() * 50 - 25;
          const duration = Math.random() * 2 + 1;
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <span
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                backgroundColor: color,
                animationDuration: `${duration}s`,
                animationDelay: `${Math.random() * 5}s`,
                animationName: `twinkle, move`,
                animationTimingFunction: `ease-in-out, linear`,
                animationIterationCount: `infinite, infinite`,
                transform: `translate(0, 0)`,
                "--move-x": `${moveX}px`,
                "--move-y": `${moveY}px`,
              }}
            />
          );
        })}
      </div>

      {/* Custom cursor */}
      <MagicCursor />
      <SplashCursor />

      {/* Header Section */}
      <div className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]">
        <motion.h1
          className="text-[60px] font-bold mb-[30px] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #d6b1f0, #00ffe1ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          GET IN TOUCH
        </motion.h1>
        <motion.p
          className="text-[22px] max-w-[1100px] text-gray-300 mx-auto mb-[20px]"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          Ready to transform your business with cutting-edge technology? Let's
          discuss your project and explore how we can bring your vision to life.
        </motion.p>
      </div>

      {/* Main Section */}
      <motion.div
        className="mt-12 grid md:grid-cols-2 gap-12 w-full max-w-[1500px] mb-[70px] mx-auto"
        variants={mainContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Section */}
        <motion.div
          className="ml-[50px]"
          variants={sectionVariants}
        >
          <h2 className="text-[30px] font-bold mb-[30px]">
            BUILD SOMETHING AMAZING
          </h2>
          <p className="text-gray-200 mb-8 text-[18px]">
            We always excited to collaborate on innovative projects and explore
            new opportunities. Whether you have a project in mind or just want
            to connect, feel free to reach out.
          </p>

          {/* Contact Items */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-4 bg-[#0f0f0f] rounded-[18px] p-4 border border-gray-800"
              variants={contactItemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <i className="bi bi-envelope text-[25px] text-gray-300 ml-[10px]"></i>
              <div>
                <h3 className="font-bold text-[20px] ml-[20px] mb-[5px]">EMAIL</h3>
                <p className="text-gray-400 ml-[20px]">info@skyastrall.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-[#0f0f0f] rounded-[18px] p-4 border border-gray-800"
              variants={contactItemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <i className="bi bi-telephone text-[25px] text-gray-300 ml-[10px]"></i>
              <div>
                <h3 className="font-bold text-[20px] ml-[20px] mb-[5px]">PHONE</h3>
                <p className="text-gray-400 ml-[18px]">+91 9274873847</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-[#0f0f0f] rounded-[18px] p-4 border border-gray-800"
              variants={contactItemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <i className="bi bi-geo-alt text-[25px] text-gray-300 ml-[5px]"></i>
              <div>
                <h3 className="font-bold text-[20px] ml-[20px] mb-[5px]">LOCATION</h3>
                <p className="text-gray-400 ml-[20px]">India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <h2 className="text-[20px] font-bold mb-[30px] mt-[30px]">
            CONNECT WITH US
          </h2>
          <motion.div className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.a
              href="#"
              className="bg-[#0f0f0f] p-3 rounded-lg border border-gray-800 hover:bg-gray-800 transition"
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <i className="bi bi-github text-[22px] px-[3px]"></i>
            </motion.a>
            <motion.a
              href="#"
              className="bg-[#0f0f0f] p-3 rounded-lg border border-gray-800 hover:bg-gray-800 transition"
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <i className="bi bi-linkedin text-[22px] px-[3px]"></i>
            </motion.a>
            <motion.a
              href="#"
              className="bg-[#0f0f0f] p-3 rounded-lg border border-gray-800 hover:bg-gray-800 transition"
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <i className="bi bi-twitter text-[22px] px-[3px]"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          className="bg-[#0f0f0f] rounded-[18px] p-8 border border-gray-800 ml-[100px] mr-[50px]"
          variants={sectionVariants}
        >
          <h2 className="text-[30px] font-bold mb-[30px]">SEND A MESSAGE</h2>
          <form className="flex flex-col space-y-8">
            <motion.input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              variants={formItemVariants}
            />
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              variants={formItemVariants}
            />
            <motion.textarea
              rows="5"
              placeholder="Tell me about your project or just say hello..."
              className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              variants={formItemVariants}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-gray-200 text-[18px] text-black px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-send-fill text-[20px] mr-[10px]"></i> Send
              Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;