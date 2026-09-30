import { Link, useForm, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Bell,
    FileText,
    IdCard,
    Info,
    Landmark,
    MapPin,
    Megaphone,
    MessageSquareWarning,
    Newspaper,
    Send,
    Users,
} from 'lucide-react';
import type { FormEventHandler } from 'react';
import PublicLayout from '@/layouts/public-layout';
import type {
    LokasiData,
    MetaData,
    ProfilExcerpt,
    SiteData,
    StatistikMap,
} from '@/types/site';

interface WelcomeProps {
    profilExcerpt: ProfilExcerpt;
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

function Hero({ siteName }: { siteName: string }) {
    return (
        <section className="bg-desa-900 px-4 py-16 text-white sm:px-6 sm:py-20">
            <div className="mx-auto w-full max-w-6xl">
                <p className="text-sm text-white/75">— Selamat Datang di</p>
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

function SorotanProfil({ excerpt }: { excerpt: ProfilExcerpt }) {
    return (
        <section
            aria-labelledby="sorotan-profil"
            className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
        >
            <h2
                id="sorotan-profil"
                className="text-center text-2xl font-bold tracking-tight"
            >
                Sorotan Profil Desa
            </h2>
            <p className="mt-1 text-center text-sm text-neutral-500">
                Sekilas jati diri dan arah pembangunan desa
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                    href={excerpt.urls.sejarah}
                    className="group rounded-lg border border-neutral-200 bg-white p-6 shadow-sm hover:shadow"
                >
                    <Landmark
                        className="h-8 w-8 text-desa-800"
                        aria-hidden="true"
                    />
                    <p className="mt-3 font-semibold group-hover:underline">
                        Sejarah Desa
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                        Latar dan perjalanan desa di portal resmi.
                    </p>
                </Link>
                <Link
                    href={excerpt.urls.visiMisi}
                    className="group rounded-lg border border-neutral-200 bg-white p-6 shadow-sm hover:shadow"
                >
                    <Send
                        className="h-8 w-8 text-desa-800"
                        aria-hidden="true"
                    />
                    <p className="mt-3 font-semibold group-hover:underline">
                        Visi dan Misi
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                        Arah pembangunan desa di portal resmi.
                    </p>
                </Link>
            </div>
        </section>
    );
}

function LayananPublik() {
    return (
        <section
            id="layanan"
            aria-labelledby="layanan-publik"
            className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6"
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

function SekilasSejarah({ excerpt }: { excerpt: ProfilExcerpt }) {
    return (
        <section
            aria-labelledby="sekilas-sejarah"
            className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
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
                            Lihat semua →
                        </Link>
                    </div>
                    <p className="mt-3 rounded-md bg-neutral-50 p-4 text-sm text-neutral-500">
                        Kabar terbaru desa akan tampil di sini setelah modul
                        Berita (#16) native. Arsip lama tetap dapat dibaca di
                        situs sebelumnya.
                    </p>
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
            <div className="mx-auto w-full max-w-6xl">
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
                        <div className="flex h-64 items-center justify-center rounded-md bg-emerald-50">
                            <div className="text-center">
                                <MapPin
                                    className="mx-auto h-10 w-10 text-desa-800"
                                    aria-hidden="true"
                                />
                                <p className="mt-2 text-sm font-medium">
                                    Koordinat Titik: {lokasi.koordinat}
                                </p>
                                <a
                                    href={lokasi.peta_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-desa-800 px-4 py-2 text-sm font-medium text-white hover:bg-desa-900"
                                >
                                    Buka Peta Digital
                                </a>
                            </div>
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
            className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6"
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
            className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6"
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
                            Laki-laki ({fmt(statistik.laki_laki)}) —{' '}
                            {persenLaki}%
                        </span>
                        <span>
                            Perempuan ({fmt(statistik.perempuan)}) —{' '}
                            {persenPerempuan}%
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
                                : '—'}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

export default function Welcome({
    profilExcerpt,
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
            <Hero siteName={site.nama} />
            <SorotanProfil excerpt={profilExcerpt} />
            <LayananPublik />
            <SekilasSejarah excerpt={profilExcerpt} />
            <LokasiDesa lokasi={lokasi} />
            <FormAduan />
            <StatistikRingkas statistik={statistik} />
        </PublicLayout>
    );
}
