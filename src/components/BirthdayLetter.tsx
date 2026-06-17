"use client";
import { motion } from "framer-motion";
import { letterContent } from "@/data/letter";

export const BirthdayLetter = () => {
  return (
    <section id="letter" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl relative">
        <div className="absolute top-4 left-4 w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 bg-primary/20 rounded-full"></div>
        
        <div className="space-y-6 text-lg md:text-xl text-foreground font-serif leading-relaxed text-justify">
          {letterContent.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
