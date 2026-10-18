import React from 'react';
import { motion } from 'framer-motion';

interface DoveProps {
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
}

const SingleDove: React.FC<DoveProps> = ({
  initialX,
  initialY,
  targetX,
  targetY,
  scale,
  duration,
  delay,
  opacity,
}) => {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: [initialX, (initialX + targetX) / 2 + 30, targetX],
        y: [initialY, (initialY + targetY) / 2 - 25, targetY],
        opacity: [0, opacity, opacity * 0.9, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        transform: `scale(${scale})`,
        zIndex: 15,
      }}
    >
      <div className="relative animate-float-slow">
        <svg
          viewBox="0 0 120 90"
          className="w-14 sm:w-16 h-10 sm:h-12 drop-shadow-[0_0_15px_rgba(255,248,220,0.85)] filter"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glowing aura around dove */}
          <circle cx="60" cy="45" r="30" fill="url(#doveGlow)" opacity="0.3" />

          <defs>
            <radialGradient id="doveGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="doveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#FFF9E6" />
              <stop offset="100%" stopColor="#E2D4B7" />
            </linearGradient>
          </defs>

          {/* Dove Body & Tail */}
          <path
            d="M48 42C43 45 35 52 22 55C26 50 32 46 36 43C28 44 20 45 12 47C17 43 25 39 34 37C38 36 42 37 46 38C52 38 60 37 68 34C76 31 84 27 92 28C97 29 101 32 102 36C103 40 98 44 92 46C82 49 70 48 62 45L48 42Z"
            fill="url(#doveGrad)"
          />

          {/* Animated Flapping Upper Wing */}
          <g className="origin-[58px_38px] animate-[doveWing_0.75s_ease-in-out_infinite_alternate]">
            <path
              d="M58 37C64 26 75 12 94 6C91 14 85 24 78 30C86 22 98 12 112 8C106 18 96 28 86 34C94 28 104 22 116 20C108 28 98 35 88 38C78 41 68 40 58 37Z"
              fill="url(#doveGrad)"
              opacity="0.95"
            />
          </g>

          {/* Lower Subtle Wing */}
          <path
            d="M52 44C46 54 36 68 20 74C24 66 32 58 40 52C45 48 50 45 52 44Z"
            fill="url(#doveGrad)"
            opacity="0.75"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export const FlyingDoves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Pair of love doves soaring together towards the top-right */}
      <SingleDove
        initialX={-80}
        initialY={380}
        targetX={window.innerWidth > 768 ? window.innerWidth * 0.75 : window.innerWidth * 0.8}
        targetY={40}
        scale={0.9}
        duration={12}
        delay={0}
        opacity={0.85}
      />
      <SingleDove
        initialX={-120}
        initialY={430}
        targetX={window.innerWidth > 768 ? window.innerWidth * 0.82 : window.innerWidth * 0.9}
        targetY={75}
        scale={0.78}
        duration={13}
        delay={0.6}
        opacity={0.8}
      />

      {/* Gentle distant dove drifting across */}
      <SingleDove
        initialX={window.innerWidth * 0.1}
        initialY={500}
        targetX={window.innerWidth * 0.85}
        targetY={120}
        scale={0.65}
        duration={16}
        delay={5}
        opacity={0.65}
      />

      {/* Another pair emerging after interval */}
      <SingleDove
        initialX={-100}
        initialY={460}
        targetX={window.innerWidth * 0.7}
        targetY={90}
        scale={0.82}
        duration={14}
        delay={8}
        opacity={0.8}
      />
    </div>
  );
};
