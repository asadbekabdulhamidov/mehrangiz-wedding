import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Copy, Check, ExternalLink, Compass } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${weddingData.venue.name}, ${weddingData.venue.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location-section" className="relative py-24 sm:py-32 px-4 bg-[#09090D] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,55,0.07)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              Manzil va Joylashuv
            </span>
            <Compass className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-gold-gradient mb-4"
          >
            To'yxona Joylashuvi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base font-cormorant italic text-[#C4BCAB]/80 max-w-lg mx-auto"
          >
            Siz azizlarni ushbu go'zal maskanda intizorlik bilan kutib qolamiz
          </motion.p>
        </div>

        {/* Venue Card with Glassmorphic Luxury Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#12121A]/90 to-[#0A0A0F]/95 border border-[#D4AF37]/30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-8 sm:p-12"
        >
          {/* Subtle gold grid effect */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Venue Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E5C158] text-xs font-cinzel uppercase tracking-widest">
                <MapPin size={14} />
                <span>{weddingData.venue.city}</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-cinzel font-bold text-gold-gradient mb-2">
                  {weddingData.venue.name}
                </h3>
                <p className="text-base font-cinzel text-[#E5C158]/80 font-medium tracking-wide">
                  {weddingData.venue.hall}
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#171722]/60 border border-white/5">
                <Navigation className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-[#EDE7DE] font-sans font-normal leading-relaxed">
                    {weddingData.venue.address}
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs font-sans text-[#FFF4D0] font-medium">
                    <span>📍 {weddingData.venue.landmark}</span>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#FFF4D0] transition-colors cursor-pointer"
                    >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Manzil nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Manzilni nusxalash</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={weddingData.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F7E7B4] to-[#B38E22] text-[#0A0A0E] font-cinzel text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                >
                  <Navigation size={14} />
                  <span>Google Xarita</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={weddingData.venue.yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] px-5 py-3 rounded-xl bg-[#181824] border border-[#D4AF37]/35 text-[#F6EED8] hover:border-[#D4AF37]/70 font-cinzel text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 hover:bg-[#202030] transition-all cursor-pointer"
                >
                  <MapPin size={14} className="text-[#E5C158]" />
                  <span>Yandex Xarita</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right Column: Calendar Add Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#09090E]/90 border border-[#D4AF37]/25 shadow-inner flex flex-col justify-between">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E5C158] mb-4">
                  <Calendar size={22} />
                </div>
                <h4 className="text-xl font-cinzel font-semibold text-[#F6EED8] mb-1">
                  Tadbirni Taqvimga Saqlang
                </h4>
                <p className="text-xs text-[#C4BCAB]/70 font-sans leading-relaxed">
                  To'y kunini yodingizda saqlash va unutilmas onlarni o'tkazib yubormaslik uchun telefon taqvimingizga qo'shing.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#1A1A26] border border-[#D4AF37]/30 text-xs font-sans font-medium text-[#EDE7DE] hover:bg-[#222233] hover:border-[#D4AF37]/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar size={14} className="text-[#E5C158]" />
                  <span>Google Calendar</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>

                <button
                  onClick={downloadIcsFile}
                  className="w-full py-3 px-4 rounded-xl bg-[#1A1A26] border border-[#D4AF37]/30 text-xs font-sans font-medium text-[#EDE7DE] hover:bg-[#222233] hover:border-[#D4AF37]/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar size={14} className="text-[#E5C158]" />
                  <span>Apple / Outlook iCal (.ics)</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
