"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Send, Search, Mic2, FolderOpen, BarChart3 } from "lucide-react";

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
    const steps = [
        {
            id: "01",
            title: "Write or Upload Lyrics",
            description: "Start from scratch or import your existing work.",
            icon: <Mic2 className="w-6 h-6 text-neon-purple" />,
        },
        {
            id: "02",
            title: "Organize and Tag",
            description: "Sort by mood, genre, project type or stage of completion.",
            icon: <FolderOpen className="w-6 h-6 text-blue-400" />,
        },
        {
            id: "03",
            title: "Generate a Demo",
            description: "Turn your lyrics into a clean, pitch-ready audio demo to help bring your writing to life.",
            icon: <Wand2 className="w-6 h-6 text-pink-400" />,
        },
        {
            id: "04",
            title: "Build and Showcase Your Portfolio",
            description: "Create a professional songbook artists and A&Rs can browse.",
            icon: <Search className="w-6 h-6 text-green-400" />,
        },
        {
            id: "05",
            title: "Pitch, License and Collaborate",
            description: "Submit your lyrics or demos to artists, producers, labels and platforms.",
            icon: <Send className="w-6 h-6 text-orange-400" />,
        },
        {
            id: "06",
            title: "Track Interactions",
            description: "Use analytics to see who opened, played or responded to your pitch.",
            icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
        }
    ];

    return (
        <section
            id="how-it-works"
            className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Step by Step</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From raw idea to industry pitch in one seamless workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-3xl border border-border hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <span className="text-4xl font-bold text-muted-foreground/10 group-hover:text-primary/10 transition-colors">
                                    {step.id}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Why This Workflow Matters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12 rounded-3xl border border-border bg-gradient-to-br from-secondary/20 to-primary/5 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-4">Why This Workflow Matters</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Pitchlyric gives lyricists a complete cycle: creation, organization, presentation, pitching and tracking — all designed to help writers move from hidden talent to professional-level visibility.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
