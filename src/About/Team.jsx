"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.jpeg";
import member3 from "../assets/member3.jpeg";
import member4 from "../assets/member4.avif";
import member5 from "../assets/member5.jpeg";
import member6 from "../assets/member6.jpg";

import { CardContainer, CardBody } from "../3D card";

const team = [
  {
    name: "Sarah Chen",
    position: "CEO & Co-Founder",
    description:
      "Former Google AI researcher with 12+ years in machine learning and enterprise software. Led AI initiatives at Fortune 500 companies.",
    image: member1,
  },
  {
    name: "Marcus Rodriguez",
    position: "CTO & Co-Founder",
    description:
      "Full-stack architect with expertise in cloud infrastructure and scalable systems. Previously led engineering teams at Microsoft and Amazon.",
    image: member2,
  },
  {
    name: "Emily Johnson",
    position: "Head of AI Development",
    description:
      "PhD in Computer Science specializing in deep learning and neural networks. Published researcher with 8+ years in AI product development.",
    image: member3,
  },
  {
    name: "David Kim",
    position: "Senior Cloud Engineer",
    description:
      "AWS certified solutions architect with expertise in DevOps and microservices. 10+ years experience in enterprise cloud migrations.",
    image: member4,
  },
  {
    name: "Lisa Thompson",
    position: "Product Manager",
    description:
      "Strategic product leader with MBA and 9+ years experience in tech startups. Expert in agile methodologies and user experience design.",
    image: member5,
  },
  {
    name: "Alex Patel",
    position: "Lead Data Scientist",
    description:
      "Machine learning specialist with expertise in predictive analytics and big data. Former data scientist at Tesla and Uber with 7+ years experience.",
    image: member6,
  },
];

// Define animation variants for the section and individual cards
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.2, // Stagger the animation of each card
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function Team() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const atStart = container.scrollLeft === 0;
      const atEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth;

      if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="text-white py-20 px-6 sm:px-10 font-sans">
      <motion.h3
        className="text-[40px] font-bold text-purple-400 text-center mb-[80px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h3>

      <motion.div
        ref={containerRef}
        className="flex gap-60 overflow-x-auto overflow-y-hidden pb-6 no-scrollbar px-[100px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((member, index) => (
          <motion.div key={index} variants={cardVariants}>
            <CardContainer className="w-[350px]">
              <CardBody className="relative bg-[black] rounded-xl w-[380px] p-[50px] flex flex-col items-center text-center overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-lg">
                {/* Front side */}
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <h4 className="text-2xl font-semibold">{member.name}</h4>
                  <p className="text-lg font-medium text-blue-400 mt-3">
                    {member.position}
                  </p>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-2xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-lg font-medium text-blue-400 mb-4">
                    {member.position}
                  </p>
                  <p className="text-sm px-4 leading-relaxed font-light text-gray-300">
                    {member.description}
                  </p>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Team;