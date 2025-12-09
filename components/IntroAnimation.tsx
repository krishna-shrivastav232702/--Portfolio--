"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Big_Shoulders, Space_Grotesk } from "next/font/google";
import AnimatedName from "./AnimateComponent";

const helloVariations = [
    { text: "hello", fontFamily: "Inter", weight: "font-light", tracking: "tracking-tight" },
    { text: "hello", fontFamily: "'Pacifico', cursive", weight: "font-normal", tracking: "tracking-normal" },
    { text: "hello", fontFamily: "'Space Grotesk', sans-serif", weight: "font-medium", tracking: "tracking-normal" },
    { text: "hello", fontFamily: "'Abril Fatface', serif", weight: "font-normal", tracking: "tracking-wide" },
    { text: "hello", fontFamily: "'Dancing Script', cursive", weight: "font-bold", tracking: "tracking-normal" },
    { text: "hello", fontFamily: "'JetBrains Mono', monospace", weight: "font-light", tracking: "tracking-tight" },
    { text: "hello", fontFamily: "'Syne', sans-serif", weight: "font-extrabold", tracking: "tracking-tight" },
    { text: "hello", fontFamily: "'Great Vibes', cursive", weight: "font-normal", tracking: "tracking-wider" },
    { text: "hello", fontFamily: "'Bebas Neue', sans-serif", weight: "font-normal", tracking: "tracking-widest" },
    { text: "hello", fontFamily: "'Playfair Display', serif", weight: "font-black", tracking: "tracking-normal" },
    { text: "hello", fontFamily: "'Space Grotesk', sans-serif", weight: "font-black", tracking: "tracking-tight" },
];

const HELLO_SIZE = "text-[10rem] md:text-[14rem]";
const REEL_SPEED = 90;

interface IntroAnimationProps {
    userName: string;
    userRole: string;
}
const bigshoulders = Big_Shoulders({
    subsets: ["latin"],
    weight: "900",
    display: 'swap'
})
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: "700"
});

export default function IntroAnimation({ userName, userRole }: IntroAnimationProps) {
    const [currentHello, setCurrentHello] = useState(0);
    const [showPanels, setShowPanels] = useState(false);
    const [showHero, setShowHero] = useState(false);
    useEffect(() => {
        if (showPanels) return;

        const variant = helloVariations[currentHello];
        const isLast = currentHello === helloVariations.length - 1;
        const isFreeze = (variant as any)?.freeze;

        if (!isLast) {
            const timer = setTimeout(() => {
                setCurrentHello((v) => v + 1);
            }, isFreeze ? 200 : REEL_SPEED);
            return () => clearTimeout(timer);
        } else {
            const panelDelay = setTimeout(() => {
                setShowPanels(true);
            }, 200);
            return () => clearTimeout(panelDelay);
        }
    }, [currentHello, showPanels]);
    useEffect(() => {
        if (!showPanels) return;
        const heroTimer = setTimeout(() => {
            setShowHero(true);
        }, 1400);
        return () => clearTimeout(heroTimer);
    }, [showPanels]);

    const currentVariant = helloVariations[currentHello];

    return (
        <div
            className="fixed inset-0 z-[9999] overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #f2b9a0 0%, #eaa891 100%)",
            }}
        >
            {!showPanels && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1
                        className={`${HELLO_SIZE} ${currentVariant.weight} ${currentVariant.tracking} text-white leading-none`}
                        style={{ fontFamily: currentVariant.fontFamily }}
                    >
                        {currentVariant.text}
                    </h1>
                </div>
            )}

            <AnimatePresence>
                {showPanels && (
                    <>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute bottom-0 left-0 w-1/3 h-full bg-[#0a0a0a]"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.18 }}
                            className="absolute bottom-0 left-1/3 w-1/3 h-full bg-[#0a0a0a]"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.36 }}
                            className="absolute bottom-0 right-0 w-1/3 h-full bg-[#0a0a0a]"
                        />
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showHero && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-20 bg-[#050505]"
                    >
                        {/* <motion.h1
                            initial={{ y: 120, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={` ${bigshoulders.className} text-[15.5vw] sm:text-[14vw] md:text-[12vw] leading-[0.9] uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#b8cff0] via-[#f0c1d6] to-[#f7d8b8] bg-[length:200%_100%] animate-gradientWave drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] text-center`}
                            style={{ transform: "scaleY(1.05)" }}
                        >
                            {userName.split(" ").map((word, i) => (
                                <span key={i} className="block">
                                    {word}
                                </span>
                            ))}
                        </motion.h1> */}
                        <AnimatedName
                            text={userName}
                            className={`${bigshoulders.className} text-[15.5vw] sm:text-[14vw] md:text-[12vw] leading-[0.9] uppercase tracking-tight drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] text-center`}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className={`${spaceGrotesk.className} mt-6 text-[0.95rem] sm:text-lg md:text-xl text-gray-400 tracking-[0.25em] uppercase text-center`}
                        >
                            {userRole}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
