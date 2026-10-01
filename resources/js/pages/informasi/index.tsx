import { Link } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import type { SiteData } from '@/types/site';

interface BeritaCard {
    judul: string;
    slug: string;
    excerpt: string | null;
    cover_url: string | null;
    kategori: { nama: string; slug: string } | null;
    tanggal: string;
    url: string;
}

interface PengumumanCard {
    judul: string;
    slug: string;
    excerpt: string | null;
    cover_url: string | null;
    tanggal: string;
    url: string;
}

interface KategoriItem {
    nama: string;
    slug: string;
}

interface Paginator<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    prev_page_url: string | null;
    next_page_url: string | null;
}

interface PageProps {
    tab: 'berita' | 'pengumuman';
    berita: Paginator<BeritaCard>;
    pengumuman: Paginator<PengumumanCard>;
    kategoris: KategoriItem[];
    activeKategori: string | null;
    counts: { berita: number; pengumuman: number };
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
    site: SiteData;
}

function tabHref(
    tab: string,
    opts: {
        kategori?: string | null;
        beritaPage?: number;
        pengumumanPage?: number;
    },
) {
    const params = new URLSearchParams();
    params.set('tab', tab);
    if (opts.kategori) params.set('kategori', opts.kategori);
    if (opts.beritaPage && opts.beritaPage > 1)
        params.set('berita_page', String(opts.beritaPage));
    if (opts.pengumumanPage && opts.pengumumanPage > 1)
        params.set('pengumuman_page', String(opts.pengumumanPage));
    const qs = params.toString();
    return qs ? `/informasi?${qs}` : '/informasi';
}

function Pagination({
    label,
    current,
    last,
    prev,
    next,
}: {
    label: string;
    current: number;
    last: number;
    prev: string | null;
    next: string | null;
}) {
    if (last <= 1) return null;
    return (
        <nav
            aria-label={label}
            className="mt-8 flex items-center justify-center gap-2"
        >
            {prev && (
                <Link
                    href={prev}
                    className="rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium dark:border-[#3E3E3A]"
                >
                    Sebelumnya
                </Link>
            )}
            <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                Halaman {current} dari {last}
            </span>
            {next && (
                <Link
                    href={next}
                    className="rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium dark:border-[#3E3E3A]"
                >
                    Berikutnya
                </Link>
            )}
        </nav>
    );
}

export default function InformasiIndex({
    tab,
    berita,
    pengumuman,
    kategoris,
    activeKategori,
    counts,
    desa,
    meta,
    site,
}: PageProps) {
    const desaName = desa?.name ?? 'Desa';
    const isBerita = tab !== 'pengumuman';

    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <section className="w-full bg-desa-900/95 px-4 py-10 text-white sm:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <p className="text-sm text-white/70">
                        Informasi — {desaName}
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight">
                        Informasi {desaName}
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
                        Satu pintu informasi {desaName}: arsip berita terkini
                        dan pengumuman resmi perangkat desa.
                    </p>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6">
                <div
                    role="tablist"
                    aria-label="Jenis informasi"
                    className="mb-8 flex flex-wrap gap-2"
                >
                    <Link
                        href={tabHref('berita', {
                            kategori: activeKategori,
                        })}
                        role="tab"
                        aria-selected={isBerita}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            isBerita
                                ? 'border-transparent bg-desa-900 text-white'
                                : 'border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]'
                        }`}
                    >
                        Berita Desa ({counts.berita})
                    </Link>
                    <Link
                        href={tabHref('pengumuman', {})}
                        role="tab"
                        aria-selected={!isBerita}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            !isBerita
                                ? 'border-transparent bg-desa-900 text-white'
                                : 'border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]'
                        }`}
                    >
                        Pengumuman ({counts.pengumuman})
                    </Link>
                </div>

                {isBerita ? (
                    <div role="tabpanel" aria-label="Berita desa">
                        {kategoris.length > 0 && (
                            <nav
                                aria-label="Filter kategori"
                                className="mb-8 flex flex-wrap gap-2"
                            >
                                <Link
                                    href={tabHref('berita', {})}
                                    aria-current={
                                        activeKategori ? undefined : 'page'
                                    }
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
                                        href={tabHref('berita', {
                                            kategori: kategori.slug,
                                        })}
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
                        )}
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
                        ) : (
                            <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                Belum ada berita
                                {activeKategori
                                    ? ' pada kategori ini.'
                                    : ' yang diterbitkan.'}
                            </p>
                        )}
                        <Pagination
                            label="Paginasi berita"
                            current={berita.current_page}
                            last={berita.last_page}
                            prev={berita.prev_page_url}
                            next={berita.next_page_url}
                        />
                    </div>
                ) : (
                    <div role="tabpanel" aria-label="Pengumuman">
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
                        <Pagination
                            label="Paginasi pengumuman"
                            current={pengumuman.current_page}
                            last={pengumuman.last_page}
                            prev={pengumuman.prev_page_url}
                            next={pengumuman.next_page_url}
                        />
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
