import React from "react";
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
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center py-14 px-4 md:px-16 lg:px-40 bg-background overflow-hidden mt-[-40px] font-heading animate-fade-in-up">
      {/* Background pattern image */}
      <img
        src={bgPattern}
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      />
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Centered Title */}
        <div className="w-full flex flex-col items-center mb-8 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-extrabold italic text-primary mb-2 text-center tracking-wide">
            About <span className="ml-2">Us</span>
          </h2>
          <span className="block h-1 w-28 bg-secondary rounded mx-auto mb-2" />
        </div>
        {/* Main Content Row */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Left: Images */}
          <div className="flex flex-col gap-4 items-center md:items-start animate-fade-in-up-delay">
            <div className="w-64 h-64 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-soft">
              <img src={bigOne} alt="About big" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-40 rounded-tl-3xl rounded-br-3xl overflow-hidden -mt-8 ml-20 shadow-soft">
              <img src={smallOne} alt="About small" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Text and Icons */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-dark mb-4 text-center md:text-left font-semibold animate-fade-in-up-delay2">
              A sacred space for healing, self-discovery, and inner awakening.
            </p>
            {/* Description */}
            <p className="text-lg md:text-xl text-dark mb-8 text-center md:text-left max-w-xl animate-fade-in-up-delay3">
              My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.
            </p>
            {/* Icons Row */}
            <div className="flex flex-wrap gap-8 justify-center md:justify-start mb-8 animate-fade-in-up-delay4">
              {icons.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2 bg-white shadow-soft">
                    <img src={icon.src} alt={icon.label} className="w-14 h-14 object-contain" />
                  </div>
                  <span className="text-base text-primary font-semibold text-center">{icon.label}</span>
                </div>
              ))}
            </div>
            {/* Button */}
            <button className="bg-accent text-white px-8 py-3 rounded shadow-soft hover:bg-primary transition text-lg font-semibold animate-fade-in-up-delay5">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 