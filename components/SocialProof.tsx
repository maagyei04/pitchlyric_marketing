export default function SocialProof() {
    const logos = ["Sony Music", "Universal", "Spotify", "Warner Music", "SoundCloud"];

    return (
        <section className="py-12 border-y border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">Trusted by songwriters at</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale">
                    {logos.map((logo) => (
                        <span key={logo} className="text-xl md:text-2xl font-bold text-white/40 hover:text-white/80 transition-colors cursor-default">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
