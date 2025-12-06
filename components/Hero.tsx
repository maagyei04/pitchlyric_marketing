"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, Music, Mic2, Sparkles, AudioWaveform } from "lucide-react";
import { useTheme } from "next-themes";
import Modal from "./Modal";
import Image from "next/image";

import PitchlyricIcon from '../app/pitchlyric.png';


export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
            </div>

            <div className="container max-w-8xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-md font-medium text-muted-foreground mb-6 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                The Ultimate Workspace
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                                <span className="block text-foreground">
                                    for Songwriters & Lyricists
                                </span>
                                <span className="block mt-6 text-base lg:text-xl font-normal text-primary/80 flex-1 flex items-start">
                                    More than just a music tool, it’s your creative headquarters.
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Pitchlyric helps you shape, organize and present your lyrics with clarity and purpose. Build your songbook, manage your portfolio, present your work professionally and connect with real industry opportunities — all in one place built for lyricists.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <motion.button
                                    className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all hover:opacity-90"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.35 }}
                                    onClick={() => setShowModal(true)}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start Writing
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.button>

                                <motion.button
                                    className="px-8 py-4 rounded-lg font-semibold text-lg border border-border hover:bg-secondary/50 transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.45 }}
                                >
                                    <PlayCircle className="w-5 h-5" />
                                    Explore the Platform
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
                        <motion.div
                            style={{ y: y1, opacity }}
                            className="relative z-10"
                        >
                            {/* Main Card */}
                            <div className="relative rounded-2xl border border-border bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

                                {/* Header UI */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground">app.pitchlyric.com</div>
                                </div>

                                {/* Content UI */}
                                <div className="p-6 space-y-6">
                                    {/* Waveform Visualization */}
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <PlayCircle className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-8 flex items-end gap-1">
                                                {[...Array(20)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="w-1.5 bg-primary rounded-full"
                                                        animate={{
                                                            height: [10, Math.random() * 24 + 8, 10],
                                                            opacity: [0.5, 1, 0.5]
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            delay: i * 0.05
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lyrics Preview */}
                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex gap-4 text-muted-foreground">
                                            <span className="w-8 text-right opacity-50">01</span>
                                            <span className="text-foreground">Neon lights reflecting on the pavement rain</span>
                                        </div>
                                        <div className="flex gap-4 text-muted-foreground">
                                            <span className="w-8 text-right opacity-50">02</span>
                                            <span className="text-foreground">Chasing shadows down the memory lane</span>
                                        </div>
                                        <div className="flex gap-4 text-primary">
                                            <span className="w-8 text-right opacity-50">03</span>
                                            <span className="bg-primary/10 px-1 rounded">Heartbeat syncing with the city sound...</span>
                                            <span className="animate-pulse">|</span>
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    <div className="flex gap-3 pt-2">
                                        <div className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                            Synthwave
                                        </div>
                                        <div className="px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs font-medium border border-border">
                                            128 BPM
                                        </div>
                                        <div className="px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs font-medium border border-border">
                                            Key: Am
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                style={{ y: y2 }}
                                className="absolute -right-8 -bottom-8 p-4 rounded-xl bg-background border border-border shadow-xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">Demo Generated</div>
                                        <div className="text-xs text-muted-foreground">Ready in 2.4s</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Why Pitchlyric Exists */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 glass-panel p-8 md:p-12 rounded-3xl border border-border relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Pitchlyric Exists</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Great lyricists often struggle to get heard. Demos are expensive, slow to produce or out of reach for most upcoming writers. Lyrics alone rarely get industry attention, even when the writing is brilliant. Pitchlyric closes that gap.
                            </p>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-foreground">We help lyricists:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Instantly turn written lyrics into polished, pitch-ready songs",
                                        "Organize and manage their entire catalog",
                                        "Showcase lyrics and demos in a professional portfolio",
                                        "Reach artists, producers and A&R reps looking for new material"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Visual / Abstract Representation */}
                        <div className="relative h-[400px] rounded-2xl bg-secondary/20 overflow-hidden border border-border/50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

                            {/* Central Hub Animation */}
                            <div className="relative z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-64 h-64 rounded-full border border-primary/20 flex items-center justify-center relative"
                                >
                                    <div className="absolute inset-0 rounded-full border border-dashed border-primary/10 animate-spin-slow" />

                                    {/* Orbiting Icons */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-xl border border-border shadow-lg">
                                        <Mic2 className="w-5 h-5 text-neon-purple" />
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background p-2 rounded-xl border border-border shadow-lg">
                                        <AudioWaveform className="w-5 h-5 text-neon-blue" />
                                    </div>
                                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-xl border border-border shadow-lg">
                                        <Sparkles className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-xl border border-border shadow-lg">
                                        <Music className="w-5 h-5 text-green-500" />
                                    </div>

                                    {/* Center Logo/Icon */}
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                                        <Image src={PitchlyricIcon} alt='Pitchlyric icon' style={{ width: '100%', height: '100%' }} className="object-contain rounded-xl" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)} url="https://melon.fillout.com/pitchlyric" />
        </section>
    );
}
