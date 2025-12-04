"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Building2, Zap } from "lucide-react";

export default function Pricing() {
    const tiers = [
        {
            name: "Free",
            price: "$0",
            description: "Essential tools for hobbyists and beginners.",
            features: [
                "3 Lyrics Uploads",
                "3 AI Demos / Month",
                "Basic Profile",
                "Limited Pitches"
            ],
            cta: "Get Started",
            popular: false,
            icon: <Zap className="w-6 h-6 text-muted-foreground" />
        },
        {
            name: "Pro",
            price: "$19",
            period: "/mo",
            description: "For serious lyricists ready to monetize.",
            features: [
                "Unlimited Lyrics",
                "15 AI Demos / Month",
                "Featured in Search",
                "Advanced Analytics",
                "Commission Discount"
            ],
            cta: "Go Pro",
            popular: true,
            gradient: "from-neon-purple to-neon-blue",
            icon: <Sparkles className="w-6 h-6 text-white" />
        },
        {
            name: "Business",
            price: "Custom",
            description: "For Labels, A&Rs, and Publishers.",
            features: [
                "Unlimited Downloads",
                "Unlimited Scouting",
                "Team Members",
                "Priority Listing",
                "Custom Contracts"
            ],
            cta: "Contact Sales",
            popular: false,
            icon: <Building2 className="w-6 h-6 text-primary" />
        }
    ];

    return (
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Simple, Transparent Pricing</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Choose the plan that fits your creative journey. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative glass-panel rounded-3xl p-8 border flex flex-col h-full ${tier.popular
                                ? "border-neon-purple/50 bg-secondary/10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] scale-105 z-10"
                                : "border-border hover:border-primary/30 transition-colors"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${tier.popular ? "bg-gradient-to-br from-neon-purple to-neon-blue shadow-lg" : "bg-secondary"
                                    }`}>
                                    {tier.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? "text-neon-purple" : "text-foreground"}`}>{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                                        <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-neon-purple" : "text-muted-foreground"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-200 ${tier.popular
                                    ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:shadow-lg hover:shadow-neon-purple/25 hover:scale-[1.02]"
                                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-transparent hover:border-primary/20"
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground text-sm">
                        Need a custom enterprise solution? <a href="#" className="text-primary hover:underline">Contact our sales team</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
