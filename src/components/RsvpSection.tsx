import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, XCircle, Users, Heart, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../config/weddingData';

interface Wish {
  id: string;
  name: string;
  attending: boolean;
  guestsCount: number;
  message: string;
  date: string;
}

const DEFAULT_WISHES: Wish[] = [
  {
    id: '1',
    name: 'Akmal & Nilufar',
    attending: true,
    guestsCount: 2,
    message: 'Ilohim baxtingiz osmon qadar baland, umringiz sermazmun va farovon bo\'lsin! Ikki dunyo saodatini tilaymiz!',
    date: 'Bugun',
  },
  {
    id: '2',
    name: 'Bobur Mirzayev',
    attending: true,
    guestsCount: 1,
    message: 'Jamshidbek do\'stim va Mehrangizxon, yangi qurilayotgan oilangiz mustahkam va totuv bo\'lsin. To\'yda ko\'rishguncha!',
    date: 'Kecha',
  },
];

export const RsvpSection: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<boolean>(true);
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>(DEFAULT_WISHES);

  useEffect(() => {
    const saved = localStorage.getItem('wedding_rsvp_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(DEFAULT_WISHES);
      }
    }
  }, []);

  const triggerGoldConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF4D0', '#FFB259', '#E5C158', '#FFFFFF'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      attending,
      guestsCount: attending ? guestsCount : 0,
      message: message.trim() || 'Tabriklaymiz!',
      date: 'Hozirgina',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_rsvp_wishes', JSON.stringify(updated));

    triggerGoldConfetti();
    setSubmitted(true);
  };

  const handleTelegramShare = () => {
    const statusText = attending ? `Boraman (+${guestsCount} kishi)` : 'Afsuski bora olmayman';
    const text = encodeURIComponent(
      `💍 ${weddingData.couple.groom} & ${weddingData.couple.bride} to'y taklifnomasi:\n\nIsm: ${name}\nQatnashish: ${statusText}\nTilak: ${message || 'Baxtli bo\'ling!'}`
    );
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
  };

  return (
    <section id="rsvp-section" className="relative py-24 sm:py-32 px-4 bg-[#070709] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              Taklifni Tasdiqlash
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
            Tashrifingizni Tasdiqlang
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base font-cormorant italic text-[#C4BCAB]/80 max-w-lg mx-auto"
          >
            Biz uchun har bir mehmonimiz aziz va qadrli. Iltimos, to'yda ishtirok etishingizni oldindan bildiring.
          </motion.p>
        </div>

        {/* Form or Submitted Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-6 sm:p-12 bg-gradient-to-br from-[#12121A]/90 to-[#0A0A0F]/95 border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
        >
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] text-[#E5C158] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-gold-gradient mb-2">
                  Tashakkur, {name}!
                </h3>
                <p className="text-sm sm:text-base font-sans text-[#EDE7DE]/80 max-w-md mx-auto">
                  {attending
                    ? "Javobingiz qabul qilindi. Sizni to'yimizda ko'rishdan behad xursand bo'lamiz!"
                    : "Javobingiz va samimiy tilaklaringiz uchun minnatdorchilik bildiramiz."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleTelegramShare}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38E22] text-[#0A0A0E] font-cinzel text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  <Send size={14} />
                  <span>Telegram orqali yuborish</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#181824] border border-[#D4AF37]/30 text-xs font-sans text-[#EDE7DE] hover:bg-[#202030] cursor-pointer"
                >
                  Qaytadan to'ldirish
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                  Ism va Familiyangiz *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masalan: Sardor Rahimov"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#08080C]/80 border border-white/10 text-[#F6EED8] placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm font-sans"
                />
              </div>

              {/* Attendance Toggle */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                  To'yga tashrifingiz *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending(true)}
                    className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      attending
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#FFF4D0] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        : 'bg-[#08080C]/60 border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <CheckCircle2 size={16} className={attending ? 'text-[#D4AF37]' : 'text-neutral-500'} />
                    <span>Albatta boraman</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending(false)}
                    className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      !attending
                        ? 'bg-rose-950/30 border-rose-500/50 text-rose-200'
                        : 'bg-[#08080C]/60 border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <XCircle size={16} className={!attending ? 'text-rose-400' : 'text-neutral-500'} />
                    <span>Afsuski bora olmayman</span>
                  </button>
                </div>
              </div>

              {/* Number of Guests (Only if attending) */}
              {attending && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                    Mehmonlar soni
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuestsCount(num)}
                        className={`flex-1 py-2.5 rounded-xl border text-xs font-cinzel font-bold transition-all cursor-pointer ${
                          guestsCount === num
                            ? 'bg-[#D4AF37] text-[#0A0A0E] border-[#D4AF37]'
                            : 'bg-[#08080C]/80 border-white/10 text-[#C4BCAB] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        {num === 4 ? '4+' : `${num}`} {num === 1 ? 'kishi' : 'kishi'}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Samimiy Tilak / Message */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                  Kelin-kuyovga samimiy tilaklaringiz
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Yurakdan chiqqan ezgu tilaklaringizni yozib qoldiring..."
                  className="w-full px-4 py-3 rounded-xl bg-[#08080C]/80 border border-white/10 text-[#F6EED8] placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase
                  bg-gradient-to-r from-[#D4AF37] via-[#F7E7B4] to-[#B38E22] text-[#0A0A0E]
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.01] active:scale-[0.99]
                  transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send size={16} />
                <span>Taklifni tasdiqlash va Yuborish</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* Guestbook / Tilaklar kitobi */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D4AF37]/20">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-xl sm:text-2xl font-cinzel font-semibold text-gold-gradient">
                Mehmonlar Tilaklari
              </h3>
            </div>
            <span className="text-xs font-sans text-[#C4BCAB]/70">
              {wishes.length} ta tilak
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="p-5 rounded-2xl bg-[#0D0D14]/75 border border-[#D4AF37]/15 hover:border-[#D4AF37]/35 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinzel text-sm sm:text-base font-semibold text-[#F6EED8]">
                      {wish.name}
                    </span>
                    <span className="text-[10px] font-sans text-[#D4AF37]/80 uppercase px-2 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {wish.attending ? `Tashrif buyuradi` : `Samimiy tilak`}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-cormorant italic text-[#C4BCAB] leading-relaxed">
                    &ldquo;{wish.message}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                  <span>{wish.date}</span>
                  <Heart size={12} className="text-[#D4AF37]/50 fill-[#D4AF37]/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
