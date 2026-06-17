"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { memories, Memory } from "@/data/memories";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const MemoryWall = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <section id="memories" className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-serif text-foreground mb-3">Our Memories ✨</h2>
        <p className="text-accent text-sm bg-white/50 inline-block px-4 py-2 rounded-full shadow-sm">Tap foto untuk melihat kenangan</p>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={twMerge(
              "cursor-pointer bg-white p-3 pb-12 rounded-lg shadow-xl relative w-64 transition-transform",
              memory.rotation
            )}
            onClick={() => setSelectedMemory(memory)}
          >
            <div className="w-full aspect-square bg-pink-50 rounded overflow-hidden">
              <img src={memory.photo} alt={memory.title} className="w-full h-full object-cover" />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center font-serif text-foreground text-lg">
              {memory.title}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-4 md:p-6 rounded-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="w-full aspect-square bg-pink-50 rounded-xl overflow-hidden mb-6 relative">
                <img src={selectedMemory.photo} alt={selectedMemory.title} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-2xl font-serif text-foreground mb-2 text-center">{selectedMemory.title}</h3>
              <p className="text-gray-600 text-center font-serif leading-relaxed">
                {selectedMemory.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
