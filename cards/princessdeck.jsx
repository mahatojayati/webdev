import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample data structure for the princesses
const PRINCESS_DATA = [
  {
    id: 1,
    name: "Cinderella",
    story: "Kind, courageous, and always believing in her dreams despite adversity.",
    trait: "Resilience & Kindness",
    color: "#4A90E2",
    // Replace with actual transparent PNG URLs
    imgUrl: "https://unsplash.com", 
  },
  {
    id: 2,
    name: "Ariel",
    story: "Free-spirited, curious, and determined to explore the world above the waves.",
    trait: "Curiosity & Bravery",
    color: "#20B2AA",
    imgUrl: "https://unsplash.com",
  },
  {
    id: 3,
    name: "Belle",
    story: "Independent, intelligent, and able to look past appearances to find true love.",
    trait: "Intelligence & Compassion",
    color: "#FFD700",
    imgUrl: "https://unsplash.com",
  }
];

export default function PrincessSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for back, 1 for forward
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  };

  const currentPrincess = PRINCESS_DATA[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PRINCESS_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PRINCESS_DATA.length) % PRINCESS_DATA.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6 bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-950 overflow-hidden select-none">
      
      {/* Main Deck Container */}
      <div className="relative flex items-center justify-between w-full max-w-5xl h-[500px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
        
        {/* Navigation - Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 z-30 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Sliding Content Window */}
        <div className="relative w-full h-full flex items-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-12"
            >
              
              {/* Left Side: Interactive Princess Photo */}
              <div 
                className="relative w-full md:w-1/2 h-full flex items-center justify-center perspective-1000 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="relative w-[300px] h-[400px] transform-style-3d duration-700"
                  animate={{ 
                    rotateY: isHovered ? 180 : 0,
                    scale: isHovered ? 1.25 : 1 // 25% enlargement on final hover state
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                  {/* Front Side: Real Photo (Transparent PNG style) */}
                  <div className="absolute inset-0 backface-hidden flex items-center justify-center">
                    <img 
                      src={currentPrincess.imgUrl} 
                      alt={currentPrincess.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
                    />
                  </div>

                  {/* Back Side: Sparkly Golden Silhouette */}
                  <div className="absolute inset-0 backface-hidden rotate-Y-180 flex items-center justify-center">
                    <div 
                      className="w-full h-full object-contain filter brightness-125 contrast-150 relative"
                      style={{
                        maskImage: `url(${currentPrincess.imgUrl})`,
                        WebkitMaskImage: `url(${currentPrincess.imgUrl})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        // Sparkly golden glitter background effect
                        background: 'linear-gradient(135deg, #ffe066 0%, #f5af19 50%, #e65c00 100%)',
                        boxShadow: '0 0 30px #f5af19'
                      }}
                    >
                      {/* CSS Glitter Overlay */}
                      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-yellow-200 to-amber-500 animate-pulse" />
                    </div>
                  </div>

                </motion.div>
              </div>

              {/* Right Side: Princess Info */}
              <div className="w-full md:w-1/2 flex flex-col text-white space-y-4 pr-6">
                <span 
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-white/10 rounded-full w-max shadow-inner"
                  style={{ textShadow: `0 0 10px ${currentPrincess.color}` }}
                >
                  Featured Character
                </span>
                <h2 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
                  {currentPrincess.name}
                </h2>
                <div className="w-20 h-1 rounded-full" style={{ backgroundColor: currentPrincess.color }} />
                <p className="text-lg leading-relaxed text-purple-100/90 font-light">
                  {currentPrincess.story}
                </p>
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-pink-300 uppercase tracking-wider">Key Trait</h4>
                  <p className="text-xl font-medium text-yellow-200">{currentPrincess.trait}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation - Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-4 z-30 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
        >
          <ChevronRight size={28} />
        </button>

      </div>
    </div>
  );
}
