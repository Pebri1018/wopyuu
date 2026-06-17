"use client";
import { useState, useEffect } from "react";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { MusicPlayer } from "@/components/MusicPlayer";
import { FloatingHearts } from "@/components/FloatingHearts";
import { HeroSection } from "@/components/HeroSection";
import { BirthdayLetter } from "@/components/BirthdayLetter";
import { MemoryWall } from "@/components/MemoryWall";
import { GratitudeSection } from "@/components/GratitudeSection";
import { ClosingSection } from "@/components/ClosingSection";
import { FinalNoteModal } from "@/components/FinalNoteModal";
import { ClaimGiftModal } from "@/components/ClaimGiftModal";
import { MiniProgress } from "@/components/MiniProgress";
import { BouncingCat } from "@/components/BouncingCat";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  // Prevent scroll before opening
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return (
    <main className="relative w-full">
      <EnvelopeOpening onOpen={() => setIsOpened(true)} />
      
      {isOpened && (
        <>
          <MusicPlayer isPlaying={true} />
          <FloatingHearts />
          <MiniProgress />
          <BouncingCat />
          
          <div className="flex flex-col">
            <HeroSection />
            <BirthdayLetter />
            <MemoryWall />
            <GratitudeSection />
            <ClosingSection />
            <FinalNoteModal />
            <ClaimGiftModal />
          </div>
        </>
      )}
    </main>
  );
}
