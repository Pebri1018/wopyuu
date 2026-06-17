"use client";
import { motion } from "framer-motion";

export const BouncingCat = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          left: ["0%", "calc(100% - 6rem)"],
          top: ["0%", "calc(100% - 6rem)"],
          rotate: 360,
        }}
        transition={{
          left: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          top: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
        className="absolute w-24 h-24 drop-shadow-xl"
      >
        <img src="/photos/cat.png" alt="Bouncing Cat" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};
