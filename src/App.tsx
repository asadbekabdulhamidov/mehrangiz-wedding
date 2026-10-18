import React from 'react';
import { SparkleCanvas } from './components/SparkleCanvas';
import { AudioPlayer } from './components/AudioPlayer';
import { HeroSection } from './components/HeroSection';
import { InvitationNote } from './components/InvitationNote';
import { GallerySection } from './components/GallerySection';
import { TimelineSection } from './components/TimelineSection';
import { LocationSection } from './components/LocationSection';
import { RsvpSection } from './components/RsvpSection';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#EDE7DE] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#FFF4D0] overflow-x-hidden">
      {/* Floating Golden Dust & Candlelight Particle Canvas */}
      <SparkleCanvas />

      {/* Floating Audio Player with Soundwave Visualizer */}
      <AudioPlayer />

      {/* Floating Social Share Button & Modal */}
      <ShareModal />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <InvitationNote />
        <GallerySection />
        <TimelineSection />
        <LocationSection />
        <RsvpSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
