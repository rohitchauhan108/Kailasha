"use client";

import { motion, Variants } from "framer-motion";

const amenitiesList = [
  "Farm-to-Table Organic Meals",
  "High-Speed Wifi",
  "Living Area",
  "Swimming Pool",
  "Outdoor Deck Sitting",
  "Gym",
  "Recreation",
  "Kailasa Temple",
  "Bonfire Area",
  "Library",
  "Farm Walks",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-20 bg-kw-stone text-kw-forest relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          <div className="w-full md:w-1/3">
            <span className="text-kw-sage tracking-widest uppercase text-sm mb-6 block font-medium">The Estate</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl mb-6"
            >
              Curated <br /> Amenities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-kw-forest/80 text-lg"
            >
              Beyond the luxury of our rooms, Kailasa Woods offers a curated selection of amenities designed for your comfort. From fresh-cooked, farm-to-table organic meals to spacious living areas, every detail is crafted to nourish your soul.
            </motion.p>
          </div>
          
          <div className="w-full md:w-2/3 relative">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 relative z-10"
            >
              {amenitiesList.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-center gap-4 py-4"
                >
                  <div className="absolute bottom-0 left-0 w-full h-px bg-kw-forest/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-forest/30" />
                  <span className="text-base md:text-lg tracking-wide font-medium text-kw-forest/80">{amenity}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}