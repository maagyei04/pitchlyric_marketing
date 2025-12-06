"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Simple Pricing</h2>
                    <p className="text-muted-foreground">Start for free. Upgrade when you&apos;re ready to scale.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Tier */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl border border-border"
                    >
                        <h3 className="text-xl font-medium text-muted-foreground mb-2">Free Plan</h3>
                        <div className="text-4xl font-bold mb-6 text-foreground">Free</div>
                        <p className="text-sm text-muted-foreground mb-6">Perfect for beginners or casual lyricists.</p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Limited lyric uploads",
                                "Basic portfolio tools",
                                "A small number of demo generations"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Pro Tier */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl border border-neon-purple/50 relative overflow-hidden bg-secondary/10"
                    >
                        <div className="absolute top-0 right-0 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                            POPULAR
                        </div>
                        <h3 className="text-xl font-medium text-neon-purple mb-2">Pro Plan</h3>
                        <div className="text-4xl font-bold mb-6 text-foreground">$15<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                        <p className="text-sm text-muted-foreground mb-6">For serious lyricists ready to pitch professionally.</p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Unlimited lyrics",
                                "Increased demo generations",
                                "Marketplace visibility",
                                "Advanced pitch analytics"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                                    <div className="w-5 h-5 rounded-full bg-neon-purple flex items-center justify-center text-white flex-shrink-0">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 rounded-xl bg-neon-purple text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-neon-purple/25">
                            Start Free Trial
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
