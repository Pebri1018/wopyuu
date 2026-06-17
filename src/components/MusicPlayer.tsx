"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/config";

interface Props {
  isPlaying: boolean;
}

export const MusicPlayer = ({ isPlaying }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!siteConfig.showMusic) return;

    if (isPlaying && audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0;
      audio.play().catch(e => console.log("Audio play failed, maybe user didn't interact enough:", e));
      
      // Fade in to 0.4 over 2 seconds
      let vol = 0;
      const interval = setInterval(() => {
        vol += 0.05;
        if (vol >= 0.4) {
          audio.volume = 0.4;
          clearInterval(interval);
        } else {
          audio.volume = vol;
        }
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  if (!siteConfig.showMusic) return null;

  return (
    <audio ref={audioRef} loop>
      <source src="/music/music.mp3" type="audio/mpeg" />
    </audio>
  );
};
