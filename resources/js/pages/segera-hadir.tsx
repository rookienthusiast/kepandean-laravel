import { Link } from '@inertiajs/react';
import { ArrowLeft, Hammer } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import type { MetaData, SiteData } from '@/types/site';

interface SegeraHadirProps {
    modul: string;
    meta: MetaData;
    site: SiteData;
}

const LABELS: Record<string, string> = {
    pemerintahan: 'Pemerintahan',
    'struktur-organisasi': 'Struktur Organisasi',
    'lembaga-desa': 'Lembaga Desa',
    'layanan-warga': 'Layanan Warga',
    layanan: 'Layanan',
    informasi: 'Informasi',
    berita: 'Berita Desa',
    pengumuman: 'Pengumuman',
    'potensi-galeri': 'Potensi & Galeri',
    'kontak-lokasi': 'Kontak & Lokasi',
};

export default function SegeraHadir({ modul, meta, site }: SegeraHadirProps) {
    const label = LABELS[modul] ?? modul;

    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <section className="bg-desa-900/95 px-4 py-12 text-white sm:px-6">
                <div className="mx-auto w-full max-w-6xl">
                    <p className="text-sm text-white/70">
                        <Link href="/" className="hover:underline">
                            Beranda
                        </Link>{' '}
                        › {label}
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        {label}
                    </h1>
                    <p className="mt-2 max-w-2xl text-white/80">
                        Bagian dari portal resmi {site.nama} yang sedang
                        disiapkan.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
                <div className="rounded-lg bg-slate-100 px-6 py-16 text-center">
                    <p className="text-6xl font-black tracking-tight sm:text-7xl">
                        Segera Hadir
                    </p>
                    <h2 className="mt-4 flex items-center justify-center gap-2 text-xl font-semibold">
                        <Hammer className="h-5 w-5" aria-hidden="true" />
                        Halaman {label} Belum Tersedia
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-neutral-600">
                        Mohon maaf, modul {label} sedang disiapkan oleh
                        perangkat desa. Tidak ada tautan mati di portal ini —
                        semua menu yang belum siap mengarah ke halaman ini
                        dengan jujur.
                    </p>
                    <Link
                        href="/"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-desa-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-desa-900"
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </section>
        </PublicLayout>
    );
}
