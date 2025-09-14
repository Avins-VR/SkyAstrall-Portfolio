"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import client1Img from "../assets/client1.jpg";
import client2Img from "../assets/client2.jpg";
import client3Img from "../assets/client3.jpg";
import client4Img from "../assets/client4.jpg";
import client5Img from "../assets/client5.jpg";
import client6Img from "../assets/client6.jpg";

import MagicCursor from "../components/ui/MagicCursor";

const testimonials = [
  { img: client1Img, stars: 5, name: "Gabriel Sher", Position: "Serial Entrepreneur", feedback: "Working with Marc on the Untapped Africa website was a fantastic experience. He understood our vision and delivered a stunning, user-friendly site that exceeded our expectations. His professionalism, creativity, and attention to detail made the process smooth and enjoyable." },
  { img: client2Img, stars: 5, name: "Sarah Johnson", Position: "CTO, TechFlow Solutions", feedback: "SkyAstrall delivered an exceptional AI-powered analytics platform that transformed our data processing capabilities. Their technical expertise and commitment to quality exceeded our expectations. Highly recommended for complex enterprise solutions." },
  { img: client3Img, stars: 5, name: "Emily Rodriguez", Position: "Founder, InnovateHub", feedback: "The team's ability to understand our business needs and translate them into a scalable cloud solution was impressive. They delivered on time, within budget, and provided excellent ongoing support. A true partnership experience." },
  { img: client4Img, stars: 5, name: "Michael Chen", Position: "VP Engineering, DataCore", feedback: "Outstanding work on our machine learning infrastructure. The solution they built has improved our processing speed by 300% and reduced operational costs significantly. Professional team with deep technical knowledge." },
  { img: client5Img, stars: 5, name: "David Thompson", Position: "CEO, NextGen Analytics", feedback: "SkyAstrall transformed our legacy system into a modern, efficient platform. Their agile approach and constant communication made the entire process seamless. The results speak for themselves - 40% increase in productivity." },
  { img: client6Img, stars: 5, name: "Lisa Wang", Position: "Director of Technology, CloudFirst", feedback: "Exceptional service from start to finish. They not only delivered a robust solution but also provided valuable insights that improved our overall architecture. Their expertise in cloud technologies is unmatched." },
];

// Define animation variants for the section title and testimonials
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of each card
      delayChildren: 0.5,
    },
  },
};

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

function ClientSuccess() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const atStart = container.scrollLeft === 0;
      const atEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth;

      // Only hijack scroll when we actually can scroll horizontally
      if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="p-8">
      <MagicCursor />
      <h2 className="text-[40px] font-bold mb-5 text-center">
        Client<span className="text-gray-300"> Success Stories</span>
      </h2>
      <p className="text-[18px] text-gray-300 mb-10 text-center">
        Hear from our satisfied clients about their experience working with us and the results we've delivered.
      </p>

      <motion.div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 no-scrollbar mt-[50px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="min-w-[800px] max-w-[800px] p-6 rounded-xl border border-[#333] transition-transform duration-300 ease-in-out ml-[330px] mb-[30px]"
            style={{
              background: "linear-gradient(90deg, #66b2bb36, rgba(11, 113, 106, 0.15))",
            }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(229,231,235,0.7)",
              background: "linear-gradient(90deg, #66b2bb56, rgba(11, 113, 106, 0.35))",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Top Row → Image + LinkedIn */}
            <div className="flex items-center justify-between mt-5">
              <motion.img
                src={t.img}
                alt={t.name}
                className="w-40 h-40 object-cover rounded-full border-2 border-white shadow-md ml-10"
                whileHover={{ rotate: 5, scale: 1.05 }}
              />
              <motion.a
                href="#"
                className="flex items-center gap-2 bg-[#0A66C2] text-white px-8 py-4 rounded-lg text-[16px] hover:bg-[#004182] transition mr-10"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-linkedin"></i> Connect
              </motion.a>
            </div>

            {/* Name + Stars */}
            <h3 className="text-[25px] font-semibold mt-6 ml-9">{t.name}</h3>
            <div className="text-yellow-400 text-[25px] ml-9 mt-2">
              {"★".repeat(t.stars)}
            </div>

            {/* Position */}
            <p className="text-gray-300 font-[20px] mt-2 ml-9">{t.Position}</p>

            {/* Feedback */}
            <p className="mt-5 text-gray-400 italic ml-9 text-[16px]">"{t.feedback}"</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ClientSuccess;