"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Coins, Disc, Radio, Film, Globe2, FileSpreadsheet, Building } from "lucide-react";

export default function RoyaltyGuidePage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-neon-purple selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                            Royalty Guide
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Demystifying the music business. Learn how your lyrics generate revenue across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid gap-20">

                    {/* The 3 Pillars of Royalties */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10 text-center">The 3 Pillars of Royalties</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Performance */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-3xl border border-border hover:border-neon-purple/30 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-6 text-neon-purple group-hover:scale-110 transition-transform">
                                    <Radio className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Performance</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    Earned whenever your song is played publicly. This includes radio, streaming services (Spotify, Apple Music), live venues, restaurants, and TV broadcasts.
                                </p>
                                <div className="text-xs font-mono bg-secondary/50 p-2 rounded text-muted-foreground">
                                    Collected by: PROs (ASCAP, BMI, PRS)
                                </div>
                            </motion.div>

                            {/* Mechanical */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass-panel p-8 rounded-3xl border border-border hover:border-neon-blue/30 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue group-hover:scale-110 transition-transform">
                                    <Disc className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Mechanical</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    Generated when your song is reproduced. This happens when a user streams a song on-demand (interactive streaming) or buys a physical/digital copy.
                                </p>
                                <div className="text-xs font-mono bg-secondary/50 p-2 rounded text-muted-foreground">
                                    Collected by: MLC, Harry Fox Agency
                                </div>
                            </motion.div>

                            {/* Sync */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="glass-panel p-8 rounded-3xl border border-border hover:border-pink-500/30 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 text-pink-500 group-hover:scale-110 transition-transform">
                                    <Film className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Sync</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    Fees paid when your music is "synchronized" with visual media like movies, TV shows, commercials, or video games. These are often negotiated upfront.
                                </p>
                                <div className="text-xs font-mono bg-secondary/50 p-2 rounded text-muted-foreground">
                                    Collected by: Publishers / Direct Deal
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Registration & Split Sheets */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <FileSpreadsheet className="w-8 h-8 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Why Split Sheets Matter</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        A split sheet is a written agreement between collaborators that specifies each person's ownership percentage. Without this, you can't register your song properly, and royalties will be stuck in limbo. Pitchlyric automates this for every collaboration.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Building className="w-8 h-8 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">How to Register Songs</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To get paid, your song must be registered with a PRO (Performance Rights Organization) and often a mechanical rights administrator. You'll need the ISRC code (for the recording) and ISWC code (for the composition).
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* PRO Map / List */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel rounded-3xl p-8 border border-border bg-secondary/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Globe2 className="w-6 h-6 text-foreground" />
                                <h3 className="text-xl font-bold">PRO Membership Worldwide</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">
                                You need to join a PRO in your country to collect performance royalties. They have reciprocal agreements to collect for you globally.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { country: "USA", orgs: "ASCAP, BMI, SESAC" },
                                    { country: "UK", orgs: "PRS for Music" },
                                    { country: "Canada", orgs: "SOCAN" },
                                    { country: "Germany", orgs: "GEMA" },
                                    { country: "France", orgs: "SACEM" },
                                    { country: "Australia", orgs: "APRA AMCOS" },
                                    { country: "Nigeria", orgs: "MCSN" },
                                    { country: "South Africa", orgs: "SAMRO" },
                                ].map((item) => (
                                    <div key={item.country} className="p-3 rounded-xl bg-background/50 border border-border">
                                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.country}</div>
                                        <div className="font-semibold text-foreground">{item.orgs}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
