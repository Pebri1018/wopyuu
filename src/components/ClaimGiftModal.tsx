"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Camera, Lock, ArrowRight, Heart } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ClaimGiftModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: Upload, 1: PIN, 2: Kado
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(0);
      setPhotoUrl(null);
      setPin("");
      setPinError(false);
    }, 500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };

  const handleNextToPin = () => {
    if (photoUrl) setStep(1);
  };

  const handleCheckPin = () => {
    if (pin === siteConfig.anniversaryPin) {
      setPinError(false);
      setStep(2);
    } else {
      setPinError(true);
    }
  };

  return (
    <>
      <div className="flex justify-center pb-20">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent hover:bg-pink-500 text-white font-medium py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <Gift className="w-5 h-5" />
          Klaim Kado 🎁
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#FFF5F7] p-6 md:p-8 rounded-2xl w-full max-w-md relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <AnimatePresence mode="wait">
                {/* STEP 0: UPLOAD PAP */}
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-2xl font-serif text-foreground mb-2 text-center">Step 1: Verifikasi Muka</h3>
                    <p className="text-center text-gray-600 mb-6 text-sm">Wajib upload PAP dulu dong biar dapet kado! 📸</p>
                    
                    <input
                      type="file"
                      accept="image/*"
                      capture="user"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                    />
                    
                    {photoUrl ? (
                      <div className="relative w-full aspect-[3/4] max-w-[200px] rounded-xl overflow-hidden shadow-md mb-6">
                        <img src={photoUrl} alt="PAP" className="w-full h-full object-cover" />
                        <button 
                          onClick={() => fileInputRef.current?.click()}
                          className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow"
                        >
                          <Camera className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full aspect-[3/4] max-w-[200px] border-2 border-dashed border-pink-300 rounded-xl flex flex-col items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors mb-6"
                      >
                        <Camera className="w-10 h-10 mb-2" />
                        <span className="font-medium text-center px-4">Upload / Jepret PAP</span>
                      </button>
                    )}

                    <button
                      onClick={handleNextToPin}
                      disabled={!photoUrl}
                      className="w-full bg-primary hover:bg-pink-400 text-white font-medium py-3 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Lanjut <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 1: PIN */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-2xl font-serif text-foreground mb-2 text-center">Step 2: Masukkan PIN</h3>
                    <p className="text-center text-gray-600 mb-6 text-sm">PIN-nya tanggal jadian kita ya sayang 🔐</p>
                    
                    <div className="w-full mb-6">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="password"
                          value={pin}
                          onChange={(e) => { setPin(e.target.value); setPinError(false); }}
                          placeholder="Masukkan PIN..."
                          className={`w-full pl-10 p-3 rounded-lg border focus:ring-2 outline-none text-center tracking-widest text-lg ${pinError ? 'border-red-500 focus:ring-red-400 bg-red-50' : 'border-pink-200 focus:ring-pink-400 text-gray-800'}`}
                          maxLength={10}
                        />
                      </div>
                      {pinError && (
                        <p className="text-red-500 text-sm mt-2 text-center">PIN salah sayang, coba inget-inget lagi! 😠</p>
                      )}
                    </div>

                    <button
                      onClick={handleCheckPin}
                      disabled={!pin}
                      className="w-full bg-primary hover:bg-pink-400 text-white font-medium py-3 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Buka Kado 🎁
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: GIFT REVEAL */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-3xl font-serif text-primary mb-2 text-center">Tadaaa! 🎉</h3>
                    <p className="text-center text-gray-700 mb-4 font-medium">Kadonya adalah akuuuu!!! 🥰</p>
                    
                    <div className="w-full aspect-square max-w-[250px] rounded-2xl overflow-hidden shadow-xl mb-6 border-4 border-white relative group bg-white">
                      <img src={siteConfig.boyfriendPhoto} alt="Kado" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <Heart className="w-16 h-16 text-pink-400 fill-pink-400" />
                      </div>
                    </div>


                  </motion.div>
                )}
              </AnimatePresence>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
