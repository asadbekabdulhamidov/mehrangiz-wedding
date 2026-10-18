import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const InvitationNote: React.FC = () => {
  return (
    <section id="invitation-note" className="relative py-20 sm:py-28 px-4 bg-[#070709] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#101017]/90 to-[#0A0A0F]/95 backdrop-blur-2xl border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center"
        >
          {/* Ornate Gold Corners */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

          {/* Top Emblem / Bismillah */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mb-4 text-[#E5C158]">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <p className="font-cormorant italic text-lg sm:text-xl text-[#E5C158]/90 tracking-wide">
              Bismillahir Rohmanir Rohiym
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-semibold text-gold-gradient mb-6 tracking-wide">
            Qadrli Mehmonimiz!
          </h2>

          {/* Main Invitation Body */}
          <p className="text-base sm:text-lg font-cormorant leading-relaxed text-[#EDE7DE] font-normal mb-8 max-w-2xl mx-auto">
            {weddingData.couple.parentsInvitation}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />

          {/* Romantic Quote */}
          <blockquote className="font-serif italic text-sm sm:text-base text-[#D4AF37]/90 tracking-wider">
            &ldquo;{weddingData.couple.quote}&rdquo;
          </blockquote>

          {/* Monogram stamp */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <HeartHandshake className="w-5 h-5 text-[#D4AF37]/70" />
            <span className="font-script text-2xl sm:text-3xl text-[#E5C158]">
              {weddingData.couple.groom} & {weddingData.couple.bride}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
