"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion

function Awards() {
  const awards = [
    {
      icon: "bi bi-star",
      title: "Best AI Innovation Award",
      issued: "Tech Excellence Council • 2021",
    },
    {
      icon: "bi bi-star",
      title: "Best Full-Stack Project Delivery",
      issued: "National IT Awards • 2022",
    },
    {
      icon: "bi bi-star",
      title: "Excellence in Web Application Development",
      issued: "Web Dev Conclave • 2022",
    },
    {
      icon: "bi bi-star",
      title: "Excellence in Customer Experience",
      issued: "International Business Awards • 2023",
    },
    {
      icon: "bi bi-star",
      title: "Outstanding Startup of the Year",
      issued: "Global Entrepreneurship Forum • 2025",
    },
    {
      icon: "bi bi-star",
      title: "Top Emerging Tech Company",
      issued: "Startup India Excellence Awards • 2025",
    },
  ];

  const affiliations = [
    {
      icon: "bi bi-building-check",
      title: "Affiliated with Ministry of MSME",
      type: "Government",
    },
    {
      icon: "bi bi-mortarboard-fill",
      title: "Member NASSCOM FutureSkills Prime Program",
      type: "Professional",
    },
    {
      icon: "bi bi-globe2",
      title: "Recognized by Startup India Initiative",
      type: "Startup",
    },
    {
      icon: "bi bi-diagram-3-fill",
      title: "Partnered with Atal Innovation Mission (AIM)",
      type: "Innovation Program",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Certified by ISO 27001 (Information Security Management)",
      type: "Compliance",
    },
    {
      icon: "bi bi-award",
      title: "Accredited by National Skill Development Corporation (NSDC)",
      type: "Professional",
    },
  ];

  // Variants for the main containers
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1, // Stagger children for a cascade effect
      },
    },
  };

  // Variants for each individual item (award or affiliation)
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-[130px] mb-12 mt-16">
      {/* Awards Section */}
      <motion.div
        className="w-full max-w-[650px] bg-gradient-to-r from-[#65768c7b] to-[#00afe43d] rounded-xl p-8 px-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(255, 255, 255, 0.5)",
        }}
      >
        <h3 className="flex items-center ml-2 text-[30px] mb-10 bg-gradient-to-r from-[#D1F8EF] font-bold via-[#64CCC5] to-[#CBE4DE] bg-clip-text text-transparent">
          <i className="bi bi-trophy-fill mr-5 text-indigo-300"></i> Awards &
          Recognition
        </h3>
        {awards.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-white rounded-lg px-4 py-3 mb-6 shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          >
            <i className={`${item.icon} text-xl text-purple-800 mt-1`}></i>
            <div>
              <strong className="block text-[18px] text-black">
                {item.title}
              </strong>
              <p className="m-0 text-gray-600 text-[16px]">{item.issued}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Affiliation Section */}
      <motion.div
        className="w-full max-w-[650px] bg-gradient-to-r from-[#65768c7b] to-[#00afe43d] rounded-xl p-8 px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(255, 255, 255, 0.5)",
        }}
      >
        <h3 className="flex items-center ml-2 text-[30px] mb-10 bg-gradient-to-r from-[#D1F8EF] font-bold via-[#64CCC5] to-[#CBE4DE] bg-clip-text text-transparent">
          <i className="bi bi-award mr-5 text-indigo-300"></i> Affiliation
        </h3>
        {affiliations.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-white rounded-lg px-4 py-3 mb-6 shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          >
            <i className={`${item.icon} text-xl text-purple-800 mt-1`}></i>
            <div>
              <strong className="block text-[17px] text-black">
                {item.title}
              </strong>
              <p className="m-0 text-gray-600 text-[15px]">{item.type}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Awards;