"use client";

import { motion } from "framer-motion";

interface AnimatedNameProps {
    text: string;
    className?: string;
    wordGap?: number;
    charStagger?: number;
}

export default function AnimatedName({
    text,
    className = "",
    wordGap = 0.35,
    charStagger = 0.045,
}: AnimatedNameProps) {
    const words = text.split(" ");

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {words.map((word, wordIndex) => (
                <div key={wordIndex} className="overflow-hidden leading-none  ">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{ y: "110%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: wordIndex * wordGap + charIndex * charStagger,
                            }}
                            className="will-change-transform  bg-clip-text inline-block
                text-transparent
                bg-gradient-to-r
                from-[#b8cff0]
                via-[#f0c1d6]
                to-[#f7d8b8]
                bg-[length:200%_100%]
                animate-gradientWave"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            ))}
        </div>
    );
}
