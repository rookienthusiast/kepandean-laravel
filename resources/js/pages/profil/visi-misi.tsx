import ProfilLayout, { type ProfilData } from './layout';

interface PageProps {
    profil: ProfilData;
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
}

export default function VisiMisi({ profil, desa, meta }: PageProps) {
    const desaName = desa?.name ?? 'Desa';

    return (
        <ProfilLayout
            title={meta.title}
            description={meta.description}
            heading={`Visi dan Misi ${desaName}`}
            desaName={desaName}
        >
            <section aria-labelledby="visi-heading" className="mb-8">
                <h2 id="visi-heading" className="mb-3 text-xl font-medium">
                    Visi
                </h2>
                {profil.visi ? (
                    <article
                        className="max-w-none text-[15px] leading-7 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                        dangerouslySetInnerHTML={{ __html: profil.visi }}
                    />
                ) : (
                    <p className="text-[15px] leading-7 text-[#706f6c] dark:text-[#A1A09A]">
                        Visi {desaName} belum tersedia.
                    </p>
                )}
            </section>
            <section aria-labelledby="misi-heading">
                <h2 id="misi-heading" className="mb-3 text-xl font-medium">
                    Misi
                </h2>
                {profil.misi ? (
                    <article
                        className="max-w-none text-[15px] leading-7 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                        dangerouslySetInnerHTML={{ __html: profil.misi }}
                    />
                ) : (
                    <p className="text-[15px] leading-7 text-[#706f6c] dark:text-[#A1A09A]">
                        Misi {desaName} belum tersedia.
                    </p>
                )}
            </section>
        </ProfilLayout>
    );
}
