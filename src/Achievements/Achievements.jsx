"use client";
import React from "react";
import { motion } from "framer-motion";
import MagicCursor from "../components/ui/MagicCursor";
import Awards from "./Awards";
import Projects from "./Projects";
import SplashCursor from "../components/ui/SplashCursor";

function Achievements() {
  return (
    <div
      className="relative min-h-screen text-white font-sans overflow-hidden 
      bg-[radial-gradient(at_top_left,#3c4b5e_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#384d4d75_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0"
    >
      {/* Custom Cursors */}
      <MagicCursor />
      <SplashCursor />

      {/* Heading Section */}
      <motion.div
        className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
      >
        <motion.h2
          className="text-[60px] font-bold mb-[30px] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #d6b1f0, #00ffe1ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 120 }}
        >
          OUR ACHIEVEMENTS
        </motion.h2>
        <motion.p
          className="text-[22px] max-w-[1100px] text-gray-300 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Showcasing a journey of recognition, groundbreaking milestones, and
          successful projects that highlight our unwavering commitment to
          excellence and innovation.
        </motion.p>
      </motion.div>

        <Awards />
        <Projects />
    </div>
  );
}

export default Achievements;
