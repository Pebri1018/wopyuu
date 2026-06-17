"use client";
import { motion } from "framer-motion";
import { gratitudeReasons } from "@/data/gratitude";
import { siteConfig } from "@/data/config";

export const GratitudeSection = () => {
  if (!siteConfig.showGratitude) return null;

  return (
    <section id="gratitude" className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3 leading-tight">
          kenapa aku sangat sukak<br />bersama kamuu ❤️
        </h2>
      </motion.div>

      <div className="max-w-2xl w-full space-y-4">
        {gratitudeReasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-4"
          >
            <span className="text-2xl">🌸</span>
            <p className="text-lg font-serif text-gray-700">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
