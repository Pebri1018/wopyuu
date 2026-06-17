"use client";
import { motion } from "framer-motion";

export const BouncingCat = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Kucing Pertama */}
      <motion.div
        animate={{
          left: ["0%", "calc(100% - 5rem)"],
          top: ["0%", "calc(100% - 5rem)"],
          rotate: 360,
        }}
        transition={{
          left: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          top: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
        className="absolute w-20 h-20 drop-shadow-xl opacity-90"
      >
        <img src="/photos/cat.png" alt="Bouncing Cat" className="w-full h-full object-contain" />
      </motion.div>

      {/* Kucing Kedua */}
      <motion.div
        animate={{
          left: ["calc(100% - 5rem)", "0%"],
          top: ["0%", "calc(100% - 5rem)"],
          rotate: -360,
        }}
        transition={{
          left: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          top: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        }}
        className="absolute w-40 h-40 drop-shadow-md opacity-80"
      >
        <img src="/photos/cat2.png" alt="Bouncing Cat 2" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};
