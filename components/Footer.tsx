import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 px-2 md:px-3 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-neon-purple to-neon-blue rounded-md flex items-center justify-center text-white text-xs font-bold">
                        P
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground">Pitchlyric</span>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Pitchlyric AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
