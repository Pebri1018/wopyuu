"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail } from "lucide-react";

interface Props {
  onOpen: () => void;
}

export const EnvelopeOpening = ({ onOpen }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Fire confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F8BBD0", "#FF8FAB", "#FCE4EC"]
    });

    // Notify parent to start music and prep story
    onOpen();

    // Fade out after a short delay
    setTimeout(() => {
      setIsFading(true);
    }, 2000);
  };

  if (isFading) return null;

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            animate={{ scale: isOpen ? 1.1 : 1, y: isOpen ? -20 : 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer flex flex-col items-center"
            onClick={handleOpen}
          >
            <div className="relative">
              <motion.div
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-40 h-28 bg-primary rounded-lg shadow-xl flex items-center justify-center"
                style={{ transformOrigin: "top" }}
              >
                {!isOpen && <Mail className="text-white w-14 h-14" />}
              </motion.div>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="text-5xl">❤️</span>
                </motion.div>
              )}
            </div>
            
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="mt-8 text-center"
            >
              <h2 className="text-3xl font-serif text-foreground mb-3">For You ❤️</h2>
              <p className="text-sm text-accent animate-pulse font-medium tracking-wider uppercase">Tap the letter</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
