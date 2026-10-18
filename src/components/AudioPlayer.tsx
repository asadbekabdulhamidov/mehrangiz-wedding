import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.55;
    audio.loop = true;

    // Attempt autoplay if browser allows
    const startPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay policy prevented playback until user interaction
        setIsPlaying(false);
      }
    };

    startPlay();

    // First user click on the document triggers playback if not started
    const handleFirstInteraction = () => {
      if (!hasInteracted && audio) {
        audio.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('Playback error:', err);
      });
    }
    setHasInteracted(true);
  };

  const handleAudioError = () => {
    // Fallback to secondary royalty-free audio stream if local file fails
    if (audioRef.current && weddingData.audio.fallbackSrc) {
      console.log('Falling back to romantic piano stream');
      audioRef.current.src = weddingData.audio.fallbackSrc;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <audio
        ref={audioRef}
        src={weddingData.audio.src}
        onError={handleAudioError}
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className={`group relative flex items-center gap-3 px-4 py-3 rounded-full 
          backdrop-blur-xl border transition-all duration-500 shadow-2xl
          ${
            isPlaying
              ? 'bg-[#0E0E14]/85 border-[#D4AF37]/50 text-[#F6EED8] shadow-[0_0_25px_rgba(212,175,55,0.25)]'
              : 'bg-[#12121A]/80 border-white/10 text-[#C4BCAB] hover:border-[#D4AF37]/40 hover:text-white'
          }`}
        aria-label={isPlaying ? "Musiqani to'xtatish" : "Musiqani yoqish"}
      >
        {/* Glow pulse effect when idle */}
        {!isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37]/30 to-[#FFB259]/30 blur-sm animate-pulse-slow pointer-events-none" />
        )}

        {/* Animated equalizer bars */}
        <div className="flex items-end gap-[3px] h-4">
          <span
            className={`w-[2.5px] rounded-full bg-gradient-to-t from-[#B38E22] to-[#FFF4D0] transition-all duration-300 ${
              isPlaying ? 'animate-[bounce_0.8s_ease-in-out_infinite_alternate] h-4' : 'h-1.5 opacity-40'
            }`}
          />
          <span
            className={`w-[2.5px] rounded-full bg-gradient-to-t from-[#B38E22] to-[#FFF4D0] transition-all duration-300 ${
              isPlaying ? 'animate-[bounce_1.1s_ease-in-out_0.2s_infinite_alternate] h-5' : 'h-2.5 opacity-40'
            }`}
          />
          <span
            className={`w-[2.5px] rounded-full bg-gradient-to-t from-[#B38E22] to-[#FFF4D0] transition-all duration-300 ${
              isPlaying ? 'animate-[bounce_0.7s_ease-in-out_0.4s_infinite_alternate] h-3' : 'h-1.5 opacity-40'
            }`}
          />
          <span
            className={`w-[2.5px] rounded-full bg-gradient-to-t from-[#B38E22] to-[#FFF4D0] transition-all duration-300 ${
              isPlaying ? 'animate-[bounce_0.9s_ease-in-out_0.1s_infinite_alternate] h-4.5' : 'h-2 opacity-40'
            }`}
          />
        </div>

        {/* Text and status */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
            {isPlaying ? "Musiqa yangramoqda" : "Musiqani yoqish"}
          </span>
          <span className="text-xs font-serif italic text-neutral-300 max-w-[130px] truncate hidden sm:inline">
            {weddingData.audio.title}
          </span>
        </div>

        {/* Icon */}
        <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#E5C158] border border-[#D4AF37]/30 group-hover:scale-105 transition-transform">
          {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </div>
      </button>
    </div>
  );
};
