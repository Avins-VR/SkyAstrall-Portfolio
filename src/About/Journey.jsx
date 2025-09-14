"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import foundation from "../assets/foundation.jpg";
import Rapidgrowth from "../assets/Rapid Growth.jpg";
import globalexpansion from "../assets/Global Expansion.jpg";
import Industryrecognition from "../assets/Industry Recognition.jpg";

const journey = [
  {
    image: foundation,
    number: "2020",
    label: "Foundation & Vision",
    description:
      "Founded SkyAstrall in 2020, with a mission to revolutionize the tech industry through AI-driven solutions.",
  },
  {
    image: Rapidgrowth,
    number: "2022",
    label: "Rapid Growth",
    description:
      "Expanded our team to 15+ professionals and delivered 20+ successful projects across multiple industries.",
  },
  {
    image: globalexpansion,
    number: "2024",
    label: "Global Expansion",
    description:
      "Extended our services internationally, serving clients in 12+ countries and establishing strategic partnerships.",
  },
  {
    image: Industryrecognition,
    number: "2025",
    label: "Industry Recognition",
    description:
      "Achieved industry recognition with multiple awards and became a trusted partner for Fortune 500 companies.",
  },
];

function Journey() {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // measure container height
  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, []);

  // scroll progress animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="px-5 py-12 text-center relative"
      ref={containerRef}
    >
      {/* Heading */}
      <motion.h3
        className="text-[40px] font-bold text-purple-400 text-center mb-[100px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        Our Journey
      </motion.h3>

      {/* Timeline container */}
      <div className="flex flex-col relative max-w-7xl mx-auto">
        {/* Static background line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#30363d] transform -translate-x-1/2"></div>

        {/* Animated line that grows on scroll */}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#007bff] via-purple-500 to-transparent rounded-full"
        />

        {journey.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-20 relative ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Text Card */}
            <motion.div
              className={`bg-[#161b22] border border-[#30363d] rounded-xl p-10 w-1/2 relative text-left
                transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl hover:shadow-[#617476bb]
                ${index % 2 === 0 ? "ml-[300px]" : "mr-[300px]"}
              `}
              whileHover={{ scale: 1.03, rotateZ: 0.5 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-gray-400 rounded-full border-2 border-[#161b22] z-10 
                  ${index % 2 === 0 ? "-left-[158px]" : "-right-[158px]"}
                `}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: index * 0.2 }}
              />
              <h4 className="text-[#007bff] text-[40px] font-semibold mb-2">{step.number}</h4>
              <h3 className="text-[22px] font-bold mb-4">{step.label}</h3>
              <p className="text-[#c9d1d9] text-base text-[18px]">{step.description}</p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-[660px]"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.3 }}
              whileHover={{ scale: 1.02, y: -5, rotateZ: 0.2 }}
            >
              <img
                src={step.image}
                alt={step.label}
                className="w-full h-64 object-cover rounded-xl border border-[#30363d] shadow-md"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
