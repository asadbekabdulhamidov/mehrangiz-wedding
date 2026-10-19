import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 bg-[#050507] border-t border-[#D4AF37]/15 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/40 bg-[#0E0E14] shadow-[0_0_25px_rgba(212,175,55,0.2)] flex items-center justify-center mb-6">
          <span className="font-script text-3xl text-gold-gradient select-none">
            J & M
          </span>
        </div>

        {/* Couple Names */}
        <h4 className="text-2xl sm:text-3xl font-cinzel font-bold text-gold-gradient mb-2">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </h4>

        <p className="text-xs font-sans tracking-[0.25em] text-[#C4BCAB]/70 uppercase mb-4">
          {weddingData.event.displayDate} • {weddingData.venue.name}
        </p>

        <p className="text-xs sm:text-sm font-cormorant italic text-[#C4BCAB]/80 max-w-md mx-auto mb-8">
          Biz bilan ushbu baxtli va unutilmas kunni birga nishonlaganingiz uchun tashakkur!
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#D4AF37]/40 bg-[#101016] text-[#C4BCAB] hover:text-[#F6EED8] transition-all text-xs font-sans uppercase tracking-widest cursor-pointer group"
        >
          <span>Yuqoriga qaytish</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#D4AF37]" />
        </button>

        {/* Subtle Developer Promo / Order Link */}
        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col items-center">
          <a
            href="https://t.me/Asadbek_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D14]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#14141E] transition-all duration-300 text-[11px] font-sans text-[#C4BCAB]/80 hover:text-[#FFF4D0]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-light">Bunday taklifnoma yasash uchun:</span>
            <span className="text-[#E5C158] font-medium group-hover:underline">@Asadbek_developer</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5 text-[11px] text-neutral-600 font-sans">
          <span>Sevgi va ezgu niyatlar bilan tayyorlandi</span>
          <Heart size={10} className="text-[#D4AF37]/50 fill-[#D4AF37]/30" />
        </div>
      </div>
    </footer>
  );
};
