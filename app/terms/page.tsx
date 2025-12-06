"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ScrollText, ShieldCheck, Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 px-4 bg-background relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-medium text-muted-foreground mb-6"
                        >
                            <ScrollText className="w-4 h-4" />
                            Last Updated: December 2025
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Terms of Service
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground"
                        >
                            Please read these terms carefully before using Pitchlyric.
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
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            By accessing or using Pitchlyric, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                                        </p>
                                        <p>
                                            Pitchlyric provides a workspace for lyricists and songwriters to create, organize, and pitch their work. These terms govern your use of our software, website, and services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            <strong>Your Content:</strong> You retain 100% ownership of all lyrics, melodies, and original content you create or upload to Pitchlyric. We claim no ownership rights over your intellectual property.
                                        </p>
                                        <p>
                                            <strong>Platform License:</strong> By using Pitchlyric, you grant us a limited, non-exclusive license to host, store, and display your content solely for the purpose of providing our services to you (e.g., generating demos, displaying your portfolio).
                                        </p>
                                        <p>
                                            <strong>AI Generations:</strong> Rights regarding AI-generated audio and demos are subject to the specific terms of the AI models used. Generally, you own the rights to the composition (lyrics and melody) you input, while the specific audio recording rights may vary based on your subscription tier.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>You must not upload content that infringes on any third-party copyright.</li>
                                            <li>You must not use the platform for any illegal or unauthorized purpose.</li>
                                            <li>You must not transmit any worms, viruses, or code of a destructive nature.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <h2 className="text-2xl font-bold mb-4">4. Subscriptions and Payments</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Certain features of Pitchlyric are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
                                </p>
                                <p>
                                    You may cancel your subscription at any time. Upon cancellation, your access to premium features will continue until the end of your current billing period.
                                </p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="glass-panel p-8 rounded-3xl border border-border">
                            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    In no event shall Pitchlyric, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
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
