"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PenTool,
    Wand2,
    FileCheck,
    Globe,
    Send,
    FileSignature,
    DollarSign,
    BarChart3,
    Search,
    Headphones,
    Download,
    Music,
    Upload,
    CheckCircle2
} from "lucide-react";

const glass =
    "rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-visible transition-colors border backdrop-blur-[10px] bg-white/70 dark:bg-white/10 border-black/10 dark:border-white/15 shadow-2xl";

type Step = {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

const lyricistSteps: Step[] = [
    { id: "01", title: "Write & Upload", description: "Draft your lyrics or upload existing text files directly into the editor.", icon: <PenTool className="w-5 h-5" /> },
    { id: "02", title: "Generate AI Demo", description: "Transform your lyrics into a professional audio demo with AI vocals and production.", icon: <Wand2 className="w-5 h-5" /> },
    { id: "03", title: "Choose License", description: "Set your terms. Exclusive rights, leasing, or royalty splits—you decide.", icon: <FileCheck className="w-5 h-5" /> },
    { id: "04", title: "Publish", description: "List your demo on the marketplace for artists and labels to discover.", icon: <Globe className="w-5 h-5" /> },
    { id: "05", title: "Pitch", description: "Send tracked links directly to artists, A&Rs, and collaborators.", icon: <Send className="w-5 h-5" /> },
    { id: "06", title: "Sign Contract", description: "Secure digital agreements automatically when a deal is made.", icon: <FileSignature className="w-5 h-5" /> },
    { id: "07", title: "Get Paid", description: "Receive instant payments for licenses and advances directly to your wallet.", icon: <DollarSign className="w-5 h-5" /> },
    { id: "08", title: "Track Royalties", description: "Monitor your song's performance and earnings in real-time.", icon: <BarChart3 className="w-5 h-5" /> },
];

const artistSteps: Step[] = [
    { id: "01", title: "Browse Lyrics", description: "Search through a curated library of high-quality lyrics and concepts.", icon: <Search className="w-5 h-5" /> },
    { id: "02", title: "Listen to Demos", description: "Preview AI-generated references to hear the potential of the lyrics.", icon: <Headphones className="w-5 h-5" /> },
    { id: "03", title: "License Instantly", description: "Purchase rights immediately without lengthy negotiations.", icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: "04", title: "Download Metadata", description: "Get all the files: lyrics, audio stems, and copyright info.", icon: <Download className="w-5 h-5" /> },
    { id: "05", title: "Register Song", description: "Seamlessly register the work with PROs for royalty collection.", icon: <FileCheck className="w-5 h-5" /> },
    { id: "06", title: "Release", description: "Distribute your finished track to streaming platforms worldwide.", icon: <Upload className="w-5 h-5" /> },
];

export default function HowItWorks() {
    const [userType, setUserType] = useState<"lyricist" | "artist">("lyricist");
    const [activeIdx, setActiveIdx] = useState(0);

    const steps = userType === "lyricist" ? lyricistSteps : artistSteps;

    // Reset active index when switching tabs
    useEffect(() => {
        setActiveIdx(0);
    }, [userType]);

    return (
        <section
            id="how-it-works"
            className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">How It Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        Whether you write the words or sing them, Pitchlyric streamlines the process.
                    </p>

                    {/* Tab Switcher */}
                    <div className="inline-flex p-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
                        <button
                            onClick={() => setUserType("lyricist")}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${userType === "lyricist"
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            For Lyricists
                        </button>
                        <button
                            onClick={() => setUserType("artist")}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${userType === "artist"
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            For Artists/Labels
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Timeline / Steps List */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border hidden md:block">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-primary"
                                initial={{ height: "0%" }}
                                animate={{ height: `${(activeIdx / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="space-y-6 relative">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`group flex items-center gap-4 md:gap-6 cursor-pointer rounded-xl p-2 transition-colors ${activeIdx === i ? "bg-secondary/40" : "hover:bg-secondary/20"
                                        }`}
                                    onClick={() => setActiveIdx(i)}
                                >
                                    {/* Icon Bubble */}
                                    <div
                                        className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${activeIdx === i
                                            ? "border-primary bg-background text-primary shadow-[0_0_15px_rgba(155,92,246,0.3)] scale-110"
                                            : "border-muted bg-muted/30 text-muted-foreground group-hover:border-primary/50"
                                            }`}
                                    >
                                        {step.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h4 className={`font-semibold text-lg transition-colors ${activeIdx === i ? "text-primary" : "text-foreground"
                                            }`}>
                                            {step.title}
                                        </h4>
                                        <p className={`text-sm text-muted-foreground line-clamp-1 md:line-clamp-none ${activeIdx === i ? "opacity-100" : "opacity-70"
                                            }`}>
                                            {activeIdx === i ? step.description : ""}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Detail View (Sticky on Desktop) */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${userType}-${activeIdx}`}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={glass}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-primary">
                                        {steps[activeIdx].icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-mono text-primary mb-1">Step {steps[activeIdx].id}</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                            {steps[activeIdx].title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {steps[activeIdx].description}
                                </p>

                                {/* Dynamic Contextual Image/Graphic Placeholder */}
                                <div className="mt-8 w-full aspect-video rounded-xl bg-gradient-to-br from-secondary/50 to-background border border-border/50 flex items-center justify-center overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                                    <motion.div
                                        className="relative z-10 p-6 text-center"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className="text-4xl mb-2 block">
                                            {userType === 'lyricist' ? '🎵' : '🎧'}
                                        </span>
                                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                            {userType === 'lyricist' ? 'Lyricist Workflow' : 'Artist Workflow'}
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
