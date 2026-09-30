import { Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import type { SiteData } from '@/types/site';

interface PengumumanDetail {
    judul: string;
    slug: string;
    isi: string;
    tanggal: string;
    kedaluarsa: string | null;
    url: string;
}

interface PageProps {
    pengumuman: PengumumanDetail;
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
    site: SiteData;
}

export default function PengumumanDetail({
    pengumuman,
    desa,
    meta,
    site,
}: PageProps) {
    const desaName = desa?.name ?? 'Desa';

    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
                <nav aria-label="Navigasi pengumuman" className="mb-6">
                    <Link
                        href="/pengumuman"
                        className="text-sm font-medium underline underline-offset-4"
                    >
                        ← Semua pengumuman
                    </Link>
                </nav>
                <p className="mb-2 flex items-center gap-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                    <span className="rounded-full bg-[#efedea] px-3 py-1 font-medium text-[#37352f] dark:bg-[#2a2a28] dark:text-[#E8E7E3]">
                        Pengumuman
                    </span>
                    <time>{pengumuman.tanggal}</time>
                    <span aria-hidden="true">•</span>
                    <span>{desaName}</span>
                </p>
                <h1 className="mb-6 text-3xl font-bold tracking-tight">
                    {pengumuman.judul}
                </h1>
                {pengumuman.kedaluarsa && (
                    <p className="mb-6 rounded-md border border-[#e3e3e0] bg-white p-3 text-sm text-[#706f6c] dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#A1A09A]">
                        Berlaku hingga {pengumuman.kedaluarsa}.
                    </p>
                )}
                <article
                    className="max-w-none text-[15px] leading-7 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                    dangerouslySetInnerHTML={{ __html: pengumuman.isi }}
                />
            </div>
        </PublicLayout>
    );
}
