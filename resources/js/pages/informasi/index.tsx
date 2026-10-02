import { Link } from '@inertiajs/react';
import { CalendarDays, Megaphone } from 'lucide-react';
import PageHero from '@/components/page-hero';
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

interface PengumumanCard {
    judul: string;
    slug: string;
    excerpt: string | null;
    cover_url: string | null;
    tanggal: string;
    url: string;
}

interface KegiatanCard {
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
    tab: 'berita' | 'pengumuman' | 'kegiatan';
    berita: Paginator<BeritaCard>;
    pengumuman: Paginator<PengumumanCard>;
    kegiatan: Paginator<KegiatanCard>;
    kategoris: KategoriItem[];
    activeKategori: string | null;
    counts: { berita: number; pengumuman: number; kegiatan: number };
    desa: { name: string; slug: string } | null;
    meta: MetaData;
    schema?: SchemaData | null;
    site: SiteData;
}

function tabHref(
    tab: string,
    opts: {
        kategori?: string | null;
        beritaPage?: number;
        pengumumanPage?: number;
        kegiatanPage?: number;
    },
) {
    const params = new URLSearchParams();
    params.set('tab', tab);
    if (opts.kategori) params.set('kategori', opts.kategori);
    if (opts.beritaPage && opts.beritaPage > 1)
        params.set('berita_page', String(opts.beritaPage));
    if (opts.pengumumanPage && opts.pengumumanPage > 1)
        params.set('pengumuman_page', String(opts.pengumumanPage));
    if (opts.kegiatanPage && opts.kegiatanPage > 1)
        params.set('kegiatan_page', String(opts.kegiatanPage));
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
                    className="inline-flex min-h-[44px] items-center rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium text-slate-700 dark:border-[#3E3E3A] dark:text-slate-200"
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
                    className="inline-flex min-h-[44px] items-center rounded-md border border-[#e3e3e0] px-4 py-2 text-sm font-medium text-slate-700 dark:border-[#3E3E3A] dark:text-slate-200"
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
    kegiatan,
    kategoris,
    activeKategori,
    counts,
    desa,
    meta,
    schema,
    site,
}: PageProps) {
    const desaName = desa?.name ?? 'Desa';
    const isBerita = tab === 'berita';
    const isPengumuman = tab === 'pengumuman';

    return (
        <PublicLayout meta={meta} schema={schema} site={site}>
            <PageHero
                eyebrow={`Informasi ${desaName}`}
                title={`Informasi ${desaName}`}
                description={
                    <>
                        Satu pintu informasi {desaName}: arsip berita terkini,
                        pengumuman resmi, dan kegiatan perangkat desa.
                    </>
                }
                site={site}
                laman="informasi"
                coverUrl={
                    (isBerita
                        ? berita.data[0]
                        : isPengumuman
                          ? pengumuman.data[0]
                          : kegiatan.data[0]
                    )?.cover_url
                }
            />
            <div className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-10 sm:px-8">
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
                        className={`inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 text-sm font-medium ${
                            isBerita
                                ? 'border-transparent bg-emerald-800 text-white hover:bg-emerald-900'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                        }`}
                    >
                        Berita Desa ({counts.berita})
                    </Link>
                    <Link
                        href={tabHref('pengumuman', {})}
                        role="tab"
                        aria-selected={isPengumuman}
                        className={`inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 text-sm font-medium ${
                            isPengumuman
                                ? 'border-transparent bg-emerald-800 text-white hover:bg-emerald-900'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                        }`}
                    >
                        Pengumuman ({counts.pengumuman})
                    </Link>
                    <Link
                        href={tabHref('kegiatan', {})}
                        role="tab"
                        aria-selected={!isBerita && !isPengumuman}
                        className={`inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 text-sm font-medium ${
                            !isBerita && !isPengumuman
                                ? 'border-transparent bg-emerald-800 text-white hover:bg-emerald-900'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                        }`}
                    >
                        Kegiatan ({counts.kegiatan})
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
                                    className={`inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 text-sm font-medium ${
                                        activeKategori
                                            ? 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                                            : 'border-transparent bg-emerald-800 text-white hover:bg-emerald-900'
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
                                        className={`inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 text-sm font-medium ${
                                            activeKategori === kategori.slug
                                                ? 'border-transparent bg-emerald-800 text-white hover:bg-emerald-900'
                                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
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
                                                decoding="async"
                                            />
                                        )}
                                        <div className="flex flex-1 flex-col p-4">
                                            <p className="mb-2 flex items-center gap-2 text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                                {item.kategori && (
                                                    <span className="rounded-full bg-[#efedea] px-2 py-0.5 font-medium text-[#37352f] dark:bg-[#2a2a28] dark:text-[#E8E7E3]">
                                                        {item.kategori.nama}
                                                    </span>
                                                )}
                                                <time>{item.tanggal}</time>
                                            </p>
                                            <Link
                                                href={item.url}
                                                className="text-lg font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
                                            >
                                                {item.judul}
                                            </Link>
                                            {item.excerpt && (
                                                <p className="mt-2 text-[15px] leading-7 text-slate-800 dark:text-slate-200">
                                                    {item.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] text-neutral-700 dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-neutral-200">
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
                ) : isPengumuman ? (
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
                                                decoding="async"
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
                                                className="text-lg font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
                                            >
                                                {item.judul}
                                            </Link>
                                            {item.excerpt && (
                                                <p className="mt-2 text-[15px] leading-7 text-slate-800 dark:text-slate-200">
                                                    {item.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] text-neutral-700 dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-neutral-200">
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
                ) : (
                    <div role="tabpanel" aria-label="Kegiatan">
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
                                                className="text-lg font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
                                            >
                                                {item.judul}
                                            </Link>
                                            {item.excerpt && (
                                                <p className="mt-2 text-[15px] leading-7 text-slate-800 dark:text-slate-200">
                                                    {item.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] text-neutral-700 dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-neutral-200">
                                Belum ada kegiatan yang diterbitkan.
                            </p>
                        )}
                        <Pagination
                            label="Paginasi kegiatan"
                            current={kegiatan.current_page}
                            last={kegiatan.last_page}
                            prev={kegiatan.prev_page_url}
                            next={kegiatan.next_page_url}
                        />
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
