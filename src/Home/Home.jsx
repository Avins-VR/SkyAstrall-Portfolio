"use client";
import React from "react";
import Technologies from "./Technologies";
import devImage from "../assets/Developers team.jpg";
import Stars from "../Stars";
import ClientSuccess from "./Clientsucess";
import OurProcess from "./OurProcess";
import SplashCursor from "../components/ui/SplashCursor";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import MagicCursor from "../components/ui/MagicCursor";

// Define variants for the main hero section elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay the children's animations
      delayChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 1.5, // Delay image animation slightly
    },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 4px 8px rgba(41, 226, 255, 0.744)" },
  tap: { scale: 0.95 },
};

function Home() {
  const animatedText = `We’re a forward-thinking software development company
  specializing in AI-powered, cloud-enabled, and data-driven solutions
  that drive innovation, optimize operations, and help organizations
  adapt to an ever-evolving digital landscape.`;

  return (
    <div
      className="relative text-white overflow-x-hidden
      bg-[radial-gradient(at_top_left,#3c4b5e_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#384d4d75_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      <SplashCursor />
      <MagicCursor />
      <Stars />

      <motion.section
        className="flex flex-wrap justify-between items-center px-[5%] py-[2%] h-[90vh] mt-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Text */}
        <motion.div className="flex-1 max-w-[600px] z-10 ml-8 mt-10">
          <motion.h1
            className="text-[70px] font-bold leading-[1.1] mb-9"
            variants={textVariants}
          >
            <span className="bg-gradient-to-r from-[#00b6e8] via-[#66f2b8] to-[#c64ce8] bg-clip-text text-transparent">
              Transforming Ideas Into Reality
            </span>
          </motion.h1>

          <motion.div
            className="text-[#fcfcfc] text-[22px] leading-relaxed mb-12 max-w-[600px]"
            variants={textVariants}
          >
            <TextGenerateEffect words={animatedText} />
          </motion.div>

          <motion.div className="flex gap-16 mt-19" variants={textVariants}>
            <motion.a
              href="/Achievements"
              className="bg-gradient-to-r from-[#00e1b0] via-[#74cbd5] to-[#00afe4] text-[#161616] font-bold text-[20px] px-12 py-5 rounded-lg transition"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(41,226,255,0.744)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work ➔
            </motion.a>
            <motion.a
              href="/Contact"
              className="border-2 border-gray-500 text-white text-[20px] px-10 py-5 rounded-lg transition hover:border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div className="flex-1 text-center z-10" variants={imageVariants}>
          <img
            src={devImage}
            alt="Developers team"
            className="max-w-[60%] h-[380px] rounded-2xl border-[10px] border-black outline outline-4 outline-offset-[-6px] mt-5 ml-[180px]"
          />
        </motion.div>
      </motion.section>
      <Technologies />
      <ClientSuccess />
      <OurProcess />
    </div>
  );
}

export default Home;