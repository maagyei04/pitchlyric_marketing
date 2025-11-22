"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

// Deterministic pseudo-random number generator using a seed (mulberry32)
function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Custom hook to generate persistent random waveform heights
function useWaveformHeights(count: number) {
    const [heights, setHeights] = React.useState<number[]>([]);
    const seedRef = React.useRef<number>(0);

    React.useEffect(() => {
        if (seedRef.current === 0) {
            seedRef.current = Math.floor(Date.now() + Math.random() * 1000000);
        }
        const rand = mulberry32(seedRef.current);
        const arr = Array.from({ length: count }, () => 40 + rand() * 60);
        setHeights(arr);
    }, [count]);

    return heights;
}

// Custom hook to mimic a bounce using useAnimation and setTimeout loop
function useBounceAnimation({ amplitude = 12, duration = 0.42, delay = 0, repeatDelay = 2.5 } = {}) {
    const controls = useAnimation();
    const [started, setStarted] = React.useState(false);

    React.useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        let isMounted = true;

        async function sequence() {
            if (!isMounted) return;
            await controls.start({
                y: -amplitude,
                transition: { type: "spring", stiffness: 340, damping: 11, duration: duration / 2 }
            });
            await controls.start({
                y: 0,
                transition: { type: "spring", stiffness: 220, damping: 15, duration: duration / 2 }
            });
            // Wait repeatDelay, then repeat
            if (isMounted) {
                timeout = setTimeout(() => {
                    sequence();
                }, repeatDelay * 1000);
            }
        }

        // Start after initial delay
        timeout = setTimeout(() => {
            setStarted(true);
            sequence();
        }, delay * 1000);

        return () => {
            isMounted = false;
            if (timeout) clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controls, amplitude, duration, delay, repeatDelay]);

    return controls;
}

function Hero() {
    const waveformHeights = useWaveformHeights(30);

    // Use the bounce animation hook to get controls
    const bounceControls = useBounceAnimation({
        amplitude: 12,
        duration: 0.7,
        delay: 1.45,
        repeatDelay: 2.5
    });

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden">
            {/* BG gradients */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-primary/3 rounded-full blur-[100px] -z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.45 }}
            />
            {/* Grid Pattern Overlay */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
            />

            <div className="w-full mx-auto px-10 sm:px-24 md:px-40 py-16 md:py-12 grid lg:grid-cols-2 gap-8 items-center">
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="flex flex-col justify-stretch h-full min-h-[200px] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[1.1] mb-6 text-foreground"
                        style={{ minHeight: '220px' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <span className="flex-1 flex items-end block">
                            The Ultimate Workspace
                        </span>
                        <span className="flex-1 flex items-start block">
                            for Professional Lyricists
                        </span>
                        <span className="block mt-2 text-base lg:text-xl font-normal text-primary/80 flex-1 flex items-start">
                            More than AI music, it’s your creative headquarters.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-muted-foreground mb-8 w-full leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        Pitchlyric empowers you to shape, organize and showcase your lyrics. Instantly generate professional audio, manage your songbook portfolio, and connect to real industry opportunities—all in one integrated platform built specifically for lyricists. <span className="text-primary font-medium">Go beyond lyric-to-audio. Elevate your craft, your career, your workflow.</span>
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all hover:opacity-90"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Creating
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

                        <motion.button
                            className="group px-8 py-4 rounded-lg border border-border hover:bg-secondary text-foreground font-medium transition-all flex items-center gap-2"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                        >
                            <PlayCircle className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            Watch Platform Tour
                        </motion.button>
                    </div>

                    <motion.div
                        className="mt-10 flex items-center gap-4 text-sm text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.75 }}
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs text-foreground"
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.9 + i * 0.07 }}
                                >
                                    {String.fromCharCode(64 + i)}
                                </motion.div>
                            ))}
                        </div>
                        <span>
                            Trusted by leading lyricists across the industry
                        </span>
                    </motion.div>
                </motion.div>
                {/* Right side: Mockup and animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square">
                        <motion.div
                            className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"
                            initial={{ opacity: 0, scale: 1.12 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />

                        {/* Main Mockup */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[440px] glass-panel rounded-xl p-4 shadow-2xl group z-[2]"
                            initial={{ opacity: 0, y: 16, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.28 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-red-500/50"
                                        initial={{ scale: 0.6 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 210, delay: 0.43 }}
                                    />
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-yellow-500/50"
                                        initial={{ scale: 0.6 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 210, delay: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-green-500/50"
                                        initial={{ scale: 0.6 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 210, delay: 0.57 }}
                                    />
                                </div>
                                <div className="text-xs text-muted-foreground font-mono">
                                    AI Render (Demo)
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Lyrics</div>
                                    <motion.div
                                        className="p-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground font-mono leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.62 }}
                                    >
                                        &apos;Let every word have wings to fly,<br />
                                        Your story, your art, amplified...&apos;
                                    </motion.div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <motion.div
                                        className="space-y-1"
                                        initial={{ opacity: 0, y: 7 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.73 }}
                                    >
                                        <div className="text-xs text-muted-foreground">Workspace</div>
                                        <div className="h-8 bg-primary/10 rounded border border-primary/20 flex items-center px-2 text-xs text-primary">Portfolio</div>
                                    </motion.div>
                                    <motion.div
                                        className="space-y-1"
                                        initial={{ opacity: 0, y: 7 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.8 }}
                                    >
                                        <div className="text-xs text-muted-foreground">Network</div>
                                        <div className="h-8 bg-primary/10 rounded border border-primary/20 flex items-center px-2 text-xs text-primary">Industry</div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="pt-3"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.92 }}
                                >
                                    <div className="w-full h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-medium shadow-md transition-shadow">
                                        Generating Audio...
                                    </div>
                                </motion.div>

                                {/* Waveform */}
                                <motion.div
                                    className="flex items-center justify-center gap-[1px] sm:gap-0.5 h-7 sm:h-10 pt-1 sm:pt-2 opacity-50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.08 }}
                                >
                                    {waveformHeights.map((height, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-[2px] sm:w-[3px] bg-foreground rounded-full animate-pulse"
                                            style={{
                                                height: `${height}%`,
                                                animationDelay: `${i * 0.05}s`
                                            }}
                                            initial={{ opacity: 0, scaleY: 0 }}
                                            animate={{ opacity: 1, scaleY: 1 }}
                                            transition={{
                                                duration: 0.34,
                                                delay: 1.15 + i * 0.015
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Floating Elements - ORIGINAL */}
                        {/* "New Opportunity" - Bounce */}
                        <motion.div
                            className="absolute right-32 top-16 glass-panel p-3 rounded-2xl z-[3]"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: 1,
                                y: [0, -18, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.2 + 2.5,
                                repeatType: "loop",
                                ease: "easeInOut",
                                delay: 1.3
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    ✨
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">New Opportunity</div>
                                    <div className="text-sm font-medium text-foreground">Industry Pitch</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* "Collab in Progress" - Shake */}
                        <motion.div
                            className="absolute left-6 top-24 glass-panel p-3 rounded-2xl z-[3]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: 1,
                                x: [
                                    0,
                                    -2 + 3 * -2,
                                    2 + 4 * 2,
                                    0,
                                    2 + 3 * 2,
                                    -2 + 4 * -2,
                                    0
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3 * 2.3 + 1.7,
                                repeatType: "loop",
                                ease: "linear",
                                delay: 2 * 1.4
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
                                    🤝
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Collab in Progress</div>
                                    <div className="text-sm font-medium text-foreground">duet_with_Lexi.mp3</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* "A&R Feedback" - Scale Pulse */}
                        <motion.div
                            className="absolute left-10 bottom-24 glass-panel p-3 rounded-2xl shadow-lg flex items-center gap-3 z-[3]"
                            initial={{ opacity: 0, y: 24, x: -20, scale: 0.95 }}
                            animate={{
                                opacity: 1,
                                y: [0, -5, 0],
                                scale: [1, 1.07 - 2 * 0.06, 1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3 * 1.8 + 2,
                                repeatType: "loop",
                                ease: "easeInOut",
                                delay: 4 * 1.2 + 0.4
                            }}
                        >
                            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                📝
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">A&amp;R Feedback</div>
                                <div className="text-sm font-medium text-foreground">&apos;Catchier hook, try bridge change!&apos;</div>
                            </div>
                        </motion.div>

                        {/* "Sync Placement Win" - Shake */}
                        <motion.div
                            className="absolute right-12 bottom-16 glass-panel p-3 rounded-2xl shadow-lg flex items-center gap-3 z-[3]"
                            initial={{ opacity: 0, y: 36, x: 16 }}
                            animate={{
                                opacity: 1,
                                x: [
                                    0,
                                    -3 + 2 * -2,
                                    3 + 3 * 2,
                                    0,
                                    2 + 4 * 2,
                                    -2 + 2 * -2,
                                    0
                                ],
                                y: [0, 3, -2, 0, -2, 3, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3 * 2 + 2.1,
                                repeatType: "loop",
                                ease: "linear",
                                delay: 4 * 1.5 + 0.4
                            }}
                        >
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                🏆
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Sync Placement</div>
                                <div className="text-sm font-medium text-foreground">Netflix Original • May 2024</div>
                            </div>
                        </motion.div>

                        {/* "Festival Submission" - Scale Pulse */}
                        <motion.div
                            className="absolute right-10 top-36 glass-panel p-3 rounded-2xl shadow-lg flex items-center gap-3 z-[3]"
                            initial={{ opacity: 0, x: 36, y: -12, scale: 0.92 }}
                            animate={{
                                opacity: 1,
                                scale: [1, 1.06 + 2 * 0.04, 1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4 * 1.7 + 2.3,
                                repeatType: "loop",
                                ease: "easeInOut",
                                delay: 3 * 1.3 + 0.2
                            }}
                        >
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-lg">
                                🎤
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Festival Submission</div>
                                <div className="text-sm font-medium text-foreground">SXSW Song Contest</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
