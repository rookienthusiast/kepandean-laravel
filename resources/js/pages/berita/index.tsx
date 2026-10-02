import { Link } from '@inertiajs/react';
import PageHero from '@/components/page-hero';
import SegeraHadirPanel from '@/components/segera-hadir-panel';
import PublicLayout from '@/layouts/public-layout';
import type { MetaData, SchemaData, SiteData } from '@/types/site';

interface BeritaCard {
    judul: string;
    slug: string;
    excerpt: string | null;
    cover_url: string | null;
    kategori: { nama: string; slug: string } | null;
    tanggal: string;
    url: string;
}

interface KategoriItem {
    nama: string;
    slug: string;
}

interface PaginatorMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface PageProps {
    berita: {
        data: BeritaCard[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        prev_page_url: string | null;
        next_page_url: string | null;
    };
    kategoris: KategoriItem[];
    activeKategori: string | null;
    desa: { name: string; slug: string } | null;
    meta: MetaData;
    schema?: SchemaData | null;
    site: SiteData;
}

export default function BeritaIndex({
    berita,
    kategoris,
    activeKategori,
    desa,
    meta,
    schema,
    site,
}: PageProps) {
    const desaName = desa?.name ?? 'Desa';
    const pages: PaginatorMeta | null =
        berita.last_page > 1
            ? {
                  current_page: berita.current_page,
                  last_page: berita.last_page,
                  per_page: berita.per_page,
                  total: berita.total,
              }
            : null;

    const pageHref = (page: number) => {
        const params = new URLSearchParams();

        if (activeKategori) {
            params.set('kategori', activeKategori);
        }

        params.set('page', String(page));

        return `/berita?${params.toString()}`;
    };

    return (
        <PublicLayout meta={meta} schema={schema} site={site}>
            <PageHero
                eyebrow={`Informasi ${desaName}`}
                title={`Berita ${desaName}`}
                site={site}
                laman="berita"
                coverUrl={berita.data[0]?.cover_url}
            />
            <div className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-10 sm:px-8">
                <nav
                    aria-label="Filter kategori"
                    className="mb-8 flex flex-wrap gap-2"
                >
                    <Link
                        href="/berita"
                        aria-current={activeKategori ? undefined : 'page'}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            activeKategori
                                ? 'border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]'
                                : 'border-transparent bg-desa-900 text-white'
                        }`}
                    >
                        Semua
                    </Link>
                    {kategoris.map((kategori) => (
                        <Link
                            key={kategori.slug}
                            href={`/berita?kategori=${kategori.slug}`}
                            aria-current={
                                activeKategori === kategori.slug
                                    ? 'page'
                                    : undefined
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-medium ${
                                activeKategori === kategori.slug
                                    ? 'border-transparent bg-desa-900 text-white'
                                    : 'border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]'
                            }`}
                        >
                            {kategori.nama}
                        </Link>
                    ))}
                </nav>
                {berita.data.length > 0 ? (
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {berita.data.map((item) => (
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
                                        {item.kategori && (
                                            <span className="rounded-full bg-[#efedea] px-2 py-0.5 font-medium dark:bg-[#2a2a28]">
                                                {item.kategori.nama}
                                            </span>
                                        )}
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
                ) : berita.total === 0 ? (
                    <SegeraHadirPanel label="Berita Desa" />
                ) : (
                    <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] dark:border-[#3E3E3A] dark:bg-[#161615]">
                        Belum ada berita
                        {activeKategori
                            ? ' pada kategori ini.'
                            : ' yang diterbitkan.'}
                    </p>
                )}
                {pages && (
                    <nav
                        aria-label="Paginasi berita"
                        className="mt-8 flex items-center justify-center gap-2"
                    >
                        {berita.prev_page_url && (
                            <Link
                                href={pageHref(pages.current_page - 1)}
                                className="rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium dark:border-[#3E3E3A]"
                            >
                                Sebelumnya
                            </Link>
                        )}
                        <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            Halaman {pages.current_page} dari {pages.last_page}
                        </span>
                        {berita.next_page_url && (
                            <Link
                                href={pageHref(pages.current_page + 1)}
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
