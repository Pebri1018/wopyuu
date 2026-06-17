"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[100svh] flex flex-col items-center justify-center p-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Happy Birthday</h1>
        <h2 className="text-5xl md:text-7xl font-serif text-primary italic">{siteConfig.girlfriendName}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-md aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
      >
        <img
          src={siteConfig.mainPhoto}
          alt="Main"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>
    </section>
  );
};
