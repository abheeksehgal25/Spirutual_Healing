import React, { useEffect, useState, useRef } from "react";
import firstImg from "./images/first.jpg";
import secondImg from "./images/second.jpg";
import thirdImg from "./images/third.jpg";
import "./HeroSlider.css";

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

  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0 bg-background font-heading">
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
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
      </div>
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
        <div className="max-w-3xl px-8 md:px-24 lg:px-32 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black drop-shadow-lg mb-4 mt-8 md:mt-0 animate-fade-in-up">
            Welcome to Your Spiritual<br />
            <span className="text-black animate-fade-in-up-delay">Sanctuary</span>
          </h1>
          <p className="text-lg md:text-xl text-dark mb-8 drop-shadow-lg animate-fade-in-up-delay2">
            A sacred space for healing, self-discovery, and inner awakening.<br />
            Explore resources to nurture your body, mind, and soul.
          </p>
          <div className="flex gap-4 animate-fade-in-up-delay3">
            <a
              href="#services"
              className="bg-accent text-white px-6 py-2 rounded shadow-soft hover:bg-primary transition font-heading"
            >
              Explore Services
            </a>
            <a
              href="#book"
              className="border border-dark px-6 py-2 rounded shadow-soft hover:bg-dark hover:text-white transition font-heading"
            >
              Book A Session
            </a>
          </div>
        </div>
      </div>
      {/* Optional: Overlay for darkening image if needed */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />
    </div>
  );
} 