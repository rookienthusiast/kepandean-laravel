import type { ReactNode } from 'react';

interface PageHeroProps {
    eyebrow: ReactNode;
    title: string;
    description?: ReactNode;
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
    gambarUrl,
}: PageHeroProps) {
    return (
        <section className="relative flex min-h-[340px] items-center overflow-hidden bg-desa-900 text-white sm:min-h-[400px]">
            {gambarUrl && (
                <img
                    src={gambarUrl}
                    alt=""
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-desa-900/50"
            />
            <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-10 sm:px-6 sm:pt-32">
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
