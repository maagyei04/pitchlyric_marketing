"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Diverse portraits: Lyricists & Artist/Singer-style Unsplash avatars
const PARTICIPANT_IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80",
        label: "Lyricist",
    },
    {
        src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80",
        label: "Singer",
    },
    {
        src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80",
        label: "Artist",
    },
    {
        src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=400&q=80",
        label: "Producer",
    },
    {
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80",
        label: "Vocalist",
    },
];

// Decorative scatter effect for floating images
const RANDOM_FLOAT_POSITIONS = [
    { top: "-24px", left: "70%", size: "64", rotate: "-12deg", z: 10 },
    { top: "56%", left: "86%", size: "52", rotate: "10deg", z: 20 },
    { top: "78%", left: "4%", size: "54", rotate: "16deg", z: 30 },
    { top: "14%", left: "-28px", size: "59", rotate: "-8deg", z: 10 },
];

// Problem & Solution data
const problems = [
    "High studio costs for professional demos",
    "Limited access to skilled vocalists and producers",
    "Lyrics presented as text are typically overlooked",
    "Inefficient, informal outreach gets ignored",
];

const solutions = [
    "Instant, affordable demo creation with AI",
    "AI-powered vocalists and instrumentation",
    "Deliver industry-standard, polished audio pitches",
    "Analytics to monitor pitch engagement",
];

function FloatingAvatars() {
    // Use only up to the available float positions
    return (
        <>
            {PARTICIPANT_IMAGES.slice(1, RANDOM_FLOAT_POSITIONS.length + 1).map((img, idx) => {
                const pos = RANDOM_FLOAT_POSITIONS[idx];
                return (
                    <motion.div
                        key={img.src}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 0.8, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2 + idx * 0.07,
                            duration: 0.7,
                        }}
                        style={{
                            position: "absolute",
                            top: pos.top,
                            left: pos.left,
                            width: `${pos.size}px`,
                            height: `${pos.size}px`,
                            transform: `rotate(${pos.rotate})`,
                            zIndex: pos.z,
                            pointerEvents: "none",
                            filter: "drop-shadow(0 3px 9px rgba(70,70,100,0.11)) blur(.1px)",
                        }}
                        aria-hidden="true"
                    >
                        <Image
                            src={img.src}
                            alt={img.label}
                            width={parseInt(pos.size)}
                            height={parseInt(pos.size)}
                            className="rounded-full border-2 border-primary/10 object-cover shadow-md opacity-80 hover:opacity-100 duration-200 transition"
                            style={{
                                width: `${pos.size}px`,
                                height: `${pos.size}px`,
                                background: "rgba(255,255,255,0.6)",
                                objectFit: "cover",
                            }}
                            draggable={false}
                            priority={idx === 0}
                        />
                        <span className="block text-[11px] text-center text-muted-foreground mt-1 font-mono">{img.label}</span>
                    </motion.div>
                );
            })}
        </>
    );
}

function MainAvatar() {
    // Use the main lyricist image, centered and slightly raised
    return (
        <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center"
            aria-hidden="false"
            style={{ zIndex: 40 }}
        >
            <div className="relative flex flex-col items-center">
                {/* Glowy attention ring, animated */}
                <motion.div
                    initial={{ scale: 0.85, opacity: 0.74 }}
                    animate={{ scale: [0.95, 1.04, 0.97], opacity: [0.74, 1, 0.74] }}
                    transition={{ duration: 2.1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 w-44 h-44"
                    style={{ zIndex: 2 }}
                >
                    <div className="absolute inset-0 rounded-full ring-4 ring-primary/10 blur-md pointer-events-none" />
                </motion.div>
                {/* Main avatar */}
                <Image
                    src={PARTICIPANT_IMAGES[0].src}
                    alt="Lyricist"
                    width={160}
                    height={160}
                    className="
            w-40 h-40 object-cover rounded-full shadow-lg border-4 border-background/80 dark:border-white/10
            bg-muted/70 opacity-90 hover:opacity-100 transition duration-300
          "
                    style={{
                        boxShadow: "0 8px 32px 0 rgba(96,86,140,0.19)",
                        zIndex: 50,
                    }}
                    draggable={false}
                    priority
                />
                {/* Avatar label, with slight neon glow */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
            bg-background/90 dark:bg-card/85
            text-xs font-bold px-4 py-2 rounded-full shadow border border-border text-primary/90 
            tracking-wide ring-1 ring-primary/30"
                    style={{
                        zIndex: 55,
                        boxShadow: "0 1.5px 12px 0 rgba(95, 98, 170, 0.15)",
                    }}
                >
                    Lyricist
                </div>
            </div>
        </motion.div>
    );
}

// Standalone horizontal card for each problem or solution
function ProblemOrSolutionCard({
    text,
    icon,
    isSolution,
    className = "",
    iconClass = "",
}: {
    text: string;
    icon: React.ReactNode;
    isSolution?: boolean;
    className?: string;
    iconClass?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: isSolution ? 22 : -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`
                flex items-center gap-3 md:gap-5
                py-4 md:py-5 px-4 md:px-6
                rounded-xl md:rounded-2xl border
                ${isSolution
                    ? "border-green-300/40 bg-green-50/40 dark:bg-green-950/15"
                    : "border-destructive/10 bg-muted/30 dark:bg-muted/20"}
                shadow-md md:shadow-lg transition-all
                ${className}
            `}
        >
            <span className={`flex-shrink-0 rounded-full p-2 md:p-2.5 ${isSolution ? 'bg-green-100 dark:bg-green-400/10' : 'bg-muted'} ${iconClass}`}>
                {icon}
            </span>
            <span className={`text-base md:text-lg font-medium text-foreground`}>
                {text}
            </span>
        </motion.div>
    );
}

export default function ProblemSolution() {
    return (
        <section className="py-12 md:py-28 px-2 md:px-0 relative overflow-visible bg-gradient-to-br from-background via-background/80 to-white/50 dark:from-background dark:to-background">
            {/* Blurred highlight + floating avatars */}
            <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
                <div className="absolute left-1/2 top-14 -translate-x-1/2 w-[630px] h-[260px] bg-gradient-to-b from-primary/14 to-white/0 dark:from-primary/22 blur-3xl rounded-full" />
                {/* Decorative floating avatars */}
                <FloatingAvatars />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 px-2 sm:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-5 text-foreground tracking-tight drop-shadow-sm">
                        Addressing the Lyricist&apos;s Bottleneck
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
                        Most songwriters can’t access professional demos, and their lyrics are seldom noticed by industry professionals. Pitchlyric connects lyricists and singers, closing the gap with tech-forward solutions.
                    </p>
                </motion.div>

                {/* Desktop/tablet: avatar cluster at top, then standalone horizontal cards */}
                <div className="hidden md:block w-full">
                    <div className="flex items-center justify-center gap-11 mb-14">
                        <div className="relative flex flex-col items-center justify-center min-w-[220px] min-h-[300px] py-4">
                            <MainAvatar />
                            <div className="flex flex-row gap-3 mt-10">
                                {PARTICIPANT_IMAGES.slice(1).map((img, i) => (
                                    <motion.div
                                        key={img.src}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 0.88, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.04 + i * 0.07,
                                            duration: 0.5,
                                        }}
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            width={48}
                                            height={48}
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20 object-cover shadow bg-card/70"
                                            draggable={false}
                                        />
                                        <span className="text-[10px] mt-1 text-muted-foreground">{img.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Standalone problem/solution cards in two columns (desktop/tablet) */}
                    <div className="grid grid-cols-2 gap-7">
                        <div className="flex flex-col gap-5">
                            {problems.map((problem, idx) => (
                                <ProblemOrSolutionCard
                                    key={problem}
                                    text={problem}
                                    icon={<XCircle className="w-5 h-5 text-destructive" />}
                                    isSolution={false}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-5">
                            {solutions.map((solution, idx) => (
                                <ProblemOrSolutionCard
                                    key={solution}
                                    text={solution}
                                    icon={<CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />}
                                    isSolution
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile: stacked avatars and vertical cards */}
                <div className="md:hidden flex flex-col items-center gap-7 mt-0 mb-2">
                    <div className="relative flex flex-col items-center mt-2">
                        <Image
                            src={PARTICIPANT_IMAGES[0].src}
                            alt="Lyricist"
                            width={112}
                            height={112}
                            className="
                w-28 h-28 object-cover rounded-full shadow border-4 border-white dark:border-background
                bg-muted/60 opacity-90 hover:opacity-100 transition duration-300
              "
                            draggable={false}
                        />
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-2 bg-card/90 dark:bg-background/80
              text-xs px-2 py-1 rounded-full font-semibold text-muted-foreground border border-border shadow-sm"
                        >
                            Lyricist
                        </div>
                        {/* Floating mini avatars, staggered on mobile */}
                        <div className="flex flex-row gap-2 mt-5">
                            {PARTICIPANT_IMAGES.slice(1).map((img, i) => (
                                <motion.div
                                    key={img.src}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 0.88, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.02 + i * 0.07,
                                        duration: 0.44,
                                    }}
                                    className="flex flex-col items-center"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.label}
                                        width={36}
                                        height={36}
                                        className="w-9 h-9 rounded-full border border-primary/20 object-cover bg-card/70"
                                        draggable={false}
                                    />
                                    <span className="text-[10px] mt-0.5 text-muted-foreground">{img.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Standalone cards stacked vertically */}
                    <div className="w-full flex flex-col gap-3 mt-7">
                        {problems.map((problem, idx) => (
                            <ProblemOrSolutionCard
                                key={problem}
                                text={problem}
                                icon={<XCircle className="w-5 h-5 text-destructive" />}
                            />
                        ))}
                        <div className="h-2" />
                        {solutions.map((solution, idx) => (
                            <ProblemOrSolutionCard
                                key={solution}
                                text={solution}
                                icon={<CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />}
                                isSolution
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
