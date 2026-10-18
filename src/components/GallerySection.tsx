import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Heart, Sparkles } from 'lucide-react';
import { weddingData } from '../config/weddingData';

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  aspect: string;
  isFeatured?: boolean;
}

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 1,
      src: '/images/hero.jpg',
      title: 'Muhabbat Guldastasi',
      subtitle: `${weddingData.couple.groom} & ${weddingData.couple.bride}`,
      aspect: 'aspect-[3/4]',
      isFeatured: true,
    },
    {
      id: 2,
      src: '/images/registry.jpg',
      title: 'Qutlug\' Qadam',
      subtitle: 'Rasmiy Nikoh Qayd Etilgan Kun',
      aspect: 'aspect-[3/4]',
      isFeatured: true,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      title: 'Abadiy Va\'da',
      subtitle: 'Zarhal Oltin Uzuklar',
      aspect: 'aspect-square',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      title: 'Sehrli Oqshom',
      subtitle: 'Shamsiy Shamlar Yog\'dusi',
      aspect: 'aspect-square',
    },
  ];

  return (
    <section id="gallery-section" className="relative py-24 sm:py-32 px-4 bg-[#09090C] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(212,175,55,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              Fotogalereya
            </span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-gold-gradient mb-4"
          >
            Bizning Baxtli Lahzalarimiz
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base font-cormorant italic text-[#C4BCAB]/80 max-w-xl mx-auto"
          >
            Har bir surat — yuragimizda muhrlangan unutilmas va samimiy sevgi xotirasi
          </motion.p>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-[#D4AF37]/20 bg-[#12121A]
                shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/60 hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]
                transition-all duration-500 flex flex-col justify-end ${photo.aspect}`}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Gold frame line */}
              <div className="absolute inset-3 rounded-xl border border-white/10 group-hover:border-[#D4AF37]/40 pointer-events-none transition-colors duration-500" />

              {/* Hover Badge */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0E0E14]/80 backdrop-blur-md flex items-center justify-center text-[#E5C158] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 size={14} />
              </div>

              {/* Card Caption */}
              <div className="relative z-10 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                  {photo.subtitle}
                </p>
                <h3 className="text-lg sm:text-xl font-cinzel font-medium text-[#F6EED8] group-hover:text-gold-gradient transition-colors">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-[#0C0C12] shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Yopish"
              >
                <X size={20} />
              </button>

              <div className="overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto object-contain select-none"
                />
              </div>

              <div className="p-5 bg-gradient-to-r from-[#12121A] to-[#0A0A0F] border-t border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-cinzel text-gold-gradient font-semibold">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs font-sans tracking-wider text-[#C4BCAB]">
                    {selectedPhoto.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Heart className="w-5 h-5 fill-[#D4AF37]/30" />
                  <span className="font-script text-2xl">J & M</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
