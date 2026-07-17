"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-kw-offwhite text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-125 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-bg.png"
            alt="About Kailasa Woods"
            className="w-full h-full object-cover object-bottom-left bg-black/2"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-kw-offwhite/20" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-kw-offwhite/80 tracking-widest uppercase text-sm mb-6 block font-medium"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light tracking-wide text-3xl md:text-4xl lg:text-5xl text-kw-offwhite mb-6 leading-tight max-w-4xl mx-auto"
          >
            Where people, animals, and nature <br className="hidden md:block" /> coexist in harmony
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-kw-forest mb-8">
              About Us
            </h2>
            
            <p className="text-lg md:text-xl text-kw-forest/90 leading-relaxed font-serif">
              At Kailasa Woods, our family extends well beyond the people who live here. We share our home with some very special companions—our two beloved Shih Tzus - Coco and Zara, our king sized German Shepherd Sultan - Sultan. Our cheerful Brazilian conures fill the mornings with delightful songs, colorful fishes and turtles in the pond, and a few adopted cats who seem to have chosen Kailasa Woods as their forever happy place.
            </p>

            <p className="text-lg md:text-xl text-kw-forest/90 leading-relaxed font-serif">
              As an animal lover, my pets have always been much more than pets—they are family, my little babies, and an important part of the warmth and joy that make this home what it is. Their presence adds a certain magic to everyday life here, whether it&apos;s a wagging tail welcoming you in, birds singing from the garden, or a curious cat strolling through the property as though it owns the place.
            </p>

            <div className="border-l-4 border-kw-sage pl-6 my-10">
              <p className="text-xl md:text-2xl text-kw-forest/85 italic font-serif">
                Kailasa is a pet-friendly homestay and we would be delighted to welcome your furry companions too.
              </p>
            </div>

            <p className="text-lg md:text-xl text-kw-forest/90 leading-relaxed font-serif">
              There is something truly special about watching dogs make new friends, explore open spaces, and enjoy nature just as much as we do. For us, Kailasa Woods is a place where people, animals, and nature coexist in harmony—a gentle reminder of the simple happiness that comes from sharing our lives with these beautiful gifts of nature.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
