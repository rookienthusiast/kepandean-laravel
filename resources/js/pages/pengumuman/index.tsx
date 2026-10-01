import { Link } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import type { SiteData } from '@/types/site';

interface PengumumanCard {
    judul: string;
    slug: string;
    excerpt: string | null;
    cover_url: string | null;
    tanggal: string;
    url: string;
}

interface PaginatorMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface PageProps {
    pengumuman: {
        data: PengumumanCard[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        prev_page_url: string | null;
        next_page_url: string | null;
    };
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
    site: SiteData;
}

export default function PengumumanIndex({
    pengumuman,
    desa,
    meta,
    site,
}: PageProps) {
    const desaName = desa?.name ?? 'Desa';
    const pages: PaginatorMeta | null =
        pengumuman.last_page > 1
            ? {
                  current_page: pengumuman.current_page,
                  last_page: pengumuman.last_page,
                  per_page: pengumuman.per_page,
                  total: pengumuman.total,
              }
            : null;

    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <section className="bg-desa-900/95 px-4 py-10 text-white sm:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <p className="text-sm text-white/70">
                        Informasi — {desaName}
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight">
                        Pengumuman {desaName}
                    </h1>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6">
                {pengumuman.data.length > 0 ? (
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {pengumuman.data.map((item) => (
                            <li
                                key={item.slug}
                                className="flex min-h-[44px] flex-col overflow-hidden rounded-md border border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]"
                            >
                                {item.cover_url && (
                                    <img
                                        src={item.cover_url}
                                        alt={`Cover ${item.judul}`}
                                        className="aspect-video w-full object-cover"
                                        loading="lazy"
                                    />
                                )}
                                <div className="flex flex-1 flex-col p-4">
                                    <p className="mb-2 flex items-center gap-2 text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-[#efedea] px-2 py-0.5 font-medium text-[#37352f] dark:bg-[#2a2a28] dark:text-[#E8E7E3]">
                                            <Megaphone
                                                className="h-3 w-3"
                                                aria-hidden="true"
                                            />
                                            Pengumuman
                                        </span>
                                        <time>{item.tanggal}</time>
                                    </p>
                                    <Link
                                        href={item.url}
                                        className="text-lg font-semibold underline-offset-4 hover:underline"
                                    >
                                        {item.judul}
                                    </Link>
                                    {item.excerpt && (
                                        <p className="mt-2 text-[15px] leading-7 text-[#706f6c] dark:text-[#A1A09A]">
                                            {item.excerpt}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] dark:border-[#3E3E3A] dark:bg-[#161615]">
                        Belum ada pengumuman yang diterbitkan.
                    </p>
                )}
                {pages && (
                    <nav
                        aria-label="Paginasi pengumuman"
                        className="mt-8 flex items-center justify-center gap-2"
                    >
                        {pengumuman.prev_page_url && (
                            <Link
                                href={pengumuman.prev_page_url}
                                className="rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium dark:border-[#3E3E3A]"
                            >
                                Sebelumnya
                            </Link>
                        )}
                        <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            Halaman {pages.current_page} dari {pages.last_page}
                        </span>
                        {pengumuman.next_page_url && (
                            <Link
                                href={pengumuman.next_page_url}
                                className="rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium dark:border-[#3E3E3A]"
                            >
                                Berikutnya
                            </Link>
                        )}
                    </nav>
                )}
            </div>
        </PublicLayout>
    );
}
