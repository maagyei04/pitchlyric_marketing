"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, FileText, DollarSign, Users, Lock, Scale, FileCheck, Landmark } from "lucide-react";

export default function LicensingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-neon-purple selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Contracting & Licensing
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Secure, transparent, and industry-standard agreements protecting every beat and lyric.
                            We handle the legal heavy lifting so you can focus on creating.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid gap-20">

                    {/* Exclusive vs Non-Exclusive */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Scale className="w-8 h-8 text-neon-purple" />
                                Exclusive vs. Non-Exclusive
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                                Understanding your rights is crucial. We offer flexible options to suit your career stage, whether you're looking for mass exposure or a high-value placement.
                            </p>
                            <ul className="space-y-6">
                                <li className="glass-panel p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <strong className="text-foreground text-lg">Non-Exclusive (Leasing)</strong>
                                        <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Most Common</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                        Perfect for rising artists. You can sell the same lyrics to multiple artists. You retain ownership, while artists get rights to use it for a specific release (e.g., up to 10,000 streams).
                                    </span>
                                </li>
                                <li className="glass-panel p-6 rounded-xl border border-neon-purple/30 bg-neon-purple/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <strong className="text-foreground text-lg">Exclusive Rights</strong>
                                        <span className="text-xs font-mono bg-neon-purple/20 text-neon-purple px-2 py-1 rounded">Premium</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                        The buyer obtains sole rights to the lyrics. The listing is instantly removed from the marketplace, and no one else can use it. This commands a much higher price point.
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-panel h-full min-h-[400px] rounded-3xl p-8 flex items-center justify-center bg-secondary/10 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                            <div className="text-center relative z-10">
                                <div className="flex justify-center gap-8 mb-8">
                                    <div className="w-24 h-32 bg-background border border-border rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 group hover:-translate-y-1 transition-transform">
                                        <Users className="w-8 h-8 text-blue-400" />
                                        <span className="text-xs font-medium text-muted-foreground">Lease</span>
                                        <div className="flex -space-x-2 mt-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-4 h-4 rounded-full bg-blue-400/20 border border-background" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-24 h-32 bg-background border border-neon-purple rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.2)] flex flex-col items-center justify-center gap-2 group hover:-translate-y-1 transition-transform">
                                        <div className="absolute -top-3 -right-3 bg-neon-purple text-white p-1.5 rounded-full shadow-sm">
                                            <Lock className="w-3 h-3" />
                                        </div>
                                        <Shield className="w-8 h-8 text-neon-purple" />
                                        <span className="text-xs font-medium text-muted-foreground">Exclusive</span>
                                        <span className="text-[10px] text-neon-purple font-bold">1 Owner</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                    Smart contracts automatically enforce terms, removing listings when exclusive rights are sold.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Work for Hire vs Royalty */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1 glass-panel h-full min-h-[400px] rounded-3xl p-8 flex items-center justify-center bg-secondary/10 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent" />
                            <div className="flex items-end gap-8 h-48 relative z-10">
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="text-sm font-medium text-muted-foreground">Upfront</div>
                                    <div className="w-20 bg-blue-500/20 border border-blue-500/50 h-32 rounded-t-xl relative overflow-hidden">
                                        <div className="absolute bottom-0 w-full bg-blue-500 h-[80%] opacity-80 group-hover:h-[85%] transition-all duration-500" />
                                    </div>
                                    <span className="text-xs font-mono text-blue-400">Work-for-Hire</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="text-sm font-medium text-muted-foreground">Long-term</div>
                                    <div className="w-20 bg-purple-500/20 border border-purple-500/50 h-32 rounded-t-xl relative overflow-hidden">
                                        <div className="absolute bottom-0 w-full bg-purple-500 h-[30%] opacity-80 group-hover:h-[90%] transition-all duration-700 delay-100" />
                                    </div>
                                    <span className="text-xs font-mono text-purple-400">Royalty %</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <FileText className="w-8 h-8 text-neon-blue" />
                                Work-for-Hire vs. Royalty-Based
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                                        Work-for-Hire
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        A simple, one-time flat fee structure. You get paid upfront for your services, but you typically give up all future royalties and ownership rights. This is great for immediate cash flow and simpler contracts.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                                        Royalty-Based
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You accept a lower upfront fee (or none) in exchange for keeping a percentage of the "backend" (publishing rights). If the song becomes a hit, you continue to earn for years. This is the standard for building long-term wealth in music.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-panel p-8 rounded-2xl border border-border hover:border-green-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileCheck className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Automated Split Sheets</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                No more messy emails or forgotten percentages. We automatically generate industry-standard split sheets detailing ownership for every collaborator involved in a track.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-8 rounded-2xl border border-border hover:border-yellow-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <DollarSign className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Instant Payments</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Funds are routed directly to your connected wallet or bank account immediately upon license purchase. Track every cent in your dashboard.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-panel p-8 rounded-2xl border border-border hover:border-red-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Landmark className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Escrow Protection</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                For custom high-value deals, funds are held in secure escrow until all files are delivered and approved, ensuring safety for both buyer and seller.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
