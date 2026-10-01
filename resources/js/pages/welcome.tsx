import { Link, useForm, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Bell,
    ChevronLeft,
    ChevronRight,
    FileText,
    IdCard,
    Info,
    MapPin,
    Megaphone,
    MessageSquareWarning,
    Newspaper,
    Send,
    Users,
} from 'lucide-react';
import type { FormEventHandler } from 'react';
import { useEffect, useState } from 'react';
import LokasiMap from '@/components/lokasi-map';
import PublicLayout from '@/layouts/public-layout';
import type {
    BeritaTerkiniItem,
    HeroSlideItem,
    LokasiData,
    MetaData,
    ProfilExcerpt,
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

function Hero({ siteName, slides }: { siteName: string; slides: HeroSlideItem[] }) {
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

        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const id = window.setInterval(() => {
            setIndeks((i) => (i + 1) % jumlah);
        }, 5000);

        return () => window.clearInterval(id);
    }, [jumlah, jeda]);

    if (jumlah === 0) {
        return (
            <section className="bg-desa-900 px-4 py-16 text-white sm:px-6 sm:py-20">
                <div className="mx-auto w-full max-w-7xl">
                    <p className="text-sm text-white/75">
                        Selamat datang di
                    </p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                        {siteName}
                    </h1>
                    <p className="mt-1 text-lg text-white/85">
                        Kecamatan Dukuhturi, Kabupaten Tegal
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
                        Mengenali lebih dekat profil, informasi, pelayanan, dan
                        potensi {siteName}.
                    </p>
                    <Link
                        href="#layanan"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-desa-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-desa-800"
                    >
                        Jelajahi Desa
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        );
    }

    const aktif = slides[indeks] ?? slides[0];
    const sebelumnya = () =>
        setIndeks((i) => (i - 1 + jumlah) % jumlah);
    const berikutnya = () => setIndeks((i) => (i + 1) % jumlah);

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Sorotan Desa Kepandean"
            onMouseEnter={() => setJeda(true)}
            onMouseLeave={() => setJeda(false)}
            onFocus={() => setJeda(true)}
            onBlur={() => setJeda(false)}
            className="relative overflow-hidden bg-desa-900 text-white"
        >
            {aktif.gambar_url && (
                <img
                    key={aktif.gambar_url}
                    src={aktif.gambar_url}
                    alt=""
                    loading={indeks === 0 ? 'eager' : 'lazy'}
                    fetchPriority={indeks === 0 ? 'high' : 'auto'}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-desa-900/70"
            />
            <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
                <p className="text-sm text-white/75">
                    Selamat datang di {siteName}
                </p>
                <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                    {aktif.judul}
                </h1>
                {aktif.subjudul && (
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
                        {aktif.subjudul}
                    </p>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {aktif.tautan_label && aktif.tautan_url && (
                        <Link
                            href={aktif.tautan_url}
                            className="inline-flex items-center gap-2 rounded-md bg-desa-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-desa-800"
                        >
                            {aktif.tautan_label}
                            <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                    )}
                    <Link
                        href="#layanan"
                        className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                    >
                        Jelajahi Desa
                    </Link>
                </div>
                {jumlah > 1 && (
                    <div className="mt-8 flex items-center gap-4">
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
                )}
                <p aria-live="polite" className="sr-only">
                    Slide {indeks + 1} dari {jumlah}: {aktif.judul}
                </p>
            </div>
        </section>
    );
}

function LayananPublik() {
    return (
        <section
            id="layanan"
            aria-labelledby="layanan-publik"
            className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6"
        >
            <h2
                id="layanan-publik"
                className="text-center text-2xl font-bold tracking-tight"
            >
                Layanan Publik
            </h2>
            <p className="mt-1 text-center text-sm text-neutral-500">
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
                                <span className="block font-semibold">
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
            className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6"
        >
            <div className="grid gap-6 lg:grid-cols-3">
                <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2">
                    <h2
                        id="sekilas-sejarah"
                        className="text-xl font-bold tracking-tight"
                    >
                        Sekilas Desa Kepandean
                    </h2>
                    {excerpt.sejarah ? (
                        <>
                            <p className="mt-3 text-sm leading-7 text-neutral-700">
                                {excerpt.sejarah}
                            </p>
                            <Link
                                href={excerpt.urls.sejarah}
                                className="mt-4 inline-flex items-center gap-2 rounded-md bg-desa-800 px-4 py-2 text-sm font-medium text-white hover:bg-desa-900"
                            >
                                Selengkapnya
                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </>
                    ) : (
                        <p className="mt-3 text-sm leading-7 text-neutral-500">
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
                            className="text-xs font-medium text-desa-800 hover:underline"
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
                            Belum ada berita yang diterbitkan. Arsip lama
                            tetap dapat dibaca di situs sebelumnya.
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
            className="bg-violet-50/50 px-4 py-10 sm:px-6"
        >
            <div className="mx-auto w-full max-w-7xl">
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

function FormAduan() {
    const { props } = usePage<{ status?: string }>();
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        kontak: '',
        pesan: '',
        lokasi: '',
        foto: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/aduan', {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => reset('pesan', 'foto'),
        });
    };

    return (
        <section
            id="aduan"
            aria-labelledby="aduan-warga"
            className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6"
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
                            Laporkan secara mudah dengan foto lokasi melalui
                            layanan Aduan Kepandean. Petugas akan meninjau
                            langsung ke lokasi.
                        </p>
                    </div>
                    <form
                        onSubmit={submit}
                        className="rounded-lg bg-white p-5 text-neutral-900 shadow"
                    >
                        <h3 className="flex items-center gap-2 font-semibold">
                            <Megaphone
                                className="h-5 w-5 text-desa-800"
                                aria-hidden="true"
                            />
                            Formulir Aduan
                        </h3>
                        {props.status && (
                            <p
                                role="status"
                                className="mt-3 rounded-md bg-emerald-50 p-3 text-sm text-emerald-800"
                            >
                                {props.status}
                            </p>
                        )}
                        <div className="mt-3 space-y-3">
                            <div>
                                <label
                                    htmlFor="aduan-nama"
                                    className="text-sm font-medium"
                                >
                                    Nama{' '}
                                    <span className="text-neutral-400">
                                        (opsional)
                                    </span>
                                </label>
                                <input
                                    id="aduan-nama"
                                    type="text"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData('nama', e.target.value)
                                    }
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                                    autoComplete="name"
                                />
                                {errors.nama && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.nama}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="aduan-kontak"
                                    className="text-sm font-medium"
                                >
                                    Kontak{' '}
                                    <span className="text-neutral-400">
                                        (opsional)
                                    </span>
                                </label>
                                <input
                                    id="aduan-kontak"
                                    type="text"
                                    value={data.kontak}
                                    onChange={(e) =>
                                        setData('kontak', e.target.value)
                                    }
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                                    autoComplete="tel"
                                />
                                {errors.kontak && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.kontak}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="aduan-pesan"
                                    className="text-sm font-medium"
                                >
                                    Pesan Aduan{' '}
                                    <span
                                        aria-hidden="true"
                                        className="text-red-600"
                                    >
                                        *
                                    </span>
                                </label>
                                <textarea
                                    id="aduan-pesan"
                                    required
                                    value={data.pesan}
                                    onChange={(e) =>
                                        setData('pesan', e.target.value)
                                    }
                                    rows={3}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                                />
                                {errors.pesan && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.pesan}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="aduan-lokasi"
                                    className="text-sm font-medium"
                                >
                                    Lokasi Kejadian{' '}
                                    <span
                                        aria-hidden="true"
                                        className="text-red-600"
                                    >
                                        *
                                    </span>
                                </label>
                                <input
                                    id="aduan-lokasi"
                                    type="text"
                                    required
                                    value={data.lokasi}
                                    onChange={(e) =>
                                        setData('lokasi', e.target.value)
                                    }
                                    placeholder="cth. RT 02 / RW 03, Gang Mawar"
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                                />
                                {errors.lokasi && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.lokasi}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="aduan-foto"
                                    className="text-sm font-medium"
                                >
                                    Foto{' '}
                                    <span className="text-neutral-400">
                                        (opsional, maks. 5 MB)
                                    </span>
                                </label>
                                <input
                                    id="aduan-foto"
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={(e) =>
                                        setData(
                                            'foto',
                                            e.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="mt-1 w-full text-sm"
                                />
                                {errors.foto && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.foto}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-amber-400 disabled:opacity-60"
                            >
                                <Send className="h-4 w-4" aria-hidden="true" />
                                {processing ? 'Mengirim…' : 'Kirim Aduan'}
                            </button>
                        </div>
                    </form>
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
            className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6"
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
                            Laki-laki ({fmt(statistik.laki_laki)},{' '}
                            {persenLaki}%)
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
}: WelcomeProps) {
    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <Hero siteName={site.nama} slides={heroSlides} />
            <LayananPublik />
            <SekilasSejarah
                excerpt={profilExcerpt}
                beritaTerkini={beritaTerkini}
            />
            <LokasiDesa lokasi={lokasi} />
            <FormAduan />
            <StatistikRingkas statistik={statistik} />
        </PublicLayout>
    );
}
