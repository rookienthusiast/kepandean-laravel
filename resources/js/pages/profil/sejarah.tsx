import ProfilLayout, { type ProfilData } from './layout';

interface PageProps {
    profil: ProfilData;
    desa: { name: string; slug: string } | null;
    meta: { title: string; description: string };
}

export default function Sejarah({ profil, desa, meta }: PageProps) {
    const desaName = desa?.name ?? 'Desa';

    return (
        <ProfilLayout
            title={meta.title}
            description={meta.description}
            heading={`Sejarah ${desaName}`}
            desaName={desaName}
        >
            {profil.sejarah ? (
                <article
                    className="max-w-none text-[15px] leading-7 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                    dangerouslySetInnerHTML={{ __html: profil.sejarah }}
                />
            ) : (
                <p className="rounded-md border border-[#e3e3e0] bg-white p-6 text-[15px] leading-7 text-[#706f6c] dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#A1A09A]">
                    Konten sejarah {desaName} belum tersedia. Perangkat desa
                    akan melengkapinya setelah data dari OpenSID dikonfirmasi.
                </p>
            )}
        </ProfilLayout>
    );
}
