import { Head, Link } from '@inertiajs/react';
import {
    ChevronDown,
    Clock,
    Facebook,
    Mail,
    MapPin,
    Menu,
    Phone,
    ShieldCheck,
    X,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import type { NavItem, SiteData } from '@/types/site';

interface PublicLayoutProps {
    title: string;
    description: string;
    site: SiteData;
    children: ReactNode;
}

function TopBar() {
    return (
        <div className="bg-desa-900 text-xs text-white">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
                <p className="truncate">
                    Website Resmi Pemerintah Desa Kepandean | Kec. Dukuhturi,
                    Kab. Tegal, Jawa Tengah
                </p>
                <div className="flex shrink-0 items-center gap-3">
                    <Link href="/layanan-warga" className="hover:underline">
                        Layanan Mandiri
                    </Link>
                    <span aria-hidden="true">•</span>
                    <Link href="/#aduan" className="hover:underline">
                        Aduan
                    </Link>
                </div>
            </div>
        </div>
    );
}

function DesktopNav({ items }: { items: NavItem[] }) {
    return (
        <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 lg:flex"
        >
            {items.map((item) =>
                item.children ? (
                    <div key={item.label} className="group relative">
                        <Link
                            href={item.href}
                            className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                        >
                            {item.label}
                            <ChevronDown
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                        <div className="invisible absolute left-0 z-50 w-56 rounded-md bg-white py-1 opacity-0 shadow-lg ring-1 ring-black/5 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                            {item.children.map((child) => (
                                <Link
                                    key={child.label}
                                    href={child.href}
                                    className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
                                >
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                    >
                        {item.label}
                    </Link>
                ),
            )}
        </nav>
    );
}

function MobileNav({
    items,
    siteName,
}: {
    items: NavItem[];
    siteName: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="navigasi-seluler"
                aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                className="rounded-md p-2 text-white hover:bg-white/10"
            >
                {open ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                )}
            </button>
            {open && (
                <nav
                    id="navigasi-seluler"
                    aria-label={`Navigasi utama ${siteName}`}
                    className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-desa-900 px-4 py-3"
                >
                    <ul className="flex flex-col">
                        {items.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                                >
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <ul className="ml-4 border-l border-white/15 pl-2">
                                        {item.children.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    href={child.href}
                                                    className="block rounded-md px-3 py-2 text-sm text-white/85 hover:bg-white/10"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}

function Footer({ site }: { site: SiteData }) {
    const layanan = [
        { label: 'Alur Surat Digital', href: '/layanan-warga' },
        { label: 'Cek Tagihan PBB', href: '/layanan-warga' },
        { label: 'Cek DPT Online', href: '/layanan-warga' },
        { label: 'Layanan Mandiri Warga', href: '/layanan-warga' },
        { label: 'Aduan Warga', href: '/#aduan' },
    ];
    const cepat = [
        { label: 'Profil Desa', href: '/profil/sejarah' },
        { label: 'Sejarah & Visi Misi', href: '/profil/visi-misi' },
        {
            label: 'Struktur Organisasi',
            href: '/struktur-pemerintahan',
        },
        { label: 'Peta Desa', href: '/kontak-lokasi' },
        { label: 'Transparansi APBDes', href: '/informasi' },
    ];

    return (
        <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
                <div>
                    <p className="text-sm font-bold tracking-wide text-desa-800">
                        DESA KEPANDEAN
                    </p>
                    <p className="text-xs text-neutral-500">
                        Dukuhturi, Kabupaten Tegal
                    </p>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                        Portal Digital Resmi Pemerintahan Desa Kepandean yang
                        transparan, akuntabel, dan mengutamakan pelayanan
                        masyarakat inklusif.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                            <MapPin
                                className="mt-0.5 h-4 w-4 shrink-0 text-desa-800"
                                aria-hidden="true"
                            />
                            <span>
                                Kec. Dukuhturi, Kab. Tegal, Jawa Tengah — Kode
                                Pos 52192
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone
                                className="mt-0.5 h-4 w-4 shrink-0 text-desa-800"
                                aria-hidden="true"
                            />
                            <span>{site.kontak.telepon}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail
                                className="mt-0.5 h-4 w-4 shrink-0 text-desa-800"
                                aria-hidden="true"
                            />
                            <span>{site.kontak.surel}</span>
                        </li>
                    </ul>
                </div>
                <nav aria-label="Navigasi cepat">
                    <p className="border-b-2 border-desa-800 pb-1 text-sm font-semibold">
                        Navigasi Cepat
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                        {cepat.map((l) => (
                            <li key={l.label}>
                                <Link
                                    href={l.href}
                                    className="text-neutral-600 hover:text-desa-800 hover:underline"
                                >
                                    › {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav aria-label="Layanan publik">
                    <p className="border-b-2 border-desa-800 pb-1 text-sm font-semibold">
                        Layanan Publik
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                        {layanan.map((l) => (
                            <li key={l.label}>
                                <Link
                                    href={l.href}
                                    className="text-neutral-600 hover:text-desa-800 hover:underline"
                                >
                                    › {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <p className="border-b-2 border-desa-800 pb-1 text-sm font-semibold">
                        Jam Pelayanan
                    </p>
                    <dl className="mt-3 space-y-2 rounded-md bg-indigo-50/60 p-3 text-sm">
                        {site.kontak.jam.map((j) => (
                            <div key={j.hari}>
                                <dt className="font-medium">{j.hari}:</dt>
                                <dd className="text-neutral-600">{j.jam}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-4 text-sm font-semibold">
                        Media Sosial Resmi
                    </p>
                    <ul className="mt-1 space-y-1 text-sm">
                        {site.kontak.sosmed.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-neutral-600 hover:text-desa-800 hover:underline"
                                >
                                    <Facebook
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border-t border-neutral-200 bg-indigo-50/50">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <p className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />©
                        2026 Pemerintah Desa Kepandean, Kecamatan Dukuhturi,
                        Kabupaten Tegal. Hak Cipta Dilindungi Undang-Undang.
                    </p>
                    <p className="font-medium text-desa-800">
                        Sinergi OpenSID &amp; Sistem Informasi Desa Tegal
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default function PublicLayout({
    title,
    description,
    site,
    children,
}: PublicLayoutProps) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>
            <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
                <TopBar />
                <header className="sticky top-0 z-40 bg-desa-900 shadow">
                    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
                        <Link href="/" className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-desa-800">
                                K
                            </span>
                            <span className="leading-tight">
                                <span className="block text-sm font-bold tracking-wide text-white">
                                    PEMERINTAH DESA KEPANDEAN
                                </span>
                                <span className="block text-xs text-white/75">
                                    Kecamatan Dukuhturi - Kabupaten Tegal
                                </span>
                            </span>
                        </Link>
                        <DesktopNav items={site.nav} />
                        <div className="flex items-center gap-2">
                            <Link
                                href="/layanan-warga"
                                className="hidden items-center gap-1.5 rounded-md bg-desa-700 px-4 py-2 text-sm font-medium text-white hover:bg-desa-800 lg:inline-flex"
                            >
                                <ShieldCheck
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                Layanan Mandiri Warga
                            </Link>
                            <MobileNav items={site.nav} siteName={site.nama} />
                        </div>
                    </div>
                </header>
                <main className="flex-1">{children}</main>
                <Footer site={site} />
            </div>
        </>
    );
}
