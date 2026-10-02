import { Link } from '@inertiajs/react';
import { CalendarDays } from 'lucide-react';
import PageHero from '@/components/page-hero';
import SegeraHadirPanel from '@/components/segera-hadir-panel';
import PublicLayout from '@/layouts/public-layout';
import type { MetaData, SchemaData, SiteData } from '@/types/site';

interface KegiatanCard {
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
    kegiatan: {
        data: KegiatanCard[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        prev_page_url: string | null;
        next_page_url: string | null;
    };
    desa: { name: string; slug: string } | null;
    meta: MetaData;
    schema?: SchemaData | null;
    site: SiteData;
}

export default function KegiatanIndex({
    kegiatan,
    desa,
    meta,
    schema,
    site,
}: PageProps) {
    const desaName = desa?.name ?? 'Desa';
    const pages: PaginatorMeta | null =
        kegiatan.last_page > 1
            ? {
                  current_page: kegiatan.current_page,
                  last_page: kegiatan.last_page,
                  per_page: kegiatan.per_page,
                  total: kegiatan.total,
              }
            : null;

    return (
        <PublicLayout meta={meta} schema={schema} site={site}>
            <PageHero
                eyebrow={`Informasi ${desaName}`}
                title={`Kegiatan ${desaName}`}
                site={site}
                laman="kegiatan"
                coverUrl={kegiatan.data[0]?.cover_url}
            />
            <div className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-10 sm:px-8">
                {kegiatan.data.length > 0 ? (
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {kegiatan.data.map((item) => (
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
                                        decoding="async"
                                    />
                                )}
                                <div className="flex flex-1 flex-col p-4">
                                    <p className="mb-2 flex items-center gap-2 text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-[#efedea] px-2 py-0.5 font-medium text-[#37352f] dark:bg-[#2a2a28] dark:text-[#E8E7E3]">
                                            <CalendarDays
                                                className="h-3 w-3"
                                                aria-hidden="true"
                                            />
                                            Kegiatan
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
                    <SegeraHadirPanel label="Kegiatan" />
                )}
                {pages && (
                    <nav
                        aria-label="Paginasi kegiatan"
                        className="mt-8 flex items-center justify-center gap-2"
                    >
                        {kegiatan.prev_page_url && (
                            <Link
                                href={kegiatan.prev_page_url}
                                className="rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium dark:border-[#3E3E3A]"
                            >
                                Sebelumnya
                            </Link>
                        )}
                        <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            Halaman {pages.current_page} dari {pages.last_page}
                        </span>
                        {kegiatan.next_page_url && (
                            <Link
                                href={kegiatan.next_page_url}
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
