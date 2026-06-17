"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Camera, Send } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ClaimGiftModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [gift, setGift] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };

  const handleSendWA = () => {
    if (!photoUrl || !gift.trim()) return;
    const text = `Hai sayang! Ini aku udah PAP (nanti aku kirim fotonya di chat ini). Aku mau kado: ${gift}`;
    // Pastikan nomor WA hanya angka (hilangkan karakter aneh jika ada)
    const waNumber = siteConfig.whatsappNumber.replace(/\D/g, '');
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
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
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-serif text-foreground mb-2 text-center">Klaim Kado Spesial</h3>
              <p className="text-center text-gray-600 mb-6 text-sm">Syaratnya: Wajib PAP dulu dong! 📸</p>

              <div className="space-y-6">
                {/* Photo Upload Section */}
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    accept="image/*"
                    capture="user"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                  />
                  
                  {photoUrl ? (
                    <div className="relative w-full aspect-[3/4] max-w-[200px] rounded-xl overflow-hidden shadow-md">
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
                      className="w-full aspect-[3/4] max-w-[200px] border-2 border-dashed border-pink-300 rounded-xl flex flex-col items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
                    >
                      <Camera className="w-10 h-10 mb-2" />
                      <span className="font-medium text-center px-4">Upload / Jepret PAP</span>
                    </button>
                  )}
                </div>

                {/* Gift Input Section */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Kamu mau kado apa?</label>
                  <input
                    type="text"
                    value={gift}
                    onChange={(e) => setGift(e.target.value)}
                    disabled={!photoUrl}
                    placeholder={photoUrl ? "Tulis kado impianmu di sini..." : "Upload PAP dulu ya buat buka kunci!"}
                    className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSendWA}
                  disabled={!photoUrl || !gift.trim()}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  Kirim ke WhatsApp Sayang
                </button>
                <p className="text-xs text-center text-gray-500">
                  Note: Fotonya tetep jangan lupa dikirim manual ke WA ya, karena otomatis ini cuma ngirim teksnya aja!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
