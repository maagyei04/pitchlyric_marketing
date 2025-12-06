"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, Eye, Database, Share2 } from "lucide-react";

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 px-4 bg-background relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1000px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-medium text-muted-foreground mb-6"
                        >
                            <Lock className="w-4 h-4" />
                            Last Updated: December 2025
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground"
                        >
                            How we collect, use, and protect your data.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-12"
                    >
                        {/* Section 1 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Personal Information:</strong> Name, email address, and payment information.</li>
                                            <li><strong>Content:</strong> Lyrics, audio files, and other creative materials you upload.</li>
                                            <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0">
                                    <Eye className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            We use the information we collect to:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Provide, maintain, and improve our services.</li>
                                            <li>Process transactions and send related information.</li>
                                            <li>Send you technical notices, updates, security alerts, and support messages.</li>
                                            <li>Respond to your comments, questions, and requests.</li>
                                            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <Share2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">3. Sharing of Information</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            We do not share your personal information with third parties except as described in this privacy policy. We may share your information with:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Service Providers:</strong> Vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                                            <li><strong>Legal Requirements:</strong> If we believe disclosure is in accordance with, or required by, any applicable law or legal process.</li>
                                            <li><strong>Consent:</strong> With your consent or at your direction.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. Your creative content is encrypted at rest and in transit.
                                </p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account settings or by contacting us directly.
                                </p>
                            </div>
                        </section>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
