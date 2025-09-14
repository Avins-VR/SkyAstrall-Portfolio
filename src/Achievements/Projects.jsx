"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { CardContainer, CardBody } from "../3D card";

import AiHealthImg from "../assets/Ai-health.jpeg";
import EcommerceImg from "../assets/Ecommerce.jpg";
import TrafficImg from "../assets/traffic.jpeg";
import TradingImg from "../assets/trading.jpeg";
import EducationImg from "../assets/Education.jpeg";
import SupplyChainImg from "../assets/Supply chain.jpg";

const projectsData = [
  {
    title: "AI-Powered Healthcare Platform",
    img: AiHealthImg,
    domain: "AI&ML",
    year: "2025",
    description:
      "Machine learning solution for diagnostic assistance, serving 10,000+ patients daily.",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    features: "40% faster diagnosis accuracy",
  },
  {
    title: "E-Commerce Automation Suite",
    img: EcommerceImg,
    domain: "Full-Stack",
    year: "2025",
    description:
      "AI-driven full-stack platform for personalized shopping and inventory forecasting.",
    tech: ["Next.js", "PostgreSQL", "Scikit-learn", "Docker"],
    features: "50% increase in user retention",
  },
  {
    title: "Smart Traffic Management System",
    img: TrafficImg,
    domain: "IoT & AI",
    year: "2024",
    description:
      "Real-time traffic prediction and signal optimization for urban areas with IoT integration.",
    tech: ["Node.js", "MongoDB", "Python", "OpenCV"],
    features: "35% reduction in congestion across pilot cities",
  },
  {
    title: "Financial Trading Platform",
    img: TradingImg,
    domain: "FinTech",
    year: "2024",
    description:
      "Real-time algorithmic trading platform with risk management and portfolio analytics.",
    tech: ["React", "Node.js", "Redis", "WebSocket"],
    features: "25% improved trading efficiency",
  },
  {
    title: "Educational Learning Management",
    img: EducationImg,
    domain: "EdTech",
    year: "2024",
    description:
      "Comprehensive LMS with AI-powered personalized learning paths and progress tracking.",
    tech: ["Vue.js", "Django", "PostgreSQL", "TensorFlow"],
    features: "60% increase in student engagement",
  },
  {
    title: "Supply Chain Optimization",
    img: SupplyChainImg,
    domain: "Logistics",
    year: "2025",
    description:
      "AI-driven supply chain management system with predictive analytics and route optimization.",
    tech: ["Angular", "Spring Boot", "MySQL", "Apache Kafka"],
    features: "30% reduction in delivery time",
  },
];

// Define variants for the grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of each card
      delayChildren: 0.3,
    },
  },
};

// Define variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function Projects() {
  const [projects] = useState(projectsData);

  return (
    <div className="py-12 px-4 md:px-12 flex justify-center items-center">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <CardContainer>
                <CardBody className="relative p-6 rounded-3xl bg-[#1e1e1e] shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl h-48 mb-6">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-gray-800 text-white text-[15px] px-2 py-1 rounded-full font-semibold">
                      {project.year}
                    </span>
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[25px] font-bold mb-2 text-sky-400">
                      {project.title}
                    </h4>
                    <p className="text-[18px] font-semibold text-gray-300 mb-3">
                      {project.domain}
                    </p>
                    <p className="text-[16px] text-gray-200 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[12px] px-3 py-1 bg-gray-700 text-gray-200 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[16px] mb-4 italic font-medium text-gray-300">
                      {project.features}
                    </p>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;