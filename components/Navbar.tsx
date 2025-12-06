"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";
import * as React from "react";

import Modal from "./Modal";
import Image from "next/image";

import PitchlyricIcon from '../app/pitchlyric.png';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-2 md:px-4 py-3 transition-all duration-300">
                <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-3 md:px-6 py-2 flex items-center justify-between gap-4">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-tr from-neon-purple via-neon-blue to-sky-400 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-primary/40 transition-all group-hover:scale-105">
                            <Image src={PitchlyricIcon} alt='Pitchlyric icon' style={{ width: '100%', height: '100%' }} className="object-contain rounded-xl" />
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
                            Pitchlyric
                            <span className="ml-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-semibold border border-primary/20 animate-pulse">
                                Beta
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10 text-base font-medium">
                        <Link
                            href="#features"
                            className="px-2 py-1 rounded-md transition-all hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="px-2 py-1 rounded-md transition-all hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#pricing"
                            className="px-2 py-1 rounded-md transition-all hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Actions: Theme + CTA + Mobile menu */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full border border-transparent hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-foreground"
                                aria-label="Toggle theme"
                                tabIndex={0}
                            >
                                {theme === "dark" ? (
                                    <Sun className="w-5 h-5 transition-colors" />
                                ) : (
                                    <Moon className="w-5 h-5 transition-colors" />
                                )}
                            </button>
                        )}
                        {/* Show Early Access button only on desktop (md and up) */}
                        <button
                            className="hidden md:inline-block relative font-semibold text-sm px-5 py-2 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-gray-800 shadow-lg hover:from-gray-400 hover:via-gray-200 hover:to-gray-400 hover:scale-105 active:scale-100 transition-all duration-150 outline-none ring-0 hover:ring-2 hover:ring-gray-400/40
                            dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 dark:text-gray-100 dark:hover:from-gray-700 dark:hover:via-gray-500 dark:hover:to-gray-700"
                            tabIndex={0}
                            onClick={() => setShowModal(true)}
                        >
                            <span className="relative z-10">Get Early Access</span>
                            <span className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none opacity-20 bg-gray-500 blur"></span>
                        </button>
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors text-foreground"
                            tabIndex={0}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMobileOpen((open) => !open)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                {/* Mobile Nav Overlay */}
                <div
                    className={`fixed top-[64px] inset-x-0 z-40 md:hidden bg-background/95 backdrop-blur transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-40 pointer-events-none opacity-0"
                        } shadow-lg border-b border-border`}
                >
                    <div className="flex flex-col text-lg font-medium px-7 py-5 gap-2 animate-in fade-in">
                        <Link
                            href="#features"
                            className="py-2 px-2 rounded-md transition-all hover:bg-primary/10 hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="py-2 px-2 rounded-md transition-all hover:bg-primary/10 hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#pricing"
                            className="py-2 px-2 rounded-md transition-all hover:bg-primary/10 hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                        >
                            Pricing
                        </Link>
                        {/* Mobile Early Access CTA */}
                        <button
                            className="mt-4 relative font-semibold text-base px-5 py-3 rounded-full bg-gradient-to-r from-primary/90 to-neon-blue text-background shadow-lg hover:from-primary hover:to-neon-purple hover:scale-105 active:scale-100 transition-all duration-150 outline-none ring-0 hover:ring-2 hover:ring-primary/40"
                            tabIndex={0}
                            onClick={() => {
                                setMobileOpen(false);
                                setShowModal(true);
                            }}
                        >
                            <span className="relative z-10">Get Early Access</span>
                            <span className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none opacity-20 bg-primary blur"></span>
                        </button>
                    </div>
                </div>
            </nav>
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                url="https://melon.fillout.com/pitchlyric"
            />
        </>
    );
}
