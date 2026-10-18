import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, MapPin, Calendar, Heart } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline-section" className="relative py-20 sm:py-28 px-4 bg-[#070709] overflow-hidden">
      {/* Soft central candle radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,_rgba(255,178,89,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              To'y Vaqti va Dasturi
            </span>
            <Clock className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-gold-gradient mb-3"
          >
            Tantanalar Vaqti
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base font-cormorant italic text-[#C4BCAB]/90 max-w-lg mx-auto"
          >
            Barcha qadrdonlarimiz va mehmonlarimizni soat 10:00 da kutib qolamiz
          </motion.p>
        </div>

        {/* Centerpiece Luxury Time Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#14141E]/95 via-[#0E0E16]/95 to-[#08080C]/98 border border-[#D4AF37]/35 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl text-center overflow-hidden"
        >
          {/* Ornate Gold Filigree Corners */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/50 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/50 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/50 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/50 pointer-events-none" />

          {/* Top Icon Badge */}
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] text-[#E5C158] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <Clock size={28} />
          </div>

          {/* Big Prominent Time */}
          <div className="mb-2">
            <span className="text-5xl sm:text-7xl font-cinzel font-bold text-gold-gradient tracking-tight drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
              10:00
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-6">
            {weddingData.event.displayDate} • {weddingData.event.displayDay}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />

          <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-[#F6EED8] mb-3">
            Tantanali To'y Marosimi
          </h3>

          <p className="text-sm sm:text-base font-cormorant leading-relaxed text-[#EDE7DE] max-w-xl mx-auto mb-8 font-normal">
            Hurmatli va aziz mehmonimiz! {weddingData.couple.groom} va {weddingData.couple.bride}ning qutlug' visol to'yi munosabati bilan yoziladigan fayzli dasturxonimizga soat <strong className="text-[#F6EED8] font-bold font-sans">10:00</strong> da tashrif buyurib, quvonchimizga sherik bo'lishingizni chin yurakdan so'raymiz.
          </p>

          {/* Highlight badges grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-left">
            <div className="p-3.5 rounded-xl bg-[#171722]/60 border border-[#D4AF37]/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#E5C158] shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-sans text-neutral-400">Vaqt</span>
                <span className="text-xs font-sans font-bold text-[#F6EED8]">Soat 10:00 da</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#171722]/60 border border-[#D4AF37]/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#E5C158] shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-sans text-neutral-400">Sana</span>
                <span className="text-xs font-sans font-bold text-[#F6EED8]">01.11.2026</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#171722]/60 border border-[#D4AF37]/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#E5C158] shrink-0">
                <MapPin size={16} />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] uppercase font-sans text-neutral-400">To'yxona</span>
                <span className="text-xs font-sans font-bold text-[#F6EED8] truncate block">Zamin Saroyi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
