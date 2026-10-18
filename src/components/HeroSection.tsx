import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, ChevronDown, CheckCircle2 } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { downloadIcsFile } from '../utils/calendar';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(weddingData.event.date).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070709] px-4 py-16 sm:py-20">
      {/* Background with Ken Burns Breathing Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-kenburns opacity-40 md:opacity-50 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
            filter: 'contrast(1.08) brightness(0.85) saturate(1.1)',
          }}
        />

        {/* Multi-layered dark-luxe vignette overlays */}
        {/* Obsidian dark fade at top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-transparent to-[#070709]" />
        
        {/* Radial candlelit amber glow in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,178,89,0.18)_0%,_rgba(7,7,9,0.75)_65%,_#070709_100%)]" />

        {/* Extra luxury corner shadows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.12)_0%,_transparent_50%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Small Elegant Monogram / Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs font-cinzel tracking-[0.35em] uppercase text-[#E5C158] font-medium px-2 py-1 rounded-full border border-[#D4AF37]/30 bg-[#12121A]/60 backdrop-blur-md">
            ✦ TAKLIFNOMA ✦
          </span>
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
        </motion.div>

        {/* Invitation Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs sm:text-sm font-sans tracking-[0.28em] text-[#D4AF37]/90 uppercase font-light mb-3 sm:mb-4"
        >
          {weddingData.couple.subtitle}
        </motion.p>

        {/* Couple's Names in Large Refined Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 font-cinzel">
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
              {weddingData.couple.groom}
            </span>
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#E5C158] font-normal my-[-8px] sm:my-0 select-none">
              &
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
              {weddingData.couple.bride}
            </span>
          </h1>
        </motion.div>

        {/* Romantic Floral / Filigree Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-3 my-2"
        >
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/30 animate-pulse-slow" />
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </motion.div>

        {/* Date & Day Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-3 mb-8 sm:mb-10 text-center"
        >
          <p className="text-lg sm:text-2xl font-cormorant font-normal text-[#F6EED8] tracking-widest">
            {weddingData.event.displayDate}
          </p>
          <p className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#C4BCAB]/80 uppercase mt-1">
            {weddingData.event.displayDay} • {weddingData.event.displayTime}
          </p>
        </motion.div>

        {/* Glassmorphic Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-xl mx-auto mb-10 sm:mb-12"
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-5 rounded-2xl bg-[#0D0D14]/70 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            {[
              { label: 'Kun', value: timeLeft.days },
              { label: 'Soat', value: timeLeft.hours },
              { label: 'Daqiqa', value: timeLeft.minutes },
              { label: 'Soniya', value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center py-2 sm:py-3 px-1 rounded-xl bg-gradient-to-b from-[#181824]/60 to-[#0A0A0F]/80 border border-[#D4AF37]/15 group hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-semibold text-gold-gradient leading-none mb-1">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-[#C4BCAB]/70 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary RSVP CTA */}
          <button
            onClick={() => scrollToSection('rsvp-section')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-cinzel text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase
              bg-gradient-to-r from-[#D4AF37] via-[#F7E7B4] to-[#B38E22] text-[#0A0A0E]
              hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-[#0A0A0E] group-hover:rotate-12 transition-transform" />
            <span>Taklifni tasdiqlash</span>
          </button>

          {/* Secondary Calendar Button */}
          <button
            onClick={downloadIcsFile}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-cinzel text-xs sm:text-sm font-medium tracking-[0.15em] uppercase
              bg-[#12121A]/75 text-[#F6EED8] border border-[#D4AF37]/35 backdrop-blur-md
              hover:bg-[#1A1A26] hover:border-[#D4AF37]/60 hover:text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]
              transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#E5C158]" />
            <span>Taqvimga saqlash</span>
          </button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={() => scrollToSection('invitation-note')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-[#C4BCAB]/60 hover:text-[#E5C158] transition-colors cursor-pointer group"
          aria-label="Pastga o'tish"
        >
          <span className="text-[10px] uppercase font-sans tracking-[0.3em]">Batafsil</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#D4AF37]/80 group-hover:text-[#F7E7B4]" />
        </motion.button>
      </div>
    </section>
  );
};
