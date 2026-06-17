"use client";
import { motion } from "framer-motion";

export const BouncingCat = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Kucing Pertama */}
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
        className="absolute w-24 h-24 drop-shadow-xl opacity-90"
      >
        <img src="/photos/cat.png" alt="Bouncing Cat" className="w-full h-full object-contain" />
      </motion.div>

      {/* Kucing Kedua (Lebih Kecil) */}
      <motion.div
        animate={{
          left: ["calc(100% - 4rem)", "0%"],
          top: ["0%", "calc(100% - 4rem)"],
          rotate: -360,
        }}
        transition={{
          left: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          top: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "linear" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        }}
        className="absolute w-16 h-16 drop-shadow-md opacity-80"
      >
        <img src="/photos/cat2.png" alt="Bouncing Cat 2" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};
