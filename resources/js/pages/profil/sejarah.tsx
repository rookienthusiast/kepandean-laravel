import { Landmark } from 'lucide-react';
import ProfilLayout, { type ProfilData } from './layout';
import SectionHeading from './section-heading';
import type { SiteData } from '@/types/site';

interface PageProps {
    profil: ProfilData;
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
    site: SiteData;
}

export default function Sejarah({ profil, desa, meta, site }: PageProps) {
    const desaName = desa?.name ?? 'Desa';

    return (
        <ProfilLayout
            title={meta.title}
            description={meta.description}
            heading={`Sejarah ${desaName}`}
            intro={`Mengenal lebih dekat sejarah ${desaName} — latar dan perjalanan desa di portal resmi.`}
            crumb="Sejarah Desa"
            desaName={desaName}
            site={site}
        >
            <section aria-labelledby="sejarah-heading">
                <SectionHeading>{`Sejarah ${desaName}`}</SectionHeading>
                <div className="mt-6 grid gap-8 lg:grid-cols-2">
                    <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
                        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center bg-gradient-to-br from-desa-900 to-desa-800 p-8 text-center text-white">
                            <Landmark
                                className="h-12 w-12 text-white/80"
                                aria-hidden="true"
                            />
                            <figcaption className="mt-4 text-sm leading-6 text-white/80">
                                Foto gerbang {desaName} menyusul — perangkat
                                desa akan mengunggah dokumentasi resmi setelah
                                data dari OpenSID dikonfirmasi.
                            </figcaption>
                        </div>
                    </figure>
                    <div>
                        {profil.sejarah ? (
                            <article
                                className="max-w-none text-justify text-[15px] leading-7 text-neutral-800 [&_figure]:mb-4 [&_img]:mb-4 [&_img]:w-full [&_img]:rounded-md [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                                dangerouslySetInnerHTML={{
                                    __html: profil.sejarah,
                                }}
                            />
                        ) : (
                            <p className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-6 text-[15px] leading-7 text-neutral-500">
                                Konten sejarah {desaName} belum tersedia.
                                Perangkat desa akan melengkapinya setelah data
                                dari OpenSID dikonfirmasi.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </ProfilLayout>
    );
}
