"use client";

import { motion } from "framer-motion";
import { Big_Shoulders, Space_Grotesk } from "next/font/google";
import Image from "next/image";

const bigshoulders = Big_Shoulders({ subsets: ["latin"], weight: "900", display: "swap" });
const spaceGroteskBody = Space_Grotesk({ subsets: ["latin"], weight: "400", display: "swap" });

export default function AboutSection() {
  return (
    <section className="w-full h-full min-h-screen py-16 md:py-24 px-8 md:px-16 flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        {/* Centered Section Header to match Skills & Projects */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`${spaceGroteskBody.className} text-xl md:text-2xl text-white text-center tracking-widest mb-16 uppercase`}
        >
            ABOUT
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 lg:gap-40 items-center md:items-start justify-center w-full">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[300px] aspect-[4/5] relative mx-auto md:mx-0 overflow-hidden rounded-md border border-[#1a1a1a] grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/krishna_img.jpeg"
              alt="Krishna Shrivastav"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:flex-1 max-w-xl flex flex-col justify-center md:pt-4"
          >
            <h3 className={`${bigshoulders.className} text-3xl md:text-5xl text-white tracking-tight uppercase leading-none mb-8`}>
              Who I Am
            </h3>
            
            <div className={`${spaceGroteskBody.className} text-base md:text-lg text-gray-400 leading-relaxed space-y-6 max-w-2xl`}>
              <p>
                I'm someone who builds for real load — real-time systems, containers, infrastructure that has to hold up when more than one person shows up. There's something satisfying about a system that just works under pressure.
              </p>
              <p>
                When I'm not at a keyboard, I'm probably watching anime, halfway through a movie, playing F1 or football games, or — less often than I'd like to admit — reading.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
