"use client";
import { motion } from "framer-motion";
import { closingContent } from "@/data/closing";

export const ClosingSection = () => {
  return (
    <section id="closing" className="min-h-[80vh] flex items-center justify-center p-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-xl w-full bg-white/95 p-10 md:p-16 rounded-[3rem] shadow-xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 border-[8px] border-primary/20 rounded-[3rem] m-4 pointer-events-none"></div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl mb-8"
        >
          💌
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-relaxed">
          {closingContent.title}
        </h2>
        <p className="text-xl md:text-2xl text-primary font-serif italic">
          {closingContent.subtitle}
        </p>
      </motion.div>
    </section>
  );
};
