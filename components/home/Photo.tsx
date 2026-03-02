"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.8, ease: "easeIn" },
        }}
        className="mix-blend-lighten"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
          }}
          className="w-74.5 h-74.5 xl:w-124.5 xl:h-124.5 mix-blend-lighten absolute"
        >
          <Image
            fill
            priority
            quality={100}
            alt="Profile Photo"
            className="object-nation"
            src="/assets/profile_photo.jpeg"
          />
        </motion.div>
        <motion.svg
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          className="w-75 xl:w-126.5 h-75 xl:h-126.5"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00FF99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}

            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo