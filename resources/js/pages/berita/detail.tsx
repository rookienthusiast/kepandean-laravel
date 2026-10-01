import { Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import type { SiteData } from '@/types/site';

interface BeritaDetail {
    judul: string;
    slug: string;
    isi: string;
    cover_url: string | null;
    kategori: { nama: string; slug: string } | null;
    tanggal: string;
    url: string;
}

interface PageProps {
    berita: BeritaDetail;
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
    site: SiteData;
}

export default function BeritaDetail({ berita, desa, meta, site }: PageProps) {
    const desaName = desa?.name ?? 'Desa';

    return (
        <PublicLayout
            title={meta.title}
            description={meta.description}
            site={site}
        >
            <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
                <nav aria-label="Navigasi berita" className="mb-6">
                    <Link
                        href="/berita"
                        className="text-sm font-medium underline underline-offset-4"
                    >
                        ← Semua berita
                    </Link>
                </nav>
                <p className="mb-2 flex items-center gap-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                    {berita.kategori && (
                        <Link
                            href={`/berita?kategori=${berita.kategori.slug}`}
                            className="rounded-full bg-[#efedea] px-3 py-1 font-medium dark:bg-[#2a2a28]"
                        >
                            {berita.kategori.nama}
                        </Link>
                    )}
                    <time>{berita.tanggal}</time>
                    <span aria-hidden="true">•</span>
                    <span>{desaName}</span>
                </p>
                <h1 className="mb-6 text-3xl font-bold tracking-tight">
                    {berita.judul}
                </h1>
                {berita.cover_url ? (
                    <img
                        src={berita.cover_url}
                        alt={`Cover ${berita.judul}`}
                        className="mb-8 w-full rounded-md object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div
                        aria-hidden="true"
                        className="mb-8 flex w-full items-center justify-center rounded-md bg-[#efedea] py-10 text-sm text-[#706f6c] dark:bg-[#2a2a28] dark:text-[#A1A09A]"
                    >
                        Berita {desaName}, tanpa gambar sampul
                    </div>
                )}
                <article
                    className="max-w-none text-[15px] leading-7 [&_figure]:mb-4 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_img]:mb-4 [&_img]:w-full [&_img]:rounded-md [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                    dangerouslySetInnerHTML={{ __html: berita.isi }}
                />
            </div>
        </PublicLayout>
    );
}
