import React from "react";
import { motion } from "framer-motion";
import bgPattern from "./images/background.png";
import bigOne from "./images/big_one.jpg";
import smallOne from "./images/small_one.jpg";
import NumerologyIcon from "./images/Numerology.png";
import SelfHealingIcon from "./images/Self_Healing.png";
import YogaIcon from "./images/Yoga.png";
import InnerAwakeningIcon from "./images/Inner_awakening.png";
import InnerAwakening2Icon from "./images/Inner_awakenin_2.png";

const icons = [
  { src: NumerologyIcon, label: "Numerology" },
  { src: SelfHealingIcon, label: "Self Healing" },
  { src: YogaIcon, label: "Yoga" },
  { src: InnerAwakeningIcon, label: "Inner Awakening" },
  { src: InnerAwakening2Icon, label: "Inner Awakening" },
];

export default function AboutUs() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center py-14 px-4 md:px-16 lg:px-40 bg-background overflow-hidden mt-[-40px] font-poppins">
      {/* Background pattern image */}
      <img
        src={bgPattern}
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      />
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Centered Title */}
        <motion.div 
          className="w-full flex flex-col items-center mb-8"
          variants={fadeInVariants}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold italic text-primary mb-2 text-center tracking-wide font-montserrat">
            About <span className="ml-2">Us</span>
          </h2>
          <span className="block h-1 w-28 bg-secondary rounded mx-auto mb-2" />
        </motion.div>
        {/* Main Content Row */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Left: Images */}
          <motion.div 
            className="flex flex-col gap-4 items-center md:items-start"
            variants={fadeInVariants}
          >
            <div className="w-64 h-64 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-soft">
              <img src={bigOne} alt="About big" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-40 rounded-tl-3xl rounded-br-3xl overflow-hidden -mt-8 ml-20 shadow-soft">
              <img src={smallOne} alt="About small" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          {/* Right: Text and Icons */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-dark mb-4 text-center md:text-left font-semibold"
              variants={fadeInVariants}
            >
              A sacred space for healing, self-discovery, and inner awakening.
            </motion.p>
            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-dark mb-8 text-center md:text-left max-w-xl"
              variants={fadeInVariants}
            >
              My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.
            </motion.p>
            {/* Icons Row */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center md:justify-start mb-8"
              variants={staggerContainerVariants}
            >
              {icons.map((icon, idx) => (
                <motion.div key={idx} className="flex flex-col items-center" variants={fadeInVariants}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2 bg-white shadow-soft">
                    <img src={icon.src} alt={icon.label} className="w-14 h-14 object-contain" />
                  </div>
                  <span className="text-base text-primary font-semibold text-center">{icon.label}</span>
                </motion.div>
              ))}
            </motion.div>
            {/* Button */}
            <motion.button 
              className="bg-accent text-white px-8 py-3 rounded shadow-soft hover:bg-primary transition text-lg font-semibold"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 