import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stars from "./Stars";
import SplashCursor from "./components/ui/SplashCursor";
import MagicCursor from "./components/ui/MagicCursor";

import FullstackImg from "./assets/fullstack.png";
import AIMLImg from "./assets/AIML.png";
import CloudImg from "./assets/cloud.png";
import APIImg from "./assets/API.png";
import UIUXImg from "./assets/ui ux .png";
import DevOpsImg from "./assets/devops.png";
import DataAnalystImg from "./assets/data analyst.jpeg";
import CyberImg from "./assets/cyber.png";
import AppDevImg from "./assets/App.png";
import EcommerceImg from "./assets/e-commerse.jpg";

// ---------------- Variants ----------------
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.45)",
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 40 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  exit: { scale: 0.85, opacity: 0, y: 40, transition: { duration: 0.2 } },
};
const serviceData = [
  {
    title: "Full-Stack Development",
    icon: "bi-code-slash",
    stars: 5,
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "Django"],
    img: FullstackImg,
    Achievements:
      "[Key Achievements: Mastered comprehensive full-stack development including microservices architecture. Cloud deployment, and modern DevOps practices. Built scalable applications with advanced security implementations.]",
    description:
      "Mastered comprehensive full-stack development including microservices architecture, cloud deployment, and modern DevOps practices. Built scalable applications with advanced security implementations.",
  },
  {
    title: "AI & Machine Learning",
    icon: "bi-robot",
    stars: 5,
    tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
    img: AIMLImg,
    Achievements:
      "[Key Achievements: Developing intelligent systems with 95% accuracy rates. Creating custom neural networks for complex data analysis. Implementing predictive models that improved business efficiency by 40%.]",
    description:
      "I leverage advanced AI and machine learning techniques to create intelligent systems that can learn from data, make predictions, and automate complex tasks. My expertise includes developing custom algorithms, neural networks, and data processing pipelines to drive innovation and efficiency in various applications.",
  },
  {
    title: "Cloud Solutions",
    icon: "bi-cloud-check",
    stars: 5,
    tech: ["AWS", "Azure", "Google Cloud", "Docker", "Terraform"],
    img: CloudImg,
    Achievements:
      "[Key Achievements: Migrating enterprise applications to cloud with 99.9% uptime. Reducing infrastructure costs by 50% through optimization. Implementing auto-scaling solutions for high-traffic applications.]",
    description:
      "I design and implement cloud-based architectures that enhance scalability, reliability, and performance. By utilizing platforms like AWS, Azure, or Google Cloud, I ensure seamless deployment, management, and optimization of applications in the cloud environment.",
  },
  {
    title: "API Development & Integration",
    icon: "bi-diagram-3",
    stars: 5,
    tech: ["REST API", "GraphQL", "Node.js", "Express.js", "Postman"],
    img: APIImg,
    Achievements:
      "[Key Achievements: Building secure APIs handling 1M+ requests daily. Integrating 50+ third-party services seamlessly. Reducing API response time by 60% through optimization.]",
    description:
      "I create and integrate APIs that enable seamless communication between different software systems. My focus is on building secure, efficient, and well-documented APIs that enhance functionality and user experience across applications.",
  },
  {
    title: "UI/UX Design",
    icon: "bi-lightning-charge",
    stars: 5,
    tech: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"],
    img: UIUXImg,
    Achievements:
      "[Key Achievements: Designing intuitive user interfaces for web and mobile applications. Creating wireframes and prototypes to visualize the solution. Conducting user research and usability testing to improve user experience and interface design.]",
    description:
      "I design user interfaces and experiences that are not only visually appealing but also intuitive and user-friendly. My approach combines aesthetics with usability to ensure that applications are engaging and easy to navigate.",
  },
  {
    title: "DevOps & Automation",
    icon: "bi-gear",
    stars: 5,
    tech: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Ansible"],
    img: DevOpsImg,
    Achievements:
      "[Key Achievements: Reducing deployment time by 80% through automation. Implementing CI/CD pipelines for 100+ projects. Achieving zero-downtime deployments for critical applications.]",
    description:
      "I implement DevOps practices to automate the software development lifecycle, ensuring faster delivery, continuous integration, and deployment. My expertise includes using tools like Docker, Kubernetes, and CI/CD pipelines to streamline operations and improve collaboration between development and operations teams.",
  },
  {
    title: "Data Analytics & Visualization",
    icon: "bi-bar-chart",
    stars: 5,
    tech: ["Tableau", "Power BI", "D3.js", "Python", "SQL"],
    img: DataAnalystImg,
    Achievements:
      "[Key Achievements: Creating interactive dashboards processing 10TB+ data daily. Providing insights that increased revenue by 25%. Building real-time analytics systems for enterprise clients.]",
    description:
      "I leverage data analytics and visualization techniques to extract insights from complex datasets. My focus is on creating interactive dashboards, reports, and visualizations that empower users to understand and make informed decisions based on data-driven insights.",
  },
  {
    title: "Cybersecurity",
    icon: "bi-shield-check",
    stars: 5,
    tech: ["Penetration Testing", "OWASP", "SSL/TLS", "Firewall", "Encryption"],
    img: CyberImg,
    Achievements:
      "[Key Achievements: Securing applications against 99% of common vulnerabilities. Implementing security protocols for Fortune 500 companies. Conducting security audits that prevented potential breaches.]",
    description:
      "I ensure the security of digital systems and applications by implementing robust security measures. My expertise includes identifying vulnerabilities, implementing security protocols, and maintaining compliance with industry standards and regulations.",
  },
  {
    title: "Mobile App Development",
    icon: "bi-phone",
    stars: 5,
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    img: AppDevImg,
    Achievements:
      "[Key Achievements: Developing apps with 4.8+ star ratings on app stores. Creating cross-platform solutions reducing development time by 50%. Building apps with 1M+ downloads and high user engagement.]",
    description:
      "I specialize in developing mobile applications for iOS and Android platforms. My focus is on creating native-like experiences that deliver a seamless user experience across different devices and operating systems.",
  },
  {
    title: "E-commerce Solutions",
    icon: "bi-cart",
    stars: 5,
    tech: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento"],
    img: EcommerceImg,
    Achievements:
      "[Key Achievements: Building e-commerce platforms generating $10M+ in sales. Implementing secure payment gateways with 99.9% uptime. Creating conversion-optimized stores increasing sales by 35%.]",
    description:
      "I develop e-commerce solutions that enable businesses to sell their products or services online. My focus is on creating user-friendly and secure online stores that drive sales and enhance customer engagement.",
  },
];

const ServiceCard = ({ service, onOpenModal, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-[#19183B] to-[#222222] rounded-xl 
        shadow-[0_0_35px_rgba(82,39,255,0.6)] flex flex-col w-[1000px] 
        -ml-24 mb-16 px-[40px] pb-[40px] py-[20px] cursor-pointer"
      variants={cardVariants}
      whileHover={{
        y: -10,
        boxShadow: "0_0_50px_rgba(82,39,255,0.9)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex justify-between items-center p-4 flex-grow">
        <div className="flex gap-4 items-start flex-1">
          {/* Icon */}
          <motion.div
            className="bg-[#4a5277] rounded-lg p-3 px-[15px] mt-3 ml-2 flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <i className={`bi ${service.icon} text-[25px] text-[#d6fdf7]`} />
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-[33px] font-semibold text-white mt-4 ml-4 mb-2">
              {service.title}
            </h3>
            <div className="flex items-center gap-1 mt-2 ml-5">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`${i < service.stars ? "bi-star-fill" : "bi-star"} text-yellow-400 text-[20px]`}
                />
              ))}
              <span className="text-[20px] text-gray-400 ml-2">({service.stars}/5)</span>
            </div>
            <p className="text-[18px] text-gray-400 leading-6 m-4">{service.description}</p>

            {/* Tech Badges with staggered motion */}
            <div className="flex flex-wrap gap-2 mt-6 ml-2">
              {service.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gray-600 text-gray-100 px-4 py-2 rounded-full text-[14px] font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Image + Eye Icon */}
        <div className="w-[200px] h-[300px] ml-6 relative">
          <motion.img
            src={service.img}
            alt={service.title}
            className="w-[300px] h-[200px] rounded-md shadow-md opacity-40 mt-[60px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.i
            className="bi bi-eye mt-[20px] absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 text-white text-[25px] 
              opacity-70 cursor-pointer hover:opacity-100 transition"
            whileHover={{ scale: 1.2 }}
            onClick={() => onOpenModal(service)}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ service, onClose }) => {
  if (!service) return null;

  const achievements = service.Achievements.replace("[Key Achievements: ", "")
    .replace("]", "")
    .split(". ")
    .filter((a) => a.trim());

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] backdrop-blur-sm"
        onClick={onClose}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <motion.div
          className="bg-[#1e1e1e] rounded-xl p-8 max-w-[600px] mt-24 w-[90%] shadow-2xl relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
        >
          <button
            className="absolute top-3 right-8 bg-none border-none text-[37px] text-gray-300 hover:text-red-500 transition"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="flex flex-col items-center text-center mb-8 border-b border-gray-700 pb-6">
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            <img
              src={service.img}
              alt="Certificate"
              className="w-[350px] h-[200px] rounded-lg shadow-lg mt-6"
            />
          </div>
          <div>
            <h3 className="text-[23px] font-semibold mb-5 text-white">Key Achievements</h3>
            <ul className="list-none p-0 m-0">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="text-[16px] text-gray-400 mb-3 flex items-start gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <i className="bi-star-fill text-blue-500" /> {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ---------------- Main Component ----------------
function Service() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-[radial-gradient(at_top_left,#3c4b5e_0%,transparent_70%),radial-gradient(at_top_right,#1e1e1ea3_0%,transparent_70%),radial-gradient(at_bottom_left,#384d4d75_0%,transparent_80%),linear-gradient(180deg,#070707_0%,#020202_100%)] bg-blend-lighten">
      <MagicCursor />
      <Stars />
      <SplashCursor />

      {/* Header */}
      <motion.div
        className="relative z-10 pt-16 pb-5 px-4 sm:px-6 lg:px-8 text-center mt-[80px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1
          className="text-[60px] font-bold mb-[30px] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #d6b1f0, #00ffe1ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SERVICE OFFERED
        </h1>
        <p className="text-[22px] max-w-[1200px] text-gray-300 mx-auto mb-[50px]">
          We build complete digital solutions—from clean, user-friendly interfaces to strong,
          scalable backend systems—delivering reliable, secure, and high-performing web and
          mobile applications.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 gap-8 max-w-[800px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {serviceData.map((s, index) => (
          <ServiceCard key={index} service={s} onOpenModal={setSelectedService} index={index} />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <Modal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Service;
