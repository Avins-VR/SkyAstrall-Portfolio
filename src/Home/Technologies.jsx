"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

// Frontend assets
import css from "../assets/CSS.png";
import html from "../assets/HTML.png";
import js from "../assets/JS.png";
import reactLogo from "../assets/React.png";
import ts from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";

// Backend assets
import nextjs from "../assets/Nextjs.png";
import nodejs from "../assets/Nodejs.png";
import express from "../assets/express-js.png";
import mongodb from "../assets/Mongodb.png";
import python from "../assets/python.png";
import firebase from "../assets/Firebase.png";

import MagicCursor from "../components/ui/MagicCursor";

// ===== Motion Variants =====
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const cardStyles =
  "!bg-[#1e1d1d] !border !border-[#3d3d3d] transition-all duration-300 ease-in-out hover:-translate-y-5 hover:!bg-[#383838] hover:shadow-2xl hover:shadow-[#5ea3f2]";

const cardTextStyles = "text-neutral-200";

function Technologies() {
  const frontendItems = [
    { title: "HTML5", image: html },
    { title: "CSS3", image: css },
    { title: "Tailwind", image: tailwind },
    { title: "JavaScript", image: js },
    { title: "TypeScript", image: ts },
    { title: "React", image: reactLogo },
  ];

  const backendItems = [
    { title: "Next.js", image: nextjs },
    { title: "Node.js", image: nodejs },
    { title: "Express.js", image: express },
    { title: "MongoDB", image: mongodb },
    { title: "Python", image: python },
    { title: "Firebase", image: firebase },
  ];

  return (
    <motion.div
      className="relative flex min-h-screen w-full flex-col items-center justify-start gap-12 py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <MagicCursor />

      {/* Heading */}
      <motion.div
        className="text-center z-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-[33px] font-bold text-white md:text-[40px] mb-5">
          Technologies <span className="text-gray-400">& Tools</span>
        </h3>
        <p className="mt-2 text-[18px] text-white md:text-[18px] mb-10">
          Modern tools for modern solutions
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 items-center justify-center w-full max-w-6xl">
        {/* Frontend */}
        <DraggableCardContainer className="relative flex w-full h-[400px] items-center justify-center">
          <div className="flex">
            {frontendItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(94,163,242,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <DraggableCardBody
                  className={`relative -ml-20 first:ml-0 flex flex-col items-center ${cardStyles}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-32 w-32 object-contain"
                  />
                  <h3
                    className={`mt-2 text-center text-lg font-semibold ${cardTextStyles}`}
                  >
                    {item.title}
                  </h3>
                </DraggableCardBody>
              </motion.div>
            ))}
          </div>
        </DraggableCardContainer>

        {/* Backend */}
        <DraggableCardContainer className="relative flex w-full h-[400px] items-center justify-center mt-20 mb-20">
          <div className="flex">
            {backendItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  boxShadow: "0 20px 40px rgba(94,163,242,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <DraggableCardBody
                  className={`relative -ml-20 first:ml-0 flex flex-col items-center ${cardStyles}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-32 w-32 object-contain"
                  />
                  <h3
                    className={`mt-2 text-center text-lg font-semibold ${cardTextStyles}`}
                  >
                    {item.title}
                  </h3>
                </DraggableCardBody>
              </motion.div>
            ))}
          </div>
        </DraggableCardContainer>
      </div>
    </motion.div>
  );
}

export default Technologies;
