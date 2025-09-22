"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { FiActivity } from "react-icons/fi";

const texts = [
  "Welcome to My Website",
  "I'm a passionate frontend developer",
  "Enjoy your stay!",
];

const HeroContent = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }
  }, [charIndex, index]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="flex justify-center items-center">
          <Image 
            src="/vaseng.png"
            alt="Vaseng Profile"
            width={320}
            height={320}
            className="rounded-full w-80 h-80 object-cover transition-transform hover:scale-105"
            priority
          />
        </div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fontend Developer
          </h1>
        </motion.div>


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold"
        >
          <span className="text-transparent py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Vaseng CHOUYEE
          </span>
        </motion.div>
        <div className="flex flex-col">
          <h1 className="flex text-lg md:text-base font-bold text-gray-400">
            <FiActivity className="mr-2 text-blue-400" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.span>
          </h1>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
