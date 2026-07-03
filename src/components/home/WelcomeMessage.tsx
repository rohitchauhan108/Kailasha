"use client";
import { motion } from "framer-motion";

export default function WelcomeMessage() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-kw-offwhite">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-kw-forest leading-relaxed text-center mb-8">
            If you choose to stay with us, I hope you don't think of Kailasa Woods as a hotel or even just a homestay. I hope you think of it as a home tucked away in the woods, where you can slow down, breathe deeply, share stories, make new memories, and leave with a heart that feels a little lighter than when you arrived. I look forward to welcoming you.
          </p>
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-kw-forest italic text-center">
            — Anisha
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            "Slow mornings with birdsong.",
            "Fresh food cooked by someone who genuinely enjoys feeding people.",
            "The best chats happen over a dining table.",
            "Heartfelt conversations with strangers who become friends.",
            "Dogs and cats running freely and making new companions.",
            "The scent of Deodar Wood after a cool evening."
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-sm">
              <span className="text-2xl">✨</span>
              <p className="font-sans text-kw-forest text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
