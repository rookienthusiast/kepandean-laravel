import type { ReactNode } from 'react';
import type { SiteData } from '@/types/site';

interface HeroSource {
    gambarUrl?: string | null;
    laman?: string | null;
    coverUrl?: string | null;
    heroLaman?: Record<string, string | null> | null;
    fallbackUrl?: string | null;
}

// Satu-satunya tempat aturan prioritas foto hero diputuskan: gambar
// eksplisit, hero kelolaan admin per laman, foto konten, foto sejarah.
export function resolveHeroUrl({
    gambarUrl,
    laman,
    coverUrl,
    heroLaman,
    fallbackUrl,
}: HeroSource): string | null {
    return (
        gambarUrl ??
        (laman ? (heroLaman?.[laman] ?? null) : null) ??
        coverUrl ??
        fallbackUrl ??
        null
    );
}

interface PageHeroProps {
    eyebrow: ReactNode;
    title: string;
    description?: ReactNode;
    site: SiteData;
    laman?: string | null;
    coverUrl?: string | null;
    gambarUrl?: string | null;
}

// Kepala hero statis tiap halaman dalam: foto asli halaman (atau foto
// sejarah sebagai cadangan), lapisan hijau tipis agar foto tetap hidup,
// dan ruang atas untuk navbar overlay yang transparan. Tinggi dikunci
// (min-h) agar rasio konsisten di semua laman, apa pun fotonya.
export default function PageHero({
    eyebrow,
    title,
    description,
    site,
    laman,
    coverUrl,
    gambarUrl,
}: PageHeroProps) {
    const resolved = resolveHeroUrl({
        gambarUrl,
        laman,
        coverUrl,
        heroLaman: site.hero_laman,
        fallbackUrl: site.hero_fallback_url,
    });

    return (
        <section className="relative flex min-h-[340px] items-center overflow-hidden bg-desa-900 text-white sm:min-h-[400px]">
            {resolved && (
                <img
                    src={resolved}
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-desa-900/50"
            />
            <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-28 pb-10 sm:px-8 sm:pt-32">
                <p className="text-sm text-white/70">{eyebrow}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight">
                    {title}
                </h1>
                {description && (
                    <div className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
                        {description}
                    </div>
                )}
            </div>
        </section>
    );
}
