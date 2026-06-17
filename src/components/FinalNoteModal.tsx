"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { finalNoteContent } from "@/data/finalNote";
import { Mail, X } from "lucide-react";

export const FinalNoteModal = () => {
  const [stage, setStage] = useState<"idle" | "envelope" | "letter">("idle");

  const startSequence = () => {
    setStage("envelope");
    setTimeout(() => {
      setStage("letter");
    }, 2500); // Wait 2.5s before showing letter
  };

  const close = () => setStage("idle");

  return (
    <>
      <div className="flex justify-center pb-32">
        <button
          onClick={startSequence}
          className="bg-primary hover:bg-pink-400 text-white font-medium py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Tekan Aku Lagi 💌
        </button>
      </div>

      <AnimatePresence>
        {stage !== "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            {/* Stage 1: Envelope appearing and opening */}
            <AnimatePresence>
              {stage === "envelope" && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.2, opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ rotateX: [0, 180] }}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{ transformOrigin: "top" }}
                    className="w-48 h-32 bg-primary rounded-xl flex items-center justify-center shadow-2xl relative z-10"
                  >
                    <Mail className="text-white w-16 h-16" />
                  </motion.div>
                  {/* Back of envelope */}
                  <div className="absolute inset-0 bg-pink-400 rounded-xl"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stage 2: The Secret Letter */}
            <AnimatePresence>
              {stage === "letter" && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="bg-[#FFF5F7] p-8 md:p-12 rounded-2xl max-w-sm w-full mx-4 relative shadow-2xl"
                >
                  <button
                    onClick={close}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-foreground mb-6">{finalNoteContent.title}</h3>
                    <p className="text-xl font-serif text-gray-700 leading-relaxed">
                      {finalNoteContent.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
