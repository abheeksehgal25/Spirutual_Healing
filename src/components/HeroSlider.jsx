import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; // eslint-disable-next-line no-unused-vars
import firstImg from "../images/first.jpg";
import secondImg from "../images/second.jpg";
import thirdImg from "../images/third.jpg";

const images = [firstImg, secondImg, thirdImg];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const textColorClass = current === 0 ? 'text-black' : 'text-white';
  const buttonBorderColor = current === 0 ? 'border-black' : 'border-white';
  const buttonTextColor = current === 0 ? 'text-black' : 'text-white';
  const buttonHoverBg = current === 0 ? 'hover:bg-black' : 'hover:bg-white';
  const buttonHoverText = current === 0 ? 'hover:text-white' : 'hover:text-black';

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const textDelayVariants = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: delay }
    },
  });

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden m-0 p-0 bg-background font-poppins">
      {/* Slider Track */}
      <motion.div
        className="flex h-full"
        initial={{ x: 0 }}
        animate={{ x: `-${current * 100 / images.length}%` }}
        transition={{ duration: 1, ease: "linear" }}
        style={{
          width: `${images.length * 100}%`,
          willChange: 'transform, opacity',
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="slider background"
            className="w-full h-screen object-cover flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
            draggable="false"
          />
        ))}
      </motion.div>
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
        <div className="max-w-3xl px-8 md:px-24 lg:px-32 text-left">
          <motion.h1 
            className={`text-4xl md:text-6xl font-extrabold ${textColorClass} drop-shadow-lg mb-4 mt-8 md:mt-0`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Welcome to Your Spiritual<br />
            <motion.span className={`${textColorClass}`}
              initial="hidden"
              animate="visible"
              variants={textDelayVariants(0.2)}
            >Sanctuary</motion.span>
          </motion.h1>
          <motion.p 
            className={`text-lg md:text-xl ${textColorClass} mb-8 drop-shadow-lg`}
            initial="hidden"
            animate="visible"
            variants={textDelayVariants(0.4)}
          >
            A sacred space for healing, self-discovery, and inner awakening.<br />
            Explore resources to nurture your body, mind, and soul.
          </motion.p>
          <motion.div 
            className="flex gap-4"
            initial="hidden"
            animate="visible"
            variants={textDelayVariants(0.6)}
          >
            <a
              href="#services"
              className="bg-accent text-white px-6 py-2 rounded shadow-soft hover:bg-primary transition font-montserrat"
            >
              Explore Services
            </a>
            <a
              href="#book"
              className={`border ${buttonBorderColor} ${buttonTextColor} px-6 py-2 rounded shadow-soft ${buttonHoverBg} ${buttonHoverText} transition font-montserrat`}
            >
              Book A Session
            </a>
          </motion.div>
        </div>
      </div>
      {/* Optional: Overlay for darkening image if needed */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />
    </div>
  );
} 