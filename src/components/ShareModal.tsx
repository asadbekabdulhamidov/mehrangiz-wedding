import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Send, MessageCircle, Copy, Check, X } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const ShareModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareTitle = `${weddingData.couple.groom} & ${weddingData.couple.bride} — To'y taklifnomasi`;
  const shareText = `Sizni ${weddingData.event.displayDate} kuni bo'lib o'tadigan baxt to'yimiz marosimiga lutfan taklif etamiz! 💍✨`;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareToTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n\n${window.location.href}`)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Share Button on the left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#12121A]/85 backdrop-blur-xl border border-[#D4AF37]/35 text-[#EDE7DE] shadow-2xl hover:border-[#D4AF37]/70 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all cursor-pointer"
          aria-label="Ulashish"
        >
          <Share2 size={16} className="text-[#E5C158] group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-cinzel font-medium tracking-wider uppercase hidden sm:inline text-[#F6EED8]">
            Ulashish
          </span>
        </button>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14141E] to-[#0A0A0F] border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E5C158] mx-auto mb-4">
                <Share2 size={20} />
              </div>

              <h3 className="text-xl font-cinzel font-bold text-gold-gradient mb-1">
                Taklifnomani Ulashish
              </h3>
              <p className="text-xs font-sans text-[#C4BCAB]/80 mb-6">
                Yaqinlaringiz va qadrdonlaringizga ushbu xushxabarni yuboring
              </p>

              {/* Social Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={shareToTelegram}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/40 hover:bg-[#229ED9]/25 text-[#229ED9] text-xs font-sans font-semibold tracking-wider uppercase flex items-center justify-center gap-3 transition-colors cursor-pointer"
                >
                  <Send size={16} />
                  <span>Telegram orqali yuborish</span>
                </button>

                <button
                  onClick={shareToWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-sans font-semibold tracking-wider uppercase flex items-center justify-center gap-3 transition-colors cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp orqali yuborish</span>
                </button>
              </div>

              {/* Copy Link Input */}
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#09090D] border border-white/10">
                <input
                  type="text"
                  readOnly
                  value={window.location.href}
                  className="flex-1 bg-transparent text-xs text-[#C4BCAB] px-2 focus:outline-none select-all truncate"
                />
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-lg bg-[#D4AF37] text-[#0A0A0E] text-xs font-semibold flex items-center gap-1.5 hover:bg-[#F7E7B4] transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Nusxalandi' : 'Nusxa'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
