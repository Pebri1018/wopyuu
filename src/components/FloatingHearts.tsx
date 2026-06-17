"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        size: Math.random() * 15 + 10,
      }));
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0.6, 0],
            x: ["0px", "20px", "-20px", "0px"]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-pink-300/40"
          style={{ left: `${heart.left}%`, fontSize: heart.size }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};
