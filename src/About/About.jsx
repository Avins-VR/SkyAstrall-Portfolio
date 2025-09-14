"use client";
import React from 'react';
import { motion } from "framer-motion";

import Mission from './Mission';
import Vision from './Vision';
import Milestones from './Milestones';
import Team from './Team';
import Journey from './Journey';

import MagicCursor from "../components/ui/MagicCursor";
import SplashCursor from "../components/ui/SplashCursor";
import Stars from "../Stars"; 

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

function About() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden 
      bg-[radial-gradient(at_top_left,#3c4b5e_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#384d4d75_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)]
      bg-blend-lighten m-0 p-0">

      <MagicCursor />
      <Stars />
      <SplashCursor />

      {/* Header Section */}
      <motion.div
        className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-[60px] font-bold mb-[30px] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #d6b1f0, #00ffe1ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={fadeUpVariants}
        >
          ABOUT SKYASTRALL
        </motion.h2>
        <motion.p
          className="text-[22px] max-w-[1000px] text-gray-300 mx-auto"
          variants={fadeUpVariants}
        >
          Founded in 2020, we've been at the forefront of technological innovation, helping businesses harness the power of AI and modern software solutions.
        </motion.p>
      </motion.div>
      
      {/* Sections with staggered entrance */}
      <motion.div
        className="space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Mission /> 
        <Vision /> 
        <Milestones />
        <Team /> 
        <Journey />
      </motion.div>
    </div>
  );
}

export default About;
