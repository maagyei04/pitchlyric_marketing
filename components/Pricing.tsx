"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-8 px-2 md:px-3 bg-gradient-to-b from-background to-secondary/20">
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
                        <h3 className="text-xl font-medium text-muted-foreground mb-2">Starter</h3>
                        <div className="text-4xl font-bold mb-6 text-foreground">Free</div>
                        <p className="text-muted-foreground mb-8 text-sm">Perfect for trying out the magic of AI composition.</p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "5 Free Demo Generations",
                                "Notes Workspace",
                                "Limited Pitch Tracking",
                                "Marketplace Browsing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground">
                                    <Check className="w-5 h-5 text-muted-foreground" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 rounded-full border border-border hover:bg-secondary transition-colors font-medium text-foreground">
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

                        <h3 className="text-xl font-medium text-neon-purple mb-2">Pro Artist</h3>
                        <div className="text-4xl font-bold mb-6 text-foreground">$15<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                        <p className="text-muted-foreground mb-8 text-sm">For serious songwriters who want to sell.</p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Unlimited Demos",
                                "Unlimited Pitch Tracking",
                                "Marketplace Listing",
                                "Full Analytics",
                                "Priority Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground">
                                    <Check className="w-5 h-5 text-neon-purple" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium hover:shadow-lg hover:shadow-neon-purple/25 transition-all">
                            Upgrade to Pro
                        </button>
                    </motion.div>
                </div>

                <div className="mt-12 text-center text-muted-foreground text-sm">
                    * Marketplace Commission: 15% on successful sales.
                </div>
            </div>
        </section>
    );
}
