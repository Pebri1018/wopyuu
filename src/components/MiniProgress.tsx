"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

const sections = [
  { id: "hero", icon: "💌" },
  { id: "letter", icon: "📝" },
  { id: "memories", icon: "📸" },
  ...(siteConfig.showGratitude ? [{ id: "gratitude", icon: "🌸" }] : []),
  { id: "closing", icon: "❤️" }
];

export const MiniProgress = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {sections.map((section) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm transition-colors ${
            activeSection === section.id ? "bg-white scale-110" : "bg-white/50 grayscale hover:grayscale-0"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          {section.icon}
        </motion.a>
      ))}
    </div>
  );
};
