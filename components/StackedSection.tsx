"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

export default function StackedSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div ref={container} className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden bg-[#050505]">
      <motion.div 
        style={{ scale, opacity }} 
        className={`w-full h-full overflow-y-auto no-scrollbar flex flex-col ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
