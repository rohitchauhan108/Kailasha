"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentBlocks = [
    {
      text: "As a little girl, I grew up in a world of storybooks, imagination, and make-believe homes. I spent hours creating tiny worlds for my dolls — rearranging rooms, decorating corners, and making sure everyone was comfortable and happy. Even then, I believed in a simple kind of magic: a world where people were kind to one another, conversations flowed easily, meals were shared with love, and everyone felt they belonged. Somehow, I never outgrew that feeling.",
      image: "/about-section/Picture1.jpg"
    },
    {
      text: "When I grew up and fell in love, my belief in magic only grew stronger. Mayur, now my husband and the brain behind Kailasa, and I dreamt of building our own home — a place that felt peaceful, warm, and truly ours.",
      image: "/about-section/Picture2.webp"
    },
    {
      text: "When we built that home amidst the forests of Bisht Gaon, at the foothills of Mussoorie, it became a reflection of everything I had once imagined as a child. Every corner was created with love, care, and the hope of building a space where life could be enjoyed at a gentler pace.",
      image: "/about-section/Picture3.webp"
    },
    {
      text: "As the house came together, I found myself wishing I could share this feeling with others — with people looking to pause, breathe, reconnect with their loved ones, or simply spend some quiet time with themselves. That thought became Kailasa Woods.",
      image: "/about-section/Picture4.jpg"    
    },
    {
      text: "What started as our dream home slowly grew into a homestay. Over the years, it has become my own little world — one filled with stories, shared meals, laughter, and the beautiful uniqueness of every person who arrives here. Some guests come seeking adventure. Some come seeking rest. Some arrive without quite knowing what they are looking for. But every conversation, every smile, and every meal shared around the table leaves behind a memory. At Kailasa Woods, guests often arrive as strangers and leave feeling like family.",
      image: "/about-section/Picture5.jpg"  
    },
    {
      text: "Nestled among lush forests, fruit-laden trees, homegrown vegetables, birdsong, and the fresh mountain air of Dehradun, Kailasa Woods is more than a place to stay. It is a little piece of the life we love, and one we feel grateful to share.",
      image: "/about-section/Picture6.webp"
    },
    {
      text: "Our three unique stays each offer a unique experience — from a cosy family room within our home, to the whimsical Amazon Bus, and our signature Bamboo Cottage, a deodar wood retreat tucked within a bamboo canopy. Wherever you choose to stay, nature is always your closest companion.",
      image: "/about-section/Bamboo cottage.webp"
    },
    {
      text: "One of the things closest to my heart is the food we serve. Most of our vegetables come fresh from our farm, and every meal is prepared with care in my own kitchen. I believe food tastes best when it is fresh, seasonal, and cooked with love — not frozen, processed, or rushed. When you sit down for a meal at Kailasa Woods, I hope you feel the warmth and comfort of a home away from home.",
      image: "/food/1.webp"
    },
    {
      text: "While nature encourages you to slow down, there is also plenty of space to enjoy time with family and friends. Our recreation area is filled with simple pleasures — a game of table tennis, a round of pool, a carrom match, or board games that bring everyone together. For those who like to stay active, we also have a fully equipped gym, so your fitness routine does not have to take a holiday. And on warm afternoons, our swimming pool is the perfect place to cool off, relax, and soak in the peaceful surroundings.",
      image: "/about-section/Picture13.jpg"
    },
    {
      text: "At Kailasa Woods, we invite you to pause for a while. Wake up to the sound of birds. Breathe in the scent of deodar wood. Watch the light filter through the trees. Allow yourself the simple luxury of doing nothing at all. Whether you come to relax, rejuvenate, spend precious moments with loved ones, or reconnect with your own thoughts, I hope you leave feeling lighter, calmer, and a little more connected — to nature, to those around you, and to yourself.",
      image: "/about-section/Picture14.jpg"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-kw-offwhite text-kw-forest relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div ref={ref} className="mb-20 text-center">
          <span className="text-kw-sage tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block font-medium">Our Story</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight"
          >
            Kailasa Woods <br></br> <br className="md:hidden" />
            <span className="italic text-kw-sage text-2xl md:text-3xl lg:text-4xl">A Boutique Farm Stay</span>
          </motion.h2>
        </div>

        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-stretch`}
            >
              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-base md:text-lg lg:text-xl text-kw-forest/90 leading-relaxed lg:leading-loose font-serif">
                  {block.text}
                </p>
              </div>
              
              {/* Image or Grid */}
              <div className="w-full lg:w-1/2 flex items-center">
                {index === 2 ? (
                  // 2-image grid for "When we built" section
                  <div className="w-full grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      block.image, '/about-section/Picture3ii.webp'
                    ].map((src, i) => (
                      <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-kw-beige/50 group">
                        <img 
                          src={src} 
                          alt={`Image ${i+1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : index === 5 ? (
                  // 4-image grid for picture 6
                  <div className="w-full grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      '/pets/p (1).JPG', '/pets/p (2).JPG', '/pets/p (3).JPG', '/about-section/Picture6.webp'
                    ].map((src, i) => (
                      <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-kw-beige/50 group">
                        <img 
                          src={src} 
                          alt={`Image ${i+1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : index === 6 ? (
                  // 3-image grid for stays
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                    {[
                      '/about-section/Family room.webp',
                      '/about-section/Amazon bus.jpg',
                      '/about-section/Bamboo cottage.webp'
                    ].map((src, i) => (
                      <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-kw-beige/50 group">
                        <img 
                          src={src} 
                          alt={`Stay ${i+1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : index === 7 ? (
                  // 4-image grid for food
                  <div className="w-full grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      '/food/1.webp', '/food/2.webp', '/food/3.webp', '/food/4.webp'].map((src, i) => (
                      <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-kw-beige/50 group">
                        <img 
                          src={src} 
                          alt={`Food ${i+1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  // Single image for other blocks
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-kw-beige/50 group">
                    <img 
                      src={block.image} 
                      alt={`Story - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Closing Signature */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mt-20 pt-12 border-t border-kw-forest/20 text-center"
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-kw-sage italic mb-2">
              Anisha Nichani
            </p>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-kw-forest/70">
              Your Host & Dost at Kailasa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
