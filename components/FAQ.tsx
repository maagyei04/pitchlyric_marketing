"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does licensing work?",
        answer: "Licensing on Pitchlyric is simple and transparent. When an artist or label wants to use your lyrics, they purchase a license directly through the platform. We offer standard licenses (Non-Exclusive, Exclusive, and Buyout) that define usage rights, royalties, and upfront fees. You retain full control over which license types you offer for each track."
    },
    {
        question: "How do royalties work?",
        answer: "Royalties are split based on the license agreement. For most standard licenses, you (the lyricist) retain a percentage of the publishing rights (typically 50% of the writer's share). When the song generates revenue on streaming platforms, PROs (Performance Rights Organizations) collect and distribute your share directly to you. Pitchlyric also provides tools to help you register your works."
    },
    {
        question: "Do lyricists keep ownership?",
        answer: "Yes! By default, you retain 100% ownership of your lyrics until you sell them. Even with non-exclusive licenses, you keep ownership while granting others permission to use the work. Only in a 'Full Buyout' scenario would you transfer complete ownership to the buyer, usually for a higher one-time fee."
    },
    {
        question: "Can artists use lyrics commercially?",
        answer: "Absolutely. Once an artist purchases a license, they are legally permitted to record, release, and monetize the song commercially according to the terms of that license. Our smart contracts ensure that both parties are protected and that the scope of commercial use is clearly defined."
    },
    {
        question: "How safe are my lyrics?",
        answer: "Security is our top priority. All lyrics uploaded to Pitchlyric are timestamped and stored securely. We use advanced encryption and can generate blockchain-backed certificates of authenticity to prove your original authorship date, protecting you against theft and plagiarism."
    },
    {
        question: "What happens after I license lyrics?",
        answer: "After a license is purchased, the buyer instantly receives the necessary files (lyrics, demo audio, stems) and the legal agreement. You receive a notification and the payment is credited to your wallet. The platform then tracks the usage status, and you can monitor the song's progress from your dashboard."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need to know about rights, royalties, and the platform.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-primary text-white" : "bg-secondary text-muted-foreground"
                                    }`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        Still have questions? <a href="mailto:support@pitchlyric.com" className="text-primary hover:underline font-medium">Chat with our team</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
