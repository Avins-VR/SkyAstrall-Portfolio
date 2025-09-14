"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion

import discovery from "../assets/Discovery.jpg";
import Prototyping from "../assets/Prototyping.avif";
import testing from "../assets/testing.jpg";
import deployment from "../assets/deployment.jpg";

import MagicCursor from "../components/ui/MagicCursor";

const Process = [
  {
    no: 1,
    title: "Discovery & Planning",
    image: discovery,
    description:
      "We take the time to deeply understand your unique business goals, the challenges you face, and your specific technical requirements. Through detailed consultations, we ensure that every solution we design is aligned with your vision, tailored to your needs, and capable of driving sustainable growth.",
  },
  {
    no: 2,
    title: "Design & Prototyping",
    image: Prototyping,
    description:
      "We carefully create detailed wireframes and interactive prototypes that bring the solution to life visually before any coding begins. This process allows you to clearly see how the design and functionality will work, ensuring every aspect is aligned with your vision and expectations. By validating ideas early, we minimize risks, incorporate feedback seamlessly, and set a strong foundation for smooth and efficient development.",
  },
  {
    no: 3,
    title: "Development & Testing",
    image: testing,
    description:
      "Agile development emphasizes iterative and incremental software creation, where continuous testing is integrated throughout the process to ensure both high quality and seamless functionality. This approach allows teams to quickly adapt to evolving requirements or unforeseen challenges, delivering reliable solutions that align closely with stakeholder needs and expectations.",
  },
  {
    no: 4,
    title: "Deployment & Support",
    image: deployment,
    description:
      "We ensure smooth and efficient deployment of applications to production environments, accompanied by continuous support and proactive maintenance. This approach guarantees optimal performance, minimizes downtime, and fosters long-term success by keeping systems reliable, up-to-date, and aligned with evolving business needs.",
  },
];

const usedtech = [
  {
    topic: "Frontend",
    tech: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
  {
    topic: "Backend",
    tech: ["Node.js", "Firebase", "AWS", "Python", "PHP"],
  },
];

// Define animation variants for each section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const processStepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const techCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
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

function OurProcess() {
  return (
    <div className="text-gray-400 font-sans p-8">
      <MagicCursor />
      <motion.h2
        className="text-[40px] text-gray-100 font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Our <span className="text-gray-300">Process</span>
      </motion.h2>
      <motion.p
        className="text-[18px] text-gray-300 mb-10 text-center mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A proven methodology that ensures successful project delivery, from initial
        consultation to final deployment and beyond
      </motion.p>

      {/* Development Process Section */}
      <motion.div
        className="w-[1300px] mx-auto p-1 border-2 border-white rounded-lg bg-black mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 0px 40px rgba(187, 225, 250, 0.8)" }}
      >
        <div className="border-2 border-[#BBE1FA] p-6 rounded-lg bg-[#1B262C] transition-all duration-500 hover:bg-black">
          <h2 className="text-[25px] text-center font-semibold mb-10 mt-2 text-white">
            Our Development Process
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.4 }}
          >
            {Process.map((step, i) => (
              <motion.div
                key={i}
                className="flex space-x-4 items-start"
                variants={processStepVariants}
              >
                <div className="ml-8 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B262C] border-2 border-[#BBE1FA] text-[#BBE1FA] font-bold text-lg">
                  {step.no}
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-semibold text-white mb-10 ml-2">
                    {step.title}
                  </h3>
                  <img src={step.image} alt={step.title} className="w-[450px] h-[300px] mb-4 rounded-lg" />
                  <p className="text-[18px] mt-6 mb-10 text-gray-200">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="w-[1300px] mx-auto p-1 border-2 border-white rounded-lg bg-black mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 0px 40px rgba(187, 225, 250, 0.8)" }}
      >
        <div className="border-2 border-[#BBE1FA] p-6 rounded-lg bg-[#1B262C]">
          <h2 className="text-[25px] text-center font-semibold mb-10 mt-2 text-white">
            Technologies We Use
          </h2>

          <motion.div
            className="flex flex-col md:flex-row gap-16 justify-center w-[1000px] ml-[100px] mb-[50px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {usedtech.map((item, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-[#000] p-6 rounded-xl shadow-md border border-gray-700"
                variants={techCardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(221, 244, 231, 0.3)" }}
              >
                <h3 className="text-[20px] font-bold mb-4 text-[#BBE1FA]">
                  {item.topic}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {item.tech.map((techItem, j) => (
                    <li key={j} className="text-gray-300 text-[16px]">
                      {techItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurProcess;