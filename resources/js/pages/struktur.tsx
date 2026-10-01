import { useState } from 'react';
import PageHero from '@/components/page-hero';
import PublicLayout from '@/layouts/public-layout';
import type { SiteData } from '@/types/site';

interface PejabatItem {
    nama: string;
    jabatan: string;
    wilayah_label: string | null;
    foto_url: string | null;
}

interface PejabatGroup {
    key: string;
    label: string;
    items: PejabatItem[];
}

interface PageProps {
    groups: PejabatGroup[];
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
    site: SiteData;
}

export default function Struktur({ groups, desa, meta, site }: PageProps) {
    const desaName = desa?.name ?? 'Desa';
    const [query, setQuery] = useState('');
    const q = query.trim().toLowerCase();

    const filtered = groups.map((group) => ({
        ...group,
        items: q
            ? group.items.filter(
                  (item) =>
                      item.nama.toLowerCase().includes(q) ||
                      (item.wilayah_label ?? '').toLowerCase().includes(q),
              )
            : group.items,
    }));

    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <PageHero
                eyebrow={`Profil ${desaName}`}
                title={`Struktur Organisasi ${desaName}`}
                site={site}
                laman="struktur"
            />
            <div className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-10 sm:px-8">
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari nama atau wilayah (mis. RW 05)…"
                    aria-label="Cari pejabat"
                    className="mb-8 w-full max-w-md rounded-md border border-[#e3e3e0] bg-white px-4 py-3 text-[15px] dark:border-[#3E3E3A] dark:bg-[#161615]"
                />
                {filtered.map((group) => (
                    <section
                        key={group.key}
                        aria-labelledby={`kelompok-${group.key}`}
                        className="mb-10"
                    >
                        <h2
                            id={`kelompok-${group.key}`}
                            className="mb-4 text-xl font-semibold"
                        >
                            {group.label}
                        </h2>
                        {group.items.length > 0 ? (
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {group.items.map((item) => (
                                    <li
                                        key={`${item.nama}-${item.jabatan}`}
                                        className="flex min-h-[88px] items-center gap-4 rounded-md border border-[#e3e3e0] bg-white p-4 dark:border-[#3E3E3A] dark:bg-[#161615]"
                                    >
                                        {item.foto_url ? (
                                            <img
                                                src={item.foto_url}
                                                alt={`Foto ${item.nama}`}
                                                className="h-14 w-14 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <span
                                                aria-hidden="true"
                                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#efedea] text-lg font-bold dark:bg-[#2a2a28]"
                                            >
                                                {item.nama.charAt(0)}
                                            </span>
                                        )}
                                        <div>
                                            <p className="font-semibold">
                                                {item.nama}
                                            </p>
                                            <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                                {item.jabatan}
                                            </p>
                                            {item.wilayah_label && (
                                                <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                                    {item.wilayah_label}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-[15px] text-[#706f6c] dark:text-[#A1A09A]">
                                {q
                                    ? 'Tidak ada hasil untuk pencarian ini.'
                                    : 'Data kelompok ini belum tersedia.'}
                            </p>
                        )}
                    </section>
                ))}
            </div>
        </PublicLayout>
    );
}
