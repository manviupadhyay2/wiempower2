'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/HeroPagePic/bg.jpg";

const styles = `
  .hero-title {
    background: linear-gradient(to right, #60a5fa, #7c3aed, #f472b6, #2563eb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
    user-select: none;
  }

  .dot-pattern {
    background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0);
    background-size: 18px 18px;
    animation: moveDots 10s linear infinite;
  }

  @keyframes moveDots {
    0% { background-position: 0 0; }
    100% { background-position: 18px 18px; }
  }

  .unselectable {
    user-select: none;
  }

  @media (max-width: 640px) {
    .hero-title {
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
    }
  }
`;

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <style>{styles}</style>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 dot-pattern" />
      </div>

      {/* Content */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full pt-24 pb-12">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8 md:space-y-12 w-full max-w-6xl"
            >
              {/* Main Title */}
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-transparent 
                         drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]"
              >
                WIEMPOWER
              </motion.h1>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6 md:space-y-8"
              >
                <p className="text-lg sm:text-xl md:text-3xl font-bold tracking-[0.2em] whitespace-nowrap sm:whitespace-normal">
                  <span className="text-blue-400">INSPIRE</span>
                  <span className="text-white mx-2 md:mx-3">•</span>
                  <span className="text-violet-400">CREATE</span>
                  <span className="text-white mx-2 md:mx-3">•</span>
                  <span className="text-indigo-400">INNOVATE</span>
                </p>

                {/* Register Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-blue-500 via-pink-400 to-indigo-500
                           text-white text-lg md:text-xl font-bold rounded-lg
                           shadow-md hover:shadow-lg transition-all duration-300 border border-white/30"
                >
                  REGISTER NOW
                </motion.button>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-6 md:space-y-8 mt-6 md:mt-8"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 max-w-4xl mx-auto
                               border border-white/10 shadow-lg"
                  >
                    <p className="text-base sm:text-lg md:text-2xl text-white/90 leading-relaxed">
                      <span className="font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        WIEMPOWER
                      </span> – Where Ideas Ignite and Innovation Thrives. A platform
                      that empowers women to address real-life challenges head-on and
                      showcase their creativity and ingenuity.
                    </p>
                  </div>

                  {/* Organization Names */}
                  <p className="text-gray-300 text-sm md:text-lg font-light tracking-wide max-w-4xl mx-auto px-4">
                    Institute of Electrical and Electronics Engineers,
                    Indira Gandhi Delhi Technical University for Women
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
