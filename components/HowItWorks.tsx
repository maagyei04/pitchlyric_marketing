"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Send, Search } from "lucide-react";

const glass =
    "rounded-2xl md:rounded-3xl p-8 relative overflow-visible transition-colors border backdrop-blur-[10px] bg-white/70 dark:bg-white/10 border-black/10 dark:border-white/15 shadow-2xl";

const pathColor = {
    0: "stroke-[#A374F7]",
    1: "stroke-[#38bdf8]",
    2: "stroke-neutral-500 dark:stroke-white/20",
};

const stepActiveRing = [
    "shadow-[0_0_24px_4px_rgba(159,68,255,0.18)] ring-2 ring-neon-purple/50",
    "shadow-[0_0_24px_4px_rgba(40,187,255,0.14)] ring-2 ring-neon-blue/40",
    "shadow-[0_0_24px_4px_rgba(60,60,60,0.12)] ring-2 ring-zinc-400/30",
];

export default function HowItWorks() {
    const baseSteps = [
        {
            id: "01",
            title: "Generate",
            description: (
                <>
                    <span className="font-semibold text-neon-purple">Step 1: </span>
                    Paste your lyrics, hum a melody or upload audio, and choose a vibe like <span className="font-mono px-2 py-0.5 rounded bg-purple-200/60 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 text-xs">Afrobeats, 100bpm</span>.
                    <br />
                    <br />
                    <span className="text-muted-foreground">Our AI creates a fully-produced studio demo that fits your vision in minutes — no musicians needed.</span>
                </>
            ),
            highlights: [
                "AI turns text into vocals & production",
                "Drag in your melody for custom tunes",
                "Flexible genre, tempo, and mood"
            ],
            icon: <Wand2 className="w-7 h-7 text-neon-purple" />,
            gradient: "from-neon-purple/10 to-pink-400/5"
        },
        {
            id: "02",
            title: "Pitch",
            description: (
                <>
                    <span className="font-semibold text-neon-blue">Step 2: </span>
                    Pitch directly to A&Rs and artists with <span className="underline decoration-neon-blue">trackable links</span> from your portfolio.
                    <br />
                    <br />
                    <span className="text-muted-foreground">Get instant notifications when someone listens, comments, or requests to collaborate.</span>
                </>
            ),
            highlights: [
                "Share or email secure demo links",
                "Know exactly who listens & when",
                "Integrated chat for follow-up"
            ],
            icon: <Send className="w-7 h-7 text-neon-blue" />,
            gradient: "from-neon-blue/15 to-cyan-400/5"
        },
        {
            id: "03",
            title: "Get Discovered",
            description: (
                <>
                    <span className="font-semibold text-foreground">Step 3: </span>
                    Publish your best demos to the <span className="text-gradient">Marketplace</span>.
                    <br />
                    <br />
                    <span className="text-muted-foreground">Artists, producers and labels can browse, listen, and instantly license your track — you keep 100% of your rights.</span>
                </>
            ),
            highlights: [
                "Flexible pricing & instant licensing",
                "Discovery by top industry pros",
                "Rights protected, revenue direct"
            ],
            icon: <Search className="w-7 h-7 text-foreground" />,
            gradient: "from-zinc-400/10 to-black/10"
        }
    ];

    const [activeBaseIdx, setActiveBaseIdx] = useState(0);

    return (
        <section
            id="how-it-works"
            className="py-16 px-2 md:px-3 bg-gradient-to-b from-background to-secondary/30 relative"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From spark to success in 3 steps — your journey mapped out with Pitchlyric!
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start w-full gap-12 md:gap-16">
                    {/* Steps map on the left */}
                    <div
                        className="relative flex flex-row md:flex-col items-center md:items-stretch justify-between gap-6 md:gap-12 px-2 md:px-0 md:min-w-[220px] md:max-w-[260px] w-full md:w-1/3"
                        data-step-map="true"
                        style={{
                            minHeight: 350,
                            maxHeight: "460px",
                            overflowY: "visible",
                        }}
                    >
                        {/* Vertical SVG path for desktop */}
                        <svg
                            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 h-full z-0"
                            width="60"
                            height="100%"
                            viewBox="0 0 60 600"
                            fill="none"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: 0,
                                height: "calc(100% - 10px)",
                                zIndex: 0,
                                pointerEvents: "none",
                            }}
                        >
                            <motion.path
                                d="M30 60 Q30 220 30 330 Q30 440 30 550"
                                strokeWidth="6"
                                fill="none"
                                initial={false}
                                animate={{
                                    pathLength:
                                        activeBaseIdx === 0
                                            ? 0.36
                                            : activeBaseIdx === 1
                                                ? 0.68
                                                : 1,
                                    opacity: 1
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className={`transition-all duration-500 ${activeBaseIdx === 0
                                    ? pathColor[0]
                                    : activeBaseIdx === 1
                                        ? pathColor[1]
                                        : pathColor[2]
                                    }`}
                                style={{
                                    strokeDasharray: 730,
                                    strokeDashoffset: 0,
                                    stroke:
                                        activeBaseIdx === 0
                                            ? "#A374F7"
                                            : activeBaseIdx === 1
                                                ? "#38bdf8"
                                                : "#BBB"
                                }}
                            />
                        </svg>

                        <div className="flex md:flex-col flex-row md:gap-16 gap-6 w-full relative z-10">
                            {baseSteps.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.34,
                                        ease: [0.25, 0.25, 0, 1],
                                        delay: i / 13
                                    }}
                                    className={`
                                        group relative focus:outline-none bg-transparent z-10
                                        flex flex-col items-center w-24 md:w-full
                                        scroll-mt-44 md:scroll-mt-20
                                        transition-all cursor-pointer
                                    `}
                                    style={{
                                        minHeight: (typeof window !== "undefined" && window.innerWidth >= 700) ? 130 : 100,
                                    }}
                                    tabIndex={-1}
                                    onClick={() => setActiveBaseIdx(i)}
                                    aria-current={activeBaseIdx === i}
                                >
                                    <span className={`
                                        flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full
                                        transition-shadow duration-300 border-4
                                        ${activeBaseIdx === i ? (stepActiveRing[i]) : "border-zinc-100 dark:border-zinc-800 shadow"}
                                        bg-gradient-to-tr ${step.gradient}
                                        cursor-default relative z-20
                                    `}>
                                        {step.icon}
                                        <span className={`
                                            absolute -z-1 -inset-2 blur-2xl rounded-full opacity-60
                                            pointer-events-none
                                            ${activeBaseIdx === i ? "bg-gradient-to-tr from-primary to-blue-400" : ""}
                                        `} />
                                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 min-w-max text-xs text-muted-foreground font-semibold z-30 tracking-wide select-none">
                                            {step.title}
                                        </span>
                                    </span>
                                    <span className={`
                                        absolute -top-4 left-2 text-[10px] md:text-xs px-2 py-0.5 rounded-xl font-bold
                                        bg-background/90 dark:bg-secondary/70 border border-border shadow-sm
                                        text-primary ${activeBaseIdx === i ? "ring-1 ring-primary/60" : ""}
                                    `}>
                                        {step.id}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        {/* Decorative underline for mobile (horizontal dots) */}
                        <div className="absolute left-0 right-0 md:hidden bottom-3 w-full h-3 flex justify-between z-0 pointer-events-none select-none">
                            {baseSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`mx-auto w-8 h-1 rounded-full ${activeBaseIdx === i
                                        ? "bg-gradient-to-r from-primary to-secondary" : "bg-zinc-300 dark:bg-zinc-700/40"
                                        } transition-all`}
                                    onClick={() => setActiveBaseIdx(i)}
                                    style={{ cursor: "pointer" }}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Reveal panel on the right */}
                    <div className="flex-1 w-full md:w-2/3 md:pl-6">
                        <div className="max-w-2xl mx-auto md:mx-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeBaseIdx}
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -28, scale: 0.99 }}
                                    transition={{ duration: 0.42, ease: "easeOut" }}
                                    className={`${glass} mt-0 md:mt-6 w-full`}
                                >
                                    {/* Large title & text */}
                                    <div className="flex items-start gap-5 mb-3">
                                        <div className="hidden md:inline-block w-10 h-10 rounded-full bg-secondary border border-border flex-shrink-0 items-center justify-center mt-1 shadow">
                                            {baseSteps[activeBaseIdx].icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1 text-foreground flex items-center gap-2">
                                                {baseSteps[activeBaseIdx].title}
                                            </h3>
                                            <div className="text-muted-foreground leading-relaxed text-base mb-2">
                                                {baseSteps[activeBaseIdx].description}
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 pl-1 pb-2">
                                        {baseSteps[activeBaseIdx].highlights.map((highlight, hi) => (
                                            <li key={hi} className="flex items-start gap-2 text-foreground/90 text-sm">
                                                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary inline-block flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        {/* Encouraging outro (on right, below panel) */}
                        <div className="mt-12 md:mt-16 text-center max-w-xl mx-auto md:mx-0">
                            <div className="inline-block px-6 py-4 rounded-2xl bg-white/80 dark:bg-secondary/20 shadow border border-border backdrop-blur-[4px] text-foreground/90 font-medium text-lg">
                                <span className="text-gradient font-bold">Ready to level up?&nbsp;</span>
                                Start for free &mdash; your next big hit could be a few clicks away.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
