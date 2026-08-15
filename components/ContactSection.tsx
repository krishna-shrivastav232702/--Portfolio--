"use client";

import { Big_Shoulders, Space_Grotesk } from "next/font/google";

const bigshoulders = Big_Shoulders({ subsets: ["latin"], weight: "900", display: "swap" });
const spaceGroteskBody = Space_Grotesk({ subsets: ["latin"], weight: "400", display: "swap" });

export default function ContactSection() {
  const email = "krishnashrivastava23@gmail.com";

  return (
    <footer className="w-full bg-[#050505] border-t border-[#1a1a1a] py-12 md:py-16 px-6 md:px-16 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
        
        <div className="flex flex-col text-left">
          <h2 className={`${bigshoulders.className} text-6xl md:text-8xl text-white uppercase tracking-tighter leading-[0.85]`}>
            Let's
            <br />
            Connect
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-end gap-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className={`${spaceGroteskBody.className} text-sm md:text-base text-gray-300`}>
              Want to work together?
            </span>
            <a 
              href={`mailto:${email}`}
              className={`${spaceGroteskBody.className} px-6 py-2 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition-colors text-xs uppercase tracking-widest font-medium whitespace-nowrap`}
            >
              Email Me
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a 
              href="https://www.linkedin.com/in/krishna-shrivastav-a08b51265/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${spaceGroteskBody.className} px-5 py-2 rounded-full border border-gray-800 text-gray-400 hover:border-[#0077b5] hover:text-[#0077b5] active:text-[#0077b5] transition-colors text-[10px] sm:text-xs uppercase tracking-widest`}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/krishna-shrivastav232702" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${spaceGroteskBody.className} px-5 py-2 rounded-full border border-gray-800 text-gray-400 hover:border-white hover:text-white active:text-white transition-colors text-[10px] sm:text-xs uppercase tracking-widest`}
            >
              GitHub
            </a>
            <a 
              href="https://leetcode.com/u/user29416/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${spaceGroteskBody.className} px-5 py-2 rounded-full border border-gray-800 text-gray-400 hover:border-[#ffa116] hover:text-[#ffa116] active:text-[#ffa116] transition-colors text-[10px] sm:text-xs uppercase tracking-widest`}
            >
              LeetCode
            </a>
            <a 
              href="https://drive.google.com/file/d/11fDb29E4dih3eLk3F2-jmiKcESwq0pVb/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${spaceGroteskBody.className} px-5 py-2 rounded-full border border-gray-800 text-gray-400 hover:border-white hover:text-white active:text-white transition-colors text-[10px] sm:text-xs uppercase tracking-widest`}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
