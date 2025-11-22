"use client";

import { motion } from "framer-motion";
import { FileText, Sparkles, BarChart3, ShoppingBag } from "lucide-react";

// Updated glass effect for consistent light/dark theming, pulled from the provided reference
const glass =
    "rounded-3xl p-8 relative overflow-hidden transition-colors " +
    "border " +
    "backdrop-blur-[8px] " +
    "bg-white/60 dark:bg-white/10 " +
    "border-black/10 dark:border-white/15 shadow-lg";

export default function Features() {
    return (
        <section id="features" className="py-8 px-2 md:px-3 bg-gradient-to-b from-background to-secondary/20">
            <div className="w-full px-16 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Everything you need to <br />
                        <span>dominate the charts.</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From ideation to monetization, Pitchlyric gives you the superpowers of a full production studio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Feature 1: Notes Workspace */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`md:col-span-2 group ${glass}`}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-blue-500">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-foreground">Smart Notes Workspace</h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Organize your genius. Tag lyrics by mood, genre, and tempo. Keep drafts separate from finished songs.
                                    </p>
                                </div>
                            </div>
                            {/* UI Mockup */}
                            <div className="mt-8 bg-card rounded-xl border border-border p-4 shadow-sm translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-xs text-muted-foreground ml-2">Untitled Lyric - Draft</span>
                                </div>
                                <div className="space-y-2 font-mono text-sm text-muted-foreground">
                                    <p>Verse 1:</p>
                                    <p className="text-foreground">Walking down the boulevard of broken dreams...</p>
                                    <div className="flex gap-2 mt-2">
                                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px]">#Melancholic</span>
                                        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 text-[10px]">#PopRock</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: AI Demo Generator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`group hover:border-neon-purple/30 ${glass}`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-neon-purple">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">AI Demo Generator</h3>
                        <p className="text-muted-foreground text-sm mb-6">
                            Select style, mood, and vocals. Get a radio-ready demo in seconds.
                        </p>
                        <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-neon-purple/10 to-transparent" />
                    </motion.div>

                    {/* Feature 3: Pitch Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`group hover:border-green-500/30 ${glass}`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-green-500">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Pitch Dashboard</h3>
                        <p className="text-muted-foreground text-sm">
                            Track opens, plays, and responses. Stop guessing if they heard it.
                        </p>
                    </motion.div>

                    {/* Feature 4: Marketplace */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`md:col-span-2 flex flex-col items-center gap-8 ${glass} w-full`}
                    >
                        <div className="flex-1 flex flex-col items-center text-center w-full">
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-yellow-500">
                                <ShoppingBag className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-foreground">Artist Marketplace</h3>
                            <p className="text-muted-foreground mb-6">
                                A public-facing catalog where artists browse your demos. Sell exclusive rights or collaborate directly.
                            </p>
                            <div className="w-full bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 mx-auto p-2">
                                <div className="absolute inset-0 bg-yellow-400/5" />
                                <div className="flex flex-row justify-center items-stretch gap-3 z-10 px-2 py-2 w-full h-full">
                                    <div className="flex flex-col items-center justify-center flex-1 px-1">
                                        <div className="text-white font-semibold text-base">Browse</div>
                                        <div className="text-gray-400 text-xs mt-0.5">explore top demos</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center flex-1 px-1">
                                        <div className="text-white font-semibold text-base">License</div>
                                        <div className="text-gray-400 text-xs mt-0.5">purchase rights</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center flex-1 px-1">
                                        <div className="text-white font-semibold text-base">Connect</div>
                                        <div className="text-gray-400 text-xs mt-0.5">collaborate instantly</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
