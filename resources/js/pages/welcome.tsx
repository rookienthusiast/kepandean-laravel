import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Bell,
    ChevronLeft,
    ChevronRight,
    FileText,
    IdCard,
    Info,
    MapPin,
    MessageCircle,
    MessageSquareWarning,
    Newspaper,
    Users,
} from 'lucide-react';
import {
    useEffect,
    useRef,
    useState,
    type KeyboardEvent as KeyboardEventReact,
    type PointerEvent as PointerEventReact,
} from 'react';
import LokasiMap from '@/components/lokasi-map';
import PublicLayout from '@/layouts/public-layout';
import type {
    BeritaTerkiniItem,
    HeroSlideItem,
    LokasiData,
    MetaData,
    ProfilExcerpt,
    SchemaData,
    SiteData,
    StatistikMap,
} from '@/types/site';

interface WelcomeProps {
    profilExcerpt: ProfilExcerpt;
    beritaTerkini: BeritaTerkiniItem[];
    heroSlides: HeroSlideItem[];
    statistik: StatistikMap;
    lokasi: LokasiData;
    site: SiteData;
    meta: MetaData;
    schema?: SchemaData | null;
}

const LAYANAN = [
    {
        ikon: FileText,
        judul: 'Surat Online',
        deskripsi: 'Pembuatan surat online cepat',
        href: '/layanan-warga',
    },
    {
        ikon: Bell,
        judul: 'Pengumuman',
        deskripsi: 'Informasi & Pengumuman',
        href: '/pengumuman',
    },
    {
        ikon: Users,
        judul: 'Kependudukan',
        deskripsi: 'Informasi & Layanan Kependudukan',
        href: '/layanan-warga',
    },
    {
        ikon: MessageSquareWarning,
        judul: 'Aduan Warga',
        deskripsi: 'Sampaikan aspirasi & keluhan anda',
        href: '#aduan',
    },
    {
        ikon: Info,
        judul: 'Informasi Publik',
        deskripsi: 'Transparansi data & Informasi desa',
        href: '/informasi',
    },
];

function Hero({
    siteName,
    slides,
}: {
    siteName: string;
    slides: HeroSlideItem[];
}) {
    const [indeks, setIndeks] = useState(0);
    const [jeda, setJeda] = useState(false);
    const jumlah = slides.length;

    useEffect(() => {
        if (indeks >= jumlah && jumlah > 0) {
            setIndeks(0);
        }
    }, [indeks, jumlah]);

    useEffect(() => {
        if (jumlah <= 1 || jeda) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const id = window.setInterval(() => {
            setIndeks((i) => (i + 1) % jumlah);
        }, 5000);

        return () => window.clearInterval(id);
    }, [jumlah, jeda]);

    if (jumlah === 0) {
        return (
            <section className="-mt-16 flex min-h-[540px] items-center bg-desa-900 px-4 pt-24 pb-14 text-white sm:min-h-[620px] sm:px-8 sm:pt-28 sm:pb-20">
                <div className="mx-auto w-full max-w-[1440px]">
                    <div className="inline-flex items-center gap-2.5 text-white/90">
                        <span
                            className="h-[2px] w-7 bg-white"
                            aria-hidden="true"
                        />
                        <span className="text-sm font-medium tracking-wide sm:text-base">
                            Selamat Datang di
                        </span>
                    </div>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {siteName}
                    </h1>
                    <p className="mt-2 text-lg font-medium text-white/90 sm:text-xl">
                        Kecamatan Dukuhturi, Kabupaten Tegal
                    </p>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                        Mengenal lebih dekat profil, informasi, pelayanan dan
                        potensi {siteName}.
                    </p>
                    <Link
                        href="#layanan"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-desa-800 px-6 py-3 text-base font-semibold text-white shadow-md transition-[background-color,transform] duration-150 hover:bg-desa-900 active:scale-[0.96] motion-reduce:transition-none"
                    >
                        Jelajahi Desa
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        );
    }

    const aktif = slides[indeks] ?? slides[0];
    const sebelumnya = () => setIndeks((i) => (i - 1 + jumlah) % jumlah);
    const berikutnya = () => setIndeks((i) => (i + 1) % jumlah);

    // Geser (swipe) tetikus/sentuh: ambang 40px agar gulir vertikal
    // ponsel (touch-action pan-y) tidak ikut memicu pindah slide.
    const titikSentuh = useRef<number | null>(null);
    const geserMulai = (e: PointerEventReact) => {
        titikSentuh.current = e.clientX;
    };
    const geserSelesai = (e: PointerEventReact) => {
        if (titikSentuh.current === null) {
            return;
        }
        const beda = e.clientX - titikSentuh.current;
        titikSentuh.current = null;
        if (Math.abs(beda) < 40 || jumlah <= 1) {
            return;
        }
        if (beda < 0) {
            berikutnya();
        } else {
            sebelumnya();
        }
    };
    const tombolPanah = (e: KeyboardEventReact) => {
        if (e.key === 'ArrowLeft') {
            sebelumnya();
        } else if (e.key === 'ArrowRight') {
            berikutnya();
        }
    };

    // Rel animasi: seluruh pane (foto + teks) ikut bergeser agar gambar
    // dan keterangan tiba bersamaan; pane nonaktif inert + aria-hidden
    // supaya fokus dan keyboard tidak singgah ke konten tersembunyi.
    return (
        <section
            aria-roledescription="carousel"
            aria-label="Sorotan Desa Kepandean"
            onMouseEnter={() => setJeda(true)}
            onMouseLeave={() => setJeda(false)}
            onFocus={() => setJeda(true)}
            onBlur={() => setJeda(false)}
            onPointerDown={geserMulai}
            onPointerUp={geserSelesai}
            onPointerCancel={() => {
                titikSentuh.current = null;
            }}
            onKeyDown={tombolPanah}
            className="relative -mt-16 [touch-action:pan-y] overflow-hidden bg-desa-900 text-white"
        >
            <div
                className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${indeks * 100}%)` }}
            >
                {slides.map((s, i) => {
                    const isAktif = i === indeks;
                    return (
                        <div
                            key={`${s.judul}-${i}`}
                            aria-hidden={!isAktif}
                            inert={!isAktif}
                            className="relative flex min-h-[540px] w-full shrink-0 items-center sm:min-h-[620px]"
                        >
                            {s.gambar_url && (
                                <img
                                    src={s.gambar_url}
                                    alt=""
                                    loading={i === 0 ? 'eager' : 'lazy'}
                                    fetchPriority={i === 0 ? 'high' : 'auto'}
                                    decoding="async"
                                    draggable={false}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            )}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35"
                            />
                            <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-24 pb-20 sm:px-8 sm:pt-28 sm:pb-24">
                                <div className="inline-flex items-center gap-2.5 text-white/90">
                                    <span
                                        className="h-[2px] w-7 bg-white"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm font-medium tracking-wide sm:text-base">
                                        Selamat Datang di
                                    </span>
                                </div>
                                {isAktif ? (
                                    <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
                                        {s.judul.replace(
                                            /^Selamat\s+Datang\s+di\s+/i,
                                            '',
                                        ) || siteName}
                                    </h1>
                                ) : (
                                    <h2
                                        aria-hidden="true"
                                        className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
                                    >
                                        {s.judul.replace(
                                            /^Selamat\s+Datang\s+di\s+/i,
                                            '',
                                        ) || siteName}
                                    </h2>
                                )}
                                {s.subjudul && (
                                    <p className="mt-2 text-lg font-medium text-white/90 drop-shadow-sm sm:text-xl">
                                        {s.subjudul}
                                    </p>
                                )}
                                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                                    Mengenal lebih dekat profil, informasi,
                                    pelayanan dan potensi {siteName}.
                                </p>
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <Link
                                        href={s.tautan_url || '#layanan'}
                                        tabIndex={isAktif ? undefined : -1}
                                        className="inline-flex items-center gap-2 rounded-lg bg-desa-800 px-6 py-3 text-base font-semibold text-white shadow-md transition-[background-color,transform] duration-150 hover:bg-desa-900 active:scale-[0.96] motion-reduce:transition-none"
                                    >
                                        {s.tautan_label || 'Jelajahi Desa'}
                                        <ArrowRight
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {jumlah > 1 && (
                <div className="absolute inset-x-0 bottom-5">
                    <div className="mx-auto flex w-full max-w-[1440px] items-center gap-4 px-4 sm:px-8">
                        <button
                            type="button"
                            onClick={sebelumnya}
                            aria-label="Tampilkan slide sebelumnya"
                            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                        >
                            <ChevronLeft
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                        <div
                            role="tablist"
                            aria-label="Pilih slide"
                            className="flex items-center gap-2"
                        >
                            {slides.map((s, i) => (
                                <button
                                    key={`${s.judul}-${i}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === indeks}
                                    aria-label={`Tampilkan slide ${i + 1}: ${s.judul}`}
                                    onClick={() => setIndeks(i)}
                                    className="group flex min-h-[44px] min-w-[44px] items-center justify-center"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={
                                            i === indeks
                                                ? 'block h-2.5 w-6 rounded-full bg-white'
                                                : 'block h-2.5 w-2.5 rounded-full bg-white/40 group-hover:bg-white/70'
                                        }
                                    />
                                </button>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={berikutnya}
                            aria-label="Tampilkan slide berikutnya"
                            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                        >
                            <ChevronRight
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            )}
            <p aria-live="polite" className="sr-only">
                Slide {indeks + 1} dari {jumlah}: {aktif.judul}
            </p>
        </section>
    );
}

function LayananPublik() {
    return (
        <section
            id="layanan"
            aria-labelledby="layanan-publik"
            className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-4 py-12 sm:px-8 sm:py-16"
        >
            <div className="flex flex-col items-center text-center">
                <span
                    className="mb-2 h-1 w-8 rounded-full bg-desa-800"
                    aria-hidden="true"
                />
                <h2
                    id="layanan-publik"
                    className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
                >
                    Layanan Publik
                </h2>
                <p className="mt-1 text-base text-neutral-500">
                    Akses cepat untuk kebutuhan masyarakat
                </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {LAYANAN.map((l) => (
                    <li key={l.judul}>
                        <Link
                            href={l.href}
                            className="group flex h-full items-center gap-4 rounded-xl border border-neutral-200/80 bg-white p-5 shadow-sm transition-all hover:border-desa-800/50 hover:shadow-md"
                        >
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-desa-800 text-white shadow-sm transition-transform group-hover:scale-105">
                                <l.ikon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-lg font-bold text-neutral-900 transition-colors group-hover:text-desa-800">
                                    {l.judul}
                                </span>
                                <span className="mt-0.5 block text-sm text-neutral-500">
                                    {l.deskripsi}
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function SekilasSejarah({
    excerpt,
    beritaTerkini,
}: {
    excerpt: ProfilExcerpt;
    beritaTerkini: BeritaTerkiniItem[];
}) {
    return (
        <section
            aria-labelledby="sekilas-sejarah"
            className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8"
        >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm lg:col-span-2">
                    <div
                        className={
                            excerpt.foto_url ? 'grid md:grid-cols-5' : undefined
                        }
                    >
                        <div
                            className={`p-6 sm:p-8 ${excerpt.foto_url ? 'md:col-span-3' : ''}`}
                        >
                            <h2
                                id="sekilas-sejarah"
                                className="text-xl font-bold tracking-tight sm:text-2xl"
                            >
                                Sekilas Desa Kepandean
                            </h2>
                            {excerpt.sejarah ? (
                                <>
                                    <p className="mt-3 text-base leading-7 text-neutral-700">
                                        {excerpt.sejarah}
                                    </p>
                                    <Link
                                        href={excerpt.urls.sejarah}
                                        className="mt-5 inline-flex items-center gap-2 rounded-md bg-desa-800 px-4 py-2 text-base font-medium text-white hover:bg-desa-900"
                                    >
                                        Selengkapnya
                                        <ArrowRight
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </>
                            ) : (
                                <p className="mt-3 text-base leading-7 text-neutral-500">
                                    Cuplikan sejarah desa belum tersedia.
                                    Perangkat desa akan melengkapinya setelah
                                    data dari OpenSID dikonfirmasi.{' '}
                                    <Link
                                        href={excerpt.urls.sejarah}
                                        className="font-medium text-desa-800 underline"
                                    >
                                        Buka halaman Sejarah
                                    </Link>
                                    .
                                </p>
                            )}
                        </div>
                        {excerpt.foto_url ? (
                            <div className="order-first aspect-[16/9] md:order-none md:col-span-2 md:aspect-auto md:min-h-64">
                                <img
                                    src={excerpt.foto_url}
                                    alt="Suasana Desa Kepandean"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ) : null}
                    </div>
                </article>
                <aside
                    aria-labelledby="berita-terkini"
                    className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
                >
                    <div className="flex items-center justify-between">
                        <h2
                            id="berita-terkini"
                            className="flex items-center gap-2 text-xl font-bold tracking-tight"
                        >
                            <Newspaper
                                className="h-5 w-5 text-desa-800"
                                aria-hidden="true"
                            />
                            Berita Terkini
                        </h2>
                        <Link
                            href="/berita"
                            className="text-sm font-medium text-desa-800 hover:underline"
                        >
                            Lihat semua
                        </Link>
                    </div>
                    {beritaTerkini.length > 0 ? (
                        <ul className="mt-3 space-y-3">
                            {beritaTerkini.map((item) => (
                                <li key={item.url}>
                                    <Link
                                        href={item.url}
                                        className="group flex items-center gap-3 rounded-md bg-neutral-50 p-3 hover:bg-neutral-100"
                                    >
                                        {item.cover_url ? (
                                            <img
                                                src={item.cover_url}
                                                alt={`Cover ${item.judul}`}
                                                className="h-14 w-20 shrink-0 rounded object-cover"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        ) : (
                                            <span
                                                aria-hidden="true"
                                                className="flex h-14 w-20 shrink-0 items-center justify-center rounded bg-desa-800/10"
                                            >
                                                <Newspaper
                                                    className="h-6 w-6 text-desa-800"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        )}
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-sm font-medium group-hover:underline">
                                                {item.judul}
                                            </span>
                                            <span className="mt-0.5 block text-xs text-neutral-500">
                                                {item.tanggal}
                                            </span>
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="shrink-0 text-neutral-400 group-hover:text-desa-800"
                                        >
                                            ›
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-3 rounded-md bg-neutral-50 p-4 text-sm text-neutral-500">
                            Belum ada berita yang diterbitkan. Arsip lama tetap
                            dapat dibaca di situs sebelumnya.
                        </p>
                    )}
                </aside>
            </div>
        </section>
    );
}

function LokasiDesa({ lokasi }: { lokasi: LokasiData }) {
    return (
        <section
            aria-labelledby="lokasi-desa"
            className="bg-violet-50/50 px-4 py-10 sm:px-8"
        >
            <div className="mx-auto w-full max-w-[1440px]">
                <p className="text-xs font-semibold tracking-widest text-desa-800 uppercase">
                    Peta &amp; Aksesibilitas
                </p>
                <h2
                    id="lokasi-desa"
                    className="mt-1 text-2xl font-bold tracking-tight"
                >
                    Lokasi Kantor Balai Desa Kepandean
                </h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm lg:col-span-2">
                        <LokasiMap
                            latitude={lokasi.latitude}
                            longitude={lokasi.longitude}
                            petaUrl={lokasi.peta_url}
                            namaKantor="Kantor Balai Desa Kepandean"
                        />
                        <noscript>
                            <iframe
                                title="Peta lokasi Kantor Balai Desa Kepandean"
                                src={lokasi.peta_embed}
                                className="h-64 w-full rounded-md border-0"
                                loading="lazy"
                            />
                        </noscript>
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                            <p className="flex items-center gap-1.5 text-sm font-medium">
                                <MapPin
                                    className="h-4 w-4 text-desa-800"
                                    aria-hidden="true"
                                />
                                Koordinat Titik: {lokasi.koordinat}
                            </p>
                            <a
                                href={lokasi.peta_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-desa-800 px-4 py-2 text-sm font-medium text-white hover:bg-desa-900"
                            >
                                Buka Peta Digital
                            </a>
                        </div>
                    </div>
                    <dl className="rounded-lg border border-neutral-200 bg-white p-6 text-sm shadow-sm">
                        <dt className="font-semibold">Detail Kantor Desa</dt>
                        <dd className="mt-3 space-y-2 text-neutral-700">
                            <p>
                                <span className="block text-xs text-neutral-500">
                                    Desa / Kelurahan:
                                </span>
                                Kepandean
                            </p>
                            <p>
                                <span className="block text-xs text-neutral-500">
                                    Kecamatan:
                                </span>
                                Dukuhturi
                            </p>
                            <p>
                                <span className="block text-xs text-neutral-500">
                                    Kabupaten / Provinsi:
                                </span>
                                {lokasi.alamat}
                            </p>
                            <p>
                                <span className="block text-xs text-neutral-500">
                                    Kode Pos:
                                </span>
                                {lokasi.kode_pos} (Dukuhturi)
                            </p>
                            <p>
                                <span className="block text-xs text-neutral-500">
                                    Surel Resmi:
                                </span>
                                {lokasi.surel}
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
        </section>
    );
}

// TODO: ganti nomor placeholder di bawah dengan nomor WhatsApp hotline
// resmi perangkat desa (format 628..., tanpa +, spasi, atau tanda hubung)
// sebelum rilis ke production.
const WA_HOTLINE_URL =
    'https://wa.me/6281770461804?text=Halo%20Admin%20Desa%20Kepandean%2C%20saya%20ingin%20mengajukan%20aduan.';

function HotlineAduan() {
    return (
        <section
            id="aduan"
            aria-labelledby="aduan-warga"
            className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-4 py-10 sm:px-8"
        >
            <div className="rounded-2xl bg-gradient-to-r from-desa-900 via-desa-800 to-desa-900 p-6 text-white shadow-lg sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <p className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                            • Layanan Respon Cepat
                        </p>
                        <h2
                            id="aduan-warga"
                            className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                        >
                            Ada Masalah Fasilitas Umum atau Kerusakan Jalan di
                            Lingkungan Anda?
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                            Laporkan secara mudah dengan foto lokasi melalui
                            sistem Lapor Kades Kepandean. Petugas tim lapangan
                            akan meninjau langsung ke lokasi.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={WA_HOTLINE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-emerald-500"
                            >
                                <MessageCircle
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                WhatsApp Hotline
                            </a>
                            <a
                                href="#aduan"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                            >
                                Buat Laporan Sekarang
                            </a>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 text-neutral-900 shadow-md lg:col-span-5">
                        <h3 className="flex items-center gap-2 font-bold text-neutral-900">
                            <MessageCircle
                                className="h-5 w-5 text-desa-800"
                                aria-hidden="true"
                            />
                            Hotline Aduan Warga
                        </h3>
                        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-neutral-600">
                            <li>
                                Tekan tombol WhatsApp di bawah untuk membuka
                                chat hotline desa.
                            </li>
                            <li>
                                Tulis aduan beserta foto dan patokan lokasi
                                (cth. RT 02 / RW 03, Gang Mawar).
                            </li>
                            <li>
                                Petugas meninjau laporan dan menindaklanjuti
                                langsung ke lokasi.
                            </li>
                        </ol>
                        <a
                            href={WA_HOTLINE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-[background-color,transform] duration-150 hover:bg-emerald-600 active:scale-[0.96] motion-reduce:transition-none"
                        >
                            <MessageCircle
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                            Hubungi via WhatsApp Hotline
                        </a>
                        <p className="mt-2 text-center text-xs text-neutral-400">
                            Layanan respon cepat masyarakat desa Kepandean.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatistikRingkas({ statistik }: { statistik: StatistikMap }) {
    const total = Number(statistik.total_jiwa) || 4820;
    const laki = Number(statistik.laki_laki) || 2450;
    const perempuan = Number(statistik.perempuan) || 2370;
    const persenLaki =
        total > 0 ? Math.round((laki / total) * 1000) / 10 : 50.8;
    const persenPerempuan =
        total > 0 ? Math.round((perempuan / total) * 1000) / 10 : 49.2;
    const fmt = (n: number | string) => Number(n || 0).toLocaleString('id-ID');

    return (
        <section
            aria-labelledby="statistik-penduduk"
            className="mx-auto w-full max-w-[1440px] px-4 pb-12 sm:px-8"
        >
            <div className="rounded-xl border border-neutral-200/80 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2
                        id="statistik-penduduk"
                        className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900"
                    >
                        <IdCard
                            className="h-5 w-5 text-desa-800"
                            aria-hidden="true"
                        />
                        Statistik Penduduk
                    </h2>
                    <p className="text-sm font-semibold text-neutral-600">
                        Total:{' '}
                        <span className="text-desa-800">
                            {fmt(statistik.total_jiwa)} Jiwa
                        </span>
                    </p>
                </div>
                <div className="mt-5">
                    <div
                        className="flex h-3 w-full overflow-hidden rounded-full bg-neutral-200"
                        role="img"
                        aria-label={`${persenLaki}% laki-laki, ${persenPerempuan}% perempuan`}
                    >
                        <span
                            className="bg-desa-800 transition-all"
                            style={{ width: `${persenLaki}%` }}
                        />
                        <span
                            className="bg-emerald-500 transition-all"
                            style={{ width: `${persenPerempuan}%` }}
                        />
                    </div>
                    <div className="mt-2 flex justify-between text-xs font-medium text-neutral-600">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-desa-800" />
                            Laki-laki ({fmt(statistik.laki_laki)}) —{' '}
                            {persenLaki}%
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Perempuan ({fmt(statistik.perempuan)}) —{' '}
                            {persenPerempuan}%
                        </span>
                    </div>
                </div>
                <dl className="mt-6 grid gap-4 text-center sm:grid-cols-3">
                    <div className="border-desa-100 rounded-xl border bg-desa-50/70 p-4">
                        <dt className="text-xs font-medium text-neutral-500">
                            Kepala Keluarga
                        </dt>
                        <dd className="mt-1 text-2xl font-bold text-desa-900">
                            {fmt(statistik.kepala_keluarga)} KK
                        </dd>
                    </div>
                    <div className="border-desa-100 rounded-xl border bg-desa-50/70 p-4">
                        <dt className="text-xs font-medium text-neutral-500">
                            Usia Produktif
                        </dt>
                        <dd className="mt-1 text-2xl font-bold text-desa-900">
                            68.4%
                        </dd>
                    </div>
                    <div className="border-desa-100 rounded-xl border bg-desa-50/70 p-4">
                        <dt className="text-xs font-medium text-neutral-500">
                            Jiwa per KK (rata-rata)
                        </dt>
                        <dd className="mt-1 text-2xl font-bold text-desa-900">
                            {Number(statistik.kepala_keluarga) > 0
                                ? (
                                      total / Number(statistik.kepala_keluarga)
                                  ).toLocaleString('id-ID', {
                                      maximumFractionDigits: 1,
                                  })
                                : '3.6'}{' '}
                            Jiwa
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

export default function Welcome({
    profilExcerpt,
    beritaTerkini,
    heroSlides,
    statistik,
    lokasi,
    site,
    meta,
    schema,
}: WelcomeProps) {
    return (
        <PublicLayout meta={meta} schema={schema} site={site}>
            <Hero siteName={site.nama} slides={heroSlides} />
            <LayananPublik />
            <SekilasSejarah
                excerpt={profilExcerpt}
                beritaTerkini={beritaTerkini}
            />
            <LokasiDesa lokasi={lokasi} />
            <HotlineAduan />
            <StatistikRingkas statistik={statistik} />
        </PublicLayout>
    );
}
