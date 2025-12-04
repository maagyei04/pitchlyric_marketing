"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Fingerprint, Gavel, AlertTriangle, FileWarning } from "lucide-react";

export default function SafetyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-neon-purple selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/5 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                            Safety & Copyright
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Your creativity is your currency. We use bank-grade security and advanced legal frameworks to protect it.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto space-y-20">

                    {/* Core Protection Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-3xl border border-border bg-secondary/5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Copyright Ownership</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You retain <strong className="text-foreground">100% ownership</strong> of your lyrics and compositions when you upload them to Pitchlyric. We do not take any ownership stake unless a specific publishing deal is signed. Uploading serves as a digital timestamp of your creation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-3xl border border-border bg-secondary/5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Secure Storage</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your lyrics are encrypted at rest and in transit. We use enterprise-grade cloud storage with strict access controls. Only users you explicitly grant access to (via pitching or licensing) can view your full content.
                            </p>
                        </motion.div>
                    </div>

                    {/* Advanced Measures */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10 text-center">Active Protection Measures</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-2xl border border-border"
                            >
                                <Fingerprint className="w-8 h-8 text-purple-500 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Plagiarism Detection</h3>
                                <p className="text-sm text-muted-foreground">
                                    Our system scans uploaded text against a vast database of existing lyrics to prevent infringement and certify originality.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass-panel p-6 rounded-2xl border border-border"
                            >
                                <FileWarning className="w-8 h-8 text-orange-500 mb-4" />
                                <h3 className="text-lg font-bold mb-2">Anti-Piracy Watermarking</h3>
                                <p className="text-sm text-muted-foreground">
                                    Audio demos are automatically watermarked with an audible tag until a license is purchased, preventing unauthorized use.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="glass-panel p-6 rounded-2xl border border-border"
                            >
                                <Gavel className="w-8 h-8 text-red-500 mb-4" />
                                <h3 className="text-lg font-bold mb-2">DMCA Compliance</h3>
                                <p className="text-sm text-muted-foreground">
                                    We strictly adhere to the Digital Millennium Copyright Act. We have a rapid response team for takedown requests and rights disputes.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Takedown Policy Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/20 rounded-3xl p-8 border border-border flex flex-col md:flex-row items-start gap-6"
                    >
                        <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-full text-red-500">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Takedown Policy</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you believe your work has been uploaded to Pitchlyric without your permission, you can submit a formal takedown request. We investigate all claims within 24 hours. Repeat infringers will have their accounts permanently banned.
                            </p>
                            <button className="text-sm font-semibold text-primary hover:underline">
                                Report a Violation &rarr;
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
