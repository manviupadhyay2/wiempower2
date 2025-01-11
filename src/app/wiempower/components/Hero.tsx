'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/HeroPagePic/bg.jpg";

const styles = `
  @font-face {
    font-family: 'NeueMachina';
    src: url('/fonts/NeueMachina-Ultrabold.woff2') format('woff2');
  }

  .hero-title {
    font-family: 'NeueMachina', sans-serif;
    letter-spacing: 0.25em;
    background: linear-gradient(to right, #ff69b4, #4b0082, #9400d3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
    text-shadow: 
      0 0 16px rgba(255, 105, 180, 0.4),
      0 0 32px rgba(148, 0, 211, 0.24),
      0 0 48px rgba(75, 0, 130, 0.16);
    animation: glow 3s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 
        0 0 16px rgba(255, 105, 180, 0.4),
        0 0 32px rgba(148, 0, 211, 0.24),
        0 0 48px rgba(75, 0, 130, 0.16);
    }
    to {
      text-shadow: 
        0 0 24px rgba(255, 105, 180, 0.64),
        0 0 40px rgba(148, 0, 211, 0.4),
        0 0 56px rgba(75, 0, 130, 0.24);
    }
  }

  .dot-overlay {
    background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
    background-size: 30px 30px;
  }
`;

export default function Hero() {
  return (
    <main className="w-full h-screen relative overflow-hidden">
      <style>{styles}</style>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-purple-900/20" />
        <div className="absolute inset-0 dot-overlay" />
      </div>

      <div className="relative h-full z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12 max-w-7xl w-full"
          >
            <h1 className="hero-title text-5xl md:text-7xl font-extrabold mb-8">
              WIEMPOWER
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              INSPIRE | CREATE | INNOVATE
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                text-white text-lg font-bold rounded-full 
                shadow-[0_0_15px_rgba(236,72,153,0.25)]
                hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]
                transition-all duration-300"
            >
              REGISTER NOW
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-lg md:text-xl text-gray-200 leading-relaxed mx-auto
                    bg-black/20 backdrop-blur-sm py-4 px-12 rounded-2xl border border-white/5
                    max-w-6xl w-full"
                >
                  WIEMPOWER – Where Ideas Ignite and Innovation Thrives. A platform 
                  that empowers women to address real-life challenges head-on and 
                  showcase their creativity and ingenuity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-gray-400 text-base max-w-5xl mx-auto"
                >
                  Production and Industrial Engineering Society in collaboration with 
                  Institution's Innovation Council, IEEE IGDTUW
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
