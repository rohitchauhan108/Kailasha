"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import ImageSlider from "../ui/ImageSlider";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  const heroImages = [
    "/desktop.jpeg",
    "/about-section/Picture2.jpg",
    "/about-section/house-img.png",
    "/about-section/living-area-with-family.png"
  ];

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-kw-forest">

      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <ImageSlider images={heroImages} title="Kailasa Woods Hero" autoplayInterval={10000} />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden text-kw-offwhite/80 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm lg:text-base mb-6 max-w-[80vw]"
        >
          A Farm to Table Luxury Farm Stay
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-kw-offwhite tracking-tight mb-8 drop-shadow-lg"
        >
          Kailasa Woods
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden gap-4"
        >
          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-3 bg-kw-offwhite text-kw-forest uppercase tracking-widest text-sm hover:bg-kw-beige transition-colors duration-300 shadow-xl pointer-events-auto"
            >
              Discover
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
