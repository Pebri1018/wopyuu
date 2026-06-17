"use client";
import { motion } from "framer-motion";

export const BouncingCat = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <motion.div
        animate={{
          x: ["0vw", "calc(100vw - 6rem)", "0vw"],
          y: ["0vh", "calc(100svh - 6rem)", "0vh"],
          rotate: [0, 360],
        }}
        transition={{
          x: { duration: 8, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "linear" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-0 left-0 w-24 h-24 drop-shadow-2xl"
      >
        <img src="/photos/cat.png" alt="Bouncing Cat" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};
