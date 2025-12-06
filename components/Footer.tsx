import Link from "next/link";
import Image from "next/image";
import PitchlyricIcon from '../app/pitchlyric.png';
import { Twitter, Instagram, Music2 } from "lucide-react"; // Assuming lucide-react is available or similar icons

export default function Footer() {
    return (
        <footer className="py-8 px-4 md:px-6 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Top Section: Logo and Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Image src={PitchlyricIcon} alt='Pitchlyric icon' width={32} height={32} className="object-contain rounded-xl" />
                        <span className="text-xl font-bold tracking-tight text-foreground">Pitchlyric</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://x.com/pitchlyric" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">X (Twitter)</span>
                        </Link>
                        <Link href="https://www.instagram.com/pitchlyricapp" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.tiktok.com/@pitchlyricapp" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Music2 className="h-5 w-5" />
                            <span className="sr-only">TikTok</span>
                        </Link>
                    </div>
                </div>

                {/* Middle Section: Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-muted-foreground">
                    <Link href="/licensing" className="hover:text-foreground transition-colors">Licensing</Link>
                    <Link href="/royalties" className="hover:text-foreground transition-colors">Royalties</Link>
                    <Link href="/safety" className="hover:text-foreground transition-colors">Safety</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="border-t border-border pt-8 text-center md:text-left text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Pitchlyric. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
