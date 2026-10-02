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
        deskripsi: 'Sampaikan aspirasi & keluhan Anda',
        href: '#aduan',
    },
    {
        ikon: Info,
        judul: 'Informasi Publik',
        deskripsi: 'Transparansi & info resmi (via Pengumuman)',
        href: '/pengumuman',
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
                    <p className="text-base text-white/75">Selamat datang di</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {siteName}
                    </h1>
                    <p className="mt-1 text-lg text-white/85">
                        Kecamatan Dukuhturi, Kabupaten Tegal
                    </p>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                        Mengenali lebih dekat profil, informasi, pelayanan, dan
                        potensi {siteName}.
                    </p>
                    <Link
                        href="#layanan"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-desa-700 px-5 py-2.5 text-base font-medium text-white transition-transform duration-150 hover:bg-desa-800 active:scale-[0.96] motion-reduce:transition-none"
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
                                className="absolute inset-0 bg-black/50"
                            />
                            <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-24 pb-20 sm:px-8 sm:pt-28 sm:pb-24">
                                <p className="text-base text-white/75">
                                    Selamat datang di {siteName}
                                </p>
                                {isAktif ? (
                                    <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                        {s.judul}
                                    </h1>
                                ) : (
                                    <h2
                                        aria-hidden="true"
                                        className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                                    >
                                        {s.judul}
                                    </h2>
                                )}
                                {s.subjudul && (
                                    <p className="mt-3 max-w-xl text-base leading-7 text-white/85">
                                        {s.subjudul}
                                    </p>
                                )}
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    {s.tautan_label && s.tautan_url && (
                                        <Link
                                            href={s.tautan_url}
                                            tabIndex={isAktif ? undefined : -1}
                                            className="inline-flex items-center gap-2 rounded-md bg-desa-700 px-5 py-2.5 text-base font-medium text-white transition-transform duration-150 hover:bg-desa-800 active:scale-[0.96] motion-reduce:transition-none"
                                        >
                                            {s.tautan_label}
                                            <ArrowRight
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    )}
                                    <Link
                                        href="#layanan"
                                        tabIndex={isAktif ? undefined : -1}
                                        className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-base font-medium text-white transition-transform duration-150 hover:bg-white/10 active:scale-[0.96] motion-reduce:transition-none"
                                    >
                                        Jelajahi Desa
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
                            className="rounded-full border border-white/40 p-2 hover:bg-white/10"
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
                                    className={
                                        i === indeks
                                            ? 'h-2.5 w-6 rounded-full bg-white'
                                            : 'h-2.5 w-2.5 rounded-full bg-white/40 hover:bg-white/70'
                                    }
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={berikutnya}
                            aria-label="Tampilkan slide berikutnya"
                            className="rounded-full border border-white/40 p-2 hover:bg-white/10"
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
            className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-4 py-10 sm:px-8"
        >
            <h2
                id="layanan-publik"
                className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
            >
                Layanan Publik
            </h2>
            <p className="mt-1 text-center text-base text-neutral-500">
                Akses cepat untuk kebutuhan masyarakat
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {LAYANAN.map((l) => (
                    <li key={l.judul}>
                        <Link
                            href={l.href}
                            className="flex h-full items-start gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:shadow"
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-desa-800 text-white">
                                <l.ikon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </span>
                            <span>
                                <span className="block text-base font-semibold">
                                    {l.judul}
                                </span>
                                <span className="mt-0.5 block text-sm text-neutral-600">
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
            <div className="grid gap-6 lg:grid-cols-3">
                <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2">
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
                                className="mt-4 inline-flex items-center gap-2 rounded-md bg-desa-800 px-4 py-2 text-base font-medium text-white hover:bg-desa-900"
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
                            Cuplikan sejarah desa belum tersedia. Perangkat desa
                            akan melengkapinya setelah data dari OpenSID
                            dikonfirmasi.{' '}
                            <Link
                                href={excerpt.urls.sejarah}
                                className="font-medium text-desa-800 underline"
                            >
                                Buka halaman Sejarah
                            </Link>
                            .
                        </p>
                    )}
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
                                className="inline-flex items-center gap-2 rounded-md bg-desa-800 px-4 py-2 text-sm font-medium text-white hover:bg-desa-900"
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
    'https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Kepandean%2C%20saya%20ingin%20mengajukan%20aduan.';

function HotlineAduan() {
    return (
        <section
            id="aduan"
            aria-labelledby="aduan-warga"
            className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-4 py-10 sm:px-8"
        >
            <div className="rounded-lg bg-gradient-to-r from-teal-800 to-sky-700 p-6 text-white sm:p-8">
                <div className="grid items-center gap-6 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-medium tracking-wide opacity-80">
                            • Layanan Respon Cepat
                        </p>
                        <h2
                            id="aduan-warga"
                            className="mt-2 text-2xl font-bold tracking-tight"
                        >
                            Ada Masalah Fasilitas Umum atau Kerusakan Jalan di
                            Lingkungan Anda?
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-white/85">
                            Sampaikan langsung lewat WhatsApp hotline resmi
                            desa. Sertakan foto dan patokan lokasi agar petugas
                            bisa meninjau langsung ke lokasi.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-5 text-neutral-900 shadow sm:p-6">
                        <h3 className="flex items-center gap-2 font-semibold">
                            <MessageCircle
                                className="h-5 w-5 text-desa-800"
                                aria-hidden="true"
                            />
                            Hotline Aduan Warga
                        </h3>
                        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-neutral-600">
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
                            className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2.5 text-sm font-semibold text-sky-950 transition-transform duration-150 hover:bg-sky-400 active:scale-[0.96] motion-reduce:transition-none"
                        >
                            <MessageCircle
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                            Hubungi via WhatsApp
                        </a>
                        <p className="mt-2 text-center text-xs text-neutral-500">
                            Chat langsung, tanpa formulir dan tanpa akun.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatistikRingkas({ statistik }: { statistik: StatistikMap }) {
    const total = Number(statistik.total_jiwa) || 0;
    const laki = Number(statistik.laki_laki) || 0;
    const perempuan = Number(statistik.perempuan) || 0;
    const persenLaki = total > 0 ? Math.round((laki / total) * 1000) / 10 : 0;
    const persenPerempuan =
        total > 0 ? Math.round((perempuan / total) * 1000) / 10 : 0;
    const fmt = (n: number | string) => Number(n || 0).toLocaleString('id-ID');

    return (
        <section
            aria-labelledby="statistik-penduduk"
            className="mx-auto w-full max-w-[1440px] px-4 pb-12 sm:px-8"
        >
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2
                        id="statistik-penduduk"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <IdCard
                            className="h-5 w-5 text-desa-800"
                            aria-hidden="true"
                        />
                        Statistik Penduduk
                    </h2>
                    <p className="text-xs text-neutral-500">
                        Total: {fmt(statistik.total_jiwa)} jiwa
                    </p>
                </div>
                <div className="mt-4">
                    <div
                        className="flex h-2.5 w-full overflow-hidden rounded-full bg-neutral-200"
                        role="img"
                        aria-label={`${persenLaki} persen laki-laki, ${persenPerempuan} persen perempuan`}
                    >
                        <span
                            className="bg-desa-800"
                            style={{ width: `${persenLaki}%` }}
                        />
                        <span
                            className="bg-sky-800"
                            style={{ width: `${persenPerempuan}%` }}
                        />
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-neutral-600">
                        <span>
                            Laki-laki ({fmt(statistik.laki_laki)}, {persenLaki}
                            %)
                        </span>
                        <span>
                            Perempuan ({fmt(statistik.perempuan)},{' '}
                            {persenPerempuan}%)
                        </span>
                    </div>
                </div>
                <dl className="mt-4 grid gap-3 text-center sm:grid-cols-2">
                    <div className="rounded-md bg-violet-50/70 p-4">
                        <dt className="text-xs text-neutral-500">
                            Kepala Keluarga
                        </dt>
                        <dd className="text-lg font-bold">
                            {fmt(statistik.kepala_keluarga)} KK
                        </dd>
                    </div>
                    <div className="rounded-md bg-violet-50/70 p-4">
                        <dt className="text-xs text-neutral-500">
                            Jiwa per KK (rata-rata)
                        </dt>
                        <dd className="text-lg font-bold">
                            {Number(statistik.kepala_keluarga) > 0
                                ? (
                                      total / Number(statistik.kepala_keluarga)
                                  ).toLocaleString('id-ID', {
                                      maximumFractionDigits: 1,
                                  })
                                : '-'}
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
